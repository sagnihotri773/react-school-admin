import { useEffect, useState } from 'react';
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import { isMobile } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { data, hTitls } from './Extra';
import { filterFieldConfig, initialValues } from '../Students/Fields';
import { TableRow, TableCell, TableBody, Table } from "../../ui/table"
import CardHeader from '../../ui/reusableComponents/cardHeader';
import TableHeaderComponent from '../../ui/reusableComponents/TableHeader';
import { Card, CardContent } from '../../ui/card';
import { Checkbox } from "../../ui/checkbox";
import TableListingSkeleton from '../../ui/reusableComponents/tableListingSkeleton';
import UserImg from '../../../media/download.png'
import TableListFilter from '../../ui/reusableComponents/TableListFilter';
import ImageViewInTable from '../../ui/reusableComponents/imageViewInTable';
import TableActionButton from '../../ui/reusableComponents/tableActionButton';
import { setLocalData, getLocalData, decodeBase64Url } from '../../../utils/comanFunction';
import Layout from '../layout/Layout';
import HeaderBreadcrumb from '../layout/HeaderBreadcrumb';


const breadcrumb = [
    {
        title: 'Listing',
        page: "/addmission-request-listing"
    }
];

export default function Listing() {
    const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [tableData, setTableData] = useState(data);
    const d2 = [...tableData, {
        "image": "",
        "name": "shubham agnihotri",
        "age": 5,
        "email": "agnihotrishubham8055@gmail.com",
        "gender": "male",
        "class": "2",
        "Section": "A",
        "phone": "7009764092",
        "bloodGroup": "",
        "adharCardImg": "",
        "address": "vpo rangilpur",
        "fatherName": "",
        "id": "ecb2fd1d-a8dc-4439-8154-ada23699aa35"
    },
    {
        "profileimage": "",
        "name": "shubham agnihotri",
        "age": "",
        "gender": "male",
        "caste": "sd",
        "bloodGroup": "A-",
        "adharCardImg": "C:\\fakepath\\WhatsApp Image 2024-05-09 at 1.04.38 PM.jpeg",
        "email": "agnihotrishubham8055@gmail.com",
        "fatherName": "satpal",
        "FatherOccupation": "Government Employee",
        "phone": "7009764092",
        "motherName": "asdsa",
        "address": "vpo rangilpur",
        "registernumber": "354",
        "studentcode": "43543",
        "class": "9",
        "Section": "A",
        "previousSchool": "egfd",
        "addmissionDate": "2024-06-07",
        "ReferenceRemarks": "regtre",
        "monthlyFee": "56464",
        "discountedStudent": "No",
        "transportRoute": "Route 1",
        "admissionNotification": "Email",
        "parentAccount": "Yes",
        "generateAdmissionFee": "Yes",
        "id": "0940acfa-0c0e-479a-9ce0-de0bdf732130"
    }, {
        "image": "",
        "name": "shubham agnihotri",
        "age": 5,
        "email": "agnihotrishubham8055@gmail.com",
        "gender": "male",
        "class": "2",
        "Section": "A",
        "phone": "7009764092",
        "bloodGroup": "",
        "adharCardImg": "",
        "address": "vpo rangilpur",
        "fatherName": "",
        "id": "ecb2fd1d-a8dc-4439-8154-ada23699aa35"
    },
    {
        "profileimage": "",
        "name": "shubham agnihotri",
        "age": "",
        "gender": "male",
        "caste": "sd",
        "bloodGroup": "A-",
        "adharCardImg": "C:\\fakepath\\WhatsApp Image 2024-05-09 at 1.04.38 PM.jpeg",
        "email": "agnihotrishubham8055@gmail.com",
        "fatherName": "satpal",
        "FatherOccupation": "Government Employee",
        "phone": "7009764092",
        "motherName": "asdsa",
        "address": "vpo rangilpur",
        "registernumber": "354",
        "studentcode": "43543",
        "class": "9",
        "Section": "A",
        "previousSchool": "egfd",
        "addmissionDate": "2024-06-07",
        "ReferenceRemarks": "regtre",
        "monthlyFee": "56464",
        "discountedStudent": "No",
        "transportRoute": "Route 1",
        "admissionNotification": "Email",
        "parentAccount": "Yes",
        "generateAdmissionFee": "Yes",
        "id": "0940acfa-0c0e-479a-9ce0-de0bdf732130"
    }]
    const handleCheckboxChange = (recordId) => {
        if (selectedItems.includes(recordId)) {
            setSelectedItems(selectedItems.filter(item => item !== recordId));
        } else {
            setSelectedItems([...selectedItems, recordId]);
        }
    };

    const handleSelectAllChange = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            setSelectedItems(data.map(item => item.id));
        }
        setSelectAll(prevState => !prevState);
    };

    const routeRedirect = (value) => {
        navigate(value);
    };

    const handleActions = () => {

    }

    const onSubmit = (values) => {
        filterStudents(values);
    }

    const filterStudents = (filters = {}) => {
        setIsLoading(true);
        const filtered = data.filter((student) => {
            return (
                student?.name.toLowerCase().includes(filters?.name?.toLowerCase()) &&
                student?.class.toLowerCase().includes(filters?.class?.toLowerCase())
            );
        });
        console.log("filtered", filtered, openFilter);
        if (openFilter) {
            if (filtered.length > 0) {
                setTableData(filtered);
            } else {
                setTableData([]);
            }
        } else {
            setTableData(data);
        }
        setIsLoading(false);
    }

    const clearFilter = () => {
        setTableData(data);
        setOpenFilter(true);
    }

    const handleOpenFilter = () => {
        setOpenFilter(!openFilter);
    }

    const deleteRecord = (id) => {
        const filterData = data?.filter((x) => x.id !== id);
        setLocalData('student', filterData);
        setTableData(filterData);
    }

    const showImg = (img) => {
        // const decodesdUrl = decodeBase64Url(img);
        return img
    }

    const arrayObj = filterFieldConfig?.filter((x) => x.name !== 'section' && x.name !== 'status')

    return (
        <Layout
            isMobile={isMobile}
            header={<Header title="Admission Request" breadcrumb={breadcrumb} />} // Pass your Header component
            sidebar={<Sidebar />} // Pass your Sidebar component
        >
            <div className="flex flex-col w-full">
                <main className='flex flex-1 flex-col p-4 md:gap-1 md:p-4 bg-white  dark:bg-gray-800 dark:text-white-800' >
                    {/* Breadcrumb start */}
                    <HeaderBreadcrumb breadcrumb={breadcrumb} />
                    {/* Breadcrumb end */}

                    {/* filter start */}
                    <TableListFilter handleOpenFilter={handleOpenFilter} filterButtonName={'Apply Filter'} filterClearButton='Clear Filter' onSubmit={onSubmit} filterFieldConfig={arrayObj} clearFilter={clearFilter} initialValues={initialValues} />
                    {/* filter end */}

                    {/* card start */}

                    <Card className="w-full mb-5">
                        <CardHeader routeRedirect={routeRedirect} handleActions={handleActions} totalRecord={tableData.length} />

                        <CardContent className="p-0 ">
                            <div className="overflow-auto">
                                <Table>

                                    {/* Table Header Component comp start */}
                                    <TableHeaderComponent selectAll={selectAll} handleSelectAllChange={handleSelectAllChange} hTitls={hTitls} />
                                    {/* Table Header Component comp end */}

                                    <TableBody >
                                        {d2?.length > 0 ? d2?.map((record, i) => (
                                            <TableRow className="hover:bg-gray-100" key={i}>
                                                <TableCell className="w-8 leading-none">
                                                    <Checkbox id="students" checked={selectedItems.includes(record.id)} onClick={(e) => handleCheckboxChange(record.id)} />
                                                </TableCell>
                                                <TableCell className="font-medium">{record.name}</TableCell>
                                                <TableCell>{record.fatherName}</TableCell>
                                                <TableCell>{record.class}</TableCell>
                                                <TableCell>{record.dob || `05-01-200${i}`}</TableCell>
                                                <TableCell>{record.gender}</TableCell>
                                                <TableCell>{record.phone}</TableCell>
                                                <TableCell>{record.address}</TableCell>
                                                <TableCell>{record.status || 'pending'}</TableCell>

                                                <TableCell className="w-8">
                                                    {/* table action btn comp start */}
                                                    <TableActionButton viewPageUrl={`/students/view-profile/${record.id}`} editPageUrl={`/students/edit/${record.id}`} id={record.id} deleteRecord={deleteRecord} viewBtn={true} editBtn={true} deleteBtn={true} />
                                                    {/* table action btn comp end */}

                                                </TableCell>
                                            </TableRow>
                                        )) :
                                            // Table Listing Skeleton comp start 
                                            <TableListingSkeleton count={tableData.length == 0 ? 0 : 9} />
                                            // Table Listing Skeleton comp end 
                                        }
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                    {/* card end */}

                </main>
            </div>
        </Layout>
    )
}
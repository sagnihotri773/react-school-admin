import { useEffect, useState } from 'react';
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import { isMobile } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { data, hTitls } from './Extra';
import { filterFieldConfig, initialValues } from './Fields';
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
import { setLocalData, getLocalData } from '../../../utils/comanFunction';
import Layout from '../layout/Layout';
import HeaderBreadcrumb from '../layout/HeaderBreadcrumb';


const breadcrumb = [
    {
        title: 'Student listing',
        page: "/students/listing"
    }
];

export default function TeacherList() {
    const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [tableData, setTableData] = useState(data);

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
        console.log("filtered" , filtered , openFilter);
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

    return (
        <Layout
            isMobile={isMobile}
            header={<Header title="Class Listing" breadcrumb={breadcrumb} />} // Pass your Header component
            sidebar={<Sidebar />} // Pass your Sidebar component
        >
            <div className="flex flex-col w-full">
                <main className='flex flex-1 flex-col p-4 md:gap-2 md:p-4 bg-white  dark:bg-gray-800 dark:text-white-800' >
                    {/* Breadcrumb start */}
                    <HeaderBreadcrumb breadcrumb={breadcrumb} />
                    {/* Breadcrumb end */}

                    {/* filter start */}
                    <TableListFilter handleOpenFilter={handleOpenFilter} filterButtonName={'Apply Filter'} filterClearButton='Clear Filter' onSubmit={onSubmit} filterFieldConfig={filterFieldConfig} clearFilter={clearFilter} initialValues={initialValues} />
                    {/* filter end */}

                    {/* card start */}

                    <Card className="w-full mb-5">
                        <CardHeader title="Students" routeRedirect={routeRedirect} CreateBtn={'Add Student'} Import={'Import'} Export={'Export'} handleActions={handleActions} totalRecord={tableData.length} createUrl='/students/create' />

                        <CardContent className="p-0 ">
                            <div className="overflow-auto">
                                <Table>

                                    {/* Table Header Component comp start */}
                                    <TableHeaderComponent selectAll={selectAll} handleSelectAllChange={handleSelectAllChange} hTitls={hTitls} />
                                    {/* Table Header Component comp end */}

                                    <TableBody>
                                        {tableData?.length > 0 ? tableData?.map((record) => (
                                            <TableRow className="hover:bg-gray-100">
                                                <TableCell className="w-8 leading-none">
                                                    <Checkbox id="students" checked={selectedItems.includes(record.id)} onClick={(e) => handleCheckboxChange(record.id)} />
                                                </TableCell>
                                                <TableCell className="font-medium">{record.name}</TableCell>
                                                <TableCell>
                                                    <ImageViewInTable src={UserImg} />
                                                </TableCell>
                                                <TableCell>{record.email}</TableCell>
                                                <TableCell>{record.class}</TableCell>
                                                <TableCell>{record.address}</TableCell>
                                                <TableCell>{record.gender}</TableCell>
                                                <TableCell>{record.phone}</TableCell>
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
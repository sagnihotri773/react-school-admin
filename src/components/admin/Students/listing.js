import { useEffect, useState } from 'react';
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import { isMobile } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { getStudentLocalData, hTitls } from './Extra';
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
import { setLocalData, getLocalData, decodeBase64Url } from '../../../utils/comanFunction';
import Layout from '../layout/Layout';
import HeaderBreadcrumb from '../layout/HeaderBreadcrumb';
import Modal from '../../ui/reusableComponents/Modal';
import StudentView from './StudentView';

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
    const [tableData, setTableData] = useState(getStudentLocalData);
    const [viewStudentModal, setViewStudentModal] = useState(false);

    const handleCheckboxChange = (recordId) => {
        if (selectedItems.includes(recordId)) {
            setSelectedItems(selectedItems.filter(item => item !== recordId));
        } else {
            setSelectedItems([...selectedItems, recordId]);
        }
    };

    useEffect(() => {
        if (getStudentLocalData) {
            setTableData(getStudentLocalData);
        }
    },[getStudentLocalData])

    const handleSelectAllChange = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            setSelectedItems(getStudentLocalData.map(item => item.id));
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
        const filtered = getStudentLocalData.filter((student) => {
            return (
                student?.name.toLowerCase().includes(filters?.name?.toLowerCase()) &&
                student?.class.toLowerCase().includes(filters?.class?.toLowerCase())
            );
        });
        if (openFilter) {
            if (filtered.length > 0) {
                setTableData(filtered);
            } else {
                setTableData([]);
            }
        } else {
            setTableData(getStudentLocalData);
        }
        setIsLoading(false);
    }

    const clearFilter = () => {
        setTableData(getStudentLocalData);
        setOpenFilter(true);
    }

    const handleOpenFilter = () => {
        setOpenFilter(!openFilter);
    }

    const deleteRecord = (id) => {
        const filterData = getStudentLocalData?.filter((x) => x.id !== id);
        setLocalData('student', filterData);
        setTableData(filterData);
    }

    const showImg = (img) => {
        // const decodesdUrl = decodeBase64Url(img);
        return img
    }

    const handleModalClose = () => {
        setViewStudentModal(false);
    };

    const handleModalOpen = () => {
        console.log("=----");
        setViewStudentModal(true);
    };

    const openModal = (value) => {
        setViewStudentModal(value);

    }

    console.log("v", viewStudentModal);
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
                        <CardHeader title="Students" routeRedirect={routeRedirect} CreateBtn={'Add Student'} handleActions={handleActions} totalRecord={tableData.length} createUrl='/students/create' />

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
                                                    <ImageViewInTable src={showImg(record?.profileimage || UserImg)} />
                                                </TableCell>
                                                <TableCell>{record.email}</TableCell>
                                                <TableCell>{record.class}</TableCell>
                                                <TableCell>{record.address}</TableCell>
                                                <TableCell>{record.gender}</TableCell>
                                                <TableCell>{record.phone}</TableCell>
                                                <TableCell className="w-8">

                                                    {/* table action btn comp start */}
                                                    <TableActionButton viewPageUrl={`/students/view-profile/${record.id}`} editPageUrl={`/students/edit/${record.id}`} id={record.id} deleteRecord={deleteRecord} viewBtn={true} editBtn={true} deleteBtn={true} handleModalOpen={handleModalOpen} />
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

                <Modal show={viewStudentModal} onClose={() => handleModalClose(false)} title={'test'} >
                    <StudentView />
                </Modal>
            </div>
        </Layout>
    )
}
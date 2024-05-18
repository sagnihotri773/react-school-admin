import { Card, CardTitle, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import { MoreHorizontalIcon } from '../../../utils/utils';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../ui/table"
import { Checkbox } from "../../ui/checkbox";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../ui/dropdown-menu"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrayItems } from '../../../utils/utils';
import Layout from '../layout/Layout';
import TableListFilter from '../../ui/reusableComponents/TableListFilter';
import { filterFieldConfig, initialValues } from './Fields';
import CardHeaderComp from '../../ui/reusableComponents/cardHeader';
import TableActionButton from '../../ui/reusableComponents/tableActionButton';

const hTitls = [
    { title: 'Teacher Name', value: 'Teacher Name' },
    { title: 'Assign Class', value: 'Assign Class' },
    { title: 'Action', value: 'Action' },
]

export default function TeacherList() {
    const navigate = useNavigate();
    const [data, setData] = useState(JSON.parse(localStorage.getItem('assignTeachers'))?.assignDetails);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);

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

    const onSubmit = (values) => {
        // filterStudents(values);
    }

    const handleOpenFilter = () => {
        setOpenFilter(!openFilter);
    }

    const clearFilter = () => {
        setData(data);
        setOpenFilter(true);
    }

    const handleActions = () => {

    }

    return (
        <Layout
            header={<Header title="Assign Teacher" />} // Pass your Header component
            sidebar={<Sidebar />} // Pass your Sidebar component
        >
            <div className="flex flex-col w-full">
                <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white  dark:bg-gray-800 dark:text-white-800' >

                    <TableListFilter handleOpenFilter={handleOpenFilter} filterButtonName={'Apply Filter'} filterClearButton='Clear Filter' onSubmit={onSubmit} filterFieldConfig={filterFieldConfig} clearFilter={clearFilter} initialValues={initialValues} />
                    <Card className="w-full">

                        <CardHeaderComp title="Assign Teacher" routeRedirect={routeRedirect} CreateBtn={'Assign Teacher'} handleActions={handleActions} totalRecord={data.length} createUrl='/assign-teacher' />

                        <CardContent className="p-0">
                            <div className="overflow-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-black w-8 leading-none">
                                                <Checkbox
                                                    id="teachers"
                                                    checked={selectAll}
                                                    onClick={handleSelectAllChange}
                                                />
                                            </TableHead>
                                            {hTitls?.length > 0 ? hTitls?.map((x) => (
                                                <TableHead className="text-left cursor-pointer">
                                                    {x.title}
                                                </TableHead>
                                            )) : ''}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {data?.length > 0 ? data?.map((record) => (
                                            <TableRow className="hover:bg-gray-100">
                                                <TableCell className="w-8 leading-none">
                                                    <Checkbox id="teachers_1" checked={selectedItems.includes(record.id)} onClick={(e) => handleCheckboxChange(record.id)} />
                                                </TableCell>
                                                <TableCell className="font-medium">{record.teacherName}</TableCell>
                                                <TableCell>{ArrayItems(record.teacherClass)}</TableCell>

                                                <TableCell className="w-8">
                                                    <TableActionButton editPageUrl={`/students/edit/${record.id}`} viewBtn={true} />
                                                </TableCell>
                                                {/* <TableCell className="w-8">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button
                                                                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                                                                size="icon"
                                                                variant="ghost"
                                                            >
                                                                <MoreHorizontalIcon className="w-4 h-4" />
                                                                <span className="sr-only">More</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end" className="dark:bg-white-800 dark:text-black-800 text-black">
                                                            <DropdownMenuItem>View</DropdownMenuItem>
                                                            <DropdownMenuItem onClick={(e) => routeRedirect(`/teacher/edit${record?.id}`)}>Edit</DropdownMenuItem>
                                                            <DropdownMenuItem className="text-error">Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell> */}


                                            </TableRow>
                                        )) : ''}
                                    </TableBody>
                                </Table>
                                {data.length == 0 && <div className='text-center m-5'>
                                    ...Loading
                                </div>}
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </Layout>
    )
}
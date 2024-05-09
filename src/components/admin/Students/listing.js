import { Card, CardTitle, CardContent, CardHeader, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import { isMobile, MoreVerticalIcon, MoreHorizontalIcon, PlusIcon, UploadIcon, DownloadIcon, ArrowUpDownIcon , FilterIcon } from '../../../utils/utils';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../ui/table"
import { Checkbox } from "../../ui/checkbox";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../ui/dropdown-menu"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrayItems, styleInput, ChevronRightIcon } from '../../../utils/utils';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { initialOptions, data, hTitls } from './Extra';
import InputFields from '../../../utils/input';
import { filterFieldConfig, initialValues } from './Fields';
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "../../ui/collapsible";


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    class: Yup.string().required('Class is required'),
    section: Yup.string().required('Section is required')
});


export default function TeacherList() {
    const navigate = useNavigate();
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

    const btnRender = () => {
        return !isMobile ?
            <>
                <Button type='button' className="ml-auto bg-black text-white" size="sm" onClick={(e) => routeRedirect('/students/create')}>
                    <PlusIcon className="w-4 h-4" /> Add Student
                </Button>
                <Button type='button' className="ml-2 bg-black text-white" size="sm">
                    <UploadIcon className="w-4 h-4" />Import
                </Button>
                <Button type='button' className="ml-2 bg-black text-white" size="sm">
                    <DownloadIcon className="w-4 h-4" /> Export
                </Button>
            </>
            :
            <DropdownMenu >
                <DropdownMenuTrigger asChild className='ml-auto'>
                    <Button type='button'
                        className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 dark:bg-black-800 dark:text-white-800 text-black"
                        size="icon"
                        variant="ghost">
                        <MoreVerticalIcon className="w-4 h-4" />
                        <span className="sr-only">More</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="dark:bg-black-800 dark:text-white-800 text-black">
                    <DropdownMenuItem onClick={(e) => routeRedirect('/Student/create')}> <PlusIcon className="w-4 h-4" /> &nbsp; Add Student</DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => handleTeacherActions()}> <UploadIcon className="w-4 h-4" /> &nbsp; Import</DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => handleTeacherActions()}>  <DownloadIcon className="w-4 h-4" /> &nbsp; Export</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    }

    const handleTeacherActions = () => {

    }

    const onSubmit = (values) => {
        console.log("values", values);
    }

    return (
        <div
            key="1"
            className={`${!isMobile ? 'grid' : ''} min-h-screen w-full overflow-hidden lg:grid-cols-[210px_1fr] theam_bg`} >
            <Sidebar />
            <div className="flex flex-col">
                <Header title="Students" />
                <div className="flex flex-col w-full">
                    <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white  dark:bg-gray-800 dark:text-white-800' >

                        <Collapsible className="grid gap-1 text-black bold">
                            <CollapsibleTrigger className={`flex items-center gap-2 rounded-md [&[data-state=open]>svg]:rotate-90 `} style={{ outline: 'none' }} onClick={(e) => setOpenFilter(!openFilter)}>
                                <ChevronRightIcon type="button" className=" h-4 w-4 transition-all mb-2 mr-4" />
                            </CollapsibleTrigger>

                            <CollapsibleContent className="grid gap-1 p-0 ">
                                <Formik
                                    initialValues={initialValues(filterFieldConfig)}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { resetForm }) => {
                                        onSubmit(values);
                                        // resetForm();
                                        // onRequestClose();
                                    }}
                                >
                                    {({ setFieldValue, isSubmitting, values }) => (
                                        <Form className="dark:bg-black-800 dark:text-white-800 text-black">
                                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                                                <InputFields
                                                    fieldConfig={filterFieldConfig}
                                                    styleInput={styleInput}
                                                    setFieldValue={setFieldValue}
                                                    values={values}
                                                    filterButtonName={'Apply Filter'}
                                                />
                                            </div>
                                            <div className='grid grid-cols-4 md:grid-cols-6 gap-4 mt-3'>
                                                {/* <Button type='Submit' className='rounded-md bg-black text-white' size="sm" onClick={(e) => onSubmit(values)}> Serach </Button> */}
                                                <Button type='Submit' className='rounded-md bg-green text-white' size="sm" onClick={(e) => onSubmit(values)}>
                                                    <FilterIcon className="mr-2 h-4 w-4" />
                                                    Filter
                                                </Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </CollapsibleContent>
                        </Collapsible>
                        <Card className="w-full">
                            <CardHeader>
                                <div className="flex items-center">
                                    <h1 className="font-semibold  md:text-2xl text-black">Students</h1>
                                    {btnRender()}
                                </div>
                            </CardHeader>
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
                                                        <Checkbox id="teachers_1" checked={selectedItems.includes(record.id)} onChange={() => handleCheckboxChange(record.id)} />
                                                    </TableCell>
                                                    <TableCell className="font-medium">{record.name}</TableCell>
                                                    <TableCell>{record.email}</TableCell>
                                                    <TableCell>{record.class}</TableCell>
                                                    <TableCell>{record.address}</TableCell>
                                                    <TableCell>{record.gender}</TableCell>
                                                    <TableCell>{record.phone}</TableCell>
                                                    <TableCell>{record.designation}</TableCell>
                                                    <TableCell>{ArrayItems(record.subjects)}</TableCell>
                                                    <TableCell className="w-8">
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
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuItem>View</DropdownMenuItem>
                                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                                <DropdownMenuItem className="text-error">Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                            )) : "...Loading"}
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                    </main>
                </div>
            </div>
        </div>
    )
}
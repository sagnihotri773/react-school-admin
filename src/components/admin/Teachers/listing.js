import { Card, CardTitle, CardContent, CardHeader, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import { isMobile, MoreVerticalIcon, MoreHorizontalIcon, PlusIcon, UploadIcon, DownloadIcon, ArrowUpDownIcon } from '../../../utils/utils';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../ui/table"
import { Checkbox } from "../../ui/checkbox";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../ui/dropdown-menu"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrayItems } from '../../../utils/utils';


const data = [
    {
        "id": 1,
        "image": "https://fastly.picsum.photos/id/1064/536/354.jpg?hmac=3m2mR2AP_ciBQdwJZYjqlZAdaBltgQkmiKbK6m6fLAA",
        "teacherName": "shubham agnihotri",
        "age": 34,
        "email": "agnihotrishubham8055@gmail.com",
        "gender": "male",
        "phoneNumber": "7009764092",
        "qualification": "test",
        "bloodGroup": "AB+",
        "adharCardImg": "",
        "address": "vpo rangilpur",
        "fatherName": "sdsd",
        "teacherClass": [1, 2, 3],
        "Section": "C",
        "skills": "next js , bootstrap, Next js, git hub, firebase, API integration , material ui, ",
        "experience": 34,
        "teacherId": "sdsdsd",
        "joiningDate": "2024-05-10",
        designation: 'Teacher',
        subjects: ['Math', 'Science', 'English']
    },
    {
        "id": 2,
        "image": "https://fastly.picsum.photos/id/1064/536/354.jpg?hmac=3m2mR2AP_ciBQdwJZYjqlZAdaBltgQkmiKbK6m6fLAA",
        "teacherName": "shubham agnihotri",
        "age": 34,
        "email": "agnihotrishubham8055@gmail.com",
        "gender": "male",
        "phoneNumber": "7009764092",
        "qualification": "test",
        "bloodGroup": "AB+",
        "adharCardImg": "",
        "address": "vpo rangilpur",
        "fatherName": "sdsd",
        "teacherClass": [1, 2, 3],
        "Section": "C",
        "skills": "next js , bootstrap, Next js, git hub, firebase, API integration , material ui, ",
        "experience": 34,
        "teacherId": "sdsdsd",
        "joiningDate": "2024-05-10",
        designation: 'Teacher',
        subjects: ['Math', 'Science', 'English'],
        "teacherClass": [1, 2, 3],
    },
    {
        id: 3,
        teacherName: 'John Doe',
        email: 'john@example.com',
        class: '10th Grade',
        address: '123 Main St',
        gender: 'Male',
        phoneNumber: '123-456-7890',
        designation: 'Teacher',
        subjects: ['Math', 'Science', 'English', 'Geography'],
        "teacherClass": [1, 2, 3],
    },
    {
        id: 4,
        teacherName: 'Jane Smith',
        email: 'jane@example.com',
        class: '11th Grade',
        address: '456 Elm St',
        gender: 'Female',
        phoneNumber: '987-654-3210',
        designation: 'Principal',
        subjects: ['History', 'Geography'],
        "teacherClass": [1, 2, 3],
    },
    // Add more records as needed
];

const hTitls = [
    { title: 'Name', value: 'Name' },
    { title: 'Email', value: 'Email' },
    { title: 'Class Incharge', value: 'Class Incharge' },
    { title: 'Address', value: 'Address' },
    { title: 'Gender', value: 'Gender' },
    { title: 'Phone', value: 'Phone' },
    { title: 'Designation', value: 'Designation' },
    { title: '', value: '' },
]

export default function TeacherList() {
    const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

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
                <Button className="ml-auto bg-black text-white" size="sm" onClick={(e) => routeRedirect('/teacher/create')}>
                    <PlusIcon className="w-4 h-4" /> Add Teacher
                </Button>
                <Button className="ml-2 bg-black text-white" size="sm">
                    <UploadIcon className="w-4 h-4" />Import
                </Button>
                <Button className="ml-2 bg-black text-white" size="sm">
                    <DownloadIcon className="w-4 h-4" /> Export
                </Button>
            </>
            :
            <DropdownMenu >
                <DropdownMenuTrigger asChild className='ml-auto'>
                    <Button
                        className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 dark:bg-black-800 dark:text-white-800 text-black"
                        size="icon"
                        variant="ghost"
                    >
                        <MoreVerticalIcon className="w-4 h-4" />
                        <span className="sr-only">More</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="dark:bg-black-800 dark:text-white-800 text-black">
                    <DropdownMenuItem onClick={(e) => routeRedirect('/teacher/create')}> <PlusIcon className="w-4 h-4" /> &nbsp; Add Teacher</DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => handleTeacherActions()}> <UploadIcon className="w-4 h-4" /> &nbsp; Import</DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => handleTeacherActions()}>  <DownloadIcon className="w-4 h-4" /> &nbsp; Export</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    }

    const handleTeacherActions = () => {

    }

    return (
        <div
            key="1"
            className={`${!isMobile ? 'grid' : ''} min-h-screen w-full overflow-hidden lg:grid-cols-[210px_1fr] theam_bg`} >
            <Sidebar />
            <div className="flex flex-col">
                <Header title="Teachers" />
                <div className="flex flex-col w-full">
                    <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white  dark:bg-gray-800 dark:text-white-800' >
                        <Card className="w-full">
                            <CardHeader>
                                <div className="flex items-center">
                                    <h1 className="font-semibold  md:text-2xl text-black">Teachers</h1>
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
                                                {/* <TableHead>Email</TableHead>
                                                <TableHead>Class Incharge</TableHead>
                                                <TableHead>Address</TableHead>
                                                <TableHead>Gender</TableHead>
                                                <TableHead>Phone</TableHead>
                                                <TableHead>Designation</TableHead>
                                                <TableHead>Subjects</TableHead> */}
                                                {/* <TableHead className="w-8" /> */}
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {data.length > 0 ? data?.map((record) => (
                                                <TableRow className="hover:bg-gray-100">
                                                    <TableCell className="w-8 leading-none">
                                                        <Checkbox id="teachers_1" checked={selectedItems.includes(record.id)} onClick={(e) => handleCheckboxChange(record.id)} />
                                                    </TableCell>
                                                    <TableCell className="font-medium">{record.teacherName}</TableCell>
                                                    <TableCell className="width_100">{record.email}</TableCell>
                                                    <TableCell>{ArrayItems(record.teacherClass)}</TableCell>
                                                    <TableCell>{record.address}</TableCell>
                                                    <TableCell>{record.gender}</TableCell>
                                                    <TableCell>{record.phoneNumber}</TableCell>
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
                                                            <DropdownMenuContent align="end" className="dark:bg-white-800 dark:text-black-800 text-black">
                                                                <DropdownMenuItem>View</DropdownMenuItem>
                                                                <DropdownMenuItem onClick={(e) => routeRedirect(`/teacher/edit${record?.id}`)}>Edit</DropdownMenuItem>
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

function FileEditIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
        </svg>
    )
}



// <TableCell className="flex gap-2 justify-end">
// <Button aria-label="Edit" size="icon" variant="ghost">
//   <FileEditIcon className="h-4 w-4" />
//   <span className="sr-only">Edit</span>
// </Button>
// <Button aria-label="Delete" size="icon" variant="ghost">
//   <TrashIcon className="h-4 w-4" />
//   <span className="sr-only">Delete</span>
// </Button>
// <Button aria-label="View" size="icon" variant="ghost">
//   <EyeIcon className="h-4 w-4" />
//   <span className="sr-only">View</span>
// </Button>
// </TableCell>
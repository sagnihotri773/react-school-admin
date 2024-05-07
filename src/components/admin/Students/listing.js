import { Card, CardTitle, CardContent, CardHeader, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import { MoreHorizontalIcon } from '../../../utils/utils';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../ui/table"
import { Checkbox } from "../../ui/checkbox";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../ui/dropdown-menu"
import { useNavigate } from 'react-router-dom';
import { ArrayItems } from '../../../utils/utils';
import { useState } from 'react';

const data = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        class: '10th Grade',
        address: '123 Main St',
        gender: 'Male',
        phone: '123-456-7890',
        designation: 'Teacher',
        subjects: ['Math', 'Science', 'English']
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        class: '11th Grade',
        address: '456 Elm St',
        gender: 'Female',
        phone: '987-654-3210',
        designation: 'Principal',
        subjects: ['History', 'Geography']
    },
    // Add more records as needed
];

export default function TeacherList() {
    const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (recordId) => {
      if (selectedItems.includes(recordId)) {
        setSelectedItems(selectedItems.filter(item => item !== recordId));
      } else {
        setSelectedItems([...selectedItems, recordId]);
      }
    };
    const routeRedirect = (value) => {
        navigate(value);
    };

    const getSubject = (value) => {
        console.log("ccccc" , value);

        return <span className="mt-1 ml-1 mr-1 label font-weight-bold label-lg label-light-success label-inline">{''}</span>
    }

   

    return (
        <div
            key="1"
            className={`${window?.innerWidth > 912 ? 'grid' : ''} min-h-screen w-full overflow-hidden lg:grid-cols-[220px_1fr] theam_bg`} >
            <Sidebar />
            <div className="flex flex-col">
                <Header title="Students" />
                <div className="flex flex-col w-full">

                    <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white' >
                        <Card className="w-full">
                            <CardHeader>
                                <div className="flex items-center">
                                    <h1 className="font-semibold text-lg md:text-2xl">Students</h1>
                                    <Button className="ml-auto bg-black text-white" size="sm" onClick={(e) => routeRedirect('/teacher/create')}>
                                        Add Students
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="overflow-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-8 leading-none">
                                                    <Checkbox id="teachers" />
                                                </TableHead>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Email</TableHead>
                                                <TableHead>Class</TableHead>
                                                <TableHead>Address</TableHead>
                                                <TableHead>Gender</TableHead>
                                                <TableHead>Phone</TableHead>
                                                <TableHead>Designation</TableHead>
                                                <TableHead>Subjects</TableHead>
                                                <TableHead className="w-8" />
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>

                                            {data.length > 0 ? data?.map((record ) => (
                                                <TableRow className="hover:bg-gray-100">
                                                    <TableCell className="w-8 leading-none">
                                                        <Checkbox id="teachers_1" checked={selectedItems.includes(record.id)} onChange={() => handleCheckboxChange(record.id)}/>
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
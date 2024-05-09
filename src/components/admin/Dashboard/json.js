
import { UsersIcon, CheckIcon, XIcon, ActivityIcon } from '../../../utils/utils';

export const adminStudentDetails = [
    { title: 'Total Students', count: "3,456", icon: <UsersIcon className="h-8 w-8" />, link: "/students/listing", color: 'bg-green' },
    { title: 'Present Students', count: "2,789", icon: <CheckIcon className="h-8 w-8" />, link: "/teacher/listing", color: "bg-skyBlue" },
    { title: 'Absent Students', count: "10", icon: <XIcon className="h-8 w-8" />, color: 'bg-red' },
    { title: 'Total Parents', count: "3,345", icon: <UsersIcon className="h-8 w-8" />, color: 'bg-dark-orchid' },
    // { title: 'Monthly Active Users', count: "8,901", icon: <UsersIcon className="h-8 w-8" />, color: '#E91E63' },
]

export const adminTeachersDetails = [
    { title: 'Total Teachers', count: "3,456", icon: <UsersIcon className="h-8 w-8" />, link: "/teacher/listing", color: 'bg-green' },
    { title: 'Present Teachers', count: "2,789", icon: <CheckIcon className="h-8 w-8" />, link: "/teacher/listing", color: "bg-skyBlue" },
    { title: 'Absent Teachers', count: "10", icon: <XIcon className="h-8 w-8" />, color: 'bg-red' },
    // { title: 'Total Users', count: "12,345", icon: <UsersIcon className="h-8 w-8" />, color: 'bg-dark-orchid' },
    // { title: 'Monthly Active Users', count: "₹8,901", icon: <UsersIcon className="h-8 w-8" />, color: '#E91E63' },
]

export const adminFeeDetail = [
    { label: 'Due Fee', amount: '2,500', cardColor: 'bf-light-blush', symbol: '₹', symbolBG: 'symbol-color-red' },
    { label: 'Paid Fee', amount: '2,500', cardColor: "bg-light-cream", symbol: '₹', symbolBG: 'symbol-green' },
    { label: "Today's Fee Count", amount: '1,200', cardColor: 'bg-light-blue', symbol: '₹', symbolBG: 'symbol-blue' },
    { label: "Today's Fee Count", amount: '1,200', cardColor: 'bg-light-red', symbol: '₹', symbolBG: 'symbol-orange' }
]
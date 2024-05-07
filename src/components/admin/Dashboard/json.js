
import { UsersIcon, CheckIcon, XIcon, ActivityIcon } from '../../../utils/utils';

export const adminStudentDetails = [
    { title: 'Total Students', count: "3,456", icon: <UsersIcon className="h-8 w-8" />, link: "/students/listing", color: '#4CAF50' },
    { title: 'Present Students', count: "2,789", icon: <CheckIcon className="h-8 w-8" />, link: "/teacher/listing", color: "#2196F3" },
    { title: 'Absent Students', count: "10", icon: <XIcon className="h-8 w-8" />, color: '#F44336' },
    { title: 'Total Users', count: "12,345", icon: <UsersIcon className="h-8 w-8" />, color: '#9C27B0' },
    { title: 'Monthly Active Users', count: "₹8,901", icon: <UsersIcon className="h-8 w-8" />, color: '#E91E63' },
]

export const adminFeeDetail = [
    { label: 'Due Fee', amount: '2,500', cardColor: '#FEF2F2', symbol: '₹', symbolBG: '#F87171' },
    { label: 'Paid Fee', amount: '2,500', cardColor: "#ECFDF5", symbol: '₹', symbolBG: '#10B981' },
    { label: "Today's Fee Count", amount: '1,200', cardColor: '#EFF6FF', symbol: '₹', symbolBG: '#3B82F6' },
    { label: "Today's Fee Count", amount: '1,200', cardColor: '#FEF9C3', symbol: '₹', symbolBG: '#F59E0B' }
]
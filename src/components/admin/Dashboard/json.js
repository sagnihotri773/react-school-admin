
import { UsersIcon, CheckIcon, XIcon, ActivityIcon } from '../../../utils/utils';

export const adminStudentDetails = [
  { title: 'Total Students', count: "3,456", icon: <UsersIcon className="h-8 w-8" />, link: "/students/listing", color: 'bg-green' },
  { title: 'Present Students', count: "3,400", icon: <CheckIcon className="h-8 w-8" />, link: "/teacher/listing", color: "bg-skyBlue" },
  { title: 'Absent Students', count: "56", icon: <XIcon className="h-8 w-8" />, color: 'bg-red' },
  { title: 'Total Parents', count: "3,345", icon: <UsersIcon className="h-8 w-8" />, color: 'bg-dark-orchid' },
  { title: 'Fee Due', count: "10", icon: <XIcon className="h-8 w-8" />, color: 'bg-red' },
]

export const adminTeachersDetails = [
  { title: 'Total Teachers', count: "3,456", icon: <UsersIcon className="h-8 w-8" />, link: "/teacher/listing", color: 'bg-green' },
  { title: 'Present Teachers', count: "2,789", icon: <CheckIcon className="h-8 w-8" />, link: "/teacher/listing", color: "bg-skyBlue" },
  { title: 'Absent Teachers', count: "10", icon: <XIcon className="h-8 w-8" />, color: 'bg-red' },
  { title: 'Late arrival today', count: "12", icon: <UsersIcon className="h-8 w-8" />, bgColor: '#F59E0B' },
]

export const adminFeeDetail = [
  { label: 'Due Fee', amount: '2,500', cardColor: 'bf-light-blush', symbol: '₹', symbolBG: 'symbol-color-red' },
  { label: 'Paid Fee', amount: '2,500', cardColor: "bg-light-cream", symbol: '₹', symbolBG: 'symbol-green' },
  { label: "Today's Fee Count", amount: '1,200', cardColor: 'bg-light-blue', symbol: '₹', symbolBG: 'symbol-blue' },
  { label: "Today's Fee Count", amount: '1,200', cardColor: 'bg-light-red', symbol: '₹', symbolBG: 'symbol-orange' }
]

export const adminCardData = [
  { title: "Unpaid Invoices", color: "bg-red-500", icon: "fas fa-file-invoice" },
  { title: "Unpaid Amount", color: "bg-orange-500", icon: "fas fa-money-bill-wave" },
  { title: "Income Today", color: "bg-yellow-500", icon: "fas fa-chart-line" },
  { title: "Expense Today", color: "bg-gray-500", icon: "fas fa-shopping-cart" },
  { title: "Profit Today", color: "bg-blue-500", icon: "fas fa-hand-holding-usd" },
  { title: "Income This Month", color: "bg-green-500", icon: "fas fa-calendar-alt" },
  { title: "Expense This Month", color: "bg-teal-500", icon: "fas fa-file-alt" },
  { title: "Profit This Month", color: "bg-red-600", icon: "fas fa-dollar-sign" },
  { title: "Income This Year", color: "bg-blue-600", icon: "fas fa-calendar-check" },
  { title: "Expense This Year", color: "bg-red-500", icon: "fas fa-credit-card" },
  { title: "Profit This Year", color: "bg-blue-700", icon: "fas fa-wallet" },
  { title: "2023-2024 Current Session", color: "bg-gray-400", icon: "fas fa-school" }
];

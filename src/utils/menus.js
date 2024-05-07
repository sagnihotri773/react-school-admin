import { HomeIcon, UsersIcon, Badge, ShoppingCartIcon, PackageIcon, } from './utils'
// export const data = [
//     { id: 1, displayValue: "Dashboard", path: '/dashboard', icon: <HomeIcon className="h-4 w-4" /> },
//     { id: 2, displayValue: "Teachers", path: '/teacher/listing', icon: <UsersIcon className="h-4 w-4" /> },
//     { id: 3, displayValue: "Students", path: '/students/listing', icon: <UsersIcon className="h-4 w-4" /> },

//     { id: 4, displayValue: "Orders", path: '/', icon: <ShoppingCartIcon className="h-4 w-4" />, count: <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">12</Badge> },
//     { id: 5, displayValue: "Products", path: '/products/listing', icon: <PackageIcon className="h-4 w-4" /> },
//     { id: 6, displayValue: "Users", path: '/users', icon: <UsersIcon className="h-4 w-4" /> },
//     //  { id: 6, displayValue: "Users", path: '/Users', icon: <LineChartIcon className="h-4 w-4" /> },
// ]
const menuItems = [
    {
        label: 'Dashboard',
        icon: <HomeIcon className="h-4 w-4" />,
        link: '/dashboard',
        sub: false
    },
    {
        label: 'Students',
        icon: <UsersIcon className="h-4 w-4" />,
        link: '/students/listing',
        sub: true,
        submenu: [
            {
                label: 'Student Information',
                icon: 'icon-info',
                link: '/student-information'
            },
            {
                label: 'Student Promotion',
                icon: 'icon-promotion',
                link: '/student-promotion'
            },
            {
                label: 'Student Transfer',
                icon: 'icon-transfer',
                link: '/student-transfer'
            },
            {
                label: 'Student Birthday',
                icon: 'icon-birthday',
                link: '/student-birthday'
            },
            {
                label: 'Student Info Report',
                icon: 'icon-report',
                link: '/student-info-report'
            }
        ]
    },
    {
        label: 'Teachers',
        icon: <UsersIcon className="h-4 w-4" />,
        link: '/teacher/listing',
        sub: true,
        submenu: [
            {
                label: 'Pending Orders',
                icon: 'icon-pending',
                link: '/pending-orders'
            },
            {
                label: 'Completed Orders',
                icon: 'icon-completed',
                link: '/completed-orders'
            },
            {
                label: 'Cancelled Orders',
                icon: 'icon-cancelled',
                link: '/cancelled-orders'
            }
        ]
    },
    {
        label: 'Teachers',
        icon: <UsersIcon className="h-4 w-4" />,
        link: '/teacher/listing',
        sub: true,
        submenu: [
            {
                label: 'Pending Orders',
                icon: 'icon-pending',
                link: '/pending-orders'
            },
            {
                label: 'Completed Orders',
                icon: 'icon-completed',
                link: '/completed-orders'
            },
            {
                label: 'Cancelled Orders',
                icon: 'icon-cancelled',
                link: '/cancelled-orders'
            }
        ]
    },{
        label: 'Teachers',
        icon: <UsersIcon className="h-4 w-4" />,
        link: '/teacher/listing',
        sub: true,
        submenu: [
            {
                label: 'Pending Orders',
                icon: 'icon-pending',
                link: '/pending-orders'
            },
            {
                label: 'Completed Orders',
                icon: 'icon-completed',
                link: '/completed-orders'
            },
            {
                label: 'Cancelled Orders',
                icon: 'icon-cancelled',
                link: '/cancelled-orders'
            }
        ]
    },
    {
        label: 'Teachers',
        icon: <UsersIcon className="h-4 w-4" />,
        link: '/teacher/listing',
        sub: true,
        submenu: [
            {
                label: 'Pending Orders',
                icon: 'icon-pending',
                link: '/pending-orders'
            },
            {
                label: 'Completed Orders',
                icon: 'icon-completed',
                link: '/completed-orders'
            },
            {
                label: 'Cancelled Orders',
                icon: 'icon-cancelled',
                link: '/cancelled-orders'
            }
        ]
    },
    // {
    //     label: 'Class List',
    //     icon: 'icon-class-list',
    //     link: '/class-list' // Direct link without submenu
    // },
    // {
    //     label: 'Add New Class',
    //     icon: 'icon-add-class',
    //     link: '/add-class' // Direct link without submenu
    // }
];

export default menuItems;

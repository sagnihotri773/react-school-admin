import { HomeIcon, UsersIcon, Badge, ShoppingCartIcon, PackageIcon, ClapperboardIcon, CreditCardIcon, SchoolIcon, LayoutDashboardIcon } from './utils'


export const MenuItems = [
    {
        label: 'Dashboard',
        icon: <HomeIcon className="h-4 w-4" />,
        link: '/dashboard',
        sub: false
    },
    {
        label: 'Admission Management',
        icon: <LayoutDashboardIcon className="h-4 w-4" />,
        sub: true,
        submenu: [
            {
                label: 'Add Student',
                link: '/students/create',
            }, {
                subShow: true,
                label: 'Admission Inquiries',
                submenu: [
                    {
                        label: 'Mangae Inquiries',
                        link: '/Inquiries-list',
                    },
                    {
                        label: 'Send SMS To Inquiries',
                        link: '/sms-to-inquiries',
                    },
                ]
            }
        ],
    },
    {
        label: 'Management Students',
        icon: <SchoolIcon className="h-4 w-4" />,
        // link: '/students/listing',
        sub: true,
        submenu: [
            {
                label: 'Student Listing',
                link: '/students/listing',
            },
            {
                label: 'Student Bulk Upload',
                link: '/bulk-upload'
            },
            // {
            //     label: 'Student Promotion',
            //     icon: 'icon-promotion',
            //     link: '/student-promotion'
            // },
            // {
            //     label: 'Student Transfer',
            //     icon: 'icon-transfer',
            //     link: '/student-transfer'
            // },
            // {
            //     label: 'Student Birthday',
            //     icon: 'icon-birthday',
            //     link: '/student-birthday'
            // },
            // {
            //     label: 'Student Info Report',
            //     icon: 'icon-report',
            //     link: '/student-info-report'
            // }
        ]
    },
    {
        label: 'Teachers',
        icon: <UsersIcon className="h-4 w-4" />,
        link: '/teacher/listing',
        sub: true,
        submenu: [
            {
                label: 'Assign Class Teacher',
                icon: 'icon-pending',
                link: '/assign-teacher-listing'
            },
            {
                label: 'Pending Orders',
                icon: 'icon-pending',
                link: '/bulk-upload'
            },
            // {
            //     label: 'Completed Orders',
            //     icon: 'icon-completed',
            //     link: '/completed-orders'
            // },
            // {
            //     label: 'Cancelled Orders',
            //     icon: 'icon-cancelled',
            //     link: '/cancelled-orders'
            // }
        ]
    },
    {
        label: 'ID Cards',
        icon: <CreditCardIcon className="h-4 w-4" />,
        link: '/id-card', // Direct link without submenu

    },
]; 

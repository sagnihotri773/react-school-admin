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
        isOpen: false,
        submenu: [
            {
                label: 'Admit Student',
                link: '/students/create',
            }, {
                label: 'Admit Bulk Upload',
                link: '/bulk-upload'
            }, {
                label: 'Admission Requests',
                link: '/admission-request-listing',
            }, {
                subShow: true,
                label: 'Admission Inquiries',
                isOpen: false,
                submenu: [
                    {
                        label: 'Mangae Inquiries',
                        link: '/admission-Inquiries',
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
        label: 'Student Management',
        icon: <SchoolIcon className="h-4 w-4" />,
        // link: '/students/listing',
        sub: true,
        isOpen: false,
        submenu: [
            {
                label: 'Student Listing',
                link: '/students/listing',
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

import React from 'react';
import { ChevronRightIcon, HomeIcon } from '../../../utils/utils'
import { BreadcrumbList, Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage } from '../../ui/breadcrumb';
import { Link } from 'react-router-dom';

export default function HeaderBreadcrumb({ breadcrumb = [] }) {
    console.log("breadcrumb", breadcrumb);
    return (
        <div className="flex h-full w-full flex-col">
            {/* <header className="flex h-16 items-center border-b bg-white px-6 dark:border-gray-800 dark:bg-gray-950"> */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link className="flex items-center gap-2 text-black" to="/dashboard">
                            <HomeIcon className="h-5 w-5 " />
                            <span className="sr-only">Home</span>
                        </Link>
                    </BreadcrumbItem>

                    {breadcrumb.length > 0 && breadcrumb?.map((val) => (
                        <>
                            <BreadcrumbSeparator className='mt-1'>
                                <ChevronRightIcon className="h-4 w-4 text-black" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="font-medium"> <Link className="flex items-center gap-2 text-black" to={val.page}>{val.title} </Link> </BreadcrumbPage>
                            </BreadcrumbItem>
                        </>
                    ))}

                </BreadcrumbList>
            </Breadcrumb>
            {/* </header> */}
            {/* <main className="flex-1 bg-gray-100 dark:bg-gray-900" /> */}
        </div>
    )
}

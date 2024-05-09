import React from 'react';
import { PlusIcon, ListIcon } from '../utils/utils'
import { Button } from '../components/ui/button';
import {quickaction } from './adminDashboardBtn';
import './adminDashboardControle.css'

export default function AdminDashboardControle() {
    return (
        <div className='rounded-lg w-full border border-gray-200 p-2 '>
            <div className="flex row gap-2 ml-0 ">
                {quickaction?.map((btn , i) => (
                    <Button key={i} className={`${btn.color}  text-white`} size="icon" title={btn.title} variant="outline">
                      {btn.icon}
                    </Button>
                ))}
                {/* <Button className="listingColorCode text-white" size="icon" title="List Students" variant="outline" >
                    <ListIcon className="h-6 w-6" />
                </Button>
                <Button className="addColorCode text-white " size="icon" title="Add Teacher" variant="outline">
                    <PlusIcon className="h-6 w-6" />
                </Button>
                <Button className="listingColorCode text-white" size="icon" title="List Teachers" variant="outline" >
                    <ListIcon className="h-6 w-6" />
                </Button> */}
            </div>
        </div>
    )
}


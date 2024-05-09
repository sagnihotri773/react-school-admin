import React, { useEffect, useState } from 'react'
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import { Card, CardTitle, CardContent, CardHeader, CardDescription } from '../../ui/card';
import { UsersIcon, CheckIcon, XIcon, ActivityIcon, IndianRupeeIcon } from '../../../utils/utils';
import { adminStudentDetails, adminFeeDetail, adminTeachersDetails } from './json'
import Common from '../../../shared/common';
import AdminDashboardControle from '../../../shared/adminDashboardControle';

const Dashboard = () => {
    const [active, setActive] = useState(1);

    return (
        <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[210px_1fr] theam_bg" >
            <Sidebar />
            <div className="flex flex-col">
                <Header title="Dashboard" />
                <div className="flex flex-col w-full">
                    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                        <AdminDashboardControle />
                        <Common title={'Students Detale'} />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {adminStudentDetails?.map((cardValue, i) => (
                                <Card key={i} className={`${cardValue.color} text-white`}>
                                    <CardContent className="flex p-6 items-center justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold"> {cardValue.count} </h3>
                                            <p className="text-sm"> {cardValue.title} </p>
                                        </div>
                                        {cardValue.icon}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>


                        <Common title={'Students Detale'} />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {adminTeachersDetails?.map((cardValue, i) => (
                                <Card key={i} className={`${cardValue.color} text-white`}>
                                    <CardContent className="flex p-6 items-center justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold"> {cardValue.count} </h3>
                                            <p className="text-sm"> {cardValue.title} </p>
                                        </div>
                                        {cardValue.icon}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>



                        <Common title={'Fee Detale'} />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {adminFeeDetail?.map((cardValue, i) => (
                                <Card key={i} className={`${cardValue.cardColor} `}>
                                    <CardContent className="flex p-6 items-center gap-4">
                                        <div className={`${cardValue.symbolBG} rounded-full p-3`}>
                                            <IndianRupeeIcon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#000000]"> {cardValue.label}</h3>
                                            <p className="text-sm text-[#000000] dark:text-[#000000]">{cardValue.symbol} {cardValue.amount}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;
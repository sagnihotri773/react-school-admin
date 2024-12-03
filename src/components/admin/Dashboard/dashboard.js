import React, { useEffect, useState } from 'react'
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import { Card, CardTitle, CardContent, CardHeader, CardDescription } from '../../ui/card';
import { IndianRupeeIcon, ChevronRightIcon } from '../../../utils/utils';
import { adminStudentDetails, adminFeeDetail, adminTeachersDetails, adminCardData } from './json'
import Common from '../../../shared/common';
import AdminDashboardControle from '../../../shared/adminDashboardControle';
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "../../ui/collapsible";
import Layout from '../layout/Layout';
import { SmileIcon, FrownIcon, ClockIcon, CalendarIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import UserImg from '../../../media/download.png';
import CardsComponents from './cards';
import { AttendanceCard } from './attandanceCard';

const Dashboard = () => {
    const [active, setActive] = useState(1);
    const [openFilter, setOpenFilter] = useState(false);
    const [showDetails, setShowDetails] = useState(true);
    const [toggleStudents, setToggleStudents] = useState(true);
    const [toggleTeachers, setToggleTeachers] = useState(true);
    const [toggleFee, setToggleFee] = useState(true);

    const toggleDetails = () => setShowDetails(!showDetails)
    const toggleStudentsDetails = () => setToggleStudents(!toggleStudents)
    const toggleTeachersDetails = () => setToggleTeachers(!toggleTeachers)
    const toggleFeeDetails = () => setToggleFee(!toggleFee);
    const admissions = [
        { name: "Sahib Ali", date: "23 Jul - 2023", img: UserImg },
        { name: "Ali Hassan", date: "27 Feb - 2023", img: UserImg },
        { name: "Altaf Hussain", date: "26 Jan - 2023", img: UserImg },
        { name: "Altaf Hussain", date: "26 Jan - 2023", img: UserImg },
        { name: "Altaf Hussain", date: "26 Jan - 2023", img: UserImg },
        { name: "Altaf Hussain", date: "26 Jan - 2023", img: UserImg },
        { name: "Altaf Hussain", date: "26 Jan - 2023", img: UserImg },
        { name: "Altaf Hussain", date: "26 Jan - 2023", img: UserImg },

    ];
    return (
        <Layout
            header={<Header title="Students Bulk Upload " />} // Pass your Header component
            sidebar={<Sidebar />} // Pass your Sidebar component
        >

            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">

                <Collapsible className="grid gap-1 text-black bold">
                    <CollapsibleTrigger className={`flex items-center gap-2 rounded-md [&[data-state=open]>svg]:rotate-90 `} style={{ outline: 'none' }} onClick={(e) => setOpenFilter(!openFilter)}>
                        <strong> {!openFilter ? "Hide" : "Show"} Quick Action </strong>  <ChevronRightIcon type="button" className=" h-4 w-4 transition-all mr-4" />
                    </CollapsibleTrigger>

                    <CollapsibleContent className="grid gap-1 p-0 ">
                        <AdminDashboardControle />
                    </CollapsibleContent>
                </Collapsible>

                <Collaps
                    title="Admin Dashboard"
                    toggle={showDetails}
                    onToggle={toggleDetails}
                />

                {showDetails && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-4">
                        {adminCardData?.length && adminCardData.map((card, index) => (
                            <div key={index} className={`${card.color} text-white relative rounded-lg shadow-md w-full overflow-hidden`}>
                                <div className='p-4'>
                                    <div className="absolute inset-0 flex justify-end mr-3 text-7xl items-center opacity-10">
                                        <i className={`${card.icon}`}></i>
                                    </div>
                                    <div className="flex justify-start items-center mb-2 relative z-10">
                                        <div className="text-2xl font-semibold tracking-widest">****</div>
                                    </div>
                                    <div className="text-lg font-semibold mb-2 relative z-10">
                                        {card.title}
                                    </div>
                                </div>
                                <div className={`flex justify-center  rounded-lg`}>
                                    <button className="text-white font-medium">
                                        More info &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <Collaps
                    title="Students Details"
                    toggle={toggleStudents}
                    onToggle={toggleStudentsDetails}
                />

                {toggleStudents &&
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
                    </div>}

                <Collaps
                    title="Teachers Details"
                    toggle={toggleTeachers}
                    onToggle={toggleTeachersDetails}
                />

                {toggleTeachers &&
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {adminTeachersDetails?.map((cardValue, i) => (
                            <Card key={i} className={`${cardValue.color} text-white`} style={{ background: cardValue.bgColor }}>
                                <CardContent className="flex p-6 items-center justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold"> {cardValue.count} </h3>
                                        <p className="text-sm"> {cardValue.title} </p>
                                    </div>
                                    {cardValue.icon}
                                </CardContent>
                            </Card>
                        ))}
                    </div>}
                <Collaps
                    title="Fee Details"
                    toggle={toggleFee}
                    onToggle={toggleFeeDetails}
                />

                {toggleFee &&
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
                    </div>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CardsComponents title={'Latest Admissions'} data={admissions} />
                    <AttendanceCard />
                </div>

            </main>
        </Layout>

    )
}
export default Dashboard;



export const Collaps = ({ title, toggle, onToggle }) => {
    return (
        <Common title={title} >
            <div className="common-component">
                <div className="flex justify-between items-center">
                    <button
                        onClick={onToggle}
                        className="flex items-center text-black hover:text-blue-800"
                    >
                        {toggle ? (
                            <>
                                <ChevronUpIcon className="w-4 h-4 mr-1" />
                                Hide
                            </>
                        ) : (
                            <>
                                <ChevronDownIcon className="w-4 h-4 mr-1" />
                                Show
                            </>
                        )}
                    </button>
                </div>
            </div>
        </Common>
    );
};
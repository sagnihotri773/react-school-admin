import React, { useEffect, useState } from 'react'
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import { Card, CardTitle, CardContent, CardHeader, CardDescription } from '../../ui/card';
import { IndianRupeeIcon, ChevronRightIcon } from '../../../utils/utils';
import { adminStudentDetails, adminFeeDetail, adminTeachersDetails } from './json'
import Common from '../../../shared/common';
import AdminDashboardControle from '../../../shared/adminDashboardControle';
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "../../ui/collapsible";
import Layout from '../layout/Layout';

const Dashboard = () => {
    const [active, setActive] = useState(1);
    const [openFilter, setOpenFilter] = useState(false);


    // const springProps = useSpring({
    //     height: openFilter ? 'auto' : 0,
    //     opacity: openFilter ? 100 : 0,
    //     overflow: 'hidden',
    // });

    // const handleShowQuickAction = (value) => {
    //     setDashboardQuickAction(!openFilter)
    // }
    // console.log("openFilter" , openFilter);

    return (
        <Layout
        header={<Header title="Students Bulk Upload " />} // Pass your Header component
        sidebar={<Sidebar />} // Pass your Sidebar component
    >
        {/* <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[210px_1fr] theam_bg" >
            <Sidebar />
            <div className="flex flex-col">
                <Header title="Dashboard" />
                <div className="flex flex-col w-full"> */}
                    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">

                        <Collapsible className="grid gap-1 text-black bold">
                            <CollapsibleTrigger className={`flex items-center gap-2 rounded-md [&[data-state=open]>svg]:rotate-90 `} style={{ outline: 'none' }} onClick={(e) => setOpenFilter(!openFilter)}>
                                <strong> {!openFilter ? "Hide" : "Show"} Quick Action </strong>  <ChevronRightIcon type="button" className=" h-4 w-4 transition-all mr-4" />
                            </CollapsibleTrigger>

                            <CollapsibleContent className="grid gap-1 p-0 ">
                                {/* <AnimatedContent style={springProps} className="slide-in-element"> */}
                                <AdminDashboardControle />
                                {/* </AnimatedContent> */}
                            </CollapsibleContent>
                        </Collapsible>
                        <Common title={'Students Details'} />
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

                        <Common title={'Teachers Details'} />
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
                        </div>

                        <Common title={'Fee Details'} />
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
                    </Layout>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Dashboard;
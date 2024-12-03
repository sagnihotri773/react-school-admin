import { SmileIcon, FrownIcon, ClockIcon, CalendarIcon } from 'lucide-react';

const data = [
    {
        id: 1,
        label: "Total present today",
        count: 3,
        icon: <SmileIcon className="w-8 h-8" />,
        color: "green",
        bgColor: "bg-green-500"
    },
    {
        id: 2,
        label: "Total absent today",
        count: 0,
        icon: <FrownIcon className="w-8 h-8" />,
        color: "red",
        bgColor: "bg-red-500"
    },
    {
        id: 3,
        label: "Total late arrival today",
        count: 0,
        icon: <ClockIcon className="w-8 h-8" />,
        color: "yellow",
        bgColor: "bg-orange-500"
    },
    {
        id: 4,
        label: "Total on leave today",
        count: 0,
        icon: <CalendarIcon className="w-8 h-8" />,
        color: "blue",
        bgColor: "bg-blue-500"
    }
];

export const AttendanceCard = () => {
    return (
        <>
            <div className="bg-white shadow-md rounded-md py-4 max-w-lg">
                <div className="max-w-4xl mx-auto p-4">
                    <div className="bg-blue-900 rounded-lg p-4 mb-4">
                        <h2 className="text-white text-xl font-bold">Staff Attendance Overview</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {data.map(({ bgColor, icon, count, label, id }) => (
                            <div className={`${bgColor} rounded-lg p-4 text-white flex flex-col items-center justify-center`} key={id}>
                                <div className="mb-2">{icon}</div>
                                <div className="text-3xl font-bold mb-2">{count}</div>
                                <div className="text-sm text-center">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
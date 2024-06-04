import React from 'react'
import { Button } from '../button'

export default function ResultTable({ data, status }) {

    const obtainedMarks = data.reduce((total, exam) => total + exam.obtainedMarks, 0);
    const totalMarks =  data.reduce((total, exam) => total + exam.totalMarks, 0);
    const passingMarks =  data.reduce((total, exam) => total + exam.minMarks, 0);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Subject</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Obtained Mark</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Min. Marks</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Total Marks</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Highest in Class</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? data.map((val, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b border-gray-200"> {val?.subject} </td>
                            <td className="py-2 px-4 border-b border-gray-200"> {val?.obtainedMarks} </td>
                            <td className="py-2 px-4 border-b border-gray-200"> {val?.minMarks} </td>
                            <td className="py-2 px-4 border-b border-gray-200"> {val?.totalMarks} </td>
                            <td className="py-2 px-4 border-b border-gray-200"> {val?.highestInClass} </td>
                            <td className={`py-2 px-4 border-b border-gray-200 ${val?.remark === status.PASS ? 'text-green-600 ' : 'text-red-600 '} cursor-pointer`}> {val?.remark === status.PASS ? status.PASS_TEXT : status.FAIL_TEXT} </td>
                        </tr>
                    )) : ""}
                </tbody>
            </table>

            <div className="bg-white shadow-md rounded p-4">
                <div className="mb-4 flex justify-center items-center">
                    <p className="text-lg font-semibold">
                        Obtained Marks: {obtainedMarks} out of {totalMarks} - Passing Marks: {passingMarks}
                    </p>
                </div>
                <hr/>

            </div>
        </div>
    )
}

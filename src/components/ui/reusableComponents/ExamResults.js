import React from 'react'
import { Button } from '../button'
import ResultTable from './ResultTable';

const status = {
    FAIL: 0,
    PASS: 1,
    PASS_TEXT: "Pass",
    FAIL_TEXT: "Fail"
}

export default function ExamResults() {

    const data = [
        { subject: "English", obtainedMarks: 34, minMarks: 25, totalMarks: 80, highestInClass: 55, remark: 1 },
        { subject: "Urdu", obtainedMarks: 43, minMarks: 25, totalMarks: 80, highestInClass: 45, remark: 1 },
        { subject: "Science", obtainedMarks: 45, minMarks: 25, totalMarks: 80, highestInClass: 60, remark: 1 },
        { subject: "History", obtainedMarks: 34, minMarks: 25, totalMarks: 80, highestInClass: 55, remark: 1 },
        { subject: "Social Studies", obtainedMarks: 34, minMarks: 25, totalMarks: 80, highestInClass: 55, remark: 1 },
    ]

    const examData = [
        { subject: 'English', obtainedMarks: 35, minMarks: 25, totalMarks: 80, highestInClass: 55, remark: 1 },
        { subject: 'Social Studies', obtainedMarks: 46, minMarks: 25, totalMarks: 80, highestInClass: 45, remark: 1 },
        { subject: 'Sindhi', obtainedMarks: 50, minMarks: 25, totalMarks: 80, highestInClass: 60, remark: 1 },
        { subject: 'Science', obtainedMarks: 51, minMarks: 25, totalMarks: 80, highestInClass: 55, remark: 1 },
        { subject: 'History', obtainedMarks: 68, minMarks: 25, totalMarks: 80, highestInClass: 55, remark: 1 }
    ];


    const obtainedMarks = data.reduce((total, exam) => total + exam.obtainedMarks, 0);
    const totalMarks = data.reduce((total, exam) => total + exam.totalMarks, 0);
    const passingMarks = data.reduce((total, exam) => total + exam.minMarks, 0);
    return (
        <>

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Half yearly exam</h2>
                <Button className="ml-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Print Information
                </Button>
            </div>
            <ResultTable data={data} status={status} />
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Annual Exam</h2>
                <Button className="ml-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Print Information
                </Button>
            </div>
            <ResultTable data={examData} status={status} />

        </>
    )
}

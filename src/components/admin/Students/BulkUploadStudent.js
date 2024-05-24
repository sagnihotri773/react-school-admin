import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Layout from '../layout/Layout';
import Header from '../layout/header';
import Sidebar from '../layout/sidebar';
import { Button } from '../../ui/button';
import { DownloadIcon, UploadIcon, styleInput, CloudUploadIcon, TrashIcon } from '../../../utils/utils';
import { Progress } from '../../ui/progress';
import { showSuccessToast } from '../../../utils/toastUtils'
import BulkUpload from '../../ui/reusableComponents/BulkUpload';
import * as Yup from 'yup';
import { BulkUploadStudentConfig } from './Fields';
import InputFields from '../../../utils/input';

let initialValues = { class: '', section: '', csvFile: null }

export default function BulkUploadStudent() {
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);

    const handleSubmit = (values, actions) => {
        console.log('values', values);
        setRunning(true);
        setCount(0);
        actions.setSubmitting(false);
    };

    const validationSchema = Yup.object().shape({
        csvFile: Yup.mixed().required('Please select a CSV file.'),
        class: Yup.string().required('Please select a class.'),
        section: Yup.string().required('Please select a section.')
    });

    useEffect(() => {
        if (running) {
            var interval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount === 100) {
                        clearInterval(interval);
                        setRunning(true);
                        // showSuccessToast('File upload Successfully');
                        return 100;
                    }
                    return prevCount + 1;
                });
            }, 100); // Change interval time as needed
        }

        return () => clearInterval(interval);
    });


    const handleDownloadCSV = () => {
        // Create a sample CSV data
        const csvData = `Name,Age,Gender,Caste,Blood Group,Adhar Card,Email,Father Name,Father Occupation,Father Phone Number,Father Email,Mother Name,Address,G.R Number,Student Code,Class,Section,Previous School,Admission Date,Reference / Remarks\n`;
        const dummyRecord1 = `John,25,Male,General,A+,123456789012,john@example.com,Michael,Engineer,9876543210,michael@example.com,Jane,Downtown,GR123,SC001,1,A,ABC School,2022-01-01,First record\n`;
        const dummyRecord2 = `Alice,22,Female,General,O-,987654321098,alice@example.com,Robert,Doctor,1234567890,robert@example.com,Lisa,Uptown,GR456,SC002,2,B,XYZ School,2022-01-05,Second record\n`;

        const csvContent = csvData + dummyRecord1 + dummyRecord2;
        // Create a Blob containing the CSV data
        const blob = new Blob([csvContent], { type: 'text/csv' });

        // Create a temporary URL for the Blob
        const url = window.URL.createObjectURL(blob);

        // Trigger a download for the Blob
        const link = document.createElement('a');
        link.href = url;
        link.download = 'sample.csv';
        document.body.appendChild(link);
        link.click();

        // Cleanup
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
    };
    const handleFile = () => {

    }
    return (
        <Layout
            header={<Header title="Students Bulk Upload " />} // Pass your Header component
            sidebar={<Sidebar />} // Pass your Sidebar component
        >
            {/* <BulkUpload initialValues={initialValues} title={'Studnet Bulk Upload'} handleSubmit={handleSubmit} classes={classes} sections={sections} handleDownloadCSV={handleDownloadCSV} count={count} validationSchema={validationSchema} /> */}
            <main className=" flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white">
                <div className="card p-3 grid gap-4 md:grid-cols-2">
                    <h1 className="text-3xl font-bold mb-4 text-black"> Studnet Bulk Upload </h1>
                    <p className="text-gray-500 mb-6">Upload a CSV file to bulk add assignments for your students.</p>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, { resetForm }) => {
                            handleSubmit(values);
                        }}
                        validationSchema={validationSchema}
                    >
                        {({ setFieldValue, isSubmitting, values }) => (
                            <Form className="dark:bg-black-800 dark:text-white-800 text-black space-y-4">
                                <div className={window?.innerWidth < 912 ? 'grid mt-3' : 'row m-3'} >
                                    <InputFields
                                        fieldConfig={BulkUploadStudentConfig}
                                        handleFile={handleFile}
                                        styleInput={styleInput}
                                        setFieldValue={setFieldValue}
                                        values={values}
                                    />

                                    {values.csvFile && (
                                        <div className='grid grid-cols-2 gap-4 mt-3 w-full place-content-between'>
                                            <div>
                                                Uploaded File: <strong> {values.csvFile.name} </strong>
                                            </div>
                                            <div className='flex items-center'>
                                                <Button variant="outline" type='button' className='ml-auto hover:bg-[#007bff] hover:text-white inline-flex text-black font-bold ' onClick={() => setFieldValue('csvFile', null)} >
                                                    <TrashIcon className="h-5 w-5 mr-2 mr-2" />
                                                </Button>
                                            </div>

                                        </div>
                                    )}

                                </div>
                                {/* {count !== 0 &&  */}
                                <Progress className="w-auto ml-3 mr-3" value={count} />
                                {/* } */}
                                <div className="flex items-center">
                                    <Button variant="outline" type='submit' className='ml-auto flex justify-end bg-primary text-white' >
                                        <UploadIcon className="h-5 w-5 mr-2 mr-2" /> Upload
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className="flex flex-col items-start">
                        <h2 className="text-2xl font-bold mb-4">Download Sample Student CSV</h2>
                        <p className="text-gray-500 mb-6">Use this template to format your assignment data.</p>
                        <Button as="a" type="buttom" className="inline-flex items-center gap-2 text-white" href="/sample.csv" download onClick={handleDownloadCSV}>
                            <DownloadIcon className="h-5 w-5" />
                            Download Template
                        </Button>
                    </div>
                </div>
            </main>
        </Layout >
    )
}
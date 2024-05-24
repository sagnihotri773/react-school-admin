import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import { DownloadIcon, UploadIcon, styleInput, CloudUploadIcon, TrashIcon } from '../../../utils/utils';
import { Progress } from '../../ui/progress';
import { showSuccessToast } from '../../../utils/toastUtils';
import { Formik, Field, Form, ErrorMessage } from 'formik';


export default function BulkUpload(props) {
    const { initialValues, title, handleSubmit, sections, classes, handleDownloadCSV, count, validationSchema } = props;
    return (
        <main className=" flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white">
            <div className="card p-3 grid gap-4 md:grid-cols-2">
                <h1 className="text-3xl font-bold mb-4 text-black"> {title} </h1>
                <p className="text-gray-500 mb-6">Upload a CSV file to bulk add assignments for your students.</p>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {({ isSubmitting, setFieldValue, values }) => (
                        <Form className="space-y-4">
                            <div>
                                <label className='text-black' htmlFor="class">Class:</label>
                                <Field as="select" name="class" className={styleInput}>
                                    <option value="">Select Class</option>
                                    {classes.map((className) => (
                                        <option key={className} value={className}>{className}</option>
                                    ))}
                                </Field>
                                <ErrorMessage className="error-message" name="class" component="div" />
                            </div>
                            <div>
                                <label className='text-black' htmlFor="section">Section:</label>
                                <Field as="select" name="section" className={styleInput + 'text-black'}>
                                    <option value="">Select Section</option>
                                    {sections.map((sectionName) => (
                                        <option key={sectionName} value={sectionName}>{sectionName}</option>
                                    ))}
                                </Field>
                                <ErrorMessage className="error-message" name="section" component="div" />
                            </div>

                            <div className="group relative flex h-32 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900">
                                <div className="pointer-events-none z-10 flex flex-col items-center justify-center space-y-1 text-center text-gray-500 transition-colors group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300">
                                    <CloudUploadIcon className="h-8 w-8" />
                                    <p className="text-sm font-medium">Drag and drop a file or click to upload</p>
                                </div>

                                <input
                                    type="file"
                                    name="csvFile"
                                    accept=".csv"
                                    className={'absolute inset-0 h-full w-full cursor-pointer opacity-0'}
                                    onChange={(event) => {
                                        const file = event.currentTarget.files[0];
                                        // You can handle the file here
                                        console.log(file);
                                        setFieldValue('csvFile', file);
                                    }}
                                />
                            </div>
                            <ErrorMessage className="error-message" name="csvFile" component="div" />


                            {values.csvFile && (
                                <div className='grid grid-cols-2 gap-4 place-content-between'>
                                    <div>
                                        Uploaded File: <strong> {values.csvFile.name} </strong>
                                    </div>
                                    <div className='text-end'>
                                        <Button variant="outline" type='button' className='w-50 hover:bg-[#007bff] hover:text-white inline-flex text-black font-bold items-end' onClick={() => setFieldValue('csvFile', null)} >
                                            <TrashIcon className="h-5 w-5 mr-2 mr-2" />
                                        </Button>
                                    </div>

                                </div>
                            )}
                            <Progress className="w-full" value={count} />

                            <Button variant="outline" type='submit' className='flex justify-end bg-primary text-white' disabled={isSubmitting} >
                                <UploadIcon className="h-5 w-5 mr-2 mr-2" /> Upload
                            </Button>
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
    )
}

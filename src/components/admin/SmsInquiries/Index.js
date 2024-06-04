import React, { useState } from 'react';
import { Label } from "../../ui/label";
import { fieldConfig, initialValues } from './Field';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import InputFields from '../../../utils/input'
import { Button } from '../../ui/button';
import { RefreshCwIcon } from '../../../utils/utils';
import Layout from '../layout/Layout';
import Header from '../layout/header';
import Sidebar from '../layout/sidebar';


const SupportedTags = [' ${student_name} ', ' ${father_name} ', ' ${teacher_name} ', ' ${school_name} ']

export default function Index() {
    const [isLoading, setIsLoading] = useState(false);
    const [charCount, setCharCount] = useState(0);

    const onSubmit = (value) => {
        console.log("value", value);
    }

    const setValue = (value, setFieldValue, x) => {
        const vlu = value.sms + x;
        setFieldValue('sms', vlu);
        setCharCount(vlu.length)
    }

    const data = {
        sms: ''
    }

    const suggestion = (setFieldValue, values) => (
        <div className="text-sm col-md-12 p-0 font-narrow mt-3 mb-3">
            <div> Character Count: {charCount}</div>
            <p className="font-narrow"> <span className='text-black'> Supported Tags:</span>
                {SupportedTags?.map((x, i) => (
                    <span className='bg-[#ffff4d] cursor-pointer' onClick={(e) => setValue(values, setFieldValue, x)}>{x} </span>
                ))}
            </p>
        </div>
    )

    return (
        <Layout
            header={<Header title="Send SMS" />} // Pass your Header component
            sidebar={<Sidebar />} // Pass your Sidebar component
        >
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white">
                <div className="rounded-lg border shadow-sm">
                    <Formik
                        initialValues={initialValues(fieldConfig, data)}
                        // validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            onSubmit(values);
                        }}
                    >
                        {({ setFieldValue, isSubmitting, values }) => (
                            <Form className="dark:bg-black-800 dark:text-white-800 text-black">
                                <div className={window?.innerWidth < 912 ? 'grid mt-3' : 'row mt-3 mr-3 ml-3 mb-4'} >
                                    <InputFields
                                        fieldConfig={fieldConfig}
                                        setFieldValue={setFieldValue}
                                        values={values}
                                        suggestion={suggestion(setFieldValue, values)}
                                        setCharCount={setCharCount}
                                    />
                                </div>

                                <div className="flex items-center m-4">
                                    <Button type="submit" disabled={isLoading} className="ml-auto bg-black  bg-[#fffff] border radious" size="sm">Cancel</Button>
                                    <Button type="submit" disabled={isLoading} className="ml-2 bg-black bg-[#088224] text-white hover:bg-[#0db634]" size="sm">Submit</Button>

                                    {isLoading &&
                                        <Button size="icon" variant="outline">
                                            <RefreshCwIcon className="animate-spin h-4 w-4" />
                                        </Button>
                                    }
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </main>
        </Layout>
    )
}

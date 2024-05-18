import React, { useState } from 'react';
import Layout from '../layout/Layout';
import Header from '../layout/header';
import Sidebar from '../layout/sidebar';
import { Form, Formik, FieldArray, Field, ErrorMessage } from 'formik';
import { TextField, Autocomplete } from '@mui/material';
import * as Yup from 'yup';
import { TrashIcon, PlusIcon, isMobile } from '../../../utils/utils';
import { Button } from '../../ui/button';

const options = [
    { value: "Teacher A", label: "Teacher A" },
    { value: "Teacher B", label: "Teacher B" },
    { value: "Teacher C", label: "Teacher C" },
];

const classOptions = [{ value: 'Class 1', label: 'Class 1' }, { value: 'Class 2', label: 'Class 2' }, { value: 'Class 3', label: 'Class 3' }, { value: 'Class 4', label: 'Class 4' }];

export default function Create() {
    const [selectedOptions, setSelectedOptions] = useState([]);

    // const handleChange = (selectedOption) => {
    //     setSelectedOptions(selectedOption);
    // };

    // const handleSubmit = (values, actions) => {
    //     actions.setSubmitting(false); // Reset submitting state
    // };

    const validationSchema = Yup.object().shape({
        teachers: Yup.array().min(1, 'Select at least one teacher'),
        classes: Yup.array().min(1, 'Select at least one class'),
    });

    const d = JSON.parse(localStorage.getItem('assignTeachers'));
    const assignTeachers = d || { assignDetails: [{ teacher: [], classes: [] }] }
    const initialValues = assignTeachers;

    // const fetchData = async () => {
    //     try {
    //       const response = await axios.get('https://api.example.com/teachers'); // Replace URL with your API endpoint
    //       const teachersData = response.data; // Assuming the response data is an array of teachers

    //       setInitialValues({
    //         teachers: teachersData.map((teacher) => ({
    //           name: teacher.name,
    //           classes: [], // Initialize classes as an empty array for multi-select
    //           section: teacher.section,
    //         })),
    //       });
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };


    const onSubmit = (data) => {
        // const existingData = JSON.parse(localStorage.getItem('assignTeachers')) || [];
        // existingData.push(data);
        localStorage.setItem('assignTeachers', JSON.stringify(data));
    }

    const showLable = (index, remove, name) => {

        return <div className='grid grid-cols-6 gap-4'>

            <div className='col-start-1 col-end-3'>
                <label className={!isMobile ? "mt-2" : ""} name={`assignDetails.${index}.teacher`} for={`assignDetails.${index}.teacher`}> {name} {`(${index + 1})`} </label>

            </div>
            {isMobile && name == 'Teacher' ?
                <div className='col-end-8 col-span-1'>
                    <Button className="" size="icon" variant="outline" onClick={() => remove(index)} >
                        <TrashIcon className="h-5 w-5" />
                        <span className="sr-only">Remove Teacher</span>
                    </Button>
                </div> : !isMobile && name == 'Classes' ?
                    <div className='col-end-8 col-span-1'>
                        <Button className="" size="icon" variant="outline" onClick={() => remove(index)} >
                            <TrashIcon className="h-5 w-5" />
                            <span className="sr-only">Remove Teacher</span>
                        </Button>
                    </div>
                    :
                    ''
            }
        </div>
    }

    const getSelectedValue = (option, values, name = '') => {
        const options = option?.filter((x) => values?.includes(x?.value));
        return options
    }
    
    return (
        <Layout
            header={<Header title="Assign Teacher" />} // Pass your Header component
            sidebar={<Sidebar />} // Pass your Sidebar component
        >
            <div className="flex flex-col w-full">
                <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white dark:bg-gray-800 dark:text-white-800' >

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            // alert(JSON.stringify(values, null, 2));
                            onSubmit(values);
                        }}
                    >
                        {({ values, setFieldValue }) => (
                            <Form className="grid space-y-4">
                                <FieldArray name="assignDetails">
                                    {({ insert, remove, push }) => (
                                        <>
                                            <div className="grid grid-cols-2 gap-4">
                                                {values?.assignDetails?.length > 0 &&
                                                    values.assignDetails.map((friend, index) => (
                                                        <>
                                                            <div className="space-y-2 col-span-2 md:col-span-1">

                                                                {showLable(index, remove, 'Teacher')}

                                                                <Autocomplete
                                                                    multiple
                                                                    id={`assignDetails.${index}.teacher`}
                                                                    options={options}
                                                                    getOptionLabel={(option) => option.label}
                                                                    defaultValue={getSelectedValue(options, values.assignDetails[index].teacher)}
                                                                    filterSelectedOptions
                                                                    renderInput={(params) => (
                                                                        <TextField
                                                                            {...params}
                                                                        />
                                                                    )}
                                                                    onChange={(event, selectedOptions) => {
                                                                        setFieldValue(
                                                                            friend.teacher = selectedOptions.map(option => option.value)
                                                                            // selectedOptions.map(option => option.value)
                                                                        );
                                                                        // multipalSelect(field.name, selectedOptions);
                                                                    }}
                                                                />
                                                                <ErrorMessage name={`assignDetails.${index}.name`} component="div" className="field-error" />
                                                            </div>
                                                            <div className="space-y-2 col-span-2 md:col-span-1">
                                                                {showLable(index, remove, 'Classes')}

                                                                <Autocomplete
                                                                    multiple
                                                                    id={`assignDetails.${index}.classes`}
                                                                    options={classOptions}
                                                                    getOptionLabel={(option) => option.label}
                                                                    defaultValue={getSelectedValue(classOptions, values.assignDetails[index]?.classes)}
                                                                    filterSelectedOptions
                                                                    renderInput={(params) => (
                                                                        <TextField
                                                                            {...params}
                                                                        />
                                                                    )}
                                                                    onChange={(event, selectedOptions) => {
                                                                        setFieldValue(
                                                                            friend.classes = selectedOptions.map(option => option.value)
                                                                        );
                                                                    }}
                                                                />
                                                                <ErrorMessage name={`assignDetails.${index}.classes`} component="div" className="field-error" />

                                                            </div>
                                                        </>
                                                    ))}
                                            </div>
                                            <Button
                                                type="button"
                                                className="secondary text-white"
                                                onClick={() => push({ teacher: [], classes: [] })}
                                            >
                                                <PlusIcon className="h-5 w-5" />
                                            </Button>
                                        </>
                                    )}
                                </FieldArray>
                                <Button className="mb-3 bg-[#000000] text-white" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>

                </main>
            </div>
        </Layout>
    )
}

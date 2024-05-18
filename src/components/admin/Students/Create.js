import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import { styleInput, TrashIcon, RefreshCwIcon } from '../../../utils/utils';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { fieldConfig, initialValues, validationSchema } from './Fields';
import InputFields from '../../../utils/input';
import { v4 as uuidv4 } from 'uuid';
import Layout from '../layout/Layout';

const d = { 'id': 1, "image": 'https://fastly.picsum.photos/id/1064/536/354.jpg?hmac=3m2mR2AP_ciBQdwJZYjqlZAdaBltgQkmiKbK6m6fLAA', "teacherName": "shubham agnihotri", "age": 34, "email": "agnihotrishubham8055@gmail.com", "gender": "male", "phoneNumber": "7009764092", "qualification": "test", "bloodGroup": "AB+", "adharCardImg": "", "address": "vpo rangilpur", "fatherName": "sdsd", "teacherClass": [1, 2, 3], "Section": "C", "skills": "next js , bootstrap, Next js, git hub, firebase, API integration , material ui, ", "experience": 34, "teacherId": "sdsdsd", "joiningDate": "2024-05-10" }


export default function Create() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [formData, setFormData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (d) {
      setSelectedImage(d.image)
    }
  }, [])

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const onSubmit = (values) => {
    setIsLoading(true);
    console.log('values', values);
    // localStorage.setItem('data', JSON.stringify(values))
    const newEntry = { ...values, id: uuidv4() };
    setFormData([...formData, newEntry]);

    try {
      // Retrieve existing data from local storage or initialize empty array
      const existingData = JSON.parse(localStorage.getItem('student')) || [];
      existingData.push(newEntry);
      localStorage.setItem('student', JSON.stringify(existingData));
      setIsLoading(false);
      navigate('/students/listing');
      console.log('Form data saved successfully!');
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  }

  const handleRemoveImage = (setFieldValue) => {
    setSelectedImage(null);
    setFieldValue("image", "");
  };

  const handleFile = (setFieldValue, e) => {
    setFieldValue("image", e.currentTarget.files[0]);
    setSelectedImage(URL?.createObjectURL(e.currentTarget.files[0]));
  }

  const data = [!null, undefined].includes(id) ? "" : id;

  return (
    <Layout
      header={<Header title="Add Students" />} // Pass your Header component
      sidebar={<Sidebar />} // Pass your Sidebar component
    >
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white">
        <div className="rounded-lg border shadow-sm">
          <Formik
            initialValues={initialValues(fieldConfig, data)}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              onSubmit(values);
            }}
          >
            {({ setFieldValue, isSubmitting, values }) => (
              <Form className="dark:bg-black-800 dark:text-white-800 text-black">
                <div className={window?.innerWidth < 912 ? 'grid mt-3' : 'row mt-3 mr-3 ml-3 mb-4'} >
                  <InputFields
                    fieldConfig={fieldConfig}
                    handleFile={handleFile}
                    styleInput={styleInput}
                    setFieldValue={setFieldValue}
                    img={selectedImage || ''}
                    handleRemoveImage={handleRemoveImage}
                    // multipalSelect={multipalSelect}
                    values={values}
                  />
                </div>

                <div className="flex items-center m-4">
                  <Button type="submit" disabled={isLoading} className="ml-auto bg-black text-white" size="sm">Submit</Button>

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
      </main >
    </Layout >
  )
}
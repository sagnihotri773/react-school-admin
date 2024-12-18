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
    debugger
    localStorage.setItem('data', JSON.stringify(values))
    const newEntry = { id: uuidv4(), values };
    setFormData([...formData, newEntry]);

    // var formDataNew = new FormData();
    // console.log("value", value);
    // formDataNew.append('image', value.image);
    // formDataNew.append('name', value.name);
    // formDataNew.append('description', value.description);

    // mutation.mutate(formDataNew);
    // if (mutation.isError) {
    //   let errorMessage = ReturnError(mutation.error.response);
    //   console.log("errorMessage", errorMessage);
    //   navigate('/');
    //   showErrorToast(errorMessage);
    // }
  }

  const handleRemoveImage = (setFieldValue) => {
    setSelectedImage(null);
    setFieldValue("image", "");
  };

  const handleFile = (setFieldValue, e) => {
    setFieldValue("image", e.currentTarget.files[0]);
    setSelectedImage(URL?.createObjectURL(e.currentTarget.files[0]));
  }

  const multipalSelect = (setFieldValue, data) => {
    console.log("setFieldValue", setFieldValue, data);
    //  setFieldValue(setFieldValue, data);
  }

  const data = [!null, undefined].includes(id) ? "" : id;

  return (
    <div
      key="1"
      className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[210px_1fr] theam_bg" >
      <Sidebar />
      <div className="flex flex-col">
        <Header title="Add Teacher" />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white">
          <div className="rounded-lg border shadow-sm">
            <Formik
              initialValues={initialValues(data)}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                // resetForm();
                // onRequestClose();
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
                      multipalSelect={multipalSelect}
                      values={values}
                    />
                  </div>

                  <div className="flex items-center m-4">
                    <Button type="submit" disabled={isLoading} className="ml-auto bg-black text-white" size="sm">Submit</Button>
                    {isLoading &&
                      <Button size="icon" variant="outline">
                        <RefreshCwIcon className="animate-spin h-4 w-4" />
                        <span className="sr-only">Loading</span>
                      </Button>
                    }
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </main >
      </div>
    </div>
  )
}

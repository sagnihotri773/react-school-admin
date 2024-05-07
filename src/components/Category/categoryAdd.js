import React, { useEffect, useState } from 'react'
import { Label } from "../ui/label"
import { Button } from '../ui/button'
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import API, { postDataRequest, BASE_URL } from '../../api/apiRoute'
import { styleInput, TrashIcon, RefreshCwIcon } from '../../utils/utils';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { showSuccessToast, showErrorToast, ReturnError } from "../../utils/toastUtils";
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { getApiRoute } from './carrgoryApiRoute'
import axios from 'axios';

const initialValues = {
    name: '',
    image: '',
    description: ''
};

export default function CategoryAdd() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [category, setCategory] = useState({
        name: '',
        description: ''
    });
    let {id} = useParams();

    console.log("========" , id);

    const validationSchema = Yup.object({
        name: Yup.string().required('Category Name is required'),
        description: Yup.string().required('Category description is required'),
        image: Yup.mixed().required('Please select an image file').test(
            'fileSize',
            'File size is too large',
            value => value && value.size <= 3000000 // 3MB
        ),
    });


    useEffect(() => {
        // /admin/categories/edit/id
        // getData();
    },[id])
    const {  error, data, refetch } = useQuery('editData', () => getApiRoute(`/admin/categories/edit/${id}`))
    console.log("data====", data, error);

    // const getData = () => {
    // }
    // if (id) {
        //  const { isLoading, error, data, refetch } = useQuery('editData', () => getApiRoute(`/admin/categories/edit/${id}`))
    //     const { isLoading, error, data, refetch } = useQuery("editData", getApiRoute(`/admin/categories/edit/${id}`));
    //     console.log("data====", data, isLoading, error);
    // }

    const onSubmit = (value) => {
        setIsLoading(true);
        var formDataNew = new FormData();
        console.log("value", value);
        formDataNew.append('image', value.image);
        formDataNew.append('name', value.name);
        formDataNew.append('description', value.description);

        mutation.mutate(formDataNew);
        console.log("--", mutation.data, mutation.isError, mutation.isSuccess, mutation.error.message, mutation.error);
        if (mutation.isError) {
            // showErrorToast(mutation.error.message);
            // setIsLoading(false);
            let errorMessage = ReturnError(mutation.error.response);
            console.log("errorMessage", errorMessage);
            navigate('/');
            showErrorToast(errorMessage);
        }
    }

    const mutation = useMutation(
        // Define the mutation function
        async (postData) => {
            // Make the POST request to the API endpoint
            const response = await axios.post(BASE_URL + '/admin/categories/add', postData);
            // Return the response data
            return response.data;
        }
    );

    const handleClick = () => {
        setIsLoading(false);
        navigate('/category/listing');
    };

    const handleRemoveImage = (setFieldValue) => {
        setSelectedImage(null);
        setFieldValue("image", "");
    };
    const handleFile = (setFieldValue, e) => {
        setFieldValue("image", e.currentTarget.files[0]);
        setSelectedImage(e.currentTarget.files[0]);
    }

    return (
        <div
            key="1"
            className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr] theam_bg" >
            <Sidebar />
            <div className="flex flex-col">
                <Header title="Add Category" />
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white">
                    <div className="flex items-center">
                        {/* <h1 className="font-semibold text-lg md:text-2xl">Add Category</h1> */}
                    </div>
                    <div className=" items-center">
                        <div className="rounded-lg border shadow-sm">

                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={(values, { resetForm }) => {
                                    onSubmit(values);
                                    // resetForm();
                                    // onRequestClose();
                                }}
                            >
                                {({ setFieldValue }) => (
                                    <Form>
                                        <div className="grid gap-4 p-4 md:gap-6 md:p-8">
                                            <div className="grid gap-2">
                                                <Label className="text-sm">Category name</Label>
                                                <Field type="text" id="name" name="name" placeholder="Enter category name" className={styleInput} />
                                                <ErrorMessage name="name" component="div" className="error-message" />

                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="image">Image</Label>
                                                <input type="file" id="image" name="image" accept=".jpg, .jpeg, .png" className={styleInput}
                                                    onChange={(event) => {
                                                        handleFile(setFieldValue, event)
                                                    }}
                                                />
                                                <ErrorMessage name="image" component="div" className="error-message" />
                                            </div>

                                            {selectedImage &&
                                                <div className="border border-dashed border-gray-200 rounded-lg w-[350px] p-4 flex items-center ">
                                                    <div className="relative w-[350px] h-[200px] sm:h-[250px] lg:h-[300px] xl:h-[250px] 2xl:h-[300px]">
                                                        <img
                                                            alt="Uploaded picture"
                                                            className="object-cover rounded-lg"
                                                            height="250"
                                                            src={URL.createObjectURL(selectedImage)}
                                                            style={{
                                                                aspectRatio: "400/250",
                                                                objectFit: "cover",
                                                            }}
                                                            width="400"
                                                        />
                                                        <Button className="absolute top-2 right-2 bg-black text-white" size="icon" variant="outline" type="button" onClick={() => handleRemoveImage(setFieldValue)}>
                                                            <TrashIcon className="h-4 w-4" />
                                                            <span className="sr-only" >Delete</span>
                                                        </Button>
                                                    </div>
                                                </div>}

                                            <div className="grid gap-2">
                                                <Label className="text-sm">Description</Label>
                                                <Field as="textarea" id="description" name="description" className={'min-h-[100px] ' + styleInput} placeholder="Enter your description" />
                                                <ErrorMessage name="description" component="div" className="error-message" />
                                            </div>


                                            <div className="flex items-center space-x-2">
                                                <Button type="submit" className="ml-auto bg-black text-white" size="sm">Submit</Button>
                                                {isLoading &&
                                                    <Button size="icon" variant="outline">
                                                        <RefreshCwIcon className="animate-spin h-4 w-4" />
                                                        <span className="sr-only">Loading</span>
                                                    </Button>
                                                }
                                            </div>


                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </main >
            </div>
        </div>
    )
}

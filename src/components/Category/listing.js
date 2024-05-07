import React, { useState, useEffect } from 'react'
import { Button } from "../ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../ui/table";
import Sidebar from '../layout/sidebar';
import { Badge } from "../ui/badge";
import Header from '../layout/header';
import TableSkeleton from '../layout/tableSkeleton';
import { useNavigate } from 'react-router-dom';
import API, { postData, BASE_URL } from '../../api/apiRoute'
import { showErrorToast, showSuccessToast, ReturnError } from '../../utils/toastUtils';
import ConfirmPopup from '../models/ConfirmPopup';
import axios from 'axios';
import { useQuery } from "react-query";
import { getApiRoute } from './carrgoryApiRoute'

const STATUS = {
    IN_ACTIVE: 0,
    ACTIVE: 1,
    AL_ACTIVE: "Active",
    AL_IN_ACTIVE: "In-active"
}

export default function Listing() {
    const [categories, setCategories] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [confirmPopOpen, setConfirmPopOpen] = useState(false);
    const [loadData, setLoadData] = useState(false);
    const [statusChangeSuccess, setStatusChangeSuccess] = useState(false);
    const [sleected, setSleected] = useState({
        id: "", status: ""
    })
    const navigate = useNavigate();

    const routeRedirect = (value) => {
        navigate(value);
    };

    // useEffect(() => {
    //     getCategory();
    // }, []);

    //const getCategory = () => {

    // setIsLoading(true);
    // API.get('/get-categories')
    //     .then((response) => {
    //         console.log("response", response);
    //         setIsLoading(false);
    //         setCategories(response?.data?.data);
    //         setLoadData(true);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //         setIsLoading(false);
    //         setLoadData(true);
    //     });
    //}

    const HandleConfirmPopAction = (value) => {
        if (value === 1) {
            changeCategoriesStatus();
        } else if (value === 0) {
            setConfirmPopOpen(false);
        }
    }

    const handleStatusPopup = (id, status) => {
        setSleected({ id: id, status: status })
        setConfirmPopOpen(true);
    }

    const changeCategoriesStatus = async () => {
        setStatusChangeSuccess(true);
        const formDataNew = new FormData();
        formDataNew.append('status', sleected.status == STATUS.ACTIVE ? STATUS.IN_ACTIVE : STATUS.ACTIVE);
        formDataNew.append('category_id', Number(sleected.id));
        formDataNew.append('admin', 1);

        API.post(BASE_URL + '/admin/categories/update-status', formDataNew)
            .then((res) => {
                console.log("res", res);
                refetch();
                showSuccessToast(res?.data?.data);
                setStatusChangeSuccess(false);
                setConfirmPopOpen(false);
            })
            .catch((error) => {
                setStatusChangeSuccess(false);
                let errorMessage = ReturnError(error.response);
                console.log("errorMessage", errorMessage);
                showErrorToast(errorMessage);
                if (errorMessage === 'Unauthenticated.') {
                    localStorage.clear();
                    navigate('/');
                }
                setConfirmPopOpen(false);
            })
    }
    const { isLoading, error, data, refetch } = useQuery('listing', () => getApiRoute("/get-categories"))
    // const { isLoading, error, data, refetch } = useQuery("user", getApiRoute("/get-categories"));
    console.log("data", data, isLoading, error);

    useEffect(() => {
        if (data) {
            setCategories(data.data);
        }
    }, [data]);


    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div
            key="1"
            className="lg:grid min-h-screen w-full lg:overflow-hidden lg:grid-cols-[280px_1fr] theam_bg" >
            <Sidebar />
            <div className="flex flex-col">
                <Header title="Category" />
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white">
                    <div className="flex items-center">
                        {/* <h1 className="font-semibold text-lg md:text-2xl">Products</h1> */}
                        <Button className="ml-auto bg-black text-white" size="sm" onClick={(e) => routeRedirect('/category/add')}>
                            Add product
                        </Button>
                    </div>

                    <div className="border shadow-sm rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[80px]">ID</TableHead>
                                    {/* <TableHead className="w-[150px]">Image</TableHead> */}
                                    <TableHead className="w-[200px]">Name</TableHead>
                                    <TableHead className="w-[200px]">Status</TableHead>
                                    <TableHead className="w-[210px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                {categories.length > 0 ? categories?.map((cat, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{cat.id}</TableCell>

                                        <TableCell className="font-medium">{cat.name}</TableCell>
                                        <TableCell className="font-medium">
                                            {Number(cat.status) === 0 ?
                                                <Badge className="text-red-500 dark:text-gray-50" variant="outline">Inactive</Badge> :
                                                <Badge className="text-greeb-500 dark:text-gray-50" variant="outline">  Active </Badge>}
                                        </TableCell>
                                        <TableCell className="w-[100px] justify-center items-center">
                                            <Button className="bg-black text-white" size="sm" onClick={(e) => handleStatusPopup(cat.id, cat.status)} >

                                                Status Change
                                            </Button>
                                            &nbsp;
                                            <Button className="bg-black text-white" size="sm" variant="ghost" onClick={(e) => routeRedirect(`/category/edit/${cat.id}`)}>

                                                Edit
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )) :
                                    <TableSkeleton value={5} />
                                }
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>
            <ConfirmPopup
                open={Boolean(confirmPopOpen)}
                handleClose={HandleConfirmPopAction}
                message={"Are you sure you want to change status!"}
                title=""
                closeBtn={'Close'}
                confirmBtn={"Yes"}
                confirmationButtons={true}
                statusChangeSuccess={statusChangeSuccess}
            />
        </div>
    );
}

// export default App;

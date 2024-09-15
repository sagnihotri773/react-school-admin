import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from "react-query";
import Protected from "./Protected";
import Dashboard from './components/admin/Dashboard/dashboard';
import TeacherList from './components/admin/Teachers/listing';
import CreateTeacher from './components/admin/Teachers/Create';

import StudentCreate from './components/admin/Students/Create';
import StudentList from './components/admin/Students/listing'
import BulkUploadStudent from './components/admin/Students/BulkUploadStudent'

import ClassList from './components/admin/Class/listing';
import CreateClass from './components/admin/Class/Create';
// Addmission Request 
import AddmissionRequestListing from './components/admin/RequestStudents/listing';

import AddmissionInquiries from './components/admin/AdmissionInquiries/listing';
import SmsInquiries from './components/admin/SmsInquiries/Index';


import { Login } from './components/auth/Login';
import { ToastContainer } from 'react-toastify';
import './App.css';
import NotFound from './utils/NotFound';
import '@fortawesome/fontawesome-free/css/all.min.css';


const queryClient = new QueryClient();

// function App() {
export default function App() {

    return (
       
            <QueryClientProvider client={queryClient}>
                <Routes >
                    <Route exact path="/dashboard" element={<Protected Component={Dashboard} />} />
                    <Route exact path="/teacher/listing" element={<Protected Component={TeacherList} />} />
                    <Route exact path="/teacher/create" element={<Protected Component={CreateTeacher} />} />
                    <Route exact path="/teacher/edit/:id?" element={<Protected Component={CreateTeacher} />} />
                    <Route exact path="/students/listing" element={<Protected Component={StudentList} />} />
                    <Route exact path="/students/create" element={<Protected Component={StudentCreate} />} />
                    <Route exact path="/bulk-upload" element={<Protected Component={BulkUploadStudent} />} />
                    <Route exact path="/admission-request-listing" element={<Protected Component={AddmissionRequestListing} />} />

                    <Route exact path="/assign-teacher-listing" element={<Protected Component={ClassList} />} />
                    <Route exact path="/assign-teacher" element={<Protected Component={CreateClass} />} />
                    <Route exact path="/admission-Inquiries" element={<Protected Component={AddmissionInquiries} />} />

                    <Route exact path="/sms-to-inquiries" element={<Protected Component={SmsInquiries} />} />

                    <Route exact path="/" element={<Login />} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
                <ToastContainer />
            </QueryClientProvider>
       
    )
}

// export default App;
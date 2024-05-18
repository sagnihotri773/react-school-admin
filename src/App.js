import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from "react-query";
import Protected from "./Protected";
import Dashboard from './components/admin/Dashboard/dashboard';
import TeacherList from './components/admin/Teachers/listing';
import CreateTeacher from './components/admin/Teachers/Create';
import StudentCreate from './components/admin/Students/Create';
import StudentList from './components/admin/Students/listing'

import ClassList from './components/admin/Class/listing';
import CreateClass from './components/admin/Class/Create';

import { Login } from './components/auth/Login';
import { ToastContainer } from 'react-toastify';
import './App.css';


const queryClient = new QueryClient();

// function App() {
export default function App() {

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Routes >
                    <Route exact path="/dashboard" element={<Protected Component={Dashboard} />} />
                    <Route exact path="/teacher/listing" element={<Protected Component={TeacherList} />} />
                    <Route exact path="/teacher/create" element={<Protected Component={CreateTeacher} />} />
                    <Route exact path="/teacher/edit/:id?" element={<Protected Component={CreateTeacher} />} />
                    <Route exact path="/students/listing" element={<Protected Component={StudentList} />} />
                    <Route exact path="/students/create" element={<Protected Component={StudentCreate} />} />
                    <Route exact path="/assign-teacher-listing" element={<Protected Component={ClassList} />} />
                    <Route exact path="/assign-teacher" element={<Protected Component={CreateClass} />} />

                    <Route exact path="/" element={<Login />} />
                    <Route path="*" element={<> Not Found</>} />
                </Routes>
                <ToastContainer />
            </QueryClientProvider>
        </div>
    )
}

// export default App;
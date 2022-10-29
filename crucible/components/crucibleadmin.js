import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import useResource from "../hooks/useResource";
import DashBoard from '../components/dashboard';
import ChatBoard from '../components/chatboard';
import JobSearch from './jobsearch';
import MyJobs from '../components/myjobs'
import AboutTheDevs from '../components/aboutthedevs';


const CrucibleAdmin = ({ user }) => {

    const { resources, createResource, updateResource, deleteResource } = useResource();

    return (
        <div data-testid="crucibleadmin-1">
            <Routes>
                <Route path='/' element={<MyJobs user={user} resources={resources} createResource={createResource} deleteResource={deleteResource} updateResource={updateResource} />}></Route>
                <Route path='/dashboard' element={<DashBoard user={user?.id} resources={resources} />}></Route>
                <Route path='/jobsearch' element={<JobSearch user={user} />}></Route>
                <Route path='/chatboard' element={<ChatBoard user={user} />}></Route>
                <Route path='/aboutthedevs' element={<AboutTheDevs user={user} />}></Route>
            </Routes>
        </div>
    )
}

export default CrucibleAdmin;


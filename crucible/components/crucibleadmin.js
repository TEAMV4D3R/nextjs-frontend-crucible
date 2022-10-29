import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import useResource from "../hooks/useResource";
import DashBoard from '../components/dashboard';
import ChatBoard from '../components/chatboard';
import JobSearch from './jobsearch';
import MyJobs from '../components/myjobs'
import AboutTheDevs from '../components/aboutthedevs';


const CrucibleAdmin = ({ user, onLogin, tokens }) => {

    const { resources, createResource, updateResource, deleteResource } = useResource();

    const [userData, setUserData] = useState([]);

    console.log("RESOURCES", resources)


    return (
        <Routes>
            <Route path='/' element={<MyJobs user={user} onLogin={onLogin} resources={resources} createResource={createResource} deleteResource={deleteResource} updateResource={updateResource} />}></Route>
            <Route path='/dashboard' element={<DashBoard user={user?.id} userData={userData} resources={resources} onLogin={onLogin} />}></Route>
            <Route path='/jobsearch' element={<JobSearch user={user} tokens={tokens} />}></Route>
            <Route path='/chatboard' element={<ChatBoard user={user} />}></Route>
            <Route path='/aboutthedevs' element={<AboutTheDevs user={user} onLogin={onLogin} />}></Route>
        </Routes>
    )
}

export default CrucibleAdmin;


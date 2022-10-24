
import {
    Switch,
    Route,
    Routes,
    useRouteMatch,
    useParams,
} from 'react-router-dom'

import useResource from "../hooks/useResource";
import DashBoard from '../components/dashboard';
import ChatBoard from '../components/chatboard';
import JobSearch from './jobsearch';
import MyJobs from '../components/myjobs'
import AboutTheDevs from '../components/aboutthedevs';

const CrucibleAdmin = ({ user, onLogin, tokens }) => {
    const { resources, createResource, deleteResource } = useResource();

    return (
        <Routes>
            <Route path='/' element={<DashBoard user={user} onLogin={onLogin} />}></Route>
            <Route path='/myjobs' element={<MyJobs user={user} onLogin={onLogin} resources={resources} createResource={createResource} deleteResource={deleteResource} />}></Route>
            <Route path='/jobsearch' element={<JobSearch user={user} tokens={tokens} />}></Route>
            <Route path='/chatboard' element={<ChatBoard user={user} onLogin={onLogin} />}></Route>
            <Route path='/aboutthedevs' element={<AboutTheDevs user={user} onLogin={onLogin} />}></Route>
        </Routes>
    )
}

export default CrucibleAdmin;


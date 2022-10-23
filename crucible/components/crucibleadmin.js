
import {
    Switch,
    Route,
    Routes,
    useRouteMatch,
    useParams,
} from 'react-router-dom'

import DashBoard from '../components/dashboard';
import ChatBoard from '../components/chatboard';
import JobSearch from '../components/jobsearch';
import MyJobs from '../components/myjobs'
import AboutTheDevs from '../components/aboutthedevs';

const CrucibleAdmin = () => {

    return (
        <Routes>
            <Route path='/' element={<DashBoard />}></Route>
            <Route path='/myjobs' element={<MyJobs />}></Route>
            <Route path='/jobsearch' element={<JobSearch />}></Route>
            <Route path='/chatboard' element={<ChatBoard />}></Route>
            <Route path='/aboutthedevs' element={<AboutTheDevs />}></Route>
        </Routes>
    )
}

export default CrucibleAdmin;


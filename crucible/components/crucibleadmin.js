
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

const CrucibleAdmin = ({ user }) => {

    return (
        <Routes>
            <Route path='/' element={<DashBoard user={user} />}></Route>
            <Route path='/myjobs' element={<MyJobs user={user} />}></Route>
            <Route path='/jobsearch' element={<JobSearch user={user} />}></Route>
            <Route path='/chatboard' element={<ChatBoard user={user} />}></Route>
            <Route path='/aboutthedevs' element={<AboutTheDevs user={user} />}></Route>
        </Routes>
    )
}

export default CrucibleAdmin;


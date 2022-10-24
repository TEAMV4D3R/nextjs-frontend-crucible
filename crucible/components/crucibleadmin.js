
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

const CrucibleAdmin = ({ user, onLogin, resources2 }) => {

    return (
        <Routes>
            <Route path='/' element={<DashBoard user={user} onLogin={onLogin} />}></Route>
            <Route path='/myjobs' element={<MyJobs user={user} onLogin={onLogin} />}></Route>
            <Route path='/jobsearch' element={<JobSearch user={user} resources2={resources2} />}></Route>
            <Route path='/chatboard' element={<ChatBoard user={user} onLogin={onLogin} />}></Route>
            <Route path='/aboutthedevs' element={<AboutTheDevs user={user} onLogin={onLogin} />}></Route>
        </Routes>
    )
}

export default CrucibleAdmin;


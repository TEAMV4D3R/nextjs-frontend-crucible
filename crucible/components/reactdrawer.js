import Drawer from 'react-modern-drawer';
import { Link } from "react-router-dom";
import { BsBriefcaseFill } from "react-icons/bs";


export const ReactDrawer = (props) => {
    return (
        <Drawer
            open={props.isOpen}
            onClose={props.toggleDrawer}
            direction='right'
            className='bla bla bla'
        >
            <div>
                <h1>{props.user?.username}</h1>
                <h1><Link to="/myjobs">My Jobs</Link></h1>
                <h1><Link to="/jobsearch">Job Search</Link></h1>
                <h1><Link to="/findjobs">Find Jobs</Link></h1>
                <h1><Link to="/chatboard">Chat Board</Link></h1>
                <h1><Link to="/aboutthedevs">About The Devs</Link></h1>
                <button className="bg-gray-200 rounded p-2 m-2" onClick={props.logout}>logout</button>
            </div>
        </Drawer>
    )
}

import Drawer from 'react-modern-drawer';
import { Link } from "react-router-dom";
// import Link from 'next/link';
import { useAuth } from "../contexts/auth";
import { BsBriefcaseFill } from "react-icons/bs";


export const ReactDrawer = (props) => {
    const { user, logout } = useAuth();
    return (
        <Drawer
            open={props.isOpen}
            onClose={props.toggleDrawer}
            direction='right'
            className='bla bla bla'
        >
            <div>
                <h1>{user?.username}</h1>
                <h1><Link to="/myjobs">My Jobs</Link></h1>
                <h1><Link to="/jobsearch">Find Jobs</Link></h1>
                <h1><Link to="/chatboard">Chat Board</Link></h1>
                <h1><Link to="/aboutthedevs">About The Devs</Link></h1>
                <button className="bg-gray-200 rounded p-2 m-2" onClick={logout}>logout</button>
            </div>
        </Drawer>
    )
}

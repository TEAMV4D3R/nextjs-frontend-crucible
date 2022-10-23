import Drawer from 'react-modern-drawer';
import Link from 'next/link';
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
                <h1><Link href="/myjobs">My Jobs</Link></h1>
                <h1><Link href="/myjobapidata">My Jobs - API Data</Link></h1>
                <h1><Link href="/jobsearch">Job Search</Link></h1>
                <h1><Link href="/chatboard">Chat Board</Link></h1>
                <h1><Link href="/aboutthedevs">About The Devs</Link></h1>
                <button className="bg-gray-200 rounded p-2 m-2" onClick={logout}>logout</button>
            </div>
        </Drawer>
    )
}

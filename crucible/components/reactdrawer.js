import Drawer from 'react-modern-drawer';
import { Link } from "react-router-dom";
import { BsBriefcaseFill } from "react-icons/bs";


export const ReactDrawer = (props) => {
    return (
        <Drawer
            open={props.isOpen}
            onClose={props.toggleDrawer}
            direction='right'
            size='20vw'
            
        >
<<<<<<< HEAD
            <div>
                <h1>{props.user?.username}</h1>
                <h1><Link to="/myjobs">My Jobs</Link></h1>
                <h1><Link to="/jobsearch">Find Jobs</Link></h1>
                <h1><Link to="/chatboard">Chat Board</Link></h1>
                <h1><Link to="/aboutthedevs">About The Devs</Link></h1>
                <button className="bg-gray-200 rounded p-2 m-2" onClick={props.logout}>logout</button>
=======
            <div className="bg-color-contrast dark:bg-color-contrast-dark h-screen leading-[3rem]">
                <h1>{user?.username.split(' ').map(username => username[0].toUpperCase() + username.substring(1).toLowerCase())
   .join(' ')}</h1>
                <h1><Link href="/myjobs">My Jobs</Link></h1>
                {/* <h1><Link href="/myjobapidata">My Jobs - API Data</Link></h1> */}
                <h1><Link href="/jobsearch">Job Search</Link></h1>
                <h1><Link href="/chatboard">Chat Board</Link></h1>
                <h1><Link href="/aboutthedevs">About The Devs</Link></h1>
                <div className="flex justify-center">
                    <button className="bg-color-highlight dark:bg-color-highlight-dark rounded p-2 m-2 flex flex-col items-center " onClick={logout}>Logout</button>
                </div>
>>>>>>> main
            </div>
        </Drawer>
    )
}

import Drawer from 'react-modern-drawer';
import { Link } from "react-router-dom";
import { BsBriefcaseFill } from "react-icons/bs";


export const ReactDrawer = ({ user, isOpen, toggleDrawer, logout }) => {
    return (
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            size='20vw'
        >
            <div className="bg-color-contrast dark:bg-color-contrast-dark h-screen leading-[3rem]">
                <h1>{user?.username.split(' ').map(username => username[0].toUpperCase() + username.substring(1).toLowerCase())
                    .join(' ')}</h1>
                <h1><Link to="/myjobs">My Jobs</Link></h1>
                <h1><Link to="/jobsearch">Job Search</Link></h1>
                <h1><Link to="/chatboard">Chat Board</Link></h1>
                <h1><Link to="/aboutthedevs">About The Devs</Link></h1>
                <div className="flex justify-center">
                    <button className="bg-color-highlight dark:bg-color-highlight-dark rounded p-2 m-2 flex flex-col items-center " onClick={() => logout()}>Logout</button>
                </div>
            </div>
        </Drawer>
    )
}

import Drawer from 'react-modern-drawer';
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaSuitcase, FaSearch } from "react-icons/fa";
import { BsFillChatDotsFill, BsPeopleFill } from "react-icons/bs";


export const ReactDrawer = ({ user, isOpen, toggleDrawer, logout }) => {
    return (
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            size='20vw'
        >
            <div className="bg-color-contrast dark:bg-color-contrast-dark h-screen">
                <h2 className='text-2xl text-slate-900 dark:text-color-bright-dark text-center p-2'>Welcome {user?.username.split(' ').map(username => username[0].toUpperCase() + username.substring(1).toLowerCase())
                    .join(' ')}</h2>
                <div className='flex content-center items-center mx-10'>
                    <AiFillHome className="mx-3 text-slate-900 " />
                    <h6 className='text-slate-900 mx-3'><Link to="/">Dashboard</Link></h6></div>
                <div className='flex content-center items-center mx-10'>
                    <FaSuitcase className="mx-3 text-slate-900 " />
                    <h6 className='text-slate-900 mx-3'><Link to="/myjobs">My Jobs</Link></h6></div>
                <div className='flex content-center items-center  mx-10'>
                    <FaSearch className="mx-3 text-slate-900 " />
                    <h6 className='text-slate-900 m-2'><Link to="/jobsearch">Job Search</Link></h6></div>
                <div className='flex content-center items-center  mx-10'>
                    <BsFillChatDotsFill className="mx-3 text-slate-900 " />
                    <h6 className='text-slate-900 m-2'><Link to="/chatboard">Chat Board</Link></h6></div>
                <div className='flex content-center items-center  mx-10'>
                    <BsPeopleFill className="mx-3 text-slate-900 " />
                    <h6 className='text-slate-900 m-2'><Link to="/aboutthedevs">About The Devs</Link></h6>
                </div>

                <button className="bg-color-highlight dark:bg-color-highlight-dark rounded p-1 m-1 mx-auto flex flex-col items-center w-1/3 shadow-3xl" onClick={() => logout()}>Logout</button>
            </div>
        </Drawer>
    )
}

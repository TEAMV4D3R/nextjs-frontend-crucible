import Drawer from 'react-modern-drawer';
import { Link } from "react-router-dom";
import { AiFillHome, AiFillDashboard } from "react-icons/ai";
import { FaSuitcase, FaSearch } from "react-icons/fa";
import { BsFillChatDotsFill, BsPeopleFill, BsPersonCircle } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";


export const ReactDrawer = ({ user, isOpen, toggleDrawer, logout }) => {
    return (
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            size='450px'
        >
            <div className="flex flex-col justify-evenly bg-color-contrast dark:bg-color-contrast-dark h-screen">
                <BsPersonCircle className='mx-auto text-8xl text-slate-900' />
                <h2 className='text-2xl text-slate-900 text-center p-2'>Welcome {user?.username.split(' ').map(username => username[0].toUpperCase() + username.substring(1).toLowerCase())
                    .join(' ')}</h2>
                <div className='flex content-center items-center mx-20'>
                    <FaSuitcase className="mx-3 text-slate-900 " />
                    <h6 className='text-slate-900 mx-3'><Link to="/">My Jobs</Link></h6></div>
                <div className='flex content-center items-center mx-20'>
                    <AiFillDashboard className="mx-3 text-slate-900 " />
                    <h6 className='text-slate-900 mx-3'><Link to="/dashboard">Dashboard</Link></h6></div>
                <div className='flex content-center items-center  mx-20'>
                    <FaSearch className="mx-3 text-slate-900 " />
                    <h6 className='text-slate-900 m-2'><Link to="/jobsearch">Job Search</Link></h6></div>
                <div className='flex content-center items-center  mx-20'>
                    <BsFillChatDotsFill className="mx-3 text-slate-900 " />
                    <h6 className='text-slate-900 m-2'><Link to="/chatboard">Chat Board</Link></h6></div>
                <div className='flex content-center items-center  mx-20'>
                    <BsPeopleFill className="mx-3 text-slate-900 " />
                    <h6 className='text-slate-900 m-2'><Link to="/aboutthedevs">About The Devs</Link></h6>
                </div>
                <button className="bg-color-highlight dark:bg-color-highlight-dark rounded py-3 mx-auto flex flex-col items-center w-1/3 shadow-3xl" onClick={() => logout()}>Logout</button>
            </div>
        </Drawer>
    )
}

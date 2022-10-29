import Drawer from 'react-modern-drawer';
import { Link } from "react-router-dom";
import { AiOutlineLogout, AiFillDashboard } from "react-icons/ai";
import { FaSuitcase, FaSearch } from "react-icons/fa";
import { BsFillChatDotsFill, BsPeopleFill, BsPersonCircle } from "react-icons/bs";

export const ReactDrawer = ({ user, isOpen, toggleDrawer, logout }) => {
    return (
        <div data-testid="reactdrawer-1">
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                size='450px'>
                <div className="flex flex-col justify-evenly bg-color-contrast dark:bg-color-contrast-dark h-screen">
                    <BsPersonCircle className='mx-auto text-8xl text-slate-900' />
                    <h2 id="welcome-user" className='text-2xl text-slate-900 text-center p-2'>Welcome {user?.username.split(' ').map(username => username[0].toUpperCase() + username.substring(1).toLowerCase())
                        .join(' ')}</h2>
                    <div className='flex content-center items-center mx-20'>
                        <FaSuitcase className="mx-3 text-3xl text-slate-900 " />
                        <h6 id="myjobs" className='text-slate-900 text-2xl mx-3'><Link to="/">My Jobs</Link></h6></div>
                    <div className='flex content-center items-center mx-20'>
                        <AiFillDashboard className="mx-3 text-3xl text-slate-900 " />
                        <h6 id="dashboard" className='text-slate-900 text-2xl mx-3'><Link to="/dashboard">Dashboard</Link></h6></div>
                    <div className='flex content-center items-center  mx-20'>
                        <FaSearch className="mx-3 text-3xl text-slate-900 " />
                        <h6 id="jobsearch" className='text-slate-900 text-2xl m-2'><Link to="/jobsearch">Job Search</Link></h6></div>
                    <div className='flex content-center items-center  mx-20'>
                        <BsFillChatDotsFill className="mx-3 text-3xl text-slate-900 " />
                        <h6 id="chatboard" className='text-slate-900 text-2xl m-2'><Link to="/chatboard">Chat Board</Link></h6></div>
                    <div className='flex content-center items-center  mx-20'>
                        <BsPeopleFill className="mx-3 text-3xl text-slate-900 " />
                        <h6 id="aboutthedevs" className='text-slate-900 text-2xl m-2'><Link to="/aboutthedevs">About The Devs</Link></h6>
                    </div>
                    <div className="flex flex-row items-center bg-color-highlight dark:bg-color-highlight-dark  justify-center p-2 mx-auto w-1/3 shadow-xl rounded">
                        <AiOutlineLogout className='text-2xl' />
                        <button id="logoutbutton" className="flex flex-col justify-center bg-color-highlight dark:bg-color-highlight-dark rounded mx-auto my-2 flex flex-col items-center w-5/6 shadow-3xl" onClick={() => logout()}>Logout
                        </button>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

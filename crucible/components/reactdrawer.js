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
            size='20vw'
            
        >
            <div className="bg-color-contrast dark:bg-color-contrast-dark h-screen leading-[3rem]">
                <h1>{user?.username}</h1>
                <h1><Link href="/myjobs">My Jobs</Link></h1>
                {/* <h1><Link href="/myjobapidata">My Jobs - API Data</Link></h1> */}
                <h1><Link href="/jobsearch">Job Search</Link></h1>
                <h1><Link href="/chatboard">Chat Board</Link></h1>
                <h1><Link href="/aboutthedevs">About The Devs</Link></h1>
                <div className="flex justify-center">
                    <button className="bg-color-highlight dark:bg-color-highlight-dark rounded p-2 m-2 flex flex-col items-center " onClick={logout}>Logout</button>
                </div>
            </div>
        </Drawer>
    )
}

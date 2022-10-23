import { ReactDrawer } from "./reactdrawer";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import 'react-modern-drawer/dist/index.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

export const Header = ({ user, logout }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <header className='bg-gray-500 h-20  flex flex-row content-center justify-between'>
            <div className="flex">
                <h1 className="my-auto text-3xl m-5">Crucible</h1>
                {user &&
                    <button className="bg-emerald-800 rounded-md hover:bg-red-200 m-auto p-1" onClick={logout}>Log Out</button>
                }
            </div>
            <div className='flex justify-evenly w-1/6 items-center text-xl'>
                <Link to="/"><AiFillHome /></Link>
                <AiOutlineMenu onClick={toggleDrawer} />
                <ReactDrawer
                    isOpen={isOpen}
                    toggleDrawer={toggleDrawer}
                />

                {/*<div className="wrg-toggle">
                    <div>
                    </div>
                    <div className="wrg-toggle-container">
                        <div className="wrg-toggle-check">
                            <span>🌜</span>
                        </div>
                        <div className="wrg-toggle-uncheck">
                            <span>🌞</span>
                        </div>
                    </div>
                    <div className="wrg-toggle-circle"></div>
                    <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
                </div>*/}
            </div>
        </header>
    )
}

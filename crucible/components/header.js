import { ReactDrawer } from "./reactdrawer";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import 'react-modern-drawer/dist/index.css';
import { useState } from 'react';
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import Link from 'next/link';
import useDarkMode from "../useDarkMode";
>>>>>>> main

export const Header = ({ user, logout }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <header className='bg-color-shadow dark:bg-color-shadow-dark flex flex-row content-center justify-between'>
            <div className="flex">
                <h1 className="my-auto text-3xl m-5">Crucible</h1>
<<<<<<< HEAD
=======
                {user &&
                    <button className="bg-color-highlight dark:bg-color-highlight-dark rounded-md hover:bg-red-200 m-auto p-1" onClick={logout}>Log Out</button>
                }
>>>>>>> main
            </div>
            <div className='flex justify-evenly w-1/6 items-center text-xl'>
                <Link to="/"><AiFillHome /></Link>
                <AiOutlineMenu onClick={toggleDrawer} />
                <ReactDrawer
                    isOpen={isOpen}
                    toggleDrawer={toggleDrawer}
                    user={user}
                    logout={logout}
                />

<<<<<<< HEAD
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
=======
                 {colorTheme === "light" ? (
                    <svg
                    onClick={() => setTheme("light")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                    </svg>
                ) : (
                    <svg
                    onClick={() => setTheme("dark")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                    </svg>
                )}
            
>>>>>>> main
            </div>
        </header>
    )
}

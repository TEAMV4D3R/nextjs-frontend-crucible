import { ReactDrawer } from "./reactdrawer";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { HiLightBulb, HiOutlineMoon } from "react-icons/hi";
import { useState } from 'react';
import { Link } from "react-router-dom"
import useDarkMode from "../hooks/useDarkMode";
import Image from "next/image"
import 'react-modern-drawer/dist/index.css';

export const Header = ({ user, logout }) => {
    const logo = "/data/crucibleLogo.png"

    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <header data-testid="header-1" className='bg-color-shadow dark:bg-color-shadow-dark flex flex-row content-center justify-between'>
            <div className="flex items-center content-center justify-center">
                <div className="m-5">
                    <Image src={logo} alt="logo" width={40} height={40} className="" />
                </div>

                <h2 id="crucible-header" className="my-auto text-2xl font-sans italic">CRUCIBLE</h2>
            </div>
            <div className='flex justify-evenly w-1/6 items-center text-xl'>
                <Link to="/"><AiFillHome className="text-4xl" /></Link>
                {colorTheme === "light" ? (
                    <HiLightBulb className="text-4xl mx-2" onClick={() => setTheme("light")} />
                ) : (
                    <HiOutlineMoon className="text-4xl mx-2" onClick={() => setTheme("dark")} />
                )}
                <AiOutlineMenu id="drawer-icon" onClick={toggleDrawer} className="text-4xl mx-2" />
                <ReactDrawer
                    id="crucible-drawer"
                    isOpen={isOpen}
                    toggleDrawer={toggleDrawer}
                    user={user}
                    logout={logout}
                />
            </div>
        </header>
    )
}

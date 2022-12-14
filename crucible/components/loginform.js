import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import Link from 'next/link';
import Image from "next/image"



const LoginForm = ({ onLogin, setUserAuth }) => {
    const logo = "/data/crucibleLogo.png"
    function submitHandler(event) {
        event.preventDefault();
        const newUser = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        onLogin(newUser);
    }

    return (
        <>
            <div data-testid="login-1">
                <header className='bg-color-shadow dark:bg-color-shadow-dark flex flex-row content-center justify-between'>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex justify-center items-center content-center">
                        </div>
                        <div>
                            <h1 className="my-auto text-2xl m-5">
                                <Link href="/devpage">About The Devs</Link>
                            </h1>
                        </div>
                    </div>
                </header>
                <div className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-screen">
                    <h1 className="flex flex-col mx-auto w-4/6 h-auto items-center text-color-shadow-dark">Welcome to Crucible</h1>
                    <div className=" flex flex-col h-1/2 w-1/3 mx-auto text-white bg-slate-200 rounded shadow-2xl dark:bg-color-contrast-dark overflow-auto">
                        <div className="mt-5 mx-auto">
                            <Image src={logo} alt="logo" width={60} height={60} className="mx-auto" />
                        </div>
                        <h2 className="mt-5 text-2xl text-center text-slate-800">Login to your account</h2>
                        <form onSubmit={submitHandler} className="flex flex-col mx-auto w-full items-center text-black">
                            <div className="flex items-center bg-color-contrast h-12 w-full mt-10 w-4/5 rounded">
                                <BsFillPersonFill className="text-4xl text-slate-400 mx-2" />
                                <input placeholder="Username" name="username" className="input w-full h-12 bg-color-contrast rounded  mr-12 " />
                            </div>
                            <div className="flex items-center bg-color-contrast h-12 w-full mt-10  w-4/5 rounded">
                                <AiFillLock className="text-4xl text-slate-400 mx-2" />
                                <input type="password" name="password" placeholder="Password" align="left" className="input w-full h-12 bg-color-contrast mr-12 rounded" />
                            </div>
                            <button className="mt-10 w-4/5 rounded shadow-xl bg-color-highlight dark:bg-color-highlight-dark
                                px-10 py-3 ">Log In</button>
                            <div className="flex justify-center m-5">
                                <h2 className="text-xl text-slate-700">New to Crucible?</h2>
                                <button className="mx-2 text-xl text-purple-700">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <h2 className="text-color-shadow-dark text-xl text-center w-2/5 mx-auto my-10">Crucible is an amazing application that can help you find that dream job you have been looking for in the job search page, which can be found in the menu! Crucible conveniently helps you log, and take notes of the jobs that you have applied for.</h2>
                </div>
            </div>
        </>
    );
}

export default LoginForm

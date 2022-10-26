import { createContext, useSate, useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";



const LoginForm = ({ onLogin }) => {

    function submitHandler(event) {
        event.preventDefault();
        const newUser = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        onLogin(newUser);
    }

    // Need to redirect to new-user form for signup button on-click

    return (
        <>
            <header className='bg-color-shadow dark:bg-color-shadow-dark flex flex-row content-center justify-between'>
                <div className="flex">
                    <h1 className="my-auto text-3xl m-5">Crucible</h1>
                </div>
            </header>
            <div className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-screen">
                <h1 className="flex flex-col mx-auto w-4/6 items-center text-color-shadow-dark">Welcome to Crucible</h1>
                <div className=" flex flex-col h-1/2 w-1/3 mx-auto text-white bg-slate-200 rounded shadow-2xl dark:bg-color-contrast-dark">
                    <h2 className="mt-10 text-2xl text-center text-slate-800">Login to your account</h2>
                    <form onSubmit={submitHandler} className="flex flex-col mx-auto w-full items-center text-black">
                        <div className="flex items-center bg-color-contrast h-12 w-full mt-10 w-4/5 rounded">
                            <BsFillPersonFill className="text-4xl text-slate-400 mx-2" />
                            <input placeholder="Username" name="username" className="login-input w-full h-12 bg-color-contrast rounded  mr-12 " />
                        </div>
                        <div className="flex items-center bg-color-contrast h-12 w-full mt-10  w-4/5 rounded">
                            <AiFillLock className="text-4xl text-slate-400 mx-2" />
                            <input type="password" name="password" placeholder="Password" align="left" className="login-input w-full h-12 bg-color-contrast mr-12 rounded" />
                        </div>
                        <button className="mt-10 w-4/5 rounded shadow-xl bg-color-highlight dark:bg-color-highlight-dark
                                px-10 py-3 ">Log In</button>
                    </form>
                    <div className="flex justify-center mt-10">
                        <h2 class="text-xl text-slate-700">New to Crucible?</h2>
                        <button className="mx-2 text-xl text-purple-700">Sign Up</button>
                    </div>
                </div>
            </div>
            <footer className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-full>
            </footer>
        </>
    );
}

export default LoginForm

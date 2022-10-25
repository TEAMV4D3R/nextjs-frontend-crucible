import { createContext, useSate, useContext } from "react";

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
        <div className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-screen">
            <h1 className="flex flex-col mx-auto w-4/6 items-center">User Login</h1>
            <div className=" flex h-5/6 text-white">
                <form onSubmit={submitHandler} className="flex flex-col mx-auto w-4/6 items-center text-black">
                    <input placeholder="Username" name="username" className="my-20 w-3/5 h-10 bg-color-contrast dark:bg-color-contrast-dark rounded" />
                    <input type="password" name="password" placeholder="Password" className="w-3/5 h-10 bg-color-contrast dark:bg-color-contrast-dark rounded" />
                    <button className="m-5 rounded shadow-xl bg-color-highlight dark:bg-color-highlight-dark
                                px-10 py-5 ">Log In</button>
                    <button className="m-5 rounded shadow-xl bg-color-highlight dark:bg-color-highlight-dark
                                px-8 py-5 ">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm
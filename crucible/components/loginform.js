import { createContext, useSate, useContext } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

const LoginForm = ({ onLogin }) => {

    function submitHandler(event) {
        event.preventDefault();
        const newUser = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        onLogin(newUser);
    }

    return (
        <div className="bg-gray-100 text-black items-center h-screen content-center items-center text-white">
            <div className=" flex h-5/6 text-white">
                <form onSubmit={submitHandler} className="flex flex-col mx-auto w-4/6 items-center text-black">
                    <input placeholder="username" name="username" className="my-20 w-3/5 h-10 bg-gray-600 rounded text-white" />
                    <input type="password" name="password" placeholder="password" className="w-3/5 h-10 bg-gray-600 rounded text-white" />
                    <button className="m-5 rounded shadow-xl bg-gray-500 px-10 py-5 text-white">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm
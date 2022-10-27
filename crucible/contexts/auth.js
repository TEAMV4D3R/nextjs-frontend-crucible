
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

const AuthContext = createContext();

export function useAuth() {


    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    useEffect((item) => {
        item = JSON.parse(localStorage.getItem('user')) || null;
        console.log("item", item)
        setUser(item)
    }, []);

    useEffect((item) => {
        item = JSON.parse(localStorage.getItem('token')) || null;
        setToken(item)
    }, []);

    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error("You forgot to set up AuthProvider!");
    }
    console.log("auth", auth)
    return auth;
}

export function AuthProvider(props) {


    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    useEffect((item) => {
        item = JSON.parse(localStorage.getItem('user')) || null;
        console.log("item", item)
        setUser(item)
    }, []);

    useEffect((item) => {
        item = JSON.parse(localStorage.getItem('token')) || null;
        setToken(item)
    }, []);

    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    });

    async function login(username, password) {


        const loginUrl = process.env.NEXT_PUBLIC_API_URL_TOKEN;

        console.log("check", loginUrl)

        await axios.post(loginUrl, { username, password })
            .then((response) => {
                console.log("response", response)

                const decodedAccess = jwt.decode(response.data.access);
                let stringfyedValueToken = JSON.stringify(response.data)
                localStorage.setItem('token', stringfyedValueToken);
                setToken(JSON.parse(localStorage.getItem('token')))
                console.log("tokennssss", token)

                const newUserAuth = {
                    username: decodedAccess.username,
                    email: decodedAccess.email,
                    id: decodedAccess.user_id,
                }
                let stringfyedValueUser = JSON.stringify(newUserAuth)
                localStorage.setItem('user', stringfyedValueUser);
                setUser(JSON.parse(localStorage.getItem('user')))
                console.log("usersss", user)

                const newState = {
                    tokens: response.data,
                    user: newUserAuth
                }
                console.log(newState)

                setState(prevState => ({ ...prevState, ...newState }));
            });
    }

    function logout() {
        const newState = {
            tokens: null,
            user: null
        }

        setState(prevState => ({ ...prevState, ...newState }));
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );

}
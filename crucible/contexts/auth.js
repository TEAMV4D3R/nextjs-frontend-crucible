
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

const AuthContext = createContext();

export function useAuth() {

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
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('user')) || null;
        setUser(item)
    }, []);

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('token')) || null;
        setToken(item)
    }, []);

    const [state, setState] = useState({
        tokens: token,
        user: user,
        login,
        logout,
    });

    async function login(username, password) {


        const loginUrl = process.env.NEXT_PUBLIC_API_URL_TOKEN;

        console.log("check", loginUrl)

        const response = await axios.post(loginUrl, { username, password });

        const decodedAccess = jwt.decode(response.data.access);

        const newState = {
            tokens: response.data,
            user: {
                username: decodedAccess.username,
                email: decodedAccess.email,
                id: decodedAccess.user_id,
            }
        }

        setState(prevState => ({ ...prevState, ...newState }));
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
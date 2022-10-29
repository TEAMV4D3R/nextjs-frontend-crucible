import styles from '../styles/Home.module.css';
import App from "../components/app";
import LoginForm from "../components/loginform";
import Header from "../components/header";
import { useAuth } from "../contexts/auth";
import { useEffect, useState } from "react";

export const Index = () => {

  const { user, login, tokens, logout } = useAuth();

  useEffect(() => {
    const { token } = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [])

  const loginHandler = (newUser) => {
    login(newUser?.username, newUser?.password)
  }

  // We need to add a function that sends new user information to the database

  return (
    <div data-testid="index-page-1">
      {user ?
        <App user={user} logout={logout} /> :
        <LoginForm onLogin={loginHandler} />}
    </div>
  )
}

export default Index; 

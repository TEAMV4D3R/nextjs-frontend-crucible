import styles from '../styles/Home.module.css';
import App from "../components/app";
import LoginForm from "../components/loginform";
import Header from "../components/header";
import { useAuth } from "../contexts/auth";
import { useState } from "react";

export const Index = () => {

  const { user, login, tokens, logout } = useAuth();
  const [userAuth, setUserAuth] = useState(user);

  const loginHandler = (newUser) => {
    login(newUser?.username, newUser?.password)
  }

  // We need to add a function that sends new user information to the database

  return (
    <>
      <div data-testid="index-page-1">
        {user ?
          <App user={user} logout={logout} onLogin={loginHandler} tokens={tokens} /> :
          <LoginForm onLogin={loginHandler} setUserAuth={setUserAuth} />}
      </div>
    </>
  )
}

export default Index; 

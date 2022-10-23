import styles from '../styles/Home.module.css';
import App from "../components/app";
import LoginForm from "../components/loginform";
import Header from "../components/header";
import { useAuth } from "../contexts/auth";

export const Index = () => {

  const { user, login, logout } = useAuth();

  const loginHandler = (newUser) => {
    login(newUser?.username, newUser?.password)
  }
  return (
    <>
      {user ?
        <App user={user} logout={logout} onLogin={loginHandler} /> :
        <LoginForm onLogin={loginHandler} />}
    </>
  )
}

export default Index; 

import styles from '../styles/Home.module.css';
import App from "../components/app";
import LoginForm from "../components/loginform";
import Header from "../components/header";
import { useAuth } from "../contexts/auth";

export const Index = () => {

  const { user, login, tokens, logout } = useAuth();
  console.log("tokens", tokens)

  const loginHandler = (newUser) => {
    login(newUser?.username, newUser?.password)
  }

  return (
    <>
      {user ?
        <App user={user} logout={logout} onLogin={loginHandler} tokens={tokens} /> :
        <LoginForm onLogin={loginHandler} />}
    </>
  )
}

export default Index; 

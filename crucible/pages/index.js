import styles from '../styles/Home.module.css';
import App from "../components/app";
import LoginForm from "../components/loginform";
import Header from "../components/header";
import { useAuth } from "../contexts/auth";
<<<<<<< HEAD
=======
import UserHome from './userhome';
>>>>>>> main

export const Index = () => {

  const { user, login, logout } = useAuth();

  const loginHandler = (newUser) => {
    login(newUser?.username, newUser?.password)
  }
  
  return (
    <>
      {user ?
<<<<<<< HEAD
        <App user={user} logout={logout} /> :
        <LoginForm onLogin={loginHandler} />}
=======
        <>
          < CrucibleAdmin user={user} logout={logout} />
          <UserHome />
        </> :
        <LoginForm onLogin={loginHandler} />
      }
      
>>>>>>> main
    </>
  )
}

export default Index; 

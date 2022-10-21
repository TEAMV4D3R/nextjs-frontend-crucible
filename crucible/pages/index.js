import styles from '../styles/Home.module.css';
import CrucibleAdmin from "../components/crucibleadmin";
import LoginForm from "../components/loginform";
import { useAuth } from "../contexts/auth";

export const Index = () => {

  const { user, login, logout } = useAuth();

  const loginHandler = (newUser) => {
    console.log(newUser)
    login(newUser.username, newUser.password)
  }
  return (
    <>
      {user ?
        < CrucibleAdmin user={user} logout={logout} /> : <LoginForm onLogin={loginHandler} />
      }
    </>
  )

}

export default Index; 

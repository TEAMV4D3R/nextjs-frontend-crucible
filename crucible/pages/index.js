import styles from '../styles/Home.module.css';
import CrucibleAdmin from "../components/crucibleadmin";
import LoginForm from "../components/loginform";
import { useAuth } from "../contexts/auth";
import JobSearch from './jobsearch';

export const Index = () => {

  const { user, login, logout } = useAuth();

  const loginHandler = (newUser) => {
    login(newUser?.username, newUser?.password)
  }
  return (
    <>
      {user ?
        <>
          < CrucibleAdmin user={user} logout={logout} />
          <JobSearch />
        </> :
        <LoginForm onLogin={loginHandler} />
      }
    </>
  )

}

export default Index; 

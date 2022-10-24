import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/header';
import CrucibleAdmin from '../components/crucibleadmin';
import useResourceTwo from "../hooks/useResourcetwo";

const App = ({ user, logout, onLogin, tokens }) => {

    return (
        <Router>
            <Header
                user={user}
                logout={logout}
            />
            <CrucibleAdmin
                user={user}
                onLogin={onLogin}
                tokens={tokens}
            />
        </Router>
    )
}

export default App

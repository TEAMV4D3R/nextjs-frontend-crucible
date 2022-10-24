import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/header';
import CrucibleAdmin from '../components/crucibleadmin';
import useResourceTwo from "../hooks/useResourcetwo";

const App = ({ user, logout, onLogin }) => {
    const { resources2, createResource2, deleteResource2 } = useResourceTwo();

    return (
        <Router>
            <Header
                user={user}
                logout={logout}
            />
            <CrucibleAdmin
                user={user}
                onLogin={onLogin}
                resources2={resources2}
            />
        </Router>
    )
}

export default App

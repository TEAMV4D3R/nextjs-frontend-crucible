import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/header';
import CrucibleAdmin from '../components/crucibleadmin';

const App = ({ user, logout, onLogin }) => {

    return (
        <Router>
            <Header
                user={user}
                logout={logout}
            />
            <CrucibleAdmin user={user} onLogin={onLogin} />
        </Router>
    )
}

export default App

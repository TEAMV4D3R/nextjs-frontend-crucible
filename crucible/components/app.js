import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import CrucibleAdmin from '../components/crucibleadmin';

const App = ({ user, logout, onLogin, tokens }) => {

    return (
        <div data-testid="app-1">
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
        </div>
    )
}

export default App

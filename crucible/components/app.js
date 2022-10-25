import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import CrucibleAdmin from '../components/crucibleadmin';

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
            <Footer />
        </Router>
    )
}

export default App

import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/header';
import CrucibleAdmin from '../components/crucibleadmin';

const App = () => {

    return (
        <Router>
            <Header />
            <CrucibleAdmin />
        </Router>
    )
}

export default App

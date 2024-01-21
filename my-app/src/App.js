import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SignIn from './pages/SigninPage';
import SignUp from './pages/SignupPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/loginin" element={<SignIn/>}/>
                <Route path="/register" element={<SignUp/>}/>
            </Routes>
        </Router>
    );
}

export default App;

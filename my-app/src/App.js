import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useState, useEffect } from "react";

function App() {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        setUserId(localStorage.getItem("userId"));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage userId={userId} setUserId={setUserId} />} />
                <Route path="/login" element={<LoginPage setUserId={setUserId} />} />
                <Route path="/register" element={<RegisterPage setUserId={setUserId} />} />
            </Routes>
        </Router>
    );
}

export default App;

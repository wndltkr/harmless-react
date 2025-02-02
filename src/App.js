import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import './styles/develop.css';
import GuidePage from "./pages/GuidePage";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/guide" element={<GuidePage />} />
            </Routes>
            <Footer />
        </Router>
    );
}
export default App;
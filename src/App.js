import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import './styles/develop.css';
import GuidePage from "./pages/GuidePage";
import ServicePage from "./pages/ServicePage";
import ApplyPage from "./pages/ApplyPage";
import AboutPage from "./pages/AboutPage";
import Apply1Page from "./pages/Apply1Page";
import Apply2Page from "./pages/Apply2Page";
import NoticePage from './pages/NoticePage';
import ReviewPage from './pages/ReviewPage';
import InquiryPage from './pages/InquiryPage';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/guide" element={<GuidePage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/apply" element={<ApplyPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/apply1" element={<Apply1Page />} />
                <Route path="/apply2" element={<Apply2Page />} />
                <Route path="/notice" element={<NoticePage />} />
                <Route path="/review" element={<ReviewPage />} />
                <Route path="/inquiry" element={<InquiryPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}
export default App;
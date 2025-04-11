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
import PrivacyPage from "./pages/PrivacyPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from './pages/admin/AdminPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminNoticeList from './pages/admin/AdminNoticeList';
import AdminNoticeCreate from './pages/admin/AdminNoticeCreate';

function App() {
    return (
        <Router>
            <Routes>
                {/* 일반 페이지 라우트 */}
                <Route path="/*" element={
                    <>
                        <Header />
                        <main className="main-content">
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
                                <Route path="/privacy" element={<PrivacyPage />} />
                                <Route path="/signup" element={<SignupPage />} />
                                <Route path="/login" element={<LoginPage />} />
                            </Routes>
                        </main>
                        <Footer />
                    </>
                } />
                
                {/* 관리자 페이지 라우트 */}
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route path="/admin/*" element={<AdminPage />} />
            </Routes>
        </Router>
    );
}

export default App;
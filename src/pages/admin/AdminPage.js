import React from "react";
import { Routes, Route, Navigate, useNavigate, Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdminPickupList from "./AdminPickupList";
import AdminNoticeList from "./AdminNoticeList";
import AdminNoticeCreate from "./AdminNoticeCreate";
import "../../styles/adminPage.css";

const AdminPage = () => {
    const navigate = useNavigate();
    // TODO: 관리자 인증 로직 추가
    const isAuthenticated = true; // 임시로 true로 설정

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    const handleLogout = () => {
        // TODO: 로그아웃 로직 추가
        navigate("/admin/login");
    };

    return (
        <div className="admin-page">
            <div className="admin-sidebar">
                <h2>관리자 메뉴</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to="/admin/dashboard">대시보드</Link>
                        </li>
                        <li>
                            <Link to="/admin/pickup-list">수거 신청 목록</Link>
                        </li>
                        <li>
                            <Link to="/admin/notice">공지사항 관리</Link>
                        </li>
                        <li>
                            <Link to="/admin/member-list">회원 관리</Link>
                        </li>
                        <li>
                            <Link to="/admin/inquiry-list">1:1 문의 목록</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <h1>관리자 페이지</h1>
                    <div className="admin-user">
                        <span>관리자님</span>
                        <button className="logout-button" onClick={handleLogout}>
                            로그아웃
                        </button>
                    </div>
                </div>
                <div className="admin-content-inner">
                    <Routes>
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route path="pickup-list" element={<AdminPickupList />} />
                        <Route path="notice" element={<AdminNoticeList />} />
                        <Route path="notice/create" element={<AdminNoticeCreate />} />
                        <Route path="notice/edit/:id" element={<AdminNoticeCreate />} />
                        <Route path="*" element={<Navigate to="dashboard" replace />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AdminPage; 
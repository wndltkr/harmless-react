import React from "react";
import { Link } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import "../../styles/adminDashboard.css";

// Chart.js 등록
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const AdminDashboard = () => {
    // 방문자 수 데이터 (예시)
    const visitorData = {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [
            {
                label: '일일 방문자 수',
                data: [150, 230, 180, 340, 290, 250, 300],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                fill: false
            }
        ]
    };

    // 신청 수 데이터 (예시)
    const applicationData = {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [
            {
                label: '일일 신청 수',
                data: [25, 35, 28, 45, 38, 42, 30],
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
                fill: false
            }
        ]
    };

    // 차트 옵션
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>관리자 대시보드</h1>
            <div className="dashboard-container">
                <Link to="/admin/pickup-list" className="dashboard-card">
                    <h2>수거 신청 목록</h2>
                    <p>전 내역을 확인하고 관리합니다.</p>
                </Link>
                <Link to="/admin/member-list" className="dashboard-card">
                    <h2>회원 관리</h2>
                    <p>회원을 확인하고 관리합니다.</p>
                </Link>
                <Link to="/admin/notice" className="dashboard-card">
                    <h2>공지사항 관리</h2>
                    <p>공지사항을 작성하고 관리합니다.</p>
                </Link>
                <Link to="/admin/inquiry-list" className="dashboard-card">
                    <h2>1:1 문의 관리</h2>
                    <p>문의 내역을 확인하고 답변합니다.</p>
                </Link>
            </div>
            <div className="dashboard-stats-container">
                <div className="stats-card">
                    <h2>일일 방문자 통계</h2>
                    <div className="chart-container">
                        <Line data={visitorData} options={options} />
                    </div>
                </div>
                <div className="stats-card">
                    <h2>일일 신청 통계</h2>
                    <div className="chart-container">
                        <Line data={applicationData} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard; 
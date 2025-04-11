import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/adminPickupList.css";

const AdminPickupList = () => {
    const navigate = useNavigate();
    // 예시 데이터
    const [pickupRequests] = useState([
        {
            id: 1,
            type: "대면",
            date: "2024-03-15",
            time: "14:00",
            name: "김철수",
            memberType: "회원",
            status: "대기중"
        },
        {
            id: 2,
            type: "비대면",
            date: "2024-03-15",
            time: "15:30",
            name: "이영희",
            memberType: "비회원",
            status: "승인"
        },
        {
            id: 3,
            type: "대면",
            date: "2024-03-16",
            time: "10:00",
            name: "박지성",
            memberType: "회원",
            status: "대기중"
        },
        {
            id: 4,
            type: "비대면",
            date: "2024-03-16",
            time: "11:30",
            name: "최민수",
            memberType: "비회원",
            status: "거절"
        }
    ]);

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "승인":
                return "status-approved";
            case "거절":
                return "status-rejected";
            default:
                return "status-pending";
        }
    };

    const handleViewDetail = (id) => {
        navigate(`/admin/pickup/${id}`);
    };

    return (
        <div className="admin-pickup-list">
            <div className="pickup-header">
                <h1>수거 신청 목록</h1>
                <div className="pickup-filters">
                    <select className="filter-select">
                        <option value="all">전체 보기</option>
                        <option value="face">대면</option>
                        <option value="non-face">비대면</option>
                    </select>
                    <select className="filter-select">
                        <option value="all">전체 회원</option>
                        <option value="member">회원</option>
                        <option value="non-member">비회원</option>
                    </select>
                    <select className="filter-select">
                        <option value="all">전체 상태</option>
                        <option value="pending">대기중</option>
                        <option value="approved">승인</option>
                        <option value="rejected">거절</option>
                    </select>
                </div>
            </div>
            <div className="pickup-list-container">
                <table className="pickup-table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>신청 유형</th>
                            <th>신청 날짜</th>
                            <th>신청 시간</th>
                            <th>신청자</th>
                            <th>회원 구분</th>
                            <th>상태</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pickupRequests.map((request) => (
                            <tr key={request.id}>
                                <td>{request.id}</td>
                                <td>
                                    <span className={`type-badge ${request.type === "대면" ? "type-face" : "type-non-face"}`}>
                                        {request.type}
                                    </span>
                                </td>
                                <td>{request.date}</td>
                                <td>{request.time}</td>
                                <td>{request.name}</td>
                                <td>
                                    <span className={`member-badge ${request.memberType === "회원" ? "member" : "non-member"}`}>
                                        {request.memberType}
                                    </span>
                                </td>
                                <td>
                                    <span className={`status-badge ${getStatusBadgeClass(request.status)}`}>
                                        {request.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button 
                                            className="action-button view-button"
                                            onClick={() => handleViewDetail(request.id)}
                                        >
                                            상세
                                        </button>
                                        {request.status === "대기중" && (
                                            <>
                                                <button className="action-button approve-button">승인</button>
                                                <button className="action-button reject-button">거절</button>
                                            </>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <button className="page-button">&lt;</button>
                <button className="page-button active">1</button>
                <button className="page-button">2</button>
                <button className="page-button">3</button>
                <button className="page-button">&gt;</button>
            </div>
        </div>
    );
};

export default AdminPickupList; 
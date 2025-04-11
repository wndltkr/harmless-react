import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/adminPickupDetail.css";

const AdminPickupDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // 예시 데이터 (실제로는 API에서 가져올 데이터)
    const pickupDetail = {
        id: 1,
        type: "대면",
        status: "대기중",
        name: "김철수",
        phone: "010-1234-5678",
        bank: "신한은행",
        accountNumber: "123-456-789012",
        date: "2024-03-15",
        time: "14:00",
        address: {
            zipCode: "06234",
            main: "서울특별시 강남구 테헤란로 123",
            detail: "456호"
        },
        request: "벨을 누르시면 바로 나가겠습니다. 수거 시 주의해주세요."
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleStatusChange = (newStatus) => {
        // TODO: API 호출하여 상태 변경
        console.log(`상태 변경: ${newStatus}`);
    };

    return (
        <div className="admin-pickup-detail">
            <div className="detail-header">
                <button className="back-button" onClick={handleBack}>
                    &lt; 목록으로
                </button>
                <h1>{pickupDetail.type} 수거 신청</h1>
                <div className="status-actions">
                    {pickupDetail.status === "대기중" && (
                        <>
                            <button
                                className="status-button approve"
                                onClick={() => handleStatusChange("승인")}
                            >
                                승인
                            </button>
                            <button
                                className="status-button reject"
                                onClick={() => handleStatusChange("거절")}
                            >
                                거절
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className="detail-content">
                <div className="detail-section">
                    <h2>1. 신청자 정보</h2>
                    <div className="info-grid">
                        <div className="info-item">
                            <label>성함</label>
                            <span>{pickupDetail.name}</span>
                        </div>
                        <div className="info-item">
                            <label>연락처</label>
                            <span>{pickupDetail.phone}</span>
                        </div>
                    </div>
                </div>

                <div className="detail-section">
                    <h2>2. 정산 정보</h2>
                    <div className="info-grid">
                        <div className="info-item">
                            <label>은행</label>
                            <span>{pickupDetail.bank}</span>
                        </div>
                        <div className="info-item">
                            <label>계좌번호</label>
                            <span>{pickupDetail.accountNumber}</span>
                        </div>
                        <div className="info-item">
                            <label>수거 희망 날짜</label>
                            <span>{pickupDetail.date}</span>
                        </div>
                        <div className="info-item">
                            <label>수거 희망 시간</label>
                            <span>{pickupDetail.time}</span>
                        </div>
                    </div>
                </div>

                <div className="detail-section">
                    <h2>3. 수거 주소</h2>
                    <div className="info-grid">
                        <div className="info-item full-width">
                            <label>우편번호</label>
                            <span>{pickupDetail.address.zipCode}</span>
                        </div>
                        <div className="info-item full-width">
                            <label>주소</label>
                            <span>{pickupDetail.address.main}</span>
                        </div>
                        <div className="info-item full-width">
                            <label>상세주소</label>
                            <span>{pickupDetail.address.detail}</span>
                        </div>
                    </div>
                </div>

                <div className="detail-section">
                    <h2>4. 요청사항</h2>
                    <div className="info-grid">
                        <div className="info-item full-width">
                            <p className="request-text">{pickupDetail.request}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPickupDetail; 
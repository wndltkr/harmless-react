import React from "react";
import "../styles/applyPage.css";
import { Link } from "react-router-dom";

const ApplyPage = () => {
    return (
        <div className="apply-container">
            <div className="sub-top-banner">
                <div className="sub-top-banner-content">
                    <h1 className="banner-title">수거신청</h1>
                    <div className="underline" />
                </div>
            </div>

            <div className="apply-content">
                <div className="apply-choice">
                    <div className="apply-box">
                        <h2 className="apply-title">대면 수거 신청</h2>
                        <p className="apply-desc">대면으로 수거 신청 해주시면 원하시는 날짜에 업체 기사님께서 가정에 직접 방문하여 버릴 물건들 포장 및 수거까지 도와드립니다.</p>
                        <div className="recommendation">
                            <p className="recommend-title">이런 분들께 추천 드립니다!</p>
                            <ul>
                                <li>버릴 물건이 많아 혼자서 포장이 힘드신 분들</li>
                                <li>비닐, 박스 등 포장 제품이 구비가 안되신 분들</li>
                                <li>수거 전 날 기사님과 원활히 시간 조정 가능 하신 분들</li>
                            </ul>
                        </div>
                        <Link to="/apply1" className="apply-btn">대면 수거 신청하기</Link>
                    </div>

                    <div className="apply-box">
                        <h2 className="apply-title">비대면 수거 신청</h2>
                        <p className="apply-desc">비대면으로 수거 신청 해주시면 원하시는 날짜에 맞게 포장하여 문 밖에 내 놓아주시면 기사님께서 문 앞에 놓인 물건을 수거 후 무게 사진 전송 및 송금하는 방식입니다.</p>
                        <div className="recommendation">
                            <p className="recommend-title">이런 분들께 추천 드립니다!</p>
                            <ul>
                                <li>혼자서 포장 가능 하신 분들</li>
                                <li>수거 전 날 기사님과 시간 조정이 어려우신 분들</li>
                            </ul>
                        </div>
                        <Link to="/apply2" className="apply-btn">비대면 수거 신청하기</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyPage;
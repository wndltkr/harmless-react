import React from "react";
import "../styles/section5.css";

const Section5 = () => {
    const serviceItems = [
        { text: "매입단가가 궁금하신가요?", icon: "/files/attach/images/sub/about_question.png" },
        { text: "수거 가능, 불가능 품목이 궁금하신가요?", icon: "/files/attach/images/sub/about_question.png" },
        { text: "자세한 안내사항이 궁금하신가요?", icon: "/files/attach/images/sub/about_question.png" },
    ];

    return (
        <div className="service-info-container">
            <div className="service-info-content">
                <h3>
                    무해의 <span className="highlight">자세한 서비스</span>가 <br />
                    궁금하신가요?
                </h3>
                <div className="service-list">
                    {serviceItems.map((item, index) => (
                        <div key={index} className="service-item">
                            <div className="bubble-container">
                                <img
                                    src="/files/attach/images/sub/about_service.png"
                                    alt="service bubble"
                                    className="my-new-bubble"
                                />
                                <div className="bubble-text">{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <a href="/guide" className="apply-button">
                        이용안내 바로가기
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Section5;
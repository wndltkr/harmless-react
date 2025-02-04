import React from 'react';
import '../styles/section7.css';

const Section7 = () => {
    return (
        <section id="section7" className="section7">
            <div className="section7_container">
                {/* ✅ 배경 로고 */}
                <div className="section7_bg_logo">
                    <img src="/files/attach/images/main/section5_logo.png" alt="background logo" />
                </div>

                {/* ✅ 지도 아이콘 */}
                <div className="section7_icon">
                    <img src="/files/attach/images/main/map.png" alt="map_icon" />
                </div>

                {/* ✅ 제목 */}
                <h2 className="section7_title">
                    헌옷 방문 수거 <br />
                    <span className="section7_highlight">무해</span>와 함께 해보세요.
                </h2>

                {/* ✅ 수거 신청 버튼 */}
                <div className="section7_apply">
                    <a href="/apply" className="section7_btn">수거 신청하기</a>
                </div>

                {/* ✅ 운영시간 & 휴무일 */}
                <div className="section7_info">
                    <div className="section7_card">
                        <div className="section7_card_icon">
                            <i className="ri-time-line"></i>
                        </div>
                        <div className="section7_card_text">
                            <span>운영시간</span>
                            <p>09시 ~ 18시</p>
                        </div>
                    </div>
                    <div className="section7_card">
                        <div className="section7_card_icon">
                            <i className="ri-calendar-2-line"></i>
                        </div>
                        <div className="section7_card_text">
                            <span>휴무일</span>
                            <p>일요일 휴무</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section7;
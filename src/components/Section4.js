import React from 'react';
import '../styles/section4.css';

const Section4 = () => {
    return (
        <section id="section4" className="section section4 clearfix">
            <div className="bh_wrap">
                <div className="section4_container">
                    {/* ✅ 대구 맵 (왼쪽) */}
                    <div className="section4_daegu_map fade-in-left">
                        <img src="/files/attach/images/main/main_map.png" alt="map" />
                        <div className="section4_pin">
                            <img src="/files/attach/images/main/daegu_pin.png" alt="pin" />
                        </div>
                    </div>

                    {/* ✅ 텍스트 컨텐츠 (오른쪽) */}
                    <div className="section4_text_container fade-in-right">
                        {/* 아이콘을 텍스트 위로 배치 */}
                        <div className="section4_title">
                            <div className="section4_icon">
                                <img src="/files/attach/images/main/map.png" alt="box" />
                            </div>
                            <p>
                                방문 수거 가능 지역 <b>대구<br /> (군위제외)</b> <br />
                                그 외 지역 택배 수거 <br />
                                <span className="section4_line_effect">서비스 준비중</span> 입니다.
                            </p>
                        </div>

                        {/* 말풍선을 텍스트 아래로 이동 */}
                        <div className="section4_speech_bubble">
                            <div className="text">
                                저희 무해는 <b>대한민국 전역이 방문 수거 서비스 가능 지역이 되도록</b> <br />
                                열심히 달려 나아 가겠습니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;
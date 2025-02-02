import React from 'react';
import '../styles/section4.css';

const Section4 = () => {
    return (
        <section id="section4" className="section section4 clearfix">
            <div className="bh_wrap">
                <div className="main_map_wrap">
                    <div className="bh_wrap">
                        <div className="bh_row ai-c gutters-25">
                            {/* Map Image */}
                            <div className="lg:col-auto col-12 fade-in-left">
                                <div className="daegu_map">
                                    <img
                                        src="/files/attach/images/main/main_map.png"
                                        alt="map"
                                    />
                                    <div className="pin">
                                        <img
                                            src="/files/attach/images/main/daegu_pin.png"
                                            alt="pin"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="lg:col col-12 lg:mt-0 mt-50 fade-in-right">
                                <div className="common_title lg:ta-l">
                                    <div className="icon">
                                        <img src="/files/attach/images/main/map.png" alt="box" />
                                    </div>
                                    <p>
                                        방문 수거 가능 지역 대구 (군위제외) <br /> 그 외 지역 택배 수거 <br />
                                        <span className="line_effect bh_color_main on">
                      <b>서비스 준비중</b>
                    </span>{' '}
                                        입니다.
                                    </p>
                                </div>

                                <div className="speech_bubble">
                                    <img
                                        src="/files/attach/images/main/speech_bubble.png"
                                        alt="speech bubble"
                                    />
                                    <div className="text bh_color_white">
                                        저희 무해는 <b>대한민국 전역이 방문 수거 서비스 가능 지역이 되도록</b>{' '}
                                        <br /> 열심히 달려 나아 가겠습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;
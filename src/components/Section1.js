import React from 'react';
import '../styles/section1.css';

const Section1 = () => {
    return (
        <section id="section1" className="section section1 clearfix">
            <div className="bh_wrap">
                <div className="common_about_wrap">
                    <div className="common_about fixed">
                        <div className="ta-c fw-m">
                            {/* Text Block 1 */}
                            <div className="fade-in-up" data-anim-delay="0">
                                <p className="lg:fs-36 fs-22">현재 전 세계 환경 문제로 대두되고 있는 문제</p>
                                <p className="lg:fs-64 fs-40 fw-b mt-5">"패스트 패션”</p>
                            </div>

                            {/* Text Block 2 */}
                            <div className="fade-in-up" data-anim-delay="0">
                                <p className="lg:fs-40 fs-22 lg:mt-50 mt-30">
                                    이러한 환경 문제 속, <br className="lg:ds-n ds-b" />
                                    저희는 <b>고민하고 답을 찾아 나아 갑니다.</b>
                                    <br />
                                    <span className="line_effect on">
                    <b>슬로우, 미니멀 라이프를 지향하는 <span className="bh_color_main">무해</span></b>
                  </span>{' '}
                                    <b>입니다.</b>
                                </p>
                            </div>

                            {/* Image Block */}
                            <div className="lg:mt-100 mt-50 fade-in-up" data-anim-delay="0">
                                <div className="harmless_img">
                                    <img
                                        src="/files/attach/images/main/HARMLESS.png"
                                        alt="HARMLESS"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Circles */}
                        <div className="circle1">
                            <img
                                src="/files/attach/images/main/section1_circle1.png"
                                alt="circle"
                            />
                        </div>
                        <div className="circle2">
                            <img
                                src="/files/attach/images/main/section1_circle2.png"
                                alt="circle"
                            />
                        </div>
                        <div className="circle3">
                            <img
                                src="/files/attach/images/main/section1_circle3.png"
                                alt="circle"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
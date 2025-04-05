import React from 'react';
import { motion } from 'framer-motion';
import '../styles/section1.css';

const Section1 = () => {
    return (
        <section id="section1" className="section section1 clearfix">
            <div className="bh_wrap">
                <div className="common_about_wrap">
                    <div className="common_about fixed">
                        <div className="ta-c fw-m">
                            {/* 텍스트 블록 1 */}
                            <div className="fade-in-up" data-anim-delay="0">
                                <p className="intro-text">현재 전 세계 환경 문제로 대두되고 있는 문제</p>
                                <p className="highlight-title">"패스트 패션"</p>
                                <div className="spacer-lg"></div> {/* 간격 추가 */}
                            </div>

                            {/* 텍스트 블록 2 */}
                            <div className="fade-in-up" data-anim-delay="0">
                                <p className="description-text">
                                    이러한 환경 문제 속,<br className="mobile-break" /> 저희는 <span className="bold-text">고민하고 답을 찾아 나아 갑니다.</span>
                                </p>
                                <p className="underline-effect">
                                    <b>슬로우, 미니멀 라이프를 지향하는 <span className="highlight-text">무해</span></b>
                                    <b> 입니다.</b>
                                </p>
                            </div>
                        </div>

                        {/* 이미지 블록 (아래로 이동) */}
                        <div className="image-container fade-in-up" data-anim-delay="0">
                            <div className="harmless_img">
                                <img
                                    src="/files/attach/images/main/HARMLESS.png"
                                    alt="HARMLESS"
                                />
                            </div>
                        </div>

                        {/* 애니메이션 효과 추가된 원형 요소 */}
                        <motion.div
                            className="circle1"
                            animate={{ y: [0, -30, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            <img src="/files/attach/images/main/section1_circle1.png" alt="circle" />
                        </motion.div>

                        <motion.div
                            className="circle2"
                            animate={{ y: [0, 30, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            <img src="/files/attach/images/main/section1_circle2.png" alt="circle" />
                        </motion.div>

                        <motion.div
                            className="circle3"
                            animate={{ y: [0, -25, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            <img src="/files/attach/images/main/section1_circle3.png" alt="circle" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
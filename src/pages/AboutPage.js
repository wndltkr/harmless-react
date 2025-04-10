import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import "../styles/aboutPage.css";

const AboutPage = () => {
    // refs for scroll animations
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section6Ref = useRef(null);
    const serviceInfoRef = useRef(null);

    // inView states
    const section1InView = useInView(section1Ref, { once: true, amount: 0.3 });
    const section2InView = useInView(section2Ref, { once: true, amount: 0.3 });
    const section6InView = useInView(section6Ref, { once: true, amount: 0.3 });
    const serviceInfoInView = useInView(serviceInfoRef, { once: true, amount: 0.3 });

    // 상단 배너에 적용할 인라인 스타일 객체
    const bannerStyle = {
        textAlign: "center",
        background: "url('/files/attach/images/106/d20c469d4696da9a3b4396930d911f6c.png') no-repeat center center",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        width: '95%',
        maxWidth: '1800px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden'
    };

    const headerStyle = {
        textAlign: "center",
        color: "#fff",
        fontSize: "36px",
        fontWeight: "bold",
        color: "#000",
        margin: 0,
        position: "relative",
        zIndex: 2
    };

    return (
        <div className="about-container">
            {/* 상단 배너 */}
            <div className="sub-top-banner" style={bannerStyle}>
                <h1 style={headerStyle}>회사소개</h1>
            </div>

            {/* 메인 컨텐츠 */}
            <div className="content-wrapper">
                <motion.section 
                    ref={section1Ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={section1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    id="section1" 
                    className="section section1 clearfix"
                >
                    <div className="bh_wrap">
                        <div className="common_about_wrap">
                            <div className="common_about fixed">
                                <div className="ta-c fw-m">
                                    <div className="fade-in-up" data-anim-delay="0">
                                        <p className="intro-text">현재 전 세계 환경 문제로 대두되고 있는 문제</p>
                                        <p className="highlight-title">"패스트 패션"</p>
                                        <div className="spacer-lg"></div>
                                    </div>
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
                                <div className="image-container fade-in-up" data-anim-delay="0">
                                    <div className="harmless_img">
                                        <img
                                            src="/files/attach/images/main/HARMLESS.png"
                                            alt="HARMLESS"
                                        />
                                    </div>
                                </div>
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
                </motion.section>

                <motion.section 
                    ref={section2Ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    id="section2" 
                    className="section section2 clearfix"
                >
                    <div className="bh_wrap">
                        <div className="common_inconvenience">
                            <div className="common_title fade-in-up" data-anim-delay="0">
                                <div className="icon">
                                    <img src="/files/attach/images/main/question.png" alt="question" />
                                </div>
                                <p className="big-title">
                                    이런 <span className="highlighted-text"><b>불편</b></span>을 겪으신 적 있나요?
                                </p>
                            </div>
                            <div className="inconvenience_container">
                                <div className="inconvenience_wrap large-card" style={{ position: 'relative' }}>
                                    <img src="/files/attach/images/main/inconvenience_img1.jpg?2" alt="불편01" className="inconvenience_img" />
                                    <div className="overlay_text">
                                        <div className="number">01</div>
                                        <p>20kg 이하는 방문수거신청이
안되거나 무상 수거일때</p>
                                    </div>
                                </div>
                                <div className="inconvenience_wrap small-card" style={{ position: 'relative' }}>
                                    <img src="/files/attach/images/main/inconvenience_img2.jpg" alt="불편02" className="inconvenience_img" />
                                    <div className="overlay_text">
                                        <div className="number">02</div>
                                        <p>헌옷 수거함에
직접 버리러 가야 할 때</p>
                                    </div>
                                </div>
                                <div className="inconvenience_wrap small-card" style={{ position: 'relative' }}>
                                    <img src="/files/attach/images/main/inconvenience_img3.jpg" alt="불편03" className="inconvenience_img" />
                                    <div className="overlay_text">
                                        <div className="number">03</div>
                                        <p>주변 헌옷 수거함
위치를 모를때</p>
                                    </div>
                                </div>
                                <div className="inconvenience_wrap small-card" style={{ position: 'relative' }}>
                                    <img src="/files/attach/images/main/inconvenience_img4.jpg" alt="불편04" className="inconvenience_img" />
                                    <div className="overlay_text">
                                        <div className="number">04</div>
                                        <p>물건 버릴 양이 많아
도움이 필요할때</p>
                                    </div>
                                </div>
                                <div className="inconvenience_wrap small-card" style={{ position: 'relative' }}>
                                    <img src="/files/attach/images/main/inconvenience_img5.jpg" alt="불편05" className="inconvenience_img" />
                                    <div className="overlay_text">
                                        <div className="number">05</div>
                                        <p>재활용 가능한지
불가능한지 헷갈릴때</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.div 
                    ref={section6Ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={section6InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="section6-container" 
                    style={{
                        background: `url(${process.env.PUBLIC_URL}/files/attach/images/sub/about_img.jpg) no-repeat center center`,
                        backgroundSize: "cover",
                        padding: "60px 0",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <div className="section6-content">
                        <h3>
                            저희 무해는 <br />
                            <span className="highlight">고객님들의 편의와 환경을</span> <br />
                            <span className="highlight">같이</span> <b>지켜 나아가겠습니다.</b>
                        </h3>
                        <div className="button-container">
                            <a href="/apply" className="apply-button">수거 신청하기</a>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    ref={serviceInfoRef}
                    initial={{ opacity: 0, y: 100 }}
                    animate={serviceInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="service-info-container"
                >
                    <div className="service-info-content">
                        <h3>
                            무해의 <span className="highlight">자세한 서비스</span>가 <br />
                            궁금하신가요?
                        </h3>
                        <div className="service-list">
                            {[
                                { text: "매입단가가 궁금하신가요?", icon: "/files/attach/images/sub/about_question.png" },
                                { text: "수거 가능, 불가능 품목이 궁금하신가요?", icon: "/files/attach/images/sub/about_question.png" },
                                { text: "자세한 안내사항이 궁금하신가요?", icon: "/files/attach/images/sub/about_question.png" },
                            ].map((item, index) => (
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
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;
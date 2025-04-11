import React from 'react';
import SwiperSlider from "../components/SwiperSlider";
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import "../styles/mainPage.css";
import { useRef } from "react";

const collectionItems1 = [
    { id: 1, imgSrc: '/files/attach/images/main/t-shirt.png', name: '티셔츠' },
    { id: 2, imgSrc: '/files/attach/images/main/vest.png', name: '조끼' },
    { id: 3, imgSrc: '/files/attach/images/main/jacket.png', name: '자켓' },
    { id: 4, imgSrc: '/files/attach/images/main/padding.png', name: '패딩' },
    { id: 5, imgSrc: '/files/attach/images/main/swimsuit.png', name: '수영복' },
    { id: 6, imgSrc: '/files/attach/images/main/shoes.png', name: '구두' },
    { id: 7, imgSrc: '/files/attach/images/main/slippers.png', name: '슬리퍼' },
];

const collectionItems2 = [
    { id: 8, imgSrc: '/files/attach/images/main/bag.png', name: '가방' },
    { id: 9, imgSrc: '/files/attach/images/main/wallet.png', name: '지갑' },
    { id: 10, imgSrc: '/files/attach/images/main/gloves.png', name: '장갑' },
    { id: 11, imgSrc: '/files/attach/images/main/blanket.png', name: '담요' },
    { id: 12, imgSrc: '/files/attach/images/main/doll.png', name: '인형' },
    { id: 13, imgSrc: '/files/attach/images/main/bedding.png', name: '이불' },
    { id: 14, imgSrc: '/files/attach/images/main/bed-cover.png', name: '침대 커버' },
];

const MainPage = () => {
    // 각 섹션에 대한 ref 생성
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section7Ref = useRef(null);

    // 각 섹션의 inView 상태 확인
    const section1InView = useInView(section1Ref, { once: true, amount: 0.3 });
    const section2InView = useInView(section2Ref, { once: true, amount: 0.3 });
    const section3InView = useInView(section3Ref, { once: true, amount: 0.3 });
    const section4InView = useInView(section4Ref, { once: true, amount: 0.3 });
    const section7InView = useInView(section7Ref, { once: true, amount: 0.3 });

    return (
        <main className="main-page">
            <SwiperSlider />

            <motion.section
                ref={section1Ref}
                initial={{ opacity: 0, y: 100 }}
                animate={section1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
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

            <motion.section
                ref={section3Ref}
                initial={{ opacity: 0, y: 100 }}
                animate={section3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="section section3 clearfix"
            >
                <div className="bh_wrap">
                    <div className="common_title fade-in-up">
                        <div className="icon">
                            <img src="/files/attach/images/main/box.png" alt="box" />
                        </div>
                        <p>
                            무해는 다양한 종류의 <br />
                            <span className="line_effect bh_color_main on">
              <b>의류, 신발, 잡화, 침구류 등</b>
            </span>
                            <b>을 수거 해드려요!</b>
                        </p>
                    </div>
                    <div className="common_collection_wrap">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            speed={500}
                            slidesPerView={5}
                            spaceBetween={0}
                            breakpoints={{
                                0: { slidesPerView: 3, spaceBetween: 15 },
                                767: { slidesPerView: 4, spaceBetween: 20 },
                                992: { slidesPerView: 5, spaceBetween: 30 },
                            }}
                        >
                            {collectionItems1.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="collection_item">
                                        <div className="item_img">
                                            <img src={item.imgSrc} alt={item.name} />
                                        </div>
                                        <div className="item_name">{item.name}</div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="common_collection_wrap" style={{ overflow: "hidden" }}>
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            speed={500}
                            slidesPerView={5}
                            spaceBetween={0}
                            style={{ direction: "rtl" }}
                            breakpoints={{
                                0: { slidesPerView: 3, spaceBetween: 15 },
                                767: { slidesPerView: 4, spaceBetween: 20 },
                                992: { slidesPerView: 5, spaceBetween: 30 },
                            }}
                        >
                            {collectionItems2.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="collection_item">
                                        <div className="item_img">
                                            <img src={item.imgSrc} alt={item.name} />
                                        </div>
                                        <div className="item_name">{item.name}</div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </motion.section>

            <motion.section
                ref={section4Ref}
                initial={{ opacity: 0, y: 100 }}
                animate={section4InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="section section4 clearfix"
            >
                <div className="bh_wrap">
                    <div className="section4_container">
                        <div className="section4_daegu_map fade-in-left">
                            <img src="/files/attach/images/main/main_map.png" alt="map" />
                            <div className="section4_pin">
                                <img src="/files/attach/images/main/daegu_pin.png" alt="pin" />
                            </div>
                        </div>
                        <div className="section4_text_container fade-in-right">
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
                            <div className="section4_speech_bubble">
                                <div className="text">
                                    저희 무해는 <b>대한민국 전역이 방문 수거 서비스 가능 지역이 되도록</b> <br />
                                    열심히 달려 나아 가겠습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                ref={section7Ref}
                initial={{ opacity: 0, y: 100 }}
                animate={section7InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="section section7"
            >
                <div className="section7_container">
                    <div className="section7_bg_logo">
                        <img src="/files/attach/images/main/section5_logo.png" alt="background logo" />
                    </div>
                    <div className="section7_icon">
                        <img src="/files/attach/images/main/map.png" alt="map_icon" />
                    </div>
                    <h2 className="section7_title">
                        헌옷 방문 수거 <br />
                        <span className="section7_highlight">무해</span>와 함께 해보세요.
                    </h2>
                    <div className="section7_apply">
                        <a href="/apply" className="section7_btn">수거 신청하기</a>
                    </div>
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
            </motion.section>
        </main>
    );
};

export default MainPage;
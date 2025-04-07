import React from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import "../styles/guidePage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

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

const GuidePage = () => {
    // 상단 배너 인라인 스타일 (새 이미지와 디자인 적용)
    const bannerStyle = {
        background: "url('/files/attach/images/106/893ada4896cce8c524983e6025a10144.jpg') no-repeat center center",
        backgroundSize: "cover",
        height: "400px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        width: "94vw", // 전체 너비보다 조금 줄임
        marginLeft: "calc(50% - 47vw)", // 중앙 정렬 효과 적용
    };

    return (
        <div className="guidePageContainer">
            {/* 상단 배너 */}
            <div className="guideBanner" style={bannerStyle}>
                <div className="guideBannerContent">
                    <h2 className="guideBannerTitle">이용안내</h2>
                    <div className="guideBannerUnderline"></div>
                </div>
            </div>

            {/* 매입 단가 섹션 */}
            <div className="guidePriceWrap">
                <h3 className="guideSubTitle">매입 단가</h3>
                <div className="priceList">
                    <div className="priceItem">
                        <h4 className="priceTitle">의류, 신발, 잡화, 가방</h4>
                        <p>20Kg 미만 → <b>300원</b></p>
                        <p>20Kg 이상 → <b>500원</b></p>
                    </div>
                    <div className="priceItem">
                        <h4 className="priceTitle">이불, 커튼, 카펫</h4>
                        <p>*kg → <b>300원</b></p>
                    </div>
                </div>
            </div>

            <b>
                <div className="guide_check_wrap mt-30 mb-10" data-anim-delay="0" data-anim-type="fade-in-up">
                    <div className="guide-check-box">
                        <i className="ri-checkbox-circle-line guide-highlight fs-30 pr-10 lh-1"></i>
                        <span className="guide-text-large guide-weight-medium">
                            이용자분들의 편의를 위해 <b className="guide-highlight">최소 수거 수량에 제한이 없습니다.</b>
                        </span>
                    </div>
                </div>
                <div className="guide_check_wrap" data-anim-delay="0" data-anim-type="fade-in-up">
                    <div className="guide-check-box">
                        <i className="ri-checkbox-circle-line guide-highlight fs-30 pr-10 lh-1"></i>
                        <span className="guide-text-large guide-weight-medium">
                            무역 업체 단가 변동에 따라 현 매입 단가도 변동 될 수 있으며 <b className="guide-highlight">항상 최고가로 매입 단가 책정 하겠습니다.</b>
                        </span>
                    </div>
                </div>
            </b>

            {/* 수거 가능 품목 */}
            <section id="section3" className="section section3 clearfix">
                <div className="bh_wrap">
                    <div className="section3-title-wrap">
                        <motion.img 
                            src="/files/attach/images/sub/check.png" 
                            alt="체크 아이콘"
                            className="moving-icon"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                        <h3 className="guideSubTitle">수거 가능 품목</h3>
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
            </section>

            <section id="section8" className="section8">
                <div className="sec8-wrap">
                    <div className="sec8-check-item">
                        <div className="sec8-flex">
                            <i className="ri-checkbox-circle-line sec8-main-color sec8-fs-30 sec8-pr-10 sec8-lh-1"></i>
                            <b className="sec8-fs-22">각종 의류</b>
                        </div>
                        <div className="sec8-divider"></div>
                        <div className="sec8-text">
                            티셔츠, 조끼, 자켓, 패딩, 수영복, 스키복, 내복, 속옷, 양말 등
                        </div>
                    </div>
                    <div className="sec8-check-item">
                        <div className="sec8-flex">
                            <i className="ri-checkbox-circle-line sec8-main-color sec8-fs-30 sec8-pr-10 sec8-lh-1"></i>
                            <b className="sec8-fs-22">각종 신발</b>
                        </div>
                        <div className="sec8-divider"></div>
                        <div className="sec8-text">
                            운동화, 구두, 슬리퍼 등
                        </div>
                    </div>
                    <div className="sec8-check-item">
                        <div className="sec8-flex">
                            <i className="ri-checkbox-circle-line sec8-main-color sec8-fs-30 sec8-pr-10 sec8-lh-1"></i>
                            <b className="sec8-fs-22">각종 잡화</b>
                        </div>
                        <div className="sec8-divider"></div>
                        <div className="sec8-text">
                            가방, 지갑, 모자, 넥타이, 벨트, 스카프, 목도리, 장갑, 담요, 인형 등
                        </div>
                    </div>
                    <div className="sec8-check-item">
                        <div className="sec8-flex">
                            <i className="ri-checkbox-circle-line sec8-main-color sec8-fs-30 sec8-pr-10 sec8-lh-1"></i>
                            <b className="sec8-fs-22">이불류</b>
                        </div>
                        <div className="sec8-divider"></div>
                        <div className="sec8-text">
                            이불(극세사,차렵), 침대 커버, 소파 커버, 커튼, 카페트
                        </div>
                    </div>
                    <div className="sec8-ta-r">
                        <div className="sec8-fs-14 sec8-gray">
                            *위 품목 모두 성인, 아동 구분 없이 수거 가능합니다.
                        </div>
                    </div>
                </div>
            </section>

            {/* 수거 불가능 품목 */}
            <div className="guideNoCollectionWrap">
                <img
                    src="/files/attach/images/sub/x.png"
                    alt="움직이는 아이콘"
                    className="moving-icon"
                />
                <h3 className="guideSubTitle">수거 불가능 품목</h3>
                <div className="noCollectionList">
                    <div className="noCollectionItem">
                        <b className="noCollectionTitle">하자가 있는 물품:</b>
                        <div className="noCollectionDivider"></div>
                        <div className="noCollectionDesc">
                            찢어짐, 큰 오염, 인조 가죽 날림 등
                        </div>
                    </div>
                    <div className="noCollectionItem">
                        <b className="noCollectionTitle">기타 불가능 신발류:</b>
                        <div className="noCollectionDivider"></div>
                        <div className="noCollectionDesc">
                            바퀴달린 신발, 장화, 고무신 등
                        </div>
                    </div>
                    <div className="noCollectionItem">
                        <b className="noCollectionTitle">기타 불가능 이불 및 잡화류:</b>
                        <div className="noCollectionDivider"></div>
                        <div className="noCollectionDesc">
                            솜 이불, 토퍼, 라텍스 등
                        </div>
                    </div>
                </div>
            </div>

            {/* 1:1 문의 유도 */}
            <div className="guideContactWrap">
                <h3>수거 가능, 불가능 품목이 헷갈린다면?</h3>
                <p>언제든지 1:1 문의를 남겨주세요.</p>
                <a href="/inquiry" className="contactBtn">1:1 문의 바로가기</a>
            </div>
        </div>
        
    );
};

export default GuidePage;
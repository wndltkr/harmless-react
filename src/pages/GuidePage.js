import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../styles/guidePage.css"

const collectionItems = [
    { id: 1, imgSrc: "/files/attach/images/main/t-shirt.png", name: "티셔츠" },
    { id: 2, imgSrc: "/files/attach/images/main/vest.png", name: "조끼" },
    { id: 3, imgSrc: "/files/attach/images/main/jacket.png", name: "자켓" },
    { id: 4, imgSrc: "/files/attach/images/main/padding.png", name: "패딩" },
    { id: 5, imgSrc: "/files/attach/images/main/swimsuit.png", name: "수영복" },
    { id: 6, imgSrc: "/files/attach/images/main/shoes.png", name: "구두" },
    { id: 7, imgSrc: "/files/attach/images/main/slippers.png", name: "슬리퍼" },
    { id: 8, imgSrc: "/files/attach/images/main/bag.png", name: "가방" },
    { id: 9, imgSrc: "/files/attach/images/main/wallet.png", name: "지갑" },
    { id: 10, imgSrc: "/files/attach/images/main/gloves.png", name: "장갑" },
];

const GuidePage = () => {
    return (
        <div className="guide_page">
            {/* 상단 배너 */}
            <div className="sub_top_banner">
                <div className="sub_top_banner_content">
                    <h2 className="title">이용안내</h2>
                    <div className="hr-line"></div>
                </div>
            </div>

            {/* 매입 단가 섹션 */}
            <div className="guide_price_wrap">
                <h3 className="sub_title">매입 단가</h3>
                <div className="price_list">
                    <div className="price_item">
                        <h4 className="price_title">의류, 신발, 잡화, 가방</h4>
                        <p>20Kg 미만 → <b>300원</b></p>
                        <p>20Kg 이상 → <b>500원</b></p>
                    </div>
                    <div className="price_item">
                        <h4 className="price_title">이불, 커튼, 카펫</h4>
                        <p>*kg → <b>300원</b></p>
                    </div>
                </div>
            </div>

            {/* 수거 가능 품목 */}
            <div className="guide_collection_wrap">
                <h3 className="sub_title">수거 가능 품목</h3>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    speed={600}
                    slidesPerView={4}
                    spaceBetween={10}
                >
                    {collectionItems.map((item) => (
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

            {/* 수거 불가능 품목 */}
            <div className="guide_no_collection_wrap">
                <h3 className="sub_title">수거 불가능 품목</h3>
                <div className="no_collection_list">
                    <p><b>하자가 있는 물품:</b> 찢어짐, 큰 오염, 인조 가죽 날림 등</p>
                    <p><b>기타 불가능 신발류:</b> 바퀴달린 신발, 장화, 고무신 등</p>
                    <p><b>기타 불가능 이불 및 잡화류:</b> 솜 이불, 토퍼, 라텍스 등</p>
                </div>
            </div>

            {/* 1:1 문의 유도 */}
            <div className="guide_contact_wrap">
                <h3>수거 가능, 불가능 품목이 헷갈린다면?</h3>
                <p>언제든지 1:1 문의를 남겨주세요.</p>
                <a href="/inquiry" className="contact_btn">1:1 문의 바로가기</a>
            </div>
        </div>
    );
};

export default GuidePage;
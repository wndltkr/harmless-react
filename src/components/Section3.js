import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../styles/section3.css';

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


const Section3 = () => {
    return (
        <section id="section3" className="section section3 clearfix">
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
                        modules={[Autoplay]} // Autoplay 모듈 추가
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
                        style={{ direction: "rtl" }} // Swiper 방향 반대로 설정
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
    );
};

export default Section3;
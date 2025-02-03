import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper-slider.css';

const slides = [
    {
        image: "/files/attach/images/106/d20c469d4696da9a3b4396930d911f6c.png",
        textImage: [
            "/files/attach/images/106/af8a42ab385c4eaba565c25af112e37f.png",
            "/files/attach/images/106/db2ece9a3790ed1245b7198468fa11b9.png" // 새 이미지 추가
        ]
    },
    {
        image: "/files/attach/images/106/914acf7a8e705d18533de123dcb6761f.png",
        textImage: [
            "/files/attach/images/106/0b987ca3c05b1101263bab28c7ef9b88.png",
            "/files/attach/images/106/db2ece9a3790ed1245b7198468fa11b9.png"
        ]
    },
    {
        image: "/files/attach/images/106/2dc5982150e72043e0873f5094087fc0.png",
        textImage: [
            "/files/attach/images/106/2e3bfe6b3c59bd89c76a24988b07b72a.png",
            "/files/attach/images/106/db2ece9a3790ed1245b7198468fa11b9.png"
        ]
    }
];

const SwiperSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="slide" style={{ backgroundImage: `url(${slide.image})` }}>
                        <div className={`slider-content ${activeIndex === index ? "text-loaded" : "text-hidden"}`}>
                            {slide.textImage.map((imgSrc, imgIndex) => (
                                <img key={imgIndex} src={imgSrc} alt={`Slide ${index + 1} - Text ${imgIndex + 1}`} className="slide-image" />
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperSlider;
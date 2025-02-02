import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper-slider.css';

const SwiperSlider = () => {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop
        >
            <SwiperSlide>
                <div style={{ background: 'url(https://harmless.co.kr/files/attach/images/106/d20c469d4696da9a3b4396930d911f6c.png)', height: '780px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="slider-content animated fadeIn">
                        <img src="https://harmless.co.kr/files/attach/images/106/af8a42ab385c4eaba565c25af112e37f.png" alt="Slide 1" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ background: 'url(https://harmless.co.kr/files/attach/images/106/914acf7a8e705d18533de123dcb6761f.png)', height: '780px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="slider-content animated fadeIn">
                        <img src="https://harmless.co.kr/files/attach/images/106/0b987ca3c05b1101263bab28c7ef9b88.png" alt="Slide 2" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ background: 'url(https://harmless.co.kr/files/attach/images/106/2dc5982150e72043e0873f5094087fc0.png)', height: '780px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="slider-content animated fadeIn">
                        <img src="https://harmless.co.kr/files/attach/images/106/2e3bfe6b3c59bd89c76a24988b07b72a.png" alt="Slide 3" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperSlider;

import React from "react";
import "../styles/servicePage.css";

const ServicePage = () => {
    return (
        <div className="service-container">
            <div className="sub-top-banner">
                <div className="banner-content">
                    <span>서비스 지역</span>
                    <div className="banner-line"></div>
                </div>
            </div>
            <div className="content-wrap">
                <div className="service-map-wrap">
                    <div className="service-area">
                        <div className="daegu-map">
                            <img src="/files/attach/images/sub/daegu_map.png" alt="대구" />
                            <div className="map-info">
                                <h2>대구</h2>
                                <p>(군위제외)</p>
                                <span>방문 수거 서비스 가능 지역</span>
                            </div>
                        </div>
                        <div className="other-map">
                            <div className="map-list">
                                <img src="/files/attach/images/sub/emoticon.png" alt="지도 아이콘" />
                                <div className="region-list">
                                    <p>인천광역시</p>
                                    <p>서울특별시</p>
                                    <p>경기도</p>
                                    <p>강원도</p>
                                    <p>경상남도</p>
                                    <p>경상북도</p>
                                    <p>광주광역시</p>
                                    <p>전라북도</p>
                                    <p>전라남도</p>
                                    <p>충청북도</p>
                                    <p>충청남도</p>
                                    <p>대전광역시</p>
                                    <p>울산광역시</p>
                                    <p>부산광역시</p>
                                    <p>제주도</p>
                                </div>
                                <p className="service-info">택배 수거 서비스 준비중.</p>
                                <p className="service-note">저희 무해는 대한민국 전역이 방문 수거 서비스 가능 지역이 되도록 열심히 나아가겠습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;

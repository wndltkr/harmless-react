import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "../styles/guidePage.css";
import Section3 from "../components/Section3";

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

            {/* 수거 가능 품목 */}
            <Section3 />

            {/* 수거 불가능 품목 */}
            <div className="guideNoCollectionWrap">
                <h3 className="guideSubTitle">수거 불가능 품목</h3>
                <div className="noCollectionList">
                    <p><b>하자가 있는 물품:</b> 찢어짐, 큰 오염, 인조 가죽 날림 등</p>
                    <p><b>기타 불가능 신발류:</b> 바퀴달린 신발, 장화, 고무신 등</p>
                    <p><b>기타 불가능 이불 및 잡화류:</b> 솜 이불, 토퍼, 라텍스 등</p>
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
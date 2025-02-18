import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "../styles/guidePage.css";
import Section3 from "../components/Section3";
import Section8 from "../components/Section8";

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
            <Section3 />

            <Section8 />

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
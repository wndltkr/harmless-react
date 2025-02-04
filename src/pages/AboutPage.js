import React from "react";
import "../styles/aboutPage.css";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";

const AboutPage = () => {
    // 상단 배너에 적용할 인라인 스타일 객체
    const bannerStyle = {
        textAlign: "center",
        background: "url('/files/attach/images/106/d20c469d4696da9a3b4396930d911f6c.png') no-repeat center center",
        backgroundSize: "cover",
        height: "400px",              // 높이를 늘림
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#333",
        width: "calc(100% - 130px)",     // 양 옆 20px씩 여백 (전체 너비에서 40px을 뺀 값)
        margin: "0 auto",              // 중앙 정렬
        borderRadius: "20px",          // 모서리를 둥글게
    };

    const headerStyle = {
        fontSize: "48px",             // 글자 크기를 키움
        margin: "0",                  // 기본 마진 제거
    };

    return (
        <div className="about-container">
            {/* 상단 배너 */}
            <div className="sub-top-banner" style={bannerStyle}>
                <h1 style={headerStyle}>회사소개</h1>
                <div className="underline"></div>
            </div>

            {/* 메인 컨텐츠 */}
            <div className="content-wrapper">
                <Section1 />
                <Section2 />
                <Section6 />
                <Section5 />
            </div>
        </div>
    );
};

export default AboutPage;
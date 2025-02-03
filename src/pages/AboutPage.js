import React from "react";
import "../styles/aboutPage.css";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";

const AboutPage = () => {
    return (
        <div className="about-container">
            {/* 상단 배너 */}
            <div className="sub-top-banner">
                <h1>회사소개</h1>
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
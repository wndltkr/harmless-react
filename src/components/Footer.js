import React from "react";
import "../styles/footer.css"; // 스타일 파일 연결

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img
                        src="/files/attach/images/106/f50d1e5a3e56843bab8573cbc6fe40da.png"
                        alt="footer_logo"
                    />
                </div>
                <div className="footer-content">
                    <nav className="footer-menu">
                        <ul>
                            <li>
                                <a href="/privacy">개인정보처리방침</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer-info">
                        <p>상호명 : 무해 | 대표 : 권순표 | TEL : 010-8456-2741 | Email : tnsvy2@naver.com</p>
                        <p>주소 : 대구광역시 달성군 하빈면 하빈남로 355 | 사업자 등록번호 : 207-33-01613</p>
                    </div>
                    <p className="copyright">Copyright 2024. 무해 Co. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
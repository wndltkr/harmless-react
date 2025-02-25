import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // 토글 시 active 클래스를 토글
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header_wrap">
            <div className="header">
                {/* 토글 메뉴 버튼 (왼쪽에 고정) */}
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* 로고 중앙 배치 */}
                <div className="logo">
                    <a href="/">
                        <img
                            src="/files/attach/images/106/bea3593c0303b112cec149fe448e2365.png"
                            alt="로고"
                            className="logo_img"
                        />
                    </a>
                </div>

                {/* 데스크탑 메뉴와 인증 메뉴 */}
                <nav className="main_menu">
                    <ul className="desktop-menu">
                        <li><a href="/about">회사소개</a></li>
                        <li><a href="/apply">수거신청</a></li>
                        <li><a href="/guide">이용안내</a></li>
                        <li><a href="/service">서비스 지역</a></li>
                        <li><a href="/notice">게시판</a></li>
                    </ul>
                </nav>
                <div className="auth_menu desktop-auth">
                    <a href="/index.php?mid=index&act=dispMemberLoginForm">로그인</a>
                    <span className="divider">|</span>
                    <a href="/index.php?mid=index&act=dispMemberSignUpForm">회원가입</a>
                </div>
            </div>

            {/* 모바일 메뉴 오버레이: 항상 렌더링하고 상태에 따라 클래스 토글 */}
            <div className={`mobile-menu-overlay ${menuOpen ? 'active' : 'inactive'}`}>
                <div className="mobile-menu-header">
                    <div className="close-icon" onClick={toggleMenu}>✖</div>
                    <div className="auth-btns">
                        <a href="/index.php?mid=index&act=dispMemberLoginForm" className="login-btn">
                            🔒 로그인
                        </a>
                        <a href="/index.php?mid=index&act=dispMemberSignUpForm" className="signup-btn">
                            👤 회원가입
                        </a>
                    </div>
                </div>
                <ul className="mobile-menu-list">
                    <li><a href="/about">회사소개</a></li>
                    <li><a href="/apply">수거신청</a></li>
                    <li><a href="/guide">이용안내</a></li>
                    <li><a href="/service">서비스 지역</a></li>
                    <li><a href="/notice">게시판</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;

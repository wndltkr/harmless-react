import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header_wrap">
            <div className="header">
                <div className="header_content">
                    <h1 className="logo">
                        <a href="/">
                            <img
                                src="/files/attach/images/106/bea3593c0303b112cec149fe448e2365.png"
                                alt="무해 로고"
                                className="logo_img"
                            />
                        </a>
                    </h1>

                    {/* Navigation Menu */}
                    <nav className="main_menu" id="main_menu">
                        <ul>
                            <li>
                                <a href="/about">회사소개</a>
                            </li>
                            <li>
                                <a href="/apply">수거신청</a>
                            </li>
                            <li>
                                <a href="/guide">이용안내</a>
                            </li>
                            <li>
                                <a href="/service">서비스 지역</a>
                            </li>
                            <li>
                                <a href="/notice">게시판</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Login/Signup */}
                    <div className="auth_menu">
                        <a href="/index.php?mid=index&act=dispMemberLoginForm">로그인</a>
                        <span className="divider">|</span>
                        <a href="/index.php?mid=index&act=dispMemberSignUpForm">회원가입</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
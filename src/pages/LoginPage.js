import React, { useState, useEffect } from "react";
import "../styles/loginPage.css";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        keep_signed: false
    });
    const [showWarning, setShowWarning] = useState(false);

    // 배너 스타일 정의
    const bannerStyle = {
        textAlign: "center",
        background: "url('/files/attach/images/106/d20c469d4696da9a3b4396930d911f6c.png') no-repeat center center",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        width: '95%',
        maxWidth: '1800px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden'
    };
    
    
    // 배너 제목 스타일
    const bannerTitleStyle = {
        fontSize: "36px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#fff",
        writingMode: "horizontal-tb"
    };

    // 카카오 로그인 버튼 스타일
    const kakaoButtonStyle = {
        backgroundColor: "#FEE500",
        color: "#000000",
        border: "none",
        borderRadius: "8px",
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "500",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "20px",
        transition: "opacity 0.3s"
    };

    // 네이버 로그인 버튼 스타일
    const naverButtonStyle = {
        backgroundColor: "#03C75A",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "8px",
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "500",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "10px",
        transition: "opacity 0.3s"
    };

    // 로그인 버튼 스타일
    const loginButtonStyle = {
        border: "none",
        borderRadius: "8px",
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "500",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "20px",
        transition: "opacity 0.3s",
        backgroundColor: "#4a90e2",
        color: "#FFFFFF"
    };

    // 카카오 로그인 초기화
    useEffect(() => {
        if (window.Kakao) {
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY);
            }
        }
    }, []);

    // 모바일 반응형 스타일 적용
    useEffect(() => {
        const handleResize = () => {
            const bannerElement = document.querySelector('.login-page > div:first-child');
            if (bannerElement) {
                if (window.innerWidth <= 768) {
                    bannerElement.style.height = '200px';
                    bannerElement.style.width = 'calc(100% - 40px)';
                    bannerElement.style.margin = '20px auto';
                    
                    const titleElement = bannerElement.querySelector('h1');
                    if (titleElement) {
                        titleElement.style.fontSize = '28px';
                        titleElement.style.marginBottom = '10px';
                    }
                    
                    const lineElement = bannerElement.querySelector('div');
                    if (lineElement) {
                        lineElement.style.width = '50px';
                        lineElement.style.height = '2px';
                        lineElement.style.margin = '0 auto 10px';
                    }
                    
                    const descElement = bannerElement.querySelector('p');
                    if (descElement) {
                        descElement.style.fontSize = '16px';
                        descElement.style.lineHeight = '1.5';
                    }
                } else {
                    // 웹 버전에서는 원래 스타일로 복원
                    bannerElement.style.height = '400px';
                    bannerElement.style.width = '95%';
                    bannerElement.style.margin = '0 auto 20px';
                    
                    const titleElement = bannerElement.querySelector('h1');
                    if (titleElement) {
                        titleElement.style.fontSize = '36px';
                        titleElement.style.marginBottom = '20px';
                    }
                    
                    const lineElement = bannerElement.querySelector('div');
                    if (lineElement) {
                        lineElement.style.width = '70px';
                        lineElement.style.height = '4px';
                        lineElement.style.margin = '0 auto 20px';
                    }
                    
                    const descElement = bannerElement.querySelector('p');
                    if (descElement) {
                        descElement.style.fontSize = '20px';
                        descElement.style.lineHeight = '1.6';
                    }
                }
            }
        };
        
        // 초기 로드 시 실행
        handleResize();
        
        // 리사이즈 이벤트 리스너 등록
        window.addEventListener('resize', handleResize);
        
        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });

        if (name === "keep_signed") {
            setShowWarning(checked);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 처리 로직 (추후 구현)
        console.log("로그인 시도:", formData);
    };

    const handleKakaoLogin = () => {
        if (window.Kakao) {
            window.Kakao.Auth.login({
                success: function(authObj) {
                    console.log("카카오 로그인 성공:", authObj);
                    // 서버에 카카오 로그인 정보 전송
                    fetch("/api/auth/kakao", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            access_token: authObj.access_token
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log("서버 응답:", data);
                        // 로그인 성공 처리 (예: 토큰 저장, 리다이렉트 등)
                    })
                    .catch(error => {
                        console.error("카카오 로그인 에러:", error);
                    });
                },
                fail: function(err) {
                    console.error("카카오 로그인 실패:", err);
                }
            });
        }
    };

    const handleNaverLogin = () => {
        // 네이버 로그인 처리 로직 (추후 구현)
        console.log("네이버 로그인 시도");
    };

    return (
        <div className="login-page">
            {/* 상단 배너 */}
            <div style={bannerStyle}>
                    <h1 style={bannerTitleStyle}>로그인</h1>
            </div>

            {/* 로그인 폼 */}
            <div className="login-container">
                <h1 className="login-title">로그인</h1>
                <div className="login-body">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div className="control-group">
                                <label className="uid_wrap" htmlFor="uid">
                                    <span className="label_text">
                                        이메일 주소
                                        <span className="required"> *</span>
                                    </span>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="uid" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                        title="이메일 주소"
                                    />
                                </label>
                                <label htmlFor="upw">
                                    <span className="label_text">
                                        비밀번호 
                                        <span className="required"> *</span>
                                    </span>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="upw" 
                                        value={formData.password}
                                        onChange={handleChange}
                                        required 
                                        title="비밀번호"
                                    />
                                </label>
                            </div>
                            <div className="control-group">
                                <div className="btn_login_wrap custom_radio style_box">
                                    <input 
                                        type="checkbox" 
                                        name="keep_signed" 
                                        id="keepid_opt" 
                                        value="Y"
                                        checked={formData.keep_signed}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="keepid_opt">
                                        <span className="custom_radio_btn"></span>
                                        자동 로그인
                                    </label>
                                </div>
                                {showWarning && (
                                    <div className="warning mt-20">
                                        <p>브라우저를 닫더라도 로그인이 계속 유지될 수 있습니다. 로그인 유지 기능을 사용할 경우 다음 접속부터는 로그인할 필요가 없습니다. 단, PC방, 학교, 도서관 등 공공장소에서 이용 시 개인정보가 유출될 수 있으니 꼭 로그아웃을 해주세요.</p>
                                    </div>
                                )}
                            </div>
                            <div className="social-login-container">
                                <button 
                                    type="submit" 
                                    style={loginButtonStyle}
                                    className="login-btn"
                                >
                                    로그인
                                </button>
                                <button 
                                    style={kakaoButtonStyle}
                                    onClick={handleKakaoLogin}
                                    className="kakao-login-btn"
                                >
                                    카카오로 시작하기
                                </button>
                                <button 
                                    style={naverButtonStyle}
                                    onClick={handleNaverLogin}
                                    className="naver-login-btn"
                                >
                                    네이버로 시작하기
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="login-footer">
                    <a href="/signup" className="signup_account">
                        <span>회원가입 하시겠습니까?</span>
                        <span>회원가입</span>
                    </a>
                    <a href="/find-account" className="find_account">
                        <span>ID/PW가 생각안나십니까?</span>
                        <span>ID/PW 찾기</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage; 
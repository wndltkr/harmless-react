import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/noticePage.css";

const NoticePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    // 임시 데이터 (나중에 DB로 대체)
    const posts = [
        {
            id: 1,
            title: "무해 서비스 이용 안내",
            date: "2024-04-04",
            views: 123
        },
        {
            id: 2,
            title: "수거 가능 품목 안내",
            date: "2024-04-03",
            views: 89
        },
        {
            id: 3,
            title: "서비스 지역 확장 안내",
            date: "2024-04-02",
            views: 45
        }
    ];

    // 페이지네이션 계산
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const bannerStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/files/attach/images/106/35b3c94a44aa81a95855e427f10329e2.jpg)`,
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
        overflow: 'hidden',
        '@media (max-width: 768px)': {
            height: '200px',
            width: 'calc(100% - 40px)',
            margin: '20px auto'
        }
    };

    const linkContainerStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.15)',
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        '@media (max-width: 768px)': {
            padding: '12px 0',
            gap: '15px'
        }
    };

    const linkItemStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: '500',
        transition: 'opacity 0.3s',
        ':hover': {
            opacity: 0.8
        },
        '@media (max-width: 768px)': {
            fontSize: '14px',
            padding: '5px 10px'
        }
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white'
    };

    return (
        <div className="notice-page">
            {/* 상단 배너 */}
            <div className="noticeBanner" style={bannerStyle}>
                <div style={contentStyle}>
                    <h1 className="notice-title">공지사항</h1>
                    <div className="notice-divider"></div>
                </div>
                <div className="notice-link-container">
                    <a href="/notice" className="notice-link-item">공지사항</a>
                    <a href="/inquiry" className="notice-link-item">1:1 문의</a>
                    <a href="/review" className="notice-link-item">이용후기</a>
                </div>
            </div>

            {/* 메인 제목 */}
            <h1 className="page-main-title animated-title">공지사항</h1>

            {/* 게시판 컨테이너 */}
            <div className="notice-container">
                {/* 게시글 목록 */}
                <table className="notice-table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.date}</td>
                                <td>{post.views}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* 검색 영역 */}
                <div className="notice-search">
                    <div className="search-box">
                        <select className="search-select">
                            <option value="title">제목</option>
                            <option value="content">내용</option>
                            <option value="title_content">제목+내용</option>
                        </select>
                        <input type="text" className="search-input" placeholder="검색어를 입력하세요" />
                        <button className="search-button">검색</button>
                    </div>
                </div>

                {/* 페이지네이션 */}
                <div className="notice-pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={`pagination-button ${currentPage === page ? 'active' : ''}`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                {/* 글쓰기 버튼 (관리자용) */}
                <div className="notice-actions">
                    <button className="write-button">글쓰기</button>
                </div>
            </div>
        </div>
    );
};

export default NoticePage;

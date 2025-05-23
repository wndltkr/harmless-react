import React, { useState } from "react";
import "../styles/reviewPage.css";

const ReviewPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const postsPerPage = 10;

    // 임시 데이터 (나중에 DB로 대체)
    const posts = [
        {
            id: 1,
            title: "매우 만족스러운 서비스",
            author: "김**",
            date: "2024-04-04",
            views: 156
        },
        {
            id: 2,
            title: "친절하고 빠른 수거",
            author: "이**",
            date: "2024-04-03",
            views: 98
        },
        {
            id: 3,
            title: "편리한 이용 방법",
            author: "박**",
            date: "2024-04-02",
            views: 87
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
        overflow: 'hidden'
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white',
        marginBottom: '20px'
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
        gap: '30px'
    };

    const linkItemStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '10px 20px',
        transition: 'color 0.3s'
    };

    return (
        <div className="review-page">

            {/* 상단 배너 */}
            <div className="noticeBanner" style={bannerStyle}>
                <div style={contentStyle}>
                    <h1 className="notice-title">이용후기</h1>
                    <div className="notice-divider"></div>
                </div>
                <div className="notice-link-container">
                    <a href="/notice" className="notice-link-item">공지사항</a>
                    <a href="/inquiry" className="notice-link-item">1:1 문의</a>
                    <a href="/review" className="notice-link-item">이용후기</a>
                </div>
            </div>

            {/* 메인 제목 */}
            <h1 className="page-main-title animated-title">이용 후기</h1>

            {/* 게시판 컨테이너 */}
            <div className="review-container">
                {/* 게시글 목록 */}
                <table className="review-table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                                <td>{post.date}</td>
                                <td>{post.views}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* 검색 영역 */}
                <div className="review-search">
                    <div className="search-box">
                        <select className="search-select">
                            <option value="title">제목</option>
                            <option value="content">내용</option>
                            <option value="title_content">제목+내용</option>
                            <option value="writer">작성자</option>
                        </select>
                        <input type="text" className="search-input" placeholder="검색어를 입력하세요" />
                        <button className="search-button">검색</button>
                    </div>
                </div>

                {/* 페이지네이션 */}
                <div className="review-pagination">
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

                {/* 글쓰기 버튼 */}
                <div className="review-actions">
                    <button className="write-button">글쓰기</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage; 
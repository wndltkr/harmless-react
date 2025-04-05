import React, { useState } from "react";
import "../styles/inquiryPage.css";

const InquiryPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    // 임시 데이터 (나중에 DB로 대체)
    const posts = [
        {
            id: 1,
            title: "서비스 이용 관련 문의",
            author: "김**",
            date: "2024-04-04",
            status: "답변완료"
        },
        {
            id: 2,
            title: "수거 가능 품목 문의",
            author: "이**",
            date: "2024-04-03",
            status: "답변대기"
        },
        {
            id: 3,
            title: "서비스 지역 문의",
            author: "박**",
            date: "2024-04-02",
            status: "답변완료"
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
        <div className="inquiry-page">
            {/* 상단 배너 */}
            <div className="inquiry-banner" style={bannerStyle}>
                <div style={contentStyle}>
                    <h1 className="inquiry-title">1:1 문의</h1>
                    <div className="inquiry-divider"></div>
                </div>
                <div style={linkContainerStyle}>
                    <a href="/notice" style={linkItemStyle}>공지사항</a>
                    <a href="/inquiry" style={linkItemStyle}>1:1 문의</a>
                    <a href="/review" style={linkItemStyle}>이용후기</a>
                </div>
            </div>
                        {/* 메인 제목 */}
                        <h1 className="page-main-title animated-title">1:1 문의</h1>


            {/* 게시판 컨테이너 */}
            <div className="inquiry-container">
                {/* 게시글 목록 */}
                <table className="inquiry-table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                                <td>{post.date}</td>
                                <td>
                                    <span className={`status-badge ${post.status === '답변완료' ? 'completed' : 'pending'}`}>
                                        {post.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* 검색 영역 */}
                <div className="inquiry-search">
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
                <div className="inquiry-pagination">
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
                <div className="inquiry-actions">
                    <button className="write-button">글쓰기</button>
                </div>
            </div>
        </div>
    );
};

export default InquiryPage; 
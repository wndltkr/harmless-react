import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/adminNoticeList.css";

const AdminNoticeList = () => {
    const navigate = useNavigate();
    const [notices, setNotices] = useState([
        {
            id: 1,
            title: "시스템 점검 안내",
            date: "2024-03-15",
            views: 1234,
            content: "시스템 점검 안내 내용입니다."
        },
        {
            id: 2,
            title: "서비스 이용 안내",
            date: "2024-03-14",
            views: 567,
            content: "서비스 이용 안내 내용입니다."
        }
    ]);

    const handleCreate = () => {
        navigate("/admin/notice/create");
    };

    const handleEdit = (id) => {
        navigate(`/admin/notice/edit/${id}`);
    };

    const handleDelete = (id) => {
        // TODO: API 호출하여 삭제
        setNotices(notices.filter(notice => notice.id !== id));
    };

    return (
        <div className="admin-notice-list">
            <div className="notice-header">
                <h1>공지사항 관리</h1>
                <button className="create-button" onClick={handleCreate}>
                    공지사항 작성
                </button>
            </div>

            <div className="notice-table-container">
                <table className="notice-table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>조회수</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notices.map((notice) => (
                            <tr key={notice.id}>
                                <td>{notice.id}</td>
                                <td>{notice.title}</td>
                                <td>{notice.date}</td>
                                <td>{notice.views}</td>
                                <td>
                                    <button 
                                        className="edit-button"
                                        onClick={() => handleEdit(notice.id)}
                                    >
                                        수정
                                    </button>
                                    <button 
                                        className="delete-button"
                                        onClick={() => handleDelete(notice.id)}
                                    >
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminNoticeList; 
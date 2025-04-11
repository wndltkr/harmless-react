import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import "../../styles/adminNoticeCreate.css";

const AdminNoticeCreate = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [notice, setNotice] = useState({
        title: "",
        content: "",
        attachments: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNotice(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleContentChange = (content) => {
        setNotice(prev => ({
            ...prev,
            content
        }));
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setNotice(prev => ({
            ...prev,
            attachments: [...prev.attachments, ...files]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: API 호출하여 공지사항 저장
        console.log("공지사항 저장:", notice);
        navigate("/admin/notice");
    };

    return (
        <div className="admin-notice-create">
            <div className="notice-header">
                <h1>공지사항 작성</h1>
                <button className="back-button" onClick={() => navigate("/admin/notice")}>
                    목록으로
                </button>
            </div>

            <form onSubmit={handleSubmit} className="notice-form">
                <div className="form-group">
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={notice.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>내용</label>
                    <Editor
                        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                        value={notice.content}
                        onEditorChange={handleContentChange}
                        init={{
                            height: 400,
                            menubar: true,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div>

                <div className="form-group">
                    <label>파일 첨부</label>
                    <div className="file-upload-container">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                            multiple
                            style={{ display: 'none' }}
                        />
                        <button
                            type="button"
                            className="upload-button"
                            onClick={() => fileInputRef.current.click()}
                        >
                            파일 선택
                        </button>
                        <div className="file-list">
                            {notice.attachments.map((file, index) => (
                                <div key={index} className="file-item">
                                    <span>{file.name}</span>
                                    <button
                                        type="button"
                                        className="remove-button"
                                        onClick={() => {
                                            setNotice(prev => ({
                                                ...prev,
                                                attachments: prev.attachments.filter((_, i) => i !== index)
                                            }));
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-button">
                        등록
                    </button>
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={() => navigate("/admin/notice")}
                    >
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminNoticeCreate; 
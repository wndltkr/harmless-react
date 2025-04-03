import React, { useState, useEffect } from "react";
import axios from "axios";

function NoticePage() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/board");
            setPosts(response.data);
        } catch (error) {
            console.error("게시글 불러오기 실패:", error);
        }
    };

    const addPost = async () => {
        if (!title || !content || !author) {
            alert("모든 필드를 입력해주세요.");
            return;
        }
        try {
            await axios.post("http://localhost:5000/api/board", { title, content, author });
            fetchPosts();
            setTitle("");
            setContent("");
            setAuthor("");
        } catch (error) {
            console.error("게시글 추가 실패:", error);
        }
    };

    const deletePost = async (id) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            try {
                await axios.delete(`http://localhost:5000/api/board/${id}`);
                fetchPosts();
            } catch (error) {
                console.error("게시글 삭제 실패:", error);
            }
        }
    };

    return (
        <div className="app-container" style={{ padding: "20px" }}>
            <h2>📢 공지사항 게시판</h2>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: "100%", marginBottom: "10px" }}
                />
                <input
                    type="text"
                    placeholder="작성자"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={{ width: "100%", marginBottom: "10px" }}
                />
                <textarea
                    placeholder="내용"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{ width: "100%", height: "100px", marginBottom: "10px" }}
                />
                <button onClick={addPost} style={{ width: "100%", padding: "10px", background: "#4CAF50", color: "#fff", border: "none" }}>
                    글 등록
                </button>
            </div>
            <h3>📄 게시글 목록</h3>
            {posts.length === 0 ? (
                <p>게시글이 없습니다.</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {posts.map((post) => (
                        <li key={post.id} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
                            <h4>{post.title} - {post.author}</h4>
                            <p>{post.content}</p>
                            <button onClick={() => deletePost(post.id)} style={{ background: "red", color: "#fff", border: "none", padding: "5px 10px" }}>
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default NoticePage;

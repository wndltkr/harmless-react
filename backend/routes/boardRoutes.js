const express = require("express");
const pool = require("../config/db");
const mybatisMapper = require("mybatis-mapper");

const router = express.Router();
mybatisMapper.createMapper(["./mapper/boardMapper.xml"]);

const executeQuery = (namespace, queryId, params = {}) => {
    return new Promise((resolve, reject) => {
        const query = mybatisMapper.getStatement(namespace, queryId, params);
        pool.query(query, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

// 게시글 전체 조회
router.get("/", async (req, res) => {
    try {
        const posts = await executeQuery("BoardMapper", "getAllPosts");
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 특정 게시글 조회
router.get("/:id", async (req, res) => {
    try {
        const post = await executeQuery("BoardMapper", "getPostById", { id: req.params.id });
        res.json(post[0] || {});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 게시글 작성
router.post("/", async (req, res) => {
    try {
        const { title, content, author } = req.body;
        await executeQuery("BoardMapper", "addPost", { title, content, author });
        res.json({ message: "게시글 추가 성공!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 게시글 수정
router.put("/:id", async (req, res) => {
    try {
        const { title, content } = req.body;
        await executeQuery("BoardMapper", "updatePost", { id: req.params.id, title, content });
        res.json({ message: "게시글 수정 성공!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 게시글 삭제
router.delete("/:id", async (req, res) => {
    try {
        await executeQuery("BoardMapper", "deletePost", { id: req.params.id });
        res.json({ message: "게시글 삭제 성공!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

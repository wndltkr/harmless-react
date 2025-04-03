const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const boardRoutes = require("./routes/boardRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/board", boardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}`);
});
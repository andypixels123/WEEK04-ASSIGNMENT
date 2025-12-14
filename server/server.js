import express from "express";
import cors from "cors";
import { db } from "./dbConn.js";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

// create data using formValues from client, send to database
app.post("/comments", (req, res) => {
    // receive data from client
    const newComm = req.body.formValues;
    // console.log(newComm);
    // query database --> insert data into table
    // use parameters in SQL to protect the data and reuse the query
    const query = db.query(
        `INSERT INTO gbComms (username, comment, date) VALUES ($1, $2, $3)`,
        [newComm.userName, newComm.userComment, newComm.date]
    );
    res.json({ status: "success", values: newComm });
});

// todo: get data from database, send to client
app.get("/comments", async function (req, res) {
    const comments = await db.query("SELECT * FROM gbComms ORDER BY idx");
    res.json(comments.rows);
});

// todo: update database with new like count
app.post("/likes", (req, res) => {
    const newLike = req.body.commLikes;
    const query = db.query(
        `UPDATE gbComms SET likes = $1 WHERE idx = $2`, [newLike.likeQty, newLike.likeId]
    );
    res.json({ status: "success", values: newLike });
});

app.listen(PORT, () => {
    console.info(`Server running, port ${PORT}`);
});
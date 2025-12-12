import express from "express";
import cors from "cors";
import { db } from "./dbConn.js";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

app.listen(PORT, () => {
    console.info(`Server running, port ${PORT}`);
});

// Create data using form values from client, send to database
app.post("/comments", (req, res) => {
    // receive the data from the client
    const newComm = req.body.formValues;
    console.log(newComm);
    // query the database to insert the data into the staff table
    // we use parameters in SQL to protect the data and to reuse the query
    const query = db.query(
        `INSERT INTO gbComms (username, comment) VALUES ($1, $2)`,
        // `INSERT INTO gbComms (username, comment) VALUES ($1, $2, $3)`,
        [newComm.userName, newComm.userComment]
        // [newComm.userName, newComm.userComment, newComm.date]
    );
    res.json({ status: "success", values: newComm });
});

// TODO: GET DATA FROM DATABASE, SEND TO CLIENT
app.get("/comments", async function (req, res) {
  const comments = await db.query("SELECT * FROM gbComms");
  res.json(comments.rows);
});
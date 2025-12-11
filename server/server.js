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

// app.get("/", (req, res)=> {
//   res.json({ message: "Guestbook Comments" });
// });

// Create data using form values from client, send to database
app.post("/comments", (req, res) => { // TODO: RENDER CLIENT URL ????
    // receive the data from the client
    const newComm = req.body.formValues;
    console.log(newComm);
    // query the database to insert the data into the staff table
    // we use parameters in SQL to protect the data and to reuse the query
    const query = db.query(
        `INSERT INTO gbComms (username, comment) VALUES ($1, $2)`,
        [newComm.userName, newComm.userComment]
    );
    res.json({ status: "success", values: newComm });
});
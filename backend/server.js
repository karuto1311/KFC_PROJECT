const express = require("express");
const cors = require("cors");
const db = require('./database');

const app = express();
app.use(cors());
app.use(express.json());




app.listen(1311, () => {
    console.log("connected to server 1311")
})

// // Import routes
// const HelloRoutes = require('./routes/HelloRoutes');

// //Use routes
// app.use(HelloRoutes);

app.get("/",(req, res) => {
    const sql = "SELECT * FROM kfc_admin";
    db.query(sql, (err, data) => {
        if(err) return res.json("error kfc-admin");
        return res.json(data);
    })
})
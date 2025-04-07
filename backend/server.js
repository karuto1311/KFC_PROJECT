const express = require("express");
const cors = require("cors");
const db = require('./database');

const app = express();
app.use(cors());
app.use(express.json());




app.listen(1311, () => {
    console.log("connected to server 1311")
})

// app.get("/",(req, res) => {
//     const sql = "SELECT * FROM kfc_admin";
//     db.query(sql, (err, data) => {
//         if(err) return res.json("error kfc-admin");
//         return res.json(data);
//     })
// })


// // Import routes
// const HelloRoutes = require('./routes/HelloRoutes');
const AdminRoutes = require('./routes/AdminRoutes');

// //Use routes
// app.use(HelloRoutes);
app.use(AdminRoutes);

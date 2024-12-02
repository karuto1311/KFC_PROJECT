const express = require("express");
const cors = require("cors");
const db = require('./database');

const app = express();
app.use(cors());
app.use(express.json());




app.listen(1311, () => {
    console.log("connected to server")
})

app.get("/",(req, res) => {
    res.json("Hello KFC_PJ");
})

// // Import routes
// const HelloRoutes = require('./routes/HelloRoutes');

// //Use routes
// app.use(HelloRoutes);
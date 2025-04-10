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
// app.post('/createAdmin', (req , res) => {
//     const sql = "INSERT INTO kfc_admin (`IDAdmin`, `FirstName`, `LastName`, `PhoneNumber`, `Email`, `Pass`, `Gender`, `Birthday`) VALUES (?)";
//     const values = [
//         req.body.AdminID,
//         req.body.AdminFname,
//         req.body.AdminLname,
//         req.body.AdminSDT,
//         req.body.AdminEmail,
//         req.body.AdminPassword,
//         req.body.AdminGender,
//         req.body.AdminBirth,
//     ]
//     db.query(sql, [values], (err, data) => {
//         if(err) return res.json("Error");
//         return res.json(data);
//     })
// })

// app.put('/updateAdmin/:IDAdmin', (req , res) => {
//     const sql = "UPDATE kfc_admin SET `FirstName` = ?, `LastName` = ?, `PhoneNumber` = ?, `Email` = ?, `Pass` = ?, `Gender` = ?, `Birthday` = ? WHERE IDAdmin = ?";
//     const genderValue = req.body.AdminGender !== null && req.body.AdminGender !== undefined
//     ? req.body.AdminGender
//     : null;
//     const values = [
//         req.body.AdminFname,
//         req.body.AdminLname,
//         req.body.AdminSDT,
//         req.body.AdminEmail,
//         req.body.AdminPassword,
//         genderValue, // thay vì dùng trực tiếp req.body.AdminGender
//         req.body.AdminBirth,
//     ]
//     const idAdmin = req.params.IDAdmin;
//     db.query(sql, [...values, idAdmin], (err, data) => {
//         if(err) return res.json("Error");
//         return res.json(data);
//     })
// })

// app.delete('/deleteAdmin/:IDAdmin', (req , res) => {
//     const sql = "DELETE FROM kfc_admin  WHERE IDAdmin = ?";

//     const idAdmin = req.params.IDAdmin;
//     db.query(sql, [idAdmin], (err, data) => {
//         if(err) return res.json("Error");
//         return res.json(data);
//     })
// })

// app.get('/getAdmin/:IDAdmin', (req, res) => {
//     const IDAdmin = req.params.IDAdmin;
//     const sql = 'SELECT * FROM kfc_admin WHERE IDAdmin = ?';
  
//     db.query(sql, [IDAdmin], (err, result) => {
//       if (err) {
//         console.error('Lỗi truy vấn:', err);
//         res.status(500).send("Lỗi máy chủ");
//       } else if (result.length === 0) {
//         res.status(404).send("Không tìm thấy admin");
//       } else {
//         res.json(result[0]); // Trả về một admin
//       }
//     });
//   });
  



// // Import routes
// const HelloRoutes = require('./routes/HelloRoutes');
const AdminRoutes = require('./routes/AdminRoutes');

// //Use routes
// app.use(HelloRoutes);
app.use(AdminRoutes);

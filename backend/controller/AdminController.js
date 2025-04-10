const db = require('../database');


//hien thong tin
exports.getAdmin = (req , res) =>{
    const sql = "SELECT * FROM kfc_admin";
    db.query(sql, (err, data) => {
        if(err) return res.json("error kfc-admin");
        return res.json(data);
    })
   }

   //them thong tin
   exports.postAdmin = (req , res) =>{
    const sql = "INSERT INTO kfc_admin (`IDAdmin`, `FirstName`, `LastName`, `PhoneNumber`, `Email`, `Pass`, `Gender`, `Birthday`) VALUES (?)";
    const values = [
        req.body.AdminID,
        req.body.AdminFname,
        req.body.AdminLname,
        req.body.AdminSDT,
        req.body.AdminEmail,
        req.body.AdminPassword,
        req.body.AdminGender,
        req.body.AdminBirth,
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
   }
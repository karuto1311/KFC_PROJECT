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
    const genderValue = req.body.AdminGender !== null && req.body.AdminGender !== undefined
    ? req.body.AdminGender
    : null;

    const values = [
        req.body.AdminID,
        req.body.AdminFname,
        req.body.AdminLname,
        req.body.AdminSDT,
        req.body.AdminEmail,
        req.body.AdminPassword,
        genderValue, // thay vì dùng trực tiếp req.body.AdminGender
        req.body.AdminBirth,
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
   }

   //sua thhong tin
   exports.putAdmin = (req , res) =>{
    const sql = "UPDATE kfc_admin SET `FirstName` = ?, `LastName` = ?, `PhoneNumber` = ?, `Email` = ?, `Pass` = ?, `Gender` = ?, `Birthday` = ? WHERE IDAdmin = ?";
    const genderValue = req.body.AdminGender !== null && req.body.AdminGender !== undefined
    ? req.body.AdminGender
    : null;
    const values = [
        req.body.AdminFname,
        req.body.AdminLname,
        req.body.AdminSDT,
        req.body.AdminEmail,
        req.body.AdminPassword,
        genderValue, // thay vì dùng trực tiếp req.body.AdminGender
        req.body.AdminBirth,
    ]
    const idAdmin = req.params.IDAdmin;
    db.query(sql, [...values, idAdmin], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
   }
   
   //xoa thong tin
   exports.deleteAdmin = (req , res) =>{
    const sql = "DELETE FROM kfc_admin  WHERE IDAdmin = ?";

    const idAdmin = req.params.IDAdmin;
    db.query(sql, [idAdmin], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
   }

   //xem chi tiet nhan viet
   exports.detailAdmin = (req , res) =>{
    const IDAdmin = req.params.IDAdmin;
    const sql = 'SELECT * FROM kfc_admin WHERE IDAdmin = ?';
  
    db.query(sql, [IDAdmin], (err, result) => {
      if (err) {
        console.error('Lỗi truy vấn:', err);
        res.status(500).send("Lỗi máy chủ");
      } else if (result.length === 0) {
        res.status(404).send("Không tìm thấy admin");
      } else {
        res.json(result[0]); // Trả về một admin
      }
    });
   }
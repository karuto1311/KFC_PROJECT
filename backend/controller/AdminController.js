const db = require('../database');

exports.getAdmin = (req , res) =>{
    const sql = "SELECT * FROM kfc_admin";
    db.query(sql, (err, data) => {
        if(err) return res.json("error kfc-admin");
        return res.json(data);
    })
   }
const db = require('../database');


//hien thong tin
exports.getCategory = (req , res) =>{
    const sql = "SELECT * FROM kfc_category";
    db.query(sql, (err, data) => {
        if(err) return res.json("error kfc-category");
        return res.json(data);
    })
   }


    //xoa thong tin
    exports.deleteCategory = (req , res) =>{
        const sql = "DELETE FROM kfc_category  WHERE IDCategory = ?";
    
        const idAdmin = req.params.IDAdmin;
        db.query(sql, [idAdmin], (err, data) => {
            if(err) return res.json("Error");
            return res.json(data);
        })
       }
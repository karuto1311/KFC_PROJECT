const db = require('../database');


//hien category
exports.getCategory = (req , res) =>{
    const sql = "SELECT * FROM kfc_category";
    db.query(sql, (err, data) => {
        if(err) return res.json("error kfc-category");
        return res.json(data);
    })
   }

   //them category
   exports.postCategory = (req , res) =>{
    const sql = "INSERT INTO kfc_category (`IDCategory`, `Image_Category`, `Name_Category`) VALUES (?)";
    
    const imageFileName = req.file ? req.file.filename : null; // Đảm bảo file được lưu vào DB

    const values = [
        req.body.IDCategory,
        imageFileName,
        req.body.Name_Category,
    ];
        
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });

}


    //xoa category
    exports.deleteCategory = (req , res) =>{
        const sql = "DELETE FROM kfc_category  WHERE IDCategory = ?";
    
        const idCategory = req.params.IDCategory;
        db.query(sql, [idCategory], (err, data) => {
            if(err) return res.json("Error");
            return res.json(data);
        })
       }
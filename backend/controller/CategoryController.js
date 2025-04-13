const db = require('../database');
const fs = require("fs");
const path = require("path");


//hien category
exports.getCategory = (req , res) =>{
    const sql = "SELECT * FROM kfc_category";
    db.query(sql, (err, data) => {
        if(err) return res.json("error kfc-category");
        return res.json(data);
    })
   }

   //them category
   exports.postCategory = (req, res) => {
    const getMaxIdSql = "SELECT MAX(IDCategory) AS maxId FROM kfc_category";
  
    db.query(getMaxIdSql, (err, result) => {
      if (err) return res.json("Error");
  
      let nextId = "CATE001";
      if (result[0].maxId) {
        const maxIdNumber = parseInt(result[0].maxId.replace("CATE", ""));
        const newIdNumber = maxIdNumber + 1;
        nextId = "CATE" + newIdNumber.toString().padStart(3, "0");
      }
  
      const imageFileName = req.file ? req.file.filename : null;
  
      const sql = "INSERT INTO kfc_category (IDCategory, Image_Category, Name_Category) VALUES (?)";
      const values = [nextId, imageFileName, req.body.Name_Category];
  
      db.query(sql, [values], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
      });
    });
  };
  

   //sua thhong tin
   exports.putCategory = (req, res) => {
    const idCategory = req.params.IDCategory;
    const imageFileName = req.file ? req.file.filename : null;
  
    // 1. Lấy ảnh cũ từ DB
    const getImageSql = "SELECT Image_Category FROM kfc_category WHERE IDCategory = ?";
    db.query(getImageSql, [idCategory], (err, result) => {
      if (err) return res.status(500).json("Lỗi truy vấn DB");
      if (result.length === 0) return res.status(404).json("Không tìm thấy danh mục");
  
      const oldImage = result[0].Image_Category;
  
      // 2. Nếu có ảnh mới và có ảnh cũ => xóa ảnh cũ khỏi thư mục
      if (imageFileName && oldImage) {
        const oldImagePath = path.join(__dirname, "../public/images/categories", oldImage);
        fs.unlink(oldImagePath, (err) => {
          if (err && err.code !== "ENOENT") {
            console.error("Lỗi khi xóa ảnh cũ:", err);
          }
        });
      }
  
      // 3. Cập nhật dữ liệu
      const updateSql = "UPDATE kfc_category SET `Name_Category` = ?, `Image_Category` = ? WHERE IDCategory = ?";
      const values = [req.body.Name_Category, imageFileName || oldImage, idCategory];
  
      db.query(updateSql, values, (err, data) => {
        if (err) return res.status(500).json("Lỗi cập nhật danh mục");
        return res.json({ message: "Cập nhật danh mục thành công", data });
      });
    });
  };
  


  // Xóa category và xóa luôn ảnh khỏi hệ thống
  exports.deleteCategory = (req, res) => {
    const idCategory = req.params.IDCategory;
  
    // 1. Lấy tên ảnh từ DB
    const getImageSql = "SELECT Image_Category FROM kfc_category WHERE IDCategory = ?";
    db.query(getImageSql, [idCategory], (err, result) => {
      if (err) return res.status(500).json("Lỗi khi lấy ảnh từ DB");
      if (result.length === 0) return res.status(404).json("Không tìm thấy danh mục");
  
      const imageFile = result[0].Image_Category;
  
      // 2. Xóa ảnh nếu tồn tại
      if (imageFile) {
        const imagePath = path.join(__dirname, "../public/images/categories", imageFile); // điều chỉnh đúng folder
        fs.unlink(imagePath, (err) => {
          if (err && err.code !== "ENOENT") {
            console.error("Lỗi khi xóa file ảnh:", err);
          }
        });
      }
  
      // 3. Xóa dữ liệu category khỏi DB
      const deleteSql = "DELETE FROM kfc_category WHERE IDCategory = ?";
      db.query(deleteSql, [idCategory], (err, data) => {
        if (err) return res.status(500).json("Lỗi khi xóa danh mục");
        return res.json({ message: "Xóa danh mục thành công", data });
      });
    });
  };



   //xem chi tiet danh mục
   exports.detailCategory = (req , res) =>{
    const IDCategory = req.params.IDCategory;
    const sql = 'SELECT * FROM kfc_category WHERE IDCategory = ?';
  
    db.query(sql, [IDCategory], (err, result) => {
      if (err) {
        console.error('Lỗi truy vấn:', err);
        res.status(500).send("Lỗi máy chủ");
      } else if (result.length === 0) {
        res.status(404).send("Không tìm thấy danh mục");
      } else {
        res.json(result[0]); // Trả về một danh mục
      }
    });
   }
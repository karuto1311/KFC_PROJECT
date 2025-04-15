const db = require('../database');
const fs = require("fs");
const path = require("path");


//hien san pham
exports.getProduct = (req , res) =>{
    const sql = "SELECT * FROM kfc_product";
    db.query(sql, (err, data) => {
        if(err) return res.json("error kfc-product");
        return res.json(data);
    })
   }

    //them san pham
    exports.postProduct = (req, res) => {
        const getMaxIdSql = "SELECT MAX(IDProduct) AS maxId FROM kfc_product";
      
        db.query(getMaxIdSql, (err, result) => {
          if (err) return res.json("Error");
      
          let nextId = "PD001";
          if (result[0].maxId) {
            const maxIdNumber = parseInt(result[0].maxId.replace("PD", ""));
            const newIdNumber = maxIdNumber + 1;
            nextId = "PD" + newIdNumber.toString().padStart(3, "0");
          }
      
          const imageFileName = req.file ? req.file.filename : null;
      
          const sql = "INSERT INTO kfc_product (IDProduct, IDCategory, ImagePro, NamePro, Description, Price, Quantity) VALUES (?)";
          const values = [
            nextId,
            req.body.IDCategory,
            imageFileName, 
            req.body.NamePro,
            req.body.Description,
            req.body.Price,
            req.body.Quantity
        ];
      
          db.query(sql, [values], (err, data) => {
            if (err) return res.json("Error");
            return res.json(data);
          });
        });
      };

   //sua thhong tin
   exports.putProduct = (req, res) => {
    const idProduct = req.params.IDProduct;
    const imageFileName = req.file ? req.file.filename : null;
  
    // 1. Lấy ảnh cũ từ DB
    const getImageSql = "SELECT ImagePro FROM kfc_product WHERE IDProduct = ?";
    db.query(getImageSql, [idProduct], (err, result) => {
      if (err) return res.status(500).json("Lỗi truy vấn DB");
      if (result.length === 0) return res.status(404).json("Không tìm thấy danh mục");
  
      const oldImage = result[0].ImagePro;
  
      // 2. Nếu có ảnh mới và có ảnh cũ => xóa ảnh cũ khỏi thư mục
      if (imageFileName && oldImage) {
        const oldImagePath = path.join(__dirname, "../public/images/products", oldImage);
        fs.unlink(oldImagePath, (err) => {
          if (err && err.code !== "ENOENT") {
            console.error("Lỗi khi xóa ảnh cũ:", err);
          }
        });
      }
  
      // 3. Cập nhật dữ liệu
      const updateSql = "UPDATE kfc_product SET `IDCategory` = ?, `ImagePro` = ?, `NamePro` = ?, `Description` = ?, `Price` = ?, `Quantity` = ? WHERE IDProduct = ?";
      const values = [
        req.body.IDCategory, 
        imageFileName || oldImage,
        req.body.NamePro, 
        req.body.Description, 
        req.body.Price, 
        req.body.Quantity,
        idProduct
      ];


  
      db.query(updateSql, values, (err, data) => {
        if (err) return res.status(500).json("Lỗi cập nhật sản phẩm");
        return res.json({ message: "Cập nhật sản phẩm thành công", data });
      });
    });
  };



      // Xóa san pham và xóa luôn ảnh khỏi hệ thống
  exports.deleteProduct = (req, res) => {
    const idProduct = req.params.IDProduct;
  
    // 1. Lấy tên ảnh từ DB
    const getImageSql = "SELECT ImagePro FROM kfc_product WHERE IDProduct = ?";
    db.query(getImageSql, [idProduct], (err, result) => {
      if (err) return res.status(500).json("Lỗi khi lấy ảnh từ DB");
      if (result.length === 0) return res.status(404).json("Không tìm thấy danh mục");
  
      const imageFile = result[0].ImagePro;
  
      // 2. Xóa ảnh nếu tồn tại
      if (imageFile) {
        const imagePath = path.join(__dirname, "../public/images/products", imageFile); // điều chỉnh đúng folder
        fs.unlink(imagePath, (err) => {
          if (err && err.code !== "ENOENT") {
            console.error("Lỗi khi xóa file ảnh:", err);
          }
        });
      }
  
      // 3. Xóa dữ liệu category khỏi DB
      const deleteSql = "DELETE FROM kfc_product WHERE IDProduct = ?";
      db.query(deleteSql, [idProduct], (err, data) => {
        if (err) return res.status(500).json("Lỗi khi xóa danh mục");
        return res.json({ message: "Xóa danh mục thành công", data });
      });
    });
  };

     //xem chi tiet san pham
     exports.detailProduct = (req , res) =>{
      const IDProduct = req.params.IDProduct;
      const sql = 'SELECT * FROM kfc_product WHERE IDProduct = ?';
    
      db.query(sql, [IDProduct], (err, result) => {
        if (err) {
          console.error('Lỗi truy vấn:', err);
          res.status(500).send("Lỗi máy chủ");
        } else if (result.length === 0) {
          res.status(404).send("Không tìm thấy danh mục");
        } else {
          res.json(result[0]); // Trả về một san pham
        }
      });
     }
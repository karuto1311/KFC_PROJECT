const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Cấu hình nơi lưu và tên file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Xác định thư mục theo loại dữ liệu (ví dụ: categories, products, ...)
    const folderType = req.query.folder || 'others'; // Nếu không có 'folder', mặc định là 'others' Lấy từ query thay vì body
    
    // Tạo đường dẫn thư mục lưu ảnh
    const uploadPath = path.join('public/images', folderType);

    // Tạo thư mục nếu chưa có
    fs.mkdirSync(uploadPath, { recursive: true });

    cb(null, uploadPath);  // Đường dẫn nơi lưu ảnh
  },
  filename: function (req, file, cb) {
    // Đổi tên ảnh để tránh trùng lặp
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);  // Đặt tên file ảnh
  }
});

const upload = multer({ storage: storage });

module.exports = upload;

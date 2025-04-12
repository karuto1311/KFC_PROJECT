const multer = require('multer');
const path = require('path');

// Cấu hình nơi lưu và tên file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // nơi lưu ảnh
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;  // đổi tên ảnh tránh trùng
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;

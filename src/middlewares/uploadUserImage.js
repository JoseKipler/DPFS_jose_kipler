const multer = require('multer');
const path = require('path');

const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif'];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images/users'));
  },
  filename: (req, file, cb) => {
    const uniqueName = `user-${Date.now()}${path.extname(file.originalname).toLowerCase()}`;
    cb(null, uniqueName);
  }
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();

  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    req.fileValidationError = 'La imagen debe ser JPG, JPEG, PNG o GIF.';
    return cb(null, false);
  }

  cb(null, true);
};

module.exports = multer({ storage, fileFilter });
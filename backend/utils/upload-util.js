const multer = require('multer');

const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'public/images');
  },
  filename(req, file, callback) {
    callback(null, Date.now() + '-' + file.originalname.substring(file.originalname.length - 5));
  }
});

const upload = multer({ storage: Storage });

exports.upload = upload;

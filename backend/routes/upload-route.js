const express = require('express');
const multer = require('multer');

//Local imports
const controllers = require('../controllers/image-controllers');

const router = express.Router();

const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'public/images');
  },
  filename(req, file, callback) {
    callback(null, Date.now() + '-' + file.originalname.substring(file.originalname.length - 5));
  }
});

const upload = multer({ storage: Storage });

router.post('/', upload.single('image'), controllers.uploadImage);

module.exports = router;

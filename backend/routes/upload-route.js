const express = require('express');

//Local imports
const controllers = require('../controllers/image-controllers');
const utils = require('../utils/upload-util');

const router = express.Router();

router.post('/', utils.upload.single('image'), controllers.uploadImage);

module.exports = router;

const uploadImage = async (req, res, next) => {
  res.json({
    message: 'Image uploaded!',
    success: true,
    path: `${process.env.SERVER_URL}/images/${req.file.filename}`
  });
};

exports.uploadImage = uploadImage;

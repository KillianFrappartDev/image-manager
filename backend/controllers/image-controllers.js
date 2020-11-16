const uploadImage = async (req, res, next) => {
  res.json({ message: 'Image uploaded!', success: true });
};

exports.uploadImage = uploadImage;

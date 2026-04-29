exports.getAllUsers = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'All users'
  });
};

exports.getUserById = (req, res) => {
  res.status(200).json({
    success: true,
    message: `User ID: ${req.params.id}`
  });
};

exports.getUserPosts = (req, res) => {
  res.status(200).json({
    success: true,
    message: `Posts of user ${req.params.userId}`
  });
};
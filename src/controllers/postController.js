const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name email');

    res.status(200).json({
      success: true,
      message: 'All posts fetched',
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const post = await Post.create({
      title,
      content,
      author: req.user._id
    });

    res.status(201).json({
      success: true,
      message: 'Post created',
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'name email');

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.status(200).json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updatePost = async (req, res) => {
  res.status(200).json({
    success: true,
    message: `Post ${req.params.id} updated`
  });
};

exports.deletePost = async (req, res) => {
  res.status(200).json({
    success: true,
    message: `Post ${req.params.id} deleted`
  });
};

exports.getPostComments = (req, res) => {
  res.status(200).json({
    success: true,
    message: `Comments for post ${req.params.postId}`
  });
};
const express = require('express');
const postController = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', postController.getAllPosts);
router.post('/', protect, postController.createPost);
router.get('/:id', postController.getPostById);
router.patch('/:id', protect, postController.updatePost);
router.delete('/:id', protect, postController.deletePost);
router.get('/:postId/comments', postController.getPostComments);

module.exports = router;
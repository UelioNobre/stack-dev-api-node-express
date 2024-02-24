const postsService = require('../services/posts.service')

async function create(req, res) {
  const { title, text } = req.body;
  const createdPost = await postsService.createNewPost({ title, text });
  return res
    .status(createdPost.statusCode)
    .json({ post: createdPost.message });
}

module.exports = {
  create
};

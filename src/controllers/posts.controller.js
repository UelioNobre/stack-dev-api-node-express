const postsService = require('../services/posts.service')

async function create(req, res) {
  const { title, text } = req.body;
  const createdPost = await postsService.createNewPost({ title, text });
  return res
    .status(createdPost.statusCode)
    .json({ post: createdPost.message });
}

async function list(req, res) {
  const posts = await postsService.listPosts();

  return res
    .status(posts.statusCode)
    .json({ posts: posts.message });
}

module.exports = {
  create,
  list,
};

const postsService = require('../services/posts.service')

async function create(req, res) {
  const { title, text } = req.body;
  const createdPost = await postsService.createNewPost({ title, text });
  return res
    .status(createdPost.statusCode)
    .json({ post: createdPost.message });
}

async function read(req, res) {
  const { id } = req.params;
  const readPostByID = await postsService.readPostByID({ id });
  return res
    .status(readPostByID.statusCode)
    .json({ post: readPostByID.message });
}

async function list(req, res) {
  const posts = await postsService.listPosts();

  return res
    .status(posts.statusCode)
    .json({ posts: posts.message });
}

async function destroy(req, res) {
  const { params: id } = req
  const { statusCode, message } = await postsService.destroyPostByID(id);

  return res
    .status(statusCode)
    .json(message);
}

module.exports = {
  create,
  read,
  list,
  destroy,
};

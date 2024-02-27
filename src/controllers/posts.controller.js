const postsService = require('../services/posts.service')

async function create(req, res) {
  const { title, text } = req.body;
  const createdPost = await postsService.createPost({ title, text });
  return res
    .status(createdPost.statusCode)
    .json({ post: createdPost.message });
}

async function read(req, res) {
  const { id } = req.params;
  const readPostByID = await postsService.readPost({ id });
  return res
    .status(readPostByID.statusCode)
    .json({ post: readPostByID.message });
}

async function update(req, res) {
  const { id } = req.params
  const { title, text } = req.body
  const { statusCode, message } = await postsService.updatePost(+id, { title, text });

  return res
    .status(statusCode)
    .json(message);
}

async function destroy(req, res) {
  const { params: id } = req
  const { statusCode, message } = await postsService.destroyPost(id);

  return res
    .status(statusCode)
    .json(message);
}

async function list(req, res) {
  const posts = await postsService.listPosts();

  return res
    .status(posts.statusCode)
    .json({ posts: posts.message });
}



module.exports = {
  create,
  read,
  update,
  destroy,
  list,
};

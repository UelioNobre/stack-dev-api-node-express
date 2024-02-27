const postModel = require('../models/posts.model');

async function createNewPost({ title, text }) {
  const post = await postModel.create({ title, text });
  return {
    statusCode: 201,
    message: post,
  };
}

async function listPosts() {
  const posts = await postModel.list();
  return {
    statusCode: 200,
    message: posts,
  };
}

async function readPostByID({ id }) {
  const post = await postModel.findById({ id });
  return {
    statusCode: 200,
    message: post,
  };
}
async function destroyPostByID({ id }) {
  await postModel.deleteById({ id });
  return {
    statusCode: 204,
    message: {},
  };
}

async function updatePostByID(id, { title, text }) {
  const post = await postModel.updateById(id, { title, text })
  return {
    statusCode: 200,
    message: { post },
  };
}

module.exports = {
  createNewPost,
  listPosts,
  readPostByID,
  destroyPostByID,
  updatePostByID,
};

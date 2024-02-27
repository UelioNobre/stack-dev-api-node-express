const postModel = require('../models/posts.model');

async function createPost({ title, text }) {
  const post = await postModel.create({ title, text });
  return {
    statusCode: 201,
    message: post,
  };
}

async function readPost({ id }) {
  const post = await postModel.read({ id });
  return {
    statusCode: 200,
    message: post,
  };
}

async function updatePost(id, { title, text }) {
  const post = await postModel.update(id, { title, text })
  return {
    statusCode: 200,
    message: { post },
  };
}

async function destroyPost({ id }) {
  await postModel.destroy({ id });
  return {
    statusCode: 204,
    message: {},
  };
}

async function listPosts() {
  const posts = await postModel.list();
  return {
    statusCode: 200,
    message: posts,
  };
}

module.exports = {
  createPost,
  readPost,
  updatePost,
  destroyPost,
  listPosts,
};

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

module.exports = { createNewPost, listPosts, };

const postModel = require('../models/posts.model');

async function createNewPost({ title, text }) {
  const post = await postModel.create({ title, text });
  return {
    statusCode: 201,
    message: post,
  };
}

module.exports = { createNewPost };

// const posts = [];
const { posts } = require('../database/schemas')

async function create({ title, text }) {
  // posts.push({ id: Date.now(), title, text });
  // return Promise.resolve({ id: Date.now(), title, text });
  const post = await posts.create({ title, text })
  return post.dataValues;
}

async function read({ id }) {
  const post = await posts.findByPk(id)
  return Promise.resolve(post);
}

async function update(id, { title, text }) {
  const post = await posts.update({ title, text }, { where: { id } })
  return { id, title, text }
}

async function destroy({ id }) {
  const post = await posts.destroy({ where: { id } })
  return post
}

async function list() {
  return await posts.findAll();
}

module.exports = {
  create,
  read,
  update,
  destroy,
  list,
};

const posts = [];

async function create({ title, text }) {
  posts.push({ id: Date.now(), title, text });
  return Promise.resolve({ id: Date.now(), title, text });
}

async function list() {
  return Promise.resolve(posts);
}

async function findById({ id }) {
  const post = posts.find((p) => p.id === +id)
  return Promise.resolve(post);
}



module.exports = {
  create,
  list,
  findById
};

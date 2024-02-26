const posts = [];

async function create({ title, text }) {
  posts.push({ id: Date.now(), title, text });
  return Promise.resolve({ id: Date.now(), title, text });
}

async function list() {
  return Promise.resolve(posts);
}



module.exports = {
  create,
  list,
};

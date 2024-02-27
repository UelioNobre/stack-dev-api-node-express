const posts = [];

async function create({ title, text }) {
  posts.push({ id: Date.now(), title, text });
  return Promise.resolve({ id: Date.now(), title, text });
}

async function read({ id }) {
  const post = posts.find((p) => p.id === +id)
  return Promise.resolve(post);
}

async function update(id, { title, text }) {
  await destroy(id)
  const newPost = { id, title, text };
  posts.push(newPost)

  return Promise.resolve(newPost)
}

async function destroy({ id }) {
  const post = posts.find((p) => p.id === +id)
  posts.splice(post, 1)
  return Promise.resolve({})
}

async function list() {
  return Promise.resolve(posts);
}


module.exports = {
  create,
  read,
  update,
  destroy,
  list,
};

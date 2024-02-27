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

async function deleteById({ id }) {
  const post = posts.find((p) => p.id === +id)
  posts.splice(post, 1)
  return Promise.resolve({})
}

async function updateById(id, { title, text }) {
  await deleteById(id)
  const newPost = { id, title, text };
  posts.push(newPost)

  return Promise.resolve(newPost)
}


module.exports = {
  create,
  list,
  findById,
  deleteById,
  updateById
};

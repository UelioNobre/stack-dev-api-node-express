const posts = [];

async function create({ title, text }) {
  posts.push({ title, text });
  return Promise.resolve({ id: Date.now(), title, text });
}

module.exports = {
  create,
};

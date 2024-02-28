const { users } = require('../database/models')

async function create({ name, email, password }) {
  try {
    const { dataValues } = await users.create({ name, email, password });
    const user = {
      id: dataValues.id,
      name: dataValues.name,
      email: dataValues.email,
      created_at: dataValues.createdAt
    }

    return user;
  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}


async function read({ id }) {
  try {
    const { dataValues } = await users.findByPk(id);
    const user = {
      id: dataValues.id,
      name: dataValues.name,
      email: dataValues.email,
      created_at: dataValues.createdAt
    }

    return user;
  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}

async function update(id, { name }) {
  try {
    const updated_at = Date.now()
    await users.update({ name, updated_at }, { where: { id } });
    return { id, name };
  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}

module.exports = {
  create,
  read,
  update
}

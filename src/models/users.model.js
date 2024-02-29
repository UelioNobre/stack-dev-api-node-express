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

async function destroy(id) {
  try {
    await users.destroy({ where: { id } });
    return true;
  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}

async function findByEmail(email) {
  const user = await users.findOne({
    where: { email },
    attributes: ['id', 'name', 'email', 'password'],
  });

  if (!user) {
    throw new Error('User not found', { cause: { statusCode: 404 } })
  }

  return user.dataValues
}

module.exports = {
  create,
  read,
  update,
  destroy,
  findByEmail
}

const usersModel = require('../models/users.model')

async function createUser({ name, email, password }) {
  try {
    const user = await usersModel.create({ name, email, password });
    return {
      statusCode: 201,
      message: user
    }
  } catch (error) {
    return {
      statusCode: 500,
      message: error.message
    }
  }
}

async function readUser({ id }) {
  try {
    const user = await usersModel.read({ id });
    return {
      statusCode: 200,
      message: user
    }
  } catch (error) {
    return {
      statusCode: 500,
      message: error.message
    }
  }
}

module.exports = {
  createUser,
  readUser,
}
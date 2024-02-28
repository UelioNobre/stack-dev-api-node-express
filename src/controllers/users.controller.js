const userService = require('../services/users.service')

async function create(req, res) {
  const { name, email, password } = req.body
  const { statusCode, message } = await userService.createUser({ name, email, password })

  return res
    .status(statusCode)
    .json({ user: message })
}

async function read(req, res) {
  const { id } = req.params
  const { statusCode, message } = await userService.readUser({ id })

  return res
    .status(statusCode)
    .json({ user: message })
}

module.exports = {
  create,
  read,
}

const loginService = require('../services/login.service.js')

async function logIn(req, res) {
  const { email, password } = req.body
  const { statusCode, message } = await loginService.findByEmail(email)
  console.log({ message })

  const user = loginService.verifyPassword(message, password)

  const token = loginService.generateToken(user)
  return res
    .status(statusCode)
    .json({ token })
}

module.exports = {
  logIn
}

const loginService = require('../services/login.service');

async function verifyToken(req, res, next) {
  const tokenRaw = req.headers.authorization;
  const tokenTrim = tokenRaw.replace(/bearer/i, '').trim()

  try {
    const token = loginService.validateToken(tokenTrim)
    req.user = token
    return next()
  } catch (error) {
    return next(new Error(error.message, { cause: { statusCode: 401 } }))
  }
}

module.exports = {
  verifyToken,
};

const loginService = require('../services/login.service');

async function verifyToken(req, res, next) {
  try {
    console.log({ headersss: req.headers })
    const tokenRaw = req.headers.authorization;
    const tokenTrim = tokenRaw.replace(/bearer/i, '').trim()
    const token = loginService.validateToken(tokenTrim)
    req.user = token
    console.log({ tryy: req.user })
    return next()
  } catch (error) {
    console.log("### ERROR :: ")
    console.log(error)
    console.log("/### ERROR :: ")

    return next(new Error(error.message, { cause: { statusCode: 401 } }))
  }
}

module.exports = {
  verifyToken,
};

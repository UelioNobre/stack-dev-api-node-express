function checkFieldsEmailPasswordToLogin(req, res, next) {
  const keys = ['email', 'password']
  const bodyKeys = Object.keys(req.body)
  let foundedKeys = 0

  for (const key of keys) {
    if (bodyKeys.includes(key)) {
      foundedKeys += 1
    }
  }

  if (foundedKeys !== keys.length) {
    return next(new Error('Invalid request', { cause: { statusCode: 400 } }))
  }

  return next()
}

module.exports = {
  checkFieldsEmailPasswordToLogin
}
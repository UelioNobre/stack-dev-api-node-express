function handler(err, _req, res, _next) {

  // console.log({ err })

  if (err.cause) {
    return res
      .status(err.cause.statusCode)
      .json({ message: err.message })
  }

  return res
    .status(500)
    .json({ message: err.message })
}

module.exports = handler;

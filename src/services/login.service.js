require("dotenv").config();
const userService = require("./users.service");
const jwt = require("jsonwebtoken");

// const exp = Math.floor(Date.now() / 1000) + (60 * 60)
// const expiresIn = Math.floor(Date.now() / 1000) - 30
// const expiresIn = 10
// const algorithm = "HS256";
const secret = process.env.JWT_SECRET;

function validateToken(token) {
  const isValid = jwt.verify(token, secret)
  return isValid;
}

function generateToken(payload) {

  const options = { expiresIn: '1d' };
  const token = jwt.sign(payload, secret, options);
  console.log({ generateToken: token })
  return { statusCode: 200, message: { token } };
}

function verifyPassword(user, password) {
  if (user.password !== password)
    throw new Error("User not found", { cause: { statusCode: 404 } });

  const { id, name, email } = user;
  return { id, name, email };
}

async function findByEmail(email) {
  const request = await userService.findByEmail(email);
  return request;
}


module.exports = {
  findByEmail,
  verifyPassword,
  generateToken,
  validateToken
};

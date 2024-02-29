require("dotenv").config();
const userService = require("./users.service");
const jwt = require("jsonwebtoken");


function generateToken(payload) {
  const secret = process.env.JWT_SECRET;
  const algorithm = "HS256";
  const token = jwt.sign(payload, secret, { algorithm });
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
  generateToken
};

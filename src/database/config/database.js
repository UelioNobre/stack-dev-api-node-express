require('dotenv').config()

const development = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: process.env.MYSQL_DIALECT,
};

const test = { ...development };

const production = { ...development };

module.exports = { development, test, production };

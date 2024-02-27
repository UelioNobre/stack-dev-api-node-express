require('dotenv').config()

const development = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT,
};

const test = {
  username: "root",
  password: null,
  database: "database_development",
  host: "127.0.0.1",
  dialect: "mysql"
};

const production = {
  username: "root",
  password: null,
  database: "database_development",
  host: "127.0.0.1",
  dialect: "mysql"
};

module.exports = { development, test, production };

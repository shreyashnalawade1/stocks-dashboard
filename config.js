const dotenv = require("dotenv");

const server = process.env.AZURE_SQL_SERVER;
const database = process.env.AZURE_SQL_DATABASE;
const port = parseInt(process.env.AZURE_SQL_PORT);
const user = process.env.AZURE_SQL_USER;
const password = process.env.AZURE_SQL_PASSWORD;

exports.config = {
  server,
  port,
  database,
  user,
  password,
  options: {
    database,
    encrypt: true,
  },
};

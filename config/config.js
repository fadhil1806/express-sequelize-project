require('dotenv').config();
const {
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_DIALECT
} = process.env

module.exports = {
    "development": {
      "username": DB_USER,
      "password": DB_PASSWORD,
      "database": DB_NAME,
      "host": DB_HOST,
      "dialect": DB_DIALECT
    },
    "test": {
      "username": DB_USER,
      "password": DB_PASSWORD,
      "database": DB_NAME,
      "host": DB_HOST,
      "dialect": DB_DIALECT
    },
    "production": {
      "username": DB_USER,
      "password": DB_PASSWORD,
      "database": DB_NAME,
      "host": DB_HOST,
      "dialect": DB_DIALECT
    }
}
const { Sequelize } = require('sequelize');

const dbFileLocation = `${__dirname}/../../database/db.sqlite3`;

const sequelize = new Sequelize('todo', 'username', 'password', {
  dialect: 'sqlite',
  storage: dbFileLocation,
});

module.exports = sequelize;
const { DataTypes } = require('sequelize');
const sequelize = require('../../common/db');

const Task = sequelize.define('Task', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Task;

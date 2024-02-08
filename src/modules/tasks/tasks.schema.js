const { DataTypes } = require('sequelize');
const sequelize = require('../../common/db');

const Task = sequelize.define('Task', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  importance:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
});

module.exports = Task;

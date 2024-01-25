const { DataTypes } = require('sequelize');
const sequelize = require('../../common/db');
const List = require('../lists/lists.schema');

const Task = sequelize.define('Task', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Task.sync({ force: true });

module.exports = Task;

const { DataTypes } = require('sequelize');
const sequelize = require('../../common/db');
const Task = require('../tasks/tasks.schema');

const List = sequelize.define('List', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

List.hasMany(Task, {
  foreignKey: { name: 'listId', allowNull: false },
  onDelete: 'CASCADE',
});
Task.belongsTo(List, {
  foreignKey: { name: 'listId', allowNull: false },
  onDelete: 'CASCADE',
});
List.sync({ force: true });

module.exports = List;

const { db } = require('../../common/db');
const Task = require('../tasks/tasks.schema');
const List = require('./lists.schema');

const ListsService = {
  insert: (reqBody) => List.create(reqBody),

  getAll: () => List.findAll({ include: { model: Task, as: 'tasks' } }),
};

module.exports = ListsService;

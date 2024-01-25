const Task = require('./tasks.schema');

const TasksService = {
  insert: (reqBody) => Task.create(reqBody),
};

module.exports = TasksService;

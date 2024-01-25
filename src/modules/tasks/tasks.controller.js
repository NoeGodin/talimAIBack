const TasksService = require('./tasks.service');

const TasksController = {
  insert: async (req, res) => {
    await TasksService.insert(req.body);
    res.status(200).send();
  },
};

module.exports = TasksController;

const { Router } = require('express');
const ListsRouter = require('../modules/lists/lists.router');
const TasksRouter = require('../modules/tasks/tasks.router');

const router = Router();

router.use('/lists', ListsRouter);
router.use('/tasks', TasksRouter);

module.exports = router;

const { Router } = require('express');
const TasksController = require('./tasks.controller');

const router = Router();

router.post('/', TasksController.insert);

module.exports = router;

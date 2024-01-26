const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require('./common/error.middleware');
const router = require('./common/router');
const seed = require('./common/seed');
const { setupDb } = require('./common/db');
const Task = require('./modules/tasks/tasks.schema');
const List = require('./modules/lists/lists.schema');

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use(errorMiddleware);

app.listen(9000, () => {
  console.log('Server started');

  Promise.all([Task.sync({ force: true }), List.sync({ force: true })]).then(seed);
});

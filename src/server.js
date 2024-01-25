const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./common/error.middleware');
const router = require('./common/router');

const app = express();

app.use(express.json());

app.use(router);

app.use(errorMiddleware);

app.listen(9000, () => {
  console.log('Server started');
});

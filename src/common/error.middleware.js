const errorMiddleware = (err, _, res) => {
  res.status(500).send(err.message);
};

module.exports = errorMiddleware;

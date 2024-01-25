const { db } = require('../../common/db');
const List = require('./lists.schema');

const ListsService = {
  insert: (reqBody) => List.create(reqBody),

  getAll: () => List.findAll(),
};

module.exports = ListsService;

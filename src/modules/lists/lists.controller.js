const listsService = require('./lists.service');

const ListsController = {
  insert: async (req, res) => {
    const list = await listsService.insert(req.body);
    res.status(200).json(list);
  },

  getAll: async (_, res) => {
    const lists = await listsService.getAll();
    res.json(lists);
  },
};

module.exports = ListsController;

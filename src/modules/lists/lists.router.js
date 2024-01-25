const { Router } = require('express');
const ListsController = require('./lists.controller');

const router = Router();

router.post('/', ListsController.insert);
router.get('/', ListsController.getAll)

module.exports = router;

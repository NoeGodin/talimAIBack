const List = require('../modules/lists/lists.schema');
const Task = require('../modules/tasks/tasks.schema');

const seed = async () => {
  const lists = await List.findAll();
  if (lists.length) return;

  await List.bulkCreate([
    { name: 'List 1' },
    { name: 'List 2' },
    { name: 'List 3' },
    { name: 'List 4' },
    { name: 'List 5' },
  ]);

  await Task.bulkCreate([
    { content: 'Task 1', listId: 1 },
    { content: 'Task 2', listId: 1 },
    { content: 'Task 3', listId: 1 },
    { content: 'Task 4', listId: 1 },
    { content: 'Task 1', listId: 2 },
    { content: 'Task 2', listId: 2 },
    { content: 'Task 3', listId: 2 },
    { content: 'Task 4', listId: 2 },
    { content: 'Task 1', listId: 3 },
    { content: 'Task 2', listId: 3 },
    { content: 'Task 3', listId: 3 },
    { content: 'Task 4', listId: 4 },
  ]);
};

module.exports = seed;

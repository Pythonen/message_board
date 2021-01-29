const router = require('express').Router();
const queries = require('./board.queries');

router.get('/', async (req, res) => {
  const boards = await queries.find();

  res.json(boards);
});

router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const board = await queries.get(name);
  res.json(board);
});

module.exports = router;

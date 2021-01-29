const router = require('express').Router();
const boardsRouter = require('./board/board.routes');

router.get('/', (req, res) => {
  res.json({
    message: 'hello',
  });
});

router.use('/boards', boardsRouter);

module.exports = router;

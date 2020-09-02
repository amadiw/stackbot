const router = require('express').Router();
const { Robot } = require('../db');

//GET /api/robots
router.get('/', async (req, res, next) => {
  try {
    const allRobots = await Robot.findAll();
    res.json(allRobots);
  } catch (err) {
    next(err);
  }
});

//GET /api/robots/:robotId
router.get('/:robotId', async (req, res, next) => {
  console.log(req.params)
  try {
    const robot = await Robot.findByPk(req.params.robotId)
    res.json(robot)
  } catch (err) {
    next(err)
  }
})

module.exports = router;

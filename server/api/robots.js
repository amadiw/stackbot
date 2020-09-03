const router = require('express').Router();
const { Robot } = require('../db');
const { Project } = require('../db')

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
  // console.log('req------> ', req.params)
  try {
    const { robotId } = req.params
    const robot = await Robot.findByPk(robotId, {
      include: {
        model: Project
      }
    })
    res.json(robot)
  } catch (err) {
    next(err)
  }
})

module.exports = router;

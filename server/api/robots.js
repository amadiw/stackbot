const router = require('express').Router();
const { Robot } = require('../db');
const { Project } = require('../db');
// const robot = require('../db/robot');

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
  try {
    const { robotId } = req.params;
    const robot = await Robot.findByPk(robotId, {
      include: {
        model: Project,
      },
    });
    res.json(robot);
  } catch (err) {
    next(err);
  }
});

//POST /api/robots
router.post('/', async (req, res, next) => {
  try {
    // console.log('req.body-----> ',req.body)
    const newRobot = await Robot.create(req.body);
    res.status(201).json(newRobot);
    // res.send('hello post')
  } catch (err) {
    next(err);
  }
});

//DELETE /api/robots/:robotId
router.delete('/:robotId', async (req, res, next) => {
  try {
    const { robotId } = req.params;

    await Robot.destroy({
      where: {
        id: robotId,
      },
    });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

//PUT /api/robots/:robotId
router.put('/:robotId', async (req, res, next) => {
  try {
    const { robotId } = req.params;
    const robot = await Robot.findByPk(robotId);
    const updateRobot = await robot.update(req.body);
    res.json(updateRobot);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

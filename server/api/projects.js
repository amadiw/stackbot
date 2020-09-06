const router = require('express').Router();
const { Project } = require('../db');
const { Robot } = require('../db');

//GET /api/projects
router.get('/', async (req, res, next) => {
  try {
    const allProjects = await Project.findAll();
    res.json(allProjects);
  } catch (err) {
    next(err);
  }
});

//GET /api/projects/:projectId
router.get('/:projectId', async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findByPk(projectId, {
      include: {
        model: Robot,
      },
    });
    res.json(project);
  } catch (err) {
    next(err);
  }
});

//POST /api/projects
router.post('/', async (req, res, next) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

//DELETE /api/projects/:projectId
router.delete('/:projectId', async (req, res, next) => {
  try {
    const { projectId } = req.params;
    await Project.destroy({
      where: {
        id: projectId,
      },
    });
    res.send(204);
  } catch (err) {
    next(err);
  }
});

//PUT /api/projects/:projectId
router.put('/:projectId', async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findByPk(projectId);
    const updateProject = await project.update(req.body);
    res.json(updateProject);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

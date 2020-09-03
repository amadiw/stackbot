const router = require('express').Router()
const { Project } = require('../db')
const { Robot } = require('../db')

//GET /api/projects
router.get('/', async(req, res, next) => {
  try {
    const allProjects = await Project.findAll()
    res.json(allProjects)
  } catch (err) {
    next(err)
  }
})

//GET /api/projects/:projectId
router.get('/:projectId', async (req, res, next) => {
  try {
    const { projectId } = req.params
    const project = await Project.findByPk(projectId, {
      include: {
        model: Robot
      }
    })
    res.json(project)
  } catch (err) {
    next(err)
  }
})

module.exports = router;

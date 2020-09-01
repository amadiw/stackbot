const router = require('express').Router()
const { Project } = require('../db')

//GET /api/projects
router.get('/', async(req, res, next) => {
  try {
    const allProjects = await Project.findAll()
    res.json(allProjects)
  } catch (err) {
    next(err)
  }
})

module.exports = router

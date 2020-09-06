const db = require('./database');
const Project = require('./project');
const Robot = require('./robot');

Project.belongsToMany(Robot, { through: 'robots_projects' });
Robot.belongsToMany(Project, { through: 'robots_projects' });

module.exports = {
  db,
  Project,
  Robot,
};

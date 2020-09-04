const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('robots', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  fuelType: {
    type: Sequelize.ENUM('gas', 'diesel', 'electric'),
    defaultValue: 'electric'
  },
  fuelLevel: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 100
    },
    defaultValue: 100
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://iconarchive.com/icons/ypf/transformers/256/transformer-icon.png'
  }
});

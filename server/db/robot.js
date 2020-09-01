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
    defaultValue: 'https://zdnet2.cbsistatic.com/hub/i/r/2020/06/16/a4a4823e-ca8b-440e-a820-258bff48d5f8/resize/1200xauto/f5383aa665ec4090e65d99373e6423a3/spot.jpg'
  }
});

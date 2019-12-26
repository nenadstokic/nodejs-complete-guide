const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'DicaBoga!2020', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

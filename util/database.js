const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'sembol12', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

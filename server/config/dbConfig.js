const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('car_management', 'postgres', 'Sahil@110', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433,
  });

sequelize.authenticate()
  .then(() => console.log('Database connection successful'))
  .catch((err) => console.error('Database connection error:', err));

module.exports = sequelize;
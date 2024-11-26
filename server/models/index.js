const sequelize = require('../config/dbConfig');
const User = require('./user');
const Car = require('./car');

sequelize.sync({ alter: true })
  .then(() => console.log('Database synced'))
  .catch((err) => console.error('Database sync error:', err));

module.exports = { User, Car };

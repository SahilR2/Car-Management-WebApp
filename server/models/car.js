const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const User = require('./user');

const Car = sequelize.define('Car', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  images: { type: DataTypes.JSON, allowNull: false }, // Store array of image URLs
  tags: { type: DataTypes.STRING, allowNull: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

Car.belongsTo(User, { foreignKey: 'userId' });

module.exports = Car;

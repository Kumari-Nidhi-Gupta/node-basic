// models/User.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/index.js'); // Your Sequelize instance

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // Define other fields as needed
  },
  {
    sequelize,
    modelName: 'User',
  }
);

module.exports = User;
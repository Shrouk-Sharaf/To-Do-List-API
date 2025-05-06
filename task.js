const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db.js');

const Tasks = db.define(
  'Task',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    DueDate:{
        type: DataTypes.DATE,
        allowNull: true,
    }
  },
);

module.exports = Tasks;
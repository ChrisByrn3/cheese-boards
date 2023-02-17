const {Sequelize, sequelize} = require('./db');
const {DataTypes} = require('sequelize');

// - defining the Board model
let Board = sequelize.define("Board", {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.NUMBER
});

module.exports = {
    Board
};
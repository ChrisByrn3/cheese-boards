const {Sequelize, sequelize} = require('./db');
const {DataTypes} = require('sequelize');

//- define the Cheese model
let Cheese = sequelize.define("Cheese", {
    title: DataTypes.STRING,
    description: DataTypes.STRING
});

module.exports = {
    Cheese
};
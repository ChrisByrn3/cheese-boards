const {Sequelize, sequelize} = require('./db');
const {DataTypes} = require('sequelize');

// defining the User Model
let User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

module.exports = {
    User
};
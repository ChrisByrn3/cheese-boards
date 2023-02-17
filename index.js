const {User} = require('./user')
const {Board} = require('./Board')
const {Cheese} = require('./Cheese')

//User one to many Board association
User.hasMany(Board);
Board.belongsTo(User);

//Board and Cheese many to many assoc
Cheese.belongsToMany(Board, {through: 'Cheese_Board'});
Board.belongsToMany(Cheese, {through: 'Cheese_Board'});



module.exports = {
    User,
    Board, Cheese
};

const {sequelize} = require('./db');
const {User, Board, Cheese} = require('./index');


describe('User, Board & Cheese Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a User', async () => {
        const user1 = await User.create({
            name: 'Chris', email: 'chris@email.com'
        })
        expect(user1.name).toBe('Chris');
        expect(user1.email).toBe('chris@email.com');
    })

    test('can create a Board', async () => {
        const board1 = await Board.create({
            type: 'French', description: 'A selection of the finest french cheeses', rating: 4
        })
        expect(board1.type).toBe('French');
        expect(board1.description).toBe('A selection of the finest french cheeses');
        expect(board1.rating).toBe(4)
    })

    test('can create a Cheese', async () => {
        const cheese1 = await Cheese.create({
            title: 'Brie', description: 'A creamy cheese full of flavour'
        })
        expect(cheese1.title).toBe('Brie');
        expect(cheese1.description).toBe('A creamy cheese full of flavour');
    })
})


describe('Association Tests', () => {

test('can add boards to user', async () => {
    const board1 = await Board.create({
        type: 'French', description: 'A selection of the finest french cheeses', rating: 4
    })
    const board2 = await Board.create({
        type: 'Spicy', description: 'A board containing some of the worlds best nice n spicy cheeses', rating: 5
    })
    const user = await User.create({
        name: 'Chris', email: 'chris@email.com'
    })
    await user.addBoard(board1);
    await user.addBoard(board2);
const chrisBoards = await user.getBoards(); 
    expect(chrisBoards.length).toBe(2);
    expect(chrisBoards[1].UserId).toBe(user.id);
expect(chrisBoards[0].type).toBe('French')}
)
})
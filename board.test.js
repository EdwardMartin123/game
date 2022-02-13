const { createBoard } = require('./board')

test('creates a board with n columns', () => {
    expect(createBoard(2,2).length).toBe(2)
})

test('creates a board with n rows', () => {
    expect(createBoard(2,2)[0].length).toBe(2)
})
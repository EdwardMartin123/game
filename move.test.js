const { movePiece } = require("./move")

test('Throws error when left move off board', () => {
    let mockBoard = [[{ landmine: false }]]
    let mockPiece = { x: 0, y: 0, minesHit: 0 }
    expect(() => movePiece(0, -1, mockPiece, mockBoard)).toThrow("You cannot move off the edge of the board")
})

test('Throws error when right move off board', () => {
    let mockBoard = [[{ landmine: false }]]
    let mockPiece = { x: 0, y: 0, minesHit: 0 }
    expect(() => movePiece(0, 1, mockPiece, mockBoard)).toThrow("You cannot move off the edge of the board")
})

test('Throws error when down move off board', () => {
    let mockBoard = [[{ landmine: false }]]
    let mockPiece = { x: 0, y: 0, minesHit: 0 }
    expect(() => movePiece(-1, 0, mockPiece, mockBoard)).toThrow("You cannot move off the edge of the board")
})

test('Throws error when up move off board', () => {
    let mockBoard = [[{ landmine: false }]]
    let mockPiece = { x: 0, y: 0, minesHit: 0 }
    expect(() => movePiece(1, 0, mockPiece, mockBoard)).toThrow("You cannot move off the edge of the board")
})

test('Right moves are valid', () => {
    let mockBoard = [[{ landmine: false }, { landmine: false }], [{ landmine: false }, { landmine: false }]]
    let mockPiece = { x: 0, y: 0, minesHit: 0 }
    const expectedCoords = [0, 1]
    expect(movePiece(0, 1, mockPiece, mockBoard)).toEqual(expect.arrayContaining(expectedCoords))
})

test('Left moves are valid', () => {
    let mockBoard = [[{ landmine: false }, { landmine: false }], [{ landmine: false }, { landmine: false }]]
    let mockPiece = { x: 1, y: 0, minesHit: 0 }
    const expectedCoords = [0, 0]
    expect(movePiece(0, -1, mockPiece, mockBoard)).toEqual(expect.arrayContaining(expectedCoords))
})

test('Down moves are valid', () => {
    let mockBoard = [[{ landmine: false }, { landmine: false }], [{ landmine: false }, { landmine: false }]]
    let mockPiece = { x: 0, y: 1, minesHit: 0 }
    const expectedCoords = [0, 0]
    expect(movePiece(-1, 0, mockPiece, mockBoard)).toEqual(expect.arrayContaining(expectedCoords))
})

test('Up moves are valid', () => {
    let mockBoard = [[{ landmine: false }, { landmine: false }, { landmine: false }], [{ landmine: false }, { landmine: false }, { landmine: false }]]
    let mockPiece = { x: 0, y: 0, minesHit: 0 }
    const expectedCoords = [1, 0]
    expect(movePiece(1, 0, mockPiece, mockBoard)).toEqual(expect.arrayContaining(expectedCoords))
})

test('Winning move', () => {
    let mockBoard = [[{ landmine: false }, { landmine: false }], [{ landmine: false }, { landmine: false }]]
    let mockPiece = { x: 0, y: 0, minesHit: 0 }
    expect(() => movePiece(1, 0, mockPiece, mockBoard)).toThrow("Win")
})


test('Losing move and landmine hit', () => {
    let mockBoard = [[{ landmine: true }, { landmine: true }], [{ landmine: true }, { landmine: true }]]
    let mockPiece = { x: 0, y: 0, minesHit: 1 }
    expect(() => movePiece(0, 1, mockPiece, mockBoard)).toThrow("Lose")
})


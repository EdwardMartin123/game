// test routines to test various aspects of the game

const { createBoard } = require('./board')
const { movePiece } = require('./fdb')

function testCreateBoard() {
    let board = createBoard(2, 2, 2)
    if (board.length === 2 && board[0].length === 2) console.log("Create Board Passes")
    else throw "CREATE BOARD FAILS"
}

function testMoveOffLeftSideOfBoard() {
    try {
        let mockBoard = [[{ landmine: false }]]
        let mockPiece = { x: 0, y: 0, minesHit: 0 }

        movePiece(0, -1, mockPiece, mockBoard)
        throw "LEFT BOUNDARY FAILS"
    } catch (error) {
        console.log("Left Boundary Passes")
    }
}

function testMoveOffRightSideOfBoard() {
    try {
        let mockBoard = [[{ landmine: false }]]
        let mockPiece = { x: 0, y: 0, minesHit: 0 }

        movePiece(0, 1, mockPiece, mockBoard)
        throw "RIGHT BOUNDARY FAILS"
    } catch (error) {
        console.log("Right Boundary Passes")
    }
}

function testMoveOffBottomOfBoard() {
    try {
        let mockBoard = [[{ landmine: false }]]
        let mockPiece = { x: 0, y: 0, minesHit: 0 }

        movePiece(-1, 0, mockPiece, mockBoard)
        throw "BOTTOM BOUNDARY FAILS"
    } catch (error) {
        console.log("Bottom Boundary Passes")
    }
}

function testMoveOffTopOfBoard() {
    try {
        let mockBoard = [[{ landmine: false }]]
        let mockPiece = { x: 0, y: 0, minesHit: 0 }

        movePiece(1, 0, mockPiece, mockBoard)
        throw "TOP BOUNDARY FAILS"
    } catch (error) {
        console.log("Top Boundary Passes")
    }
}

function testValidRightMove() {
    try {
        let mockBoard = [[{ landmine: false }, { landmine: false }], [{ landmine: false }, { landmine: false }]]
        let mockPiece = { x: 0, y: 0, minesHit: 0 }

        let newCoords = movePiece(0, 1, mockPiece, mockBoard)
        if (newCoords[0] === 0 && newCoords[1] === 1) console.log("Right move passes")
        else throw "RIGHT MOVE FAILS"
    } catch (error) {
        console.log(error)
        throw "RIGHT MOVE FAILS"
    }
}

function testValidLeftMove() {
    try {
        let mockBoard = [[{ landmine: false }, { landmine: false }], [{ landmine: false }, { landmine: false }]]
        let mockPiece = { x: 1, y: 0, minesHit: 0 }

        let newCoords = movePiece(0, -1, mockPiece, mockBoard)
        if (newCoords[0] === 0 && newCoords[1] === 0) console.log("Left move passes")
        else throw "LEFT MOVE FAILS"
    } catch (error) {
        throw "LEFT MOVE FAILS"
    }
}

function testValidDownMove() {
    try {
        let mockBoard = [[{ landmine: false }, { landmine: false }], [{ landmine: false }, { landmine: false }]]
        let mockPiece = { x: 0, y: 1, minesHit: 0 }

        let newCoords = movePiece(-1, 0, mockPiece, mockBoard)
        if (newCoords[0] === 0 && newCoords[1] === 0) console.log("Down move passes")
        else throw "DOWN MOVE FAILS"
    } catch (error) {
        throw "DOWN MOVE FAILS"
    }
}

function testValidUpMove() {
    try {
        let mockBoard = [[{ landmine: false }, { landmine: false }, { landmine: false }], [{ landmine: false }, { landmine: false }, { landmine: false }]]
        let mockPiece = { x: 0, y: 0, minesHit: 0 }

        let newCoords = movePiece(1, 0, mockPiece, mockBoard)
        if (newCoords[0] === 1 && newCoords[1] === 0) console.log("Up move passes")
        else throw "UP MOVE FAILS"
    } catch (error) {
        throw "UP MOVE FAILS"
    }
}

function testWinningMove() {
    try {
        let mockBoard = [[{ landmine: false }, { landmine: false }], [{ landmine: false }, { landmine: false }]]
        let mockPiece = { x: 0, y: 0, minesHit: 0 }
        movePiece(1, 0, mockPiece, mockBoard)
        throw "WINNING MOVE FAILS"
    } catch (error) {
        if (error === "Win") console.log("Winning move passes")
        else throw error
    }
}

function testLosingMove() {
    try {
        let mockBoard = [[{ landmine: true }, { landmine: true }], [{ landmine: true }, { landmine: true }]]
        let mockPiece = { x: 0, y: 0, minesHit: 1 }
        movePiece(0, 1, mockPiece, mockBoard)
        throw "LOSING MOVE FAILS"
    } catch (error) {
        if (error === "Lose") console.log("Losing move passes")
        else throw error
    }
}

function testSuite() {
    try {
        testCreateBoard()
        testMoveOffLeftSideOfBoard()
        testMoveOffRightSideOfBoard()
        testMoveOffBottomOfBoard()
        testMoveOffTopOfBoard()
        testValidRightMove()
        testValidLeftMove()
        testValidDownMove()
        testValidUpMove()
        testWinningMove()
        testLosingMove()

    } catch (error) {
        console.log(error)
    }
}

testSuite()
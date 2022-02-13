
class Square { // unit of larger board. Could hold more info (colour?)
    constructor() {
        this.landmine = false
    }
};

exports.createBoard = (rows, columns, numberOfLandmines) => {

    let board = []

    // build board from unit squares
    for (let i = 0; i < rows; i++) {
        let row = []
        for (let j = 0; j < columns; j++) {
            row.push(new Square)
        }
        board.push(row)
    }

    // place landmines randomly
    let remainingMines = numberOfLandmines
    while (remainingMines > 0) {
        // get random row and column
        let row = Math.floor(Math.random() * rows)
        let column = Math.floor(Math.random() * columns)

        if (!board[column][row].landmine && !(row === 0 && column === 0 )) { 
            board[column][row].landmine = true
            remainingMines--
        }

    }

    return board
}

// for visualising the board - used for debugging. '*' represents a landmine
exports.printBoard = board => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[(board.length-1)-i][j].landmine ? process.stdout.write("[*]") : process.stdout.write("[ ]")
        }
        console.log(`\n`)
    }
}
const { createBoard, printBoard } = require("./board")

// node stuff for reading from the console
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Piece { // holds info of the piece's position and number of mines hit
    constructor(row, column) {
        this.x = column;
        this.y = row;
        this.minesHit = 0;
    }
}

function movePiece(up, right, piece, board) {

    // check the move is valid
    if ( // if invalid (i.e. out of bounds) don't make the move and inform the user
        piece.x + right > board[0].length - 1 ||
        piece.x + right < 0 ||
        piece.y + up > board.length - 1 ||
        piece.y + up < 0) {
        throw ("You cannot move off the edge of the board")
    } else { // make the move
        piece.x = piece.x + right
        piece.y = piece.y + up

    }

    // check for landmine hits
    if (board[piece.y][piece.x].landmine) { // increment mines hit
        console.log("BANG! YOU HIT A LANDMINE!")
        board[piece.y][piece.x].landmine = false
        piece.minesHit++
    }
    else console.log("Successful Move!")

    // check if the game is won or lost
    if (piece.minesHit === 2) throw "Lose"
    else if (board[0].length - 1 === piece.y) throw "Win"
    else return [piece.y, piece.x]

}

// main loop for handling moves
function askQuestion() {
    console.log("Your coordinates are: [", piece.y + 1, ",", piece.x + 1, "]")

    rl.question(`Make your move \n`, move => {
        try {
            switch (move) {
                case "R":
                    movePiece(0, 1, piece, board)
                    break
                case "L":
                    movePiece(0, -1, piece, board)
                    break
                case "U":
                    movePiece(1, 0, piece, board)
                    break
                case "D":
                    movePiece(-1, 0, piece, board)
                    break
                default: {
                    console.log("Enter a valid move")
                    askQuestion()
                }

            }
            askQuestion()
        } catch (error) {
            if (error === "Win") console.log("Congratulations, you reached the top of the board and therefore you win!")
            else if (error === "Lose") console.log("Sorry, you have hit two landmines and therefore you lose.")
            else {
                console.log(error)
                askQuestion()
            }
        }
    })

}


// get random number of mines, min at 1, max at 16 for now
let landmines = Math.floor(Math.random() * 16) + 1
// create the board
let board = createBoard(8, 8, landmines)
//printBoard(board)

// create the user's piece at 0,0
let piece = new Piece(0, 0)

// intro
console.log("This game is played on an 8x8 board.")
console.log("The goal is to reach the top of the board")
console.log("without hitting more than one landmine.")
console.log("You start in the bottom left-hand corner of the board.")
console.log("You can move by entering R, L, U or D ")
console.log("followed by pressing Enter.")
console.log("Good Luck!")


// start moving
askQuestion()

module.exports.movePiece = movePiece
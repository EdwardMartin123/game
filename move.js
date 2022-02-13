exports.movePiece = (up, right, piece, board) => {

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
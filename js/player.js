//PLAYER OBJECTS

//objects
// var COLOR = {
//     BLACK: -1,
//     EMPTY: 0,
//     WHITE: 1
// }

var COLOR = {
    BLACK: "black",
    EMPTY: "empty",
    WHITE: "white"
}

//grid definition
// var GRID = {
//     //constructor
//     GRID: function(){

//     }
// }

//piece objects
var PIECE = {
    //1: { name: "pawn", pieceValue: 1, position: -1 },
    NONE: { name: "none", pieceValue: 0 },
    PAWN: { name: "pawn", pieceValue: 1 },
    ROOK: { name: "rook", pieceValue: 5 },
    KNIGHT: { name: "knight", pieceValue: 3 },
    BISHOP: { name: "bishop", pieceValue: 3 },
    QUEEN: { name: "queen", pieceValue: 8 },
    KING: { name: "king", pieceValue: 10 }
}
// var PIECE = {
//     //1: { name: "pawn", pieceValue: 1, position: -1 },
//     0: { name: "none", pieceValue: 0 },
//     1: { name: "pawn", pieceValue: 1 },
//     2: { name: "rook", pieceValue: 5 },
//     3: { name: "knight", pieceValue: 3 },
//     4: { name: "bishop", pieceValue: 3 },
//     5: { name: "queen", pieceValue: 8 },
//     6: { name: "king", pieceValue: 10 }
// }

var gridPiece1 = {
    color: COLOR.BLACK,
    piece: PIECE.KNIGHT
}

//cell definition
var CELL = {
    gridId: -1,                 //gridId (0-63)
    color: COLOR.EMPTY,
    //piece: PIECE[0]             //set to NONE (by default)
    piece: PIECE.NONE           //set to NONE (by default)
}

//player object 
var PLAYER1 = {
    color: "white",
    isTurn: true,
}

//player object 
var PLAYER2 = {
    color: "black",
    isTurn: false
}
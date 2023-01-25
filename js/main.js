/*----- constants -----*/

// const letterValue = {
//     a: 0,
//     b: 1,
//     c: 2,
//     d: 3,
//     e: 4,
//     f: 5,
//     g: 6,
//     h: 7,
//     i: 8,
//     j: 9
// }


// const boardElement = document.querySelector(".board")
// const tileElement = document.querySelector('board > div')

/*----- state variables -----*/
let board;
let rows = 10;
let cols = 10;

let bombCount = 30;


/*----- cached elements  -----*/


let bombEl = document.getElementById("bomb-Count")
let startButton = document.querySelector("button")

class Tile {
    constructor(row, col) {
        this.isMine = false;
        this.isRevealed = false;
        this.isFlagged = false;
        this.adjMineCount = null;
        this.row = row;
        this.col = col;
    }
}


/*----- event listeners -----*/
startButton.addEventListener("click", () => {
    console.log("start clicked")
});


/*----- functions -----*/


init();
function init() {
    // FILL THE DIV WITH NULL ARRAY
    board = [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null]
    ]

    // GO THROUGH THE ARR AND CREATE A NEW CLASS FOR EACH ROW/COL LOCATION
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            board[r][c] = new Tile(r, c)
            // board[r][c].addEventListener("click", clickTile)
        }
    }

    console.log(board);
    generateBombs();

}


function generateBombs() {
    document.getElementById("bomb-Count").innerText = bombCount

    while (bombCount > 0) {
        let randomRow = Math.floor(Math.random() * rows)
        let randomCol = Math.floor(Math.random() * cols)
        // console.log(randomRow)
        // console.log(randomCol)
        // console.log(board[randomRow][randomCol])

        if (board[randomRow][randomCol].isMine === false) {
            board[randomRow][randomCol].isMine = true

            bombCount--;
            console.log(`${randomRow}-${randomCol}`)

            document.getElementById(`${randomRow}-${randomCol}`).style.backgroundColor = 'green';

        };

        console.log(document.getElementById(`${randomRow}-${randomCol}`))
    }
}

// function clickTile() {

// }

function render() {

}

























// const boardElement = document.querySelector(".board")
// const tileElement = document.querySelector('board > div')

// function handleLeftClick(event) {
//     let eventArr = event.target.id.split("")
//     let row = eventArr[1]
//     let col = eventArr[3]
//     if (board[row][col].isFlagged === true) return;
//     if (board[row][col].isMine === true) {
//         console.log("boom")
//     };
//     if (board[row][col].isMine === false) {
//         console.log("safe")
//     };
// }

// function render() {
//     board.forEach(function (rowArr) {
//         rowArr.forEach(function (square) {
//             square.render()
//         });
//     });
// }

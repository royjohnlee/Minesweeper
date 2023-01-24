/*----- constants -----*/
const boardRows = 10
const boardCols = 10
const mine_count = 30;

/*----- state variables -----*/
let board;
let win;



/*----- cached elements  -----*/


const boardElement = document.querySelector("board")
const tileElement = document.querySelector('board > div')

class Tile {
    constructor(row, col) {
        this.isMine = false;
        this.isRevealed = false;
        this.isFlagged = false;
        this.adjMineCount = null;
        this.row;
        this.col;
    }
    render() {
        console.log("square rendered");
    }
}

/*----- event listeners -----*/
// boardElement.addEventListener('click', handleLeftClick);
// boardElement.addEventListener('click', handleRightClick);

/*----- functions -----*/
init();
function init() {
    board = [];
    for (let row = 0; row < boardRows; row++) {
        board[row] = []
        for (let col = 0; col < boardCols; col++) {
            board[row].push(new Tile(row, col))
        }
    }
    // render();
    // generateBombs();
}

function handleLeftClick(event) {
    let eventArr = event.target.id.split("")
    let row = eventArr[1]
    let col = eventArr[3]
    if (board[row][col].isFlagged === true) return;
    if (board[row][col].isMine === true) {
        console.log("boom")
    };
    if (board[row][col].isMine === false) {
        console.log("safe")
    };
}

function generateBombs() {
    while (mine_count > 0) {
        let randomRow = Math.floor(Math.random() * boardRows)
        let randomCol = Math.floor(Math.random() * boardCols)

        if (board[randomRow][randomCol].isMine === false) {
            board[randomRow][randomCol].isMine = true;
            mine_count--;
            document.getElementById(`c${randomCol}r${randomRow}`).style.backgroundColor = "black";
        }
    }
}

function render() {
    board.forEach(function (rowArr) {
        rowArr.forEach(function (square) {
            square.render()
        });
    });
}

/*----- constants -----*/
class Tile {
    constructor(row, col) {
        this.isMine = false;
        this.isRevealed = false;
        this.isFlagged = false;
        this.adjMineCount = null;
        this.floodNumber = 0;
        this.row = row;
        this.col = col;
    }
}

const rows = 10;
const cols = 10;


/*----- state variables -----*/
let board;
let bombCount;
let winner;

/*----- cached elements  -----*/

let bombEl = document.getElementById("bomb-Count")
let restartButton = document.querySelector("button")
let boardEl = document.getElementById("board")

/*----- event listeners -----*/
boardEl.addEventListener('click', handleClick)
restartButton.addEventListener("click", () => {
    window.location.reload();
});

/*----- functions -----*/
init();

function init() {
    // FILL THE DIV WITH NULL ARRAY
    bombCount = 15;

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
        }
    }
    generateBombs();
    generateFlood();
    render();
}


function generateBombs() {
    document.getElementById("bomb-Count").innerText = bombCount

    while (bombCount > 0) {
        let randomRow = Math.floor(Math.random() * rows)
        let randomCol = Math.floor(Math.random() * cols)
        if (board[randomRow][randomCol].isMine === false) {
            board[randomRow][randomCol].isMine = true
            bombCount--;
        };
    }
}
function generateFlood() {
    //iterate board -> rowArr,rowIdx -> tile, colIdx => !tile.isMine
    board.forEach(function (rowArr, rowIdx) {
        rowArr.forEach(function (tile, colIdx) {
            tile.floodNumber += checkAdjTile(rowIdx - 1, colIdx - 1);
            tile.floodNumber += checkAdjTile(rowIdx - 1, colIdx);
            tile.floodNumber += checkAdjTile(rowIdx - 1, colIdx + 1);
            tile.floodNumber += checkAdjTile(rowIdx, colIdx - 1);
            tile.floodNumber += checkAdjTile(rowIdx, colIdx + 1);
            tile.floodNumber += checkAdjTile(rowIdx + 1, colIdx - 1);
            tile.floodNumber += checkAdjTile(rowIdx + 1, colIdx);
            tile.floodNumber += checkAdjTile(rowIdx + 1, colIdx + 1);
        })
    });
    console.log(board)
}

function checkAdjTile(rowIdx, colIdx) {
    if (rowIdx < 0 || colIdx < 0 || rowIdx > board.length - 1 || colIdx > board.length - 1) return 0


    if (board[rowIdx][colIdx].isMine) return 1

    return 0;
}

function render() {
    renderBoard();
    renderMessage();
    renderControl();
}

function renderBoard() {
    board.forEach(function (rowArr, rowIdx) {
        rowArr.forEach(function (tile, colIdx) {
            const tileId = `${rowIdx}-${colIdx}`
            const tileEl = document.getElementById(tileId)
            // tile.addEventListener("click", handleLeftClick())
            if (tile.isMine) {
                tileEl.style.backgroundColor = "blue"
            }
            if (tile.isFlagged) {
                tileEl.innerText = "📍"
            }
            // if floodNumber ===0 and isRevealed => tile.style.backgroundColor = "black"
            // console.log(tileEl, tile)
        })
    });
}

function renderMessage() {
    if (winner === "L") document.getElementById("message").innerHTML = "You Lose"
    if (winner === "W") document.getElementById("message").innerHTML = "You Lose"
}

function renderControl() {

}

function handleClick(event) {
    let currTile = board[event.target.id[0]][event.target.id[2]]

    if (!currTile.isMine && currTile.floodNumber === 0) floodFeature();

    if (!currTile.isMine && currTile.floodNumber > 0) currTile.isRevealed = true;

    winner = checkWinner(currTile)

    render()
}

function floodFeature() {
};

function checkWinner(currTile) {
    if (currTile.isMine) return "L"
    let allRevealed = false
    let allBombsFlagged = false
    board.forEach(function (rowArr, rowIdx) {
        rowArr.forEach(function (tile, colIdx) {
            // if all tiles don't have mines && isRevealed === true

            // if all bombs tiles isFlagged
        });
    });
    if (allRevealed && allBombsFlagged) return "W"
    return null
};




















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

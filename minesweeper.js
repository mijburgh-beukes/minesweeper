// @ts-check
document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: true,
      hidden: true
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      hidden: true
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 1,
      isMine: true,
      hidden: true
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 2,
      isMine: true,
      hidden: true
    }
  ]
};

function startGame () {
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);

  for (let i = 0; i < board.cells.length; i++){
    let numberMines = countSurroundingMines(board.cells[i]);
    board.cells[i].surroundingMines = numberMines;
  }
  
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
  let totalCells = board.cells.length;
  let mineTotal = 0;
  let clearTotal = 0;

  for(let i = 0; i < board.cells.length; i++){
    if(board.cells[i].isMine == true
      && board.cells[i].isMarked == true){
      mineTotal++
    }
    if(board.cells[i].isMine == false
      && board.cells[i].isMarked == false){
      clearTotal++
    }
    if(mineTotal + clearTotal == totalCells)
      return lib.displayMessage('You win')
  }
  return
} 
  

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundCount = 0;

  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);

  // console.log(surroundingCells);

  for (let i = 0; i < surroundingCells.length; i++){
    if(surroundingCells[i].isMine == true) surroundCount ++
  }

  return surroundCount
}


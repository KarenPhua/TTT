//
// Note check off "Show timestamps" for console.log to look better.
//

const EMPTY_CELL = undefined;
let cells = [ EMPTY_CELL, EMPTY_CELL, EMPTY_CELL,
              EMPTY_CELL, EMPTY_CELL, EMPTY_CELL,
              EMPTY_CELL, EMPTY_CELL, EMPTY_CELL ]
//
// Cell Manipulation - Translates row,col into flat index to access "cells" array
//
// [ 0  1  2
//   3  4  5
//   6  7  8 ]
//

function getCellValue(row, col) {
   // IMPLEMENT ME!
   return EMPTY_CELL;
}


function setCell(row, col, text) {
   // IMPLEMENT ME!
}

// checkRows
//
// Checks for winner on each row.
// Returns: 'X' or 'O' or EMPTY_CELL if no row winners
//
function checkRows() {
    // IMPLEMENT ME
    return EMPTY_CELL;
}

// checkColumns
//
// Checks for winner on each column
// Returns: 'X' or 'O' or EMPTY_CELL if no column winners
//
function checkColumns() {
    // IMPLEMENT ME
    return EMPTY_CELL;
}

// checkForwardDiagonal
//
// Checks for winner on forward diagonal / where 2,0 is first cell to check
// Returns: 'X' or 'O' or EMPTY_CELL if no forward diagonal winners
//
function checkForwardDiagonal() {
    // IMPLEMENT ME
    return EMPTY_CELL;
}

// checkBackwardDiagonal
//
// Checks for winner on forward diagonal \ where 0,0 is first cell to check
// Returns: 'X' or 'O' or EMPTY_CELL if no forward diagonal winners
//
function checkBackwardDiagonal() {
    // IMPLEMENT ME
    return EMPTY_CELL;
}

function checkWinner() {

    let r = checkRows();
    let c = checkColumns();
    let f = checkForwardDiagonal();
    let b = checkBackwardDiagonal();

    let w = r || c || f || b || EMPTY_CELL;

    if (w == EMPTY_CELL)
        console.log("No winner");
    else
        console.log("Winner was " + w);
}


//
// Utility Functions
//
function setBoard(text) {
    // IMPLEMENT ME
}

// dumpBoard
//
// Prints board to console, like:
//
// Board looks like this:
// X - -
// - X -
// - - X
function dumpBoard() {
    console.log("Board looks like this:");
    // IMPLEMENT ME
}
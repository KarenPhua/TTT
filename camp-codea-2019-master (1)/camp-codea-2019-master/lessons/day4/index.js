
let currentText = 'X'
let active = true
function cellClick(args) {
    if(!active){
        return
    }
    let cell = args.target;
    if (getCellValueByCell(cell)== EMPTY_CELL){
        setCellByCell(cell,currentText);
        if(currentText == 'X')
            currentText = 'O'
    else 
            currentText = 'X'

     let winner = checkWinner()

    if(winner != EMPTY_CELL){
        active = false;
    setStatus(winner + " is the winner!");
    }
    else if(!hasEmptyCell()){
        setStatus("TIE!")
    }
    
}
    //Check if active, if not, return
    
    //If active, check if current cell is empty, if not, return
    
    //if cell is empty, set the cell with current user's symbol
    
    //Check winner, if found, update status and return
    
    //If no winner, check if the game is over, if it's over, update status and return 
    
    //Set current user to next user
}


   

function resetGame() {
    setBoard(EMPTY_CELL);
    setStatus("Playing")
    active = true;
}




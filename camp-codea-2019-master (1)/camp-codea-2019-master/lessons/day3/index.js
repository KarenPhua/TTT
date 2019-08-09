function start() {
    let w = EMPTY_CELL;

    // Test 1
    //
    setBoard(EMPTY_CELL);
    dumpBoard();
    checkWinner();


    // Test 2
    //
    setBoard('X');
    dumpBoard();
    checkWinner();

    // Test 3
    //
    setBoard(EMPTY_CELL);
    for(let i=0; i < 3; i++) {
        setCell(i,i,'X');
    }
    dumpBoard();
    checkWinner();
}

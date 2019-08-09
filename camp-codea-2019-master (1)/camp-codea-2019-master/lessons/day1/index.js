function cellClick(args){
    const cell = args.target;
    var currentText = cell.innerText
    if(currentText == 'X')
    cell.innerText = 'O';
    else
        cell.innerText = 'X';
}

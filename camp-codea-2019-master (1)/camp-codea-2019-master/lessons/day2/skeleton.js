function checkRows(buttonTexts) {
    // I NEED TO BE WRITTEN
}

function checkColumns(buttonTexts) {
    // I NEED TO BE WRITTEN
}

function checkDiagonals(buttonTexts) {
  // I NEED TO BE WRITTEN
}

function checkWinner(buttonTexts) {
  // I'M DONE, RUN ME!

  let firstRow = '';
  let secondRow = '';
  let thirdRow = '';

  for (let i = 0; i < 3; i++) {
    firstRow += buttonTexts[i] + ' ';
    secondRow += buttonTexts[i+3] + ' ';
    thirdRow += buttonTexts[i+6] + ' ';
  }
  console.log('Our board looks like: ');
  console.log(firstRow);
  console.log(secondRow);
  console.log(thirdRow);

  let rowWinner = checkRows(buttonTexts);
  let colWinner = checkColumns(buttonTexts);
  let diagWinner = checkDiagonals(buttonTexts);
  let actualWinner = rowWinner || colWinner || diagWinner || 'no one';

  console.log('Our winner is: ' + actualWinner);
}

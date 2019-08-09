function checkRows(buttonTexts) {
  if(buttonTexts[0]==buttonTexts[1] && buttonTexts[1]==buttonTexts[2] && (buttonTexts[0]== 'X' || buttonTexts[0] == '0'))
  {console.log('The winner is ' + buttonTexts[1])};
  if(buttonTexts[3]==buttonTexts[4] && buttonTexts[4]==buttonTexts[5])
  {console.log('The winner is ' + buttonTexts[4])};
  if(buttonTexts[6]==buttonTexts[7] && buttonTexts[7]==buttonTexts[8])
  {console.log('The winner is ' + buttonTexts[7])};
}

function checkColumns(buttonTexts) {
  if(buttonTexts[0]==buttonTexts[3] && buttonTexts[3]==buttonTexts[6] && (buttonTexts[0]== 'X' || buttonTexts[0] == '0'))
  {console.log('The winner is ' + buttonTexts[0])};
  if(buttonTexts[1]==buttonTexts[4] && buttonTexts[4]==buttonTexts[7])
  {console.log('The winner is ' + buttonTexts[1])};
  if(buttonTexts[2]==buttonTexts[5] && buttonTexts[5]==buttonTexts[8])
  {console.log('The winner is ' + buttonTexts[2])};
}

function checkDiagonals(buttonTexts) {
  if(buttonTexts[0]==buttonTexts[4] && buttonTexts[4]==buttonTexts[8] && (buttonTexts[0]== 'X' || buttonTexts[0] == '0'))
  {console.log('The winner is ' + buttonTexts[0])};
  if(buttonTexts[2]==buttonTexts[4] && buttonTexts[4]==buttonTexts[6])
  
  {console.log('The winner is ' + buttonTexts[2])};
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

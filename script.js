function getComputerChoice() {
  const computerChoiceId = Math.floor(Math.random() * 3) + 1;

  switch (computerChoiceId) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
  }
}


function getWinningSign(sign1, sign2) {
  if (sign1 === 2) return 0;
  switch (sign1) {
    case 'Rock':
      return (sign2 === 'Scissors') ? sign1 : sign2;
    case 'Paper':
      return (sign2 === 'Rock') ? sign1 : sign2;
    case 'Scissors':
      return (sign2 === 'Paper') ? sign1 : sign2;
  }
}


function playRound(playerSelection, computerSelection) {
  const playerSign = playerSelection[0].toUpperCase().concat(playerSelection.slice(1).toLowerCase())
  const winningSign = getWinningSign(playerSign, computerSelection);
  if (!winningSign) {
    return 'Draw!';
  }

  if (winningSign === playerSelection) {
    return `You Win! ${playerSign} beats ${computerSelection}`
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }

}
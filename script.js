const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

function getComputerChoice() {
  const computerChoiceId = Math.floor(Math.random() * 3) + 1;

  switch (computerChoiceId) {
    case 1:
      return rock;
    case 2:
      return paper;
    case 3:
      return scissors;
  }
}


function getWinningSign(sign1, sign2) {
  if (sign1 === sign2) return 0;
  switch (sign1) {
    case rock:
      if (sign2 === scissors) return sign1;
      if (sign2 === paper) return sign2;
    case paper:
      if (sign2 === rock) return sign1;
      if (sign2 === scissors) return sign2;
    case scissors:
      if (sign2 === paper) return sign1;
      if (sign2 === rock) return sign2;
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

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
  const winningSign = getWinningSign(playerSelection, computerSelection);

  if (!winningSign) return 0;
  return winningSign === playerSelection ? 1 : 2;
}

function normalizeCase(text) {
  text = text.trim();
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

function playGame() {
  const totalRounds = 5;
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= totalRounds; round++) {
    const playerSelection = normalizeCase(
      prompt('Type your choice: Rock, Paper, or Scissors')
    );
    const computerSelection = getComputerChoice();
    const winner = playRound(playerSelection, computerSelection);

    if (winner === 0) {
      console.log('Draw!');
      continue;
    }

    if (winner === 1) {
      playerScore++;
      console.log(
        `Round ${round}: You Win! ${playerSelection} beats ${computerSelection}`
      );
    } else {
      computerScore++;
      console.log(
        `Round ${round}: You Lose! ${computerSelection} beats ${playerSelection}`
      );
    }
  }

  if (playerScore > computerScore) {
    console.log('You Win!');
  } else if (computerScore > playerScore) {
    console.log('Computer Wins!');
  } else {
    console.log('Draw!');
  }
}

playGame();

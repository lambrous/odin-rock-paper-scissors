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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('Draw!');
    return 0;
  }
  if (
    (playerSelection === rock && computerSelection === scissors) ||
    (playerSelection === paper && computerSelection === rock) ||
    (playerSelection === scissors && computerSelection === paper)
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return 2;
  }
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
    console.log(`Round ${round}:`);
    const playerSelection = normalizeCase(
      prompt('Type your choice: Rock, Paper, or Scissors')
    );
    const computerSelection = getComputerChoice();
    const winner = playRound(playerSelection, computerSelection);
    if (!winner) continue;
    if (winner === 1) playerScore++;
    else computerScore++;
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

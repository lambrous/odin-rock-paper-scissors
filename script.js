const choices = ["rock", "paper", "scissors"];
const [rock, paper, scissors] = choices;

const choicesBtns = document.querySelectorAll(".choices button");
const statusEl = document.querySelector(".status h1");
const computerChoiceEl = document.querySelector(".computer .choice");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const playerContainer = document.querySelector(".player");
const computerContainer = document.querySelector(".computer");
const resetBtn = document.querySelector(".reset");

const totalRounds = 5;
let currentRound = 1;
let playerScore = 0;
let computerScore = 0;

function playGame() {
  choicesBtns.forEach((btn) => {
    btn.addEventListener("click", playRound);
  });
}

function playRound() {
  if (currentRound > totalRounds) return;

  const playerChoice = this.classList[1];
  const computerChoice = getComputerChoice();
  computerChoiceEl.textContent = getChoiceSign(computerChoice);

  const winner = getRoundWinner(playerChoice, computerChoice);
  if (winner === 1) playerScore++;
  if (winner === 2) computerScore++;

  showRoundWinner(winner);
  updateScores();
  currentRound++;

  if (currentRound >= totalRounds) endGame();
}

function getRoundWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return 0;

  if (
    (playerSelection === rock && computerSelection === scissors) ||
    (playerSelection === paper && computerSelection === rock) ||
    (playerSelection === scissors && computerSelection === paper)
  ) {
    return 1;
  }

  return 2;
}

function getComputerChoice() {
  const computerChoiceId = Math.floor(Math.random() * 3);
  return choices[computerChoiceId];
}

function getChoiceSign(choice) {
  switch (choice) {
    case rock:
      return "✊";
    case paper:
      return "🖐️";
    case scissors:
      return "✌️";
  }
}

function changeStatusText(text = "ROCK PAPER SCISSORS") {
  statusEl.textContent = text;
}

function showRoundWinner(winner) {
  switch (winner) {
    case 0:
      changeStatusText("Draw!");
      break;
    case 1:
      changeStatusText("You Scored!");
      break;
    case 2:
      changeStatusText("Computer Scored!");
  }
}

function updateScores() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function disabledAllBtns() {
  choicesBtns.forEach((btn) => {
    btn.disabled = true;
  });
}

function showGameWinner() {
  let result;

  if (playerScore > computerScore) result = "YOU WIN!";
  else if (playerScore < computerScore) result = "YOU LOSE!";
  else result = "DRAW!";

  changeStatusText(result);
}

function toggleHideElements(...elements) {
  for (const el of elements) {
    el.classList.toggle("hide");
  }
}

function endGame() {
  showGameWinner();
  disabledAllBtns();
  toggleHideElements(playerContainer, computerContainer, resetBtn);

  resetBtn.addEventListener("click", () => {
    window.location.reload();
  });
}

playGame();

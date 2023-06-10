function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerValue() {
  let computerValue = Math.floor(Math.random() * 3);

  return computerValue;
}

function playRound(playerSelection, computerValue) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock") {
    playerValue = 0;
  } else if (playerSelection === "paper") {
    playerValue = 1;
  } else if (playerSelection === "scissors") {
    playerValue = 2;
  }

  if (computerValue === 0) {
    computerSelection = "rock";
  } else if (computerValue === 1) {
    computerSelection = "paper";
  } else if (computerValue === 2) {
    computerSelection = "scissors";
  }

  const difference = playerValue - computerValue;

  if (difference === 0) {
    return "It's a tie";
  } else if (difference === 1 || difference === -2) {
    playerScore++;

    return `You Win! ${capitalizeFirstLetter(
      playerSelection
    )} beats ${capitalizeFirstLetter(computerSelection)}`;
  } else if (difference === -1 || difference === 2) {
    computerScore++;

    return `You Lose! ${capitalizeFirstLetter(
      computerSelection
    )} beats ${capitalizeFirstLetter(playerSelection)}`;
  } else {
    return "Error";
  }
}

function game() {
  let playerSelection;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper, or Scissors?");
    console.log(playRound(playerSelection, getComputerValue()));
  }

  if (playerScore > computerScore) {
    console.log(
      `You Win! you scored ${playerScore} points, computer scored ${computerScore} points.`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You Lose! you scored ${playerScore} points, computer scored ${computerScore} points. `
    );
  } else {
    `Tied... you both scored ${playerScore}`;
  }

  playerScore = 0;
  computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;

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
    ++playerScore;

    return `You Win! ${capitalizeFirstLetter(
      playerSelection
    )} beats ${capitalizeFirstLetter(computerSelection)}`;
  } else if (difference === -1 || difference === 2) {
    ++computerScore;

    return `You Lose! ${capitalizeFirstLetter(
      computerSelection
    )} beats ${capitalizeFirstLetter(playerSelection)}`;
  } else {
    return "Error";
  }
}

function game() {
  let gamePlaying = true;

  playerSelects.forEach((button) => {
    button.addEventListener("click", () => {
      if (gamePlaying) {
        result.textContent = playRound(button.className, getComputerValue());
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;

        if (playerScore === 5 || computerScore === 5) {
          gamePlaying = false;

          if (playerScore > computerScore) {
            finalResult.textContent = `You're the first to gained 5 points. You win!!!`;
          } else if (playerScore < computerScore) {
            finalResult.textContent = `Computer has gained 5 points first. You lose :(`;
          } else {
            finalResult.textContent = `Tied... both scored the same`;
          }
        }
      }
    });
  });

  // playerScore = 0;
  // computerScore = 0;
}

const result = document.querySelector(".result");
const finalResult = document.querySelector(".final-result");
const playerSelects = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;
let playerScoreEl = document.querySelector(".player-score");
let computerScoreEl = document.querySelector(".computer-score");

game();

function getComputerChoice() {
  let randomNumer = Math.floor(Math.random() * 3);
  switch (randomNumer) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function toCapital(string) {
  return string.charAt(0).toUpperCase().concat(string.slice(1).toLowerCase());
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionStandardised = toCapital(playerSelection);

  let playerNumber = playerSelectionStandardised === "Rock" ? 0 : 
    (playerSelectionStandardised === "Paper" ? 1 : 2);
  let computerNumber = computerSelection === "Rock" ? 0 : (computerSelection === "Paper" ? 1 : 2);

  if (playerNumber === computerNumber) {
    return "It's a tie!";
  } else if (playerNumber + computerNumber === 2) {
    if (playerNumber > computerNumber) {
      return "You lose! Rock beats scissors!";
    } else {
      return "You win! Rock beats scissors!";
    }
  } else if (playerNumber > computerNumber) {
    if (playerNumber === 1) {
      return "You win! Paper beats rock!";
    } else {
      return "You win! Scissors beat paper!";
    }
  } else if (playerNumber === 0) {
    return "You lose! Paper beats rock!";
  } else {
    return "You lose! Scissors beat paper!";
  }
}

function endGame(playerScore, computerScore) {
  let message = `The final score is ${playerScore}:${computerScore}!\n`;
  if (playerScore > computerScore) {
    message = message.concat("You won!");
  } else {
    message = message.concat("You lost!");
  }

  if (alert(message)) {} 
  else {
    window.location.reload();
  }
}

function main() {
  const score = document.querySelector("#score");
  const display = document.querySelector("#display");
  const buttons = document.querySelectorAll("button");
  let playerScore = 0;
  let computerScore = 0;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const outcome = playRound(button.id, getComputerChoice());
      if (outcome.includes("win")) {
        playerScore++;
      } else if (outcome.includes("lose")) {
        computerScore++;
      }
      score.textContent = `Score: ${playerScore}:${computerScore}`;
      display.textContent = outcome;
      if (playerScore === 5 || computerScore === 5) {
        endGame(playerScore, computerScore);
      }
    });
  });
}

main()
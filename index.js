let playerScore = 0;
let computerScore = 0;
const rounds = 5;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function getPlayerChoice() {
  let choice = prompt("Enter your choice");
  if (!choices.includes(choice.toLowerCase())) {
    alert("Invalid choice");
    return getPlayerChoice();
  }
  return choice.toLowerCase();
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      return "Computer wins!";
    } else {
      playerScore++;
      return "Player wins!";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      return "Computer wins!";
    } else {
      playerScore++;
      return "Player wins!";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      return "Computer wins!";
    } else {
      playerScore++;
      return "Player wins!";
    }
  }
}

function playGame() {
  for (let i = 0; i < rounds; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(`Player choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(playRound(playerChoice, computerChoice));
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
}
playGame();

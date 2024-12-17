let playerScore = 0;
let computerScore = 0;
const rounds = 5;
const choices = ["rock", "paper", "scissors"];
let isComputerPicking = false;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const choiceBox = document.querySelector(".choice-box");
choiceBox.addEventListener("click", async function (event) {
  if (isComputerPicking) {
    alert("Computer is picking, please wait!");
    return;
  }
  let playerChoice, computerChoice;
  const winnerAlert = document.querySelector(".winner");

  if (event.target.tagName === "BUTTON") {
    playerChoice = getPlayerChoice(event);
    toggleSpinner(true);
    isComputerPicking = true;
    await sleep(2000);
    computerChoice = getComputerChoice();
    toggleSpinner(false);
    isComputerPicking = false;
    winnerAlert.innerText = playRound(playerChoice, computerChoice);
    console.log("show");
    winnerAlert.style.display = "block";
    updateScore();
    await sleep(1000);
    console.log("hide");
    winnerAlert.style.display = "none";
  }
});

function updateScore() {
  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  document.querySelector("#computer-score").innerText = computerScore;
  document.querySelector("#player-score").innerText = playerScore;
}

function toggleSpinner(state) {
  document.querySelector("#spinner").style.display = state ? "block" : "none";
  document.querySelector("#computer-choice").style.display = state
    ? "none"
    : "block";
}

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * 3)];
  const computerChoice = document.querySelector("#computer-choice");
  computerChoice.innerText = choice.charAt(0).toUpperCase() + choice.slice(1);
  return choice;
}

function getPlayerChoice(event) {
  const playerChoice = document.querySelector("#player-choice");
  const value = event.target.id;
  playerChoice.innerText = value.charAt(0).toUpperCase() + value.slice(1);
  return value;
}

function playRound(playerChoice, computerChoice) {
  console.log(`player choice: ${playerChoice}`);
  console.log(`computer choice: ${computerChoice}`);
  if (playerChoice === null || computerChoice === null) return;
  if (playerChoice === computerChoice) {
    const msg = "It's a tie!";
    console.log(msg);
    return msg;
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      const msg = "Computer wins!";
      console.log(msg);
      return msg;
    } else {
      playerScore++;
      const msg = "Player wins!";
      console.log(msg);
      return msg;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      const msg = "Computer wins!";
      console.log(msg);
      return msg;
    } else {
      playerScore++;
      const msg = "Player wins!";
      console.log(msg);
      return msg;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      const msg = "Computer wins!";
      console.log(msg);
      return msg;
    } else {
      playerScore++;
      const msg = "Player wins!";
      console.log(msg);
      return msg;
    }
  }
}

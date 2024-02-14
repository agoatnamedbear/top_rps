const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const playRound = (playerChoice, computerChoice) => {
  computerChoice = getComputerChoice();

  playerChoice = prompt("Rock Paper or Scissors?").toLowerCase();

  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    console.log("Invalid Choice! Please choose Rock, Paper or Scissors");
  } else if (playerChoice === computerChoice) {
    console.log("It's a Tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
  } else {
    console.log(`Computer Wins! ${computerChoice} beats ${playerChoice}`);
  }
};

const playGame = (playRound) => {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }
};

playGame(playRound);

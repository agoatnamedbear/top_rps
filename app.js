const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'rock'
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


const playRound = (playerChoice, computerChoice) => {
    computerChoice = getComputerChoice();

    playerChoice = prompt('Rock Paper or Scissors?').toLowerCase();

    if (playerChoice === computerChoice) {
        console.log("It's a Tie!");
    }

    else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`Player Wins! ${playerChoice} beats ${computerChoice}`);
    }

    else {console.log(`Computer Wins! ${computerChoice} beats ${playerChoice}`);}
}

playRound();
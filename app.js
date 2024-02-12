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

let computerChoice = getComputerChoice(;)

let playerChoice = prompt('Rock Paper or Scissors?').toLowerCase();


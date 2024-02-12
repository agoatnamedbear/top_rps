const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        console.log('rock');
    } else if (randomNum === 1) {
        console.log('paper');
    } else {
        console.log('scissors');
    }
}

let comuterChoice = getComputerChoice(;)

let playerChoice = prompt('Rock Paper or Scissors?').toLowerCase();


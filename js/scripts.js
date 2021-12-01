const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissors');
const playerSign = document.getElementById('player-sign');
const computerSign = document.getElementById('computer-sign');

rock.onclick = () => {
    playerSign.className = "";
    playerSign.className = "fas fa-hand-rock";
}
paper.onclick = () => {
    playerSign.className = "";
    playerSign.className = "fas fa-hand-paper";
}
scissor.onclick = () => {
    playerSign.className = "";
    playerSign.className = "fas fa-hand-scissors";
}
playerSign.onclick = () => {
    console.log("player")

}
computerSign.onclick = () => {
    console.log("computer")
}

// -----------------------------------------------------------------------

playRound = (playerSelection, computerSelection) => {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return ["You lose! Paper beats rock.", false];
        } else {
            return ["You win! Rock beats scissors.", true];
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return ["You lose! Scissors beats paper.", false];
        } else {
            return ["You win! Paper beats rock.", true];
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return ["You lose! Rock beats scissors.", false];
        } else {
            return ["You win! Scissors beats paper.", true];
        }
    }
}

computerPlay = () => {
    const computerOptions = ['rock', 'paper', 'scissors']
    const choiceNumber = Math.floor(Math.random() * 3);
    const computerSelection = computerOptions[choiceNumber];
    computerSign.className = "";
    computerSign.className = `fas fa-hand-${computerSelection}`;
    return computerSelection;
}

game = () => {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 2; i++) {
        // const playerSelection = prompt('Rock, paper, scissors: ');
        const computerSelection = computerPlay();

        let roundResult = playRound(playerSelection, computerSelection);
        let result = roundResult[0];
        let playerWins = roundResult[1];
        (playerWins) ? playerPoints++ : computerPoints++;
    }
    if (playerPoints > computerPoints) {
        console.log('player wins');
    } else if (playerPoints < computerPoints) {
        console.log('computer wins');
    } else {
        console.log("it's tie");
    }
}

game();


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissors');
const playerSign = document.getElementById('player-sign');
const computerSign = document.getElementById('computer-sign');
const flexContainer = document.getElementsByClassName('flex-container');
const message = document.querySelector('.message');
const historyUpdate = document.querySelector('.history__update');

var playerPoints = 0;
var computerPoints = 0;

console.log("running...");
console.log(historyUpdate);
// -----------------------------------------------------------------------


computerPlay = () => {
    const computerOptions = ['rock', 'paper', 'scissors']
    const choiceNumber = Math.floor(Math.random() * 3);
    const computerSelection = computerOptions[choiceNumber];
    computerSign.className = "";
    computerSign.className = `fas fa-hand-${computerSelection}`;
    console.log(`computer - ${computerSelection}`);
    return computerSelection;
}

playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "<b><pre>It's a tie! </pre></b>";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerPoints++;
            return "<b><pre>You lose! </pre></b> Paper beats rock.";
        } else {
            playerPoints++;
            return "<b><pre>You win! </pre></b> Rock beats scissors.";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerPoints++;
            return "<b><pre>You lose! </pre></b> Scissors beats paper.";
        } else {
            playerPoints++;
            return "<b><pre>You win! </pre></b> Paper beats rock.";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerPoints++;
            return "<b><pre>You lose! </pre></b> Rock beats scissors.";
        } else {
            playerPoints++;
            return "<b><pre>You win! </pre></b> Scissors beats paper.";
        }
    }
}


gameWinner = () => {
    console.log(`player points: ${playerPoints}`);
    console.log(`computer points: ${computerPoints}`);
    if (playerPoints === 5 || computerPoints === 5) {
        if (playerPoints > computerPoints) {
            console.log('player wins');
        } else if (playerPoints < computerPoints) {
            console.log('computer wins');
        } else {
            console.log("it's tie");
        }
    }
}

playGame = (sign) => {
    playerSign.className = "";
    playerSign.className = `fas fa-hand-${sign}`;
    console.log(`Player - ${sign}`);
    let roundResult = playRound(sign, computerPlay());
    console.log(roundResult);
    let div = document.createElement("div");
    div.className = "history";
    div.innerHTML = message.innerHTML;
    historyUpdate.prepend(div);
    console.log(historyUpdate);
    message.innerHTML = roundResult;
    gameWinner();
}

game = () => {
    flexContainer[0].addEventListener('click', (e) => {
        console.log(e.target.id);
        const sign = e.target.id;
        playGame(sign);
    });
}

// game => playGame(sign) => playRound(playerSelection, computerSelection) 
// => gameWinner();

game();
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissors');
const playerSign = document.getElementById('player-sign');
const computerSign = document.getElementById('computer-sign');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const flexContainer = document.getElementsByClassName('flex-container');
const message = document.querySelector('.message');
const historyUpdate = document.querySelector('.history__update');

var playerPoints = 0;
var computerPoints = 0;

// Returns => Winner of the game
gameWinner = () => {
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

// Returns => computer's sign
computerPlay = () => {
    // Generate random number between 0 and 2 and choses the computer's sign
    const computerOptions = ['rock', 'paper', 'scissors']
    const choiceNumber = Math.floor(Math.random() * 3);

    // Set computer sign
    const computerSelection = computerOptions[choiceNumber];
    computerSign.className = "";
    computerSign.className = `fas fa-hand-${computerSelection}`;

    return computerSelection;
}

// Returns => message
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

// Updates the score
updateScore = () => {
    playerScore.innerHTML = playerPoints;
    computerScore.innerHTML = computerPoints;
}

// add history div
addHistoryDiv = () => {
    // Create a div with class history and prepend it to the historyUpdate div
    let div = document.createElement("div");
    div.className = "history";
    div.innerHTML = message.innerHTML;
    historyUpdate.prepend(div);
}

// Update the history
updateHistory = () => {
    addHistoryDiv(); // add history div
    let historyCount = historyUpdate.childElementCount;
    if (historyCount >= 5) {
        historyUpdate.removeChild(historyUpdate.lastChild);
    }
}

playGame = (sign) => {
    // Change the sign of player
    playerSign.className = "";
    playerSign.className = `fas fa-hand-${sign}`;
    let roundResult = playRound(sign, computerPlay());

    updateScore();   // Update the score
    updateHistory(); // Update the history

    // Set message => roundResult
    message.innerHTML = roundResult;

    // Check for winner
    gameWinner();
}

game = () => {
    flexContainer[0].addEventListener('click', (e) => {
        const sign = e.target.id;
        if (sign) playGame(sign);
    });
}

game();

// game => playGame(sign) => playRound(playerSelection, computerSelection) 
// => gameWinner();

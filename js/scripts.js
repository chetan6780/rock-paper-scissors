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
const modal = document.getElementById("restart-modal");
const restart = document.getElementById('restart');
const startModal = document.getElementById('start-modal');
const start = document.getElementById('start');
const modalText = document.getElementById('modal-text');

let playerPoints = 0;
let computerPoints = 0;

// Set the Winner of the game
gameWinner = () => {
    if (playerPoints === 5 || computerPoints === 5) {
        modal.style.display = "block";
        if (playerPoints > computerPoints) {
            modalText.innerHTML = "🤩 You Won!";
        } else {
            modalText.innerHTML = "😕 You Lost!";
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
            return "<b><pre>You lose! </pre></b>😕 Paper beats rock.";
        } else {
            playerPoints++;
            return "<b><pre>You win! </pre></b>🤩 Rock beats scissors.";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerPoints++;
            return "<b><pre>You lose! </pre></b>😕 Scissors beats paper.";
        } else {
            playerPoints++;
            return "<b><pre>You win! </pre></b>🤩 Paper beats rock.";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerPoints++;
            return "<b><pre>You lose! </pre></b>😕 Rock beats scissors.";
        } else {
            playerPoints++;
            return "<b><pre>You win! </pre></b>🤩 Scissors beats paper.";
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

// Restart the game
restartGame = () => {
    playerPoints = 0;
    computerPoints = 0;
    updateScore();
    while (historyUpdate.hasChildNodes()) {
        historyUpdate.removeChild(historyUpdate.lastChild);
    }
    message.innerHTML = "Get <b><pre> 5 </pre></b> points to win the game";
    modal.style.display = "none";
}

// Play the game
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
    start.onclick = () => startModal.style.display = "none";
    flexContainer[0].addEventListener('click', (e) => {
        const sign = e.target.id;
        if (sign) playGame(sign);
    });
    restart.onclick = () => {
        restartGame();
    }
}

game();

// game => playGame(sign) => playRound(playerSelection, computerSelection) 
// => gameWinner() => restartGame();

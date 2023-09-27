document.addEventListener('DOMContentLoaded', function() {

    let playerSelection; // Define a variable to store the player's choice
    let computerScore = 0; // Initialize the computer's score
    let playerScore = 0; // Initialize the player's score

    // Function to get the computer's choice
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    // Function to play a round and update the scores
    function playRound(playerSelection, computerSelection) {
        let result;

        if (playerSelection === computerSelection) {
            result = "Tie!";
        } else if (
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock")
        ) {
            result = "You win!";
            playerScore++;
        } else {
            result = "You lose!";
            computerScore++;
        }
        updateScore(); // Update the score on the screen
        return result;
    }

    // Function to update the score on the screen
    function updateScore() {
        const playerScoreElement = document.querySelector(".p-count");
        const computerScoreElement = document.querySelector(".c-count");
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    }

    // Function to check if someone has won
    function someoneWon(wins, looses) {
        if (wins === 3 || looses === 3) {
            return true;
        }
        return false;
    }

    const Rbtn = document.getElementById("choiceRock");
    const Pbtn = document.getElementById("choicePaper");
    const Sbtn = document.getElementById("choiceScissors");

    // Add event listeners to the buttons to capture the player's choice
    Rbtn.addEventListener('click', function() {
        playerSelection = 'rock';
        playGame();
    });

    Pbtn.addEventListener('click', function() {
        playerSelection = 'paper';
        playGame();
    });

    Sbtn.addEventListener('click', function() {
        playerSelection = 'scissors';
        playGame();
    });
    function displayResult(message) {
        const gameResultElement = document.getElementById("gameResult");
        gameResultElement.textContent = message;
    }


    function playGame() {
        const computerChoice = getComputerChoice();
        const result = playRound(playerSelection, computerChoice);
        displayResult(result);
    
        if (someoneWon(playerScore, computerScore)) {
            if (playerScore >= 5) {
                displayResult("You won the game!");
            } else if (computerScore >= 5) {
                displayResult("Computer won the game!");
            }
            playerScore = 0;
            computerScore = 0;
            updateScore();
    
            }
    }
    

    const resetBtn = document.getElementById("Play");
    resetBtn.addEventListener('click', function() {
        playerScore = 0;
        computerScore = 0;
        updateScore();
        displayResult("");
    });

});

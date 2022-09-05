const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const playerChoiceDisplay = document.getElementById("pc");
const computerChoiceDisplay = document.getElementById("cc");
const resultDisplay = document.getElementById("result");

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

const choices = ["rock", "paper", "scissors"];

let playerChoice;
let computerChoice;

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    return computerChoiceDisplay.innerHTML = `Computer choice: ${computerChoice}`;
}

rockBtn.onclick = function selectRock() {
    playerChoice = rockBtn.id;
    getComputerChoice(playerChoice);
    checkWinner();
    playerChoiceDisplay.innerHTML = `Player choice: ${playerChoice}`;
}
paperBtn.onclick = function selectPaper() {
    playerChoice = paperBtn.id;
    getComputerChoice(playerChoice);
    checkWinner();
    playerChoiceDisplay.innerHTML = `Player choice: ${playerChoice}`;
}
scissorsBtn.onclick = function selectScissors() {
    playerChoice = scissorsBtn.id;
    getComputerChoice(playerChoice);
    checkWinner();
    playerChoiceDisplay.innerHTML = `Player choice: ${playerChoice}`;
}

function checkWinner() {
    if (playerChoice === computerChoice) {
        resultDisplay.innerHTML = "Tie!";
    } else if (
        (playerChoice === "rock" && computerChoice == "scissors") ||
        (playerChoice === "paper" && computerChoice == "rock") ||
        (playerChoice === "scissors" && computerChoice == "paper")
    ){
        resultDisplay.innerHTML = "You win!";
        playerPoints++;
        playerScoreDisplay.innerHTML = `You: ${playerPoints}`;

    } else if (
        (playerChoice === "rock" && computerChoice == "paper") ||
        (playerChoice === "paper" && computerChoice == "scissors") ||
        (playerChoice === "scissors" && computerChoice == "rock")
    ){
        resultDisplay.innerHTML = "You lost!";
        computerPoints++;
        computerScoreDisplay.innerHTML = `Computer: ${computerPoints}`;
    }
}
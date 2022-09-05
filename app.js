const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const playerChoiceDisplay = document.getElementById("pc");
const computerChoiceDisplay = document.getElementById("cc");
const resultDisplay = document.getElementById("result");

const choices = ["rock", "paper", "scissors"];

let playerChoice;
let computerChoice;

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
        resultDisplay.innerHTML = "Result: Tie!";
    } else if (
        (playerChoice === "rock" && computerChoice == "scissors") ||
        (playerChoice === "paper" && computerChoice == "rock") ||
        (playerChoice === "scissors" && computerChoice == "paper")
    ){
        resultDisplay.innerHTML = "Result: You win!";
    } else if (
        (playerChoice === "rock" && computerChoice == "paper") ||
        (playerChoice === "paper" && computerChoice == "scissors") ||
        (playerChoice === "scissors" && computerChoice == "rock")
    ){
        resultDisplay.innerHTML = "Result: You lost!";
    } else {
        alert(`${playerChoice} is not part of the choices!`);
        inputField.value = "";
        playerChoiceDisplay.innerHTML = "Player choice: ";
        computerChoiceDisplay.innerHTML = "Computer choice: ";
        resultDisplay.innerHTML = "Result: "
    }
}
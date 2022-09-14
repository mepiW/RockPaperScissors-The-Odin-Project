const playerChoiceDisplay = document.querySelector(".player");
const computerChoiceDisplay = document.querySelector(".computer");
const resultDisplay = document.querySelector(".result");
const choiceBtns = document.querySelectorAll("button");

let playerChoice;
let computerChoice;

const choices = ["rock", "paper", "scissors"];

choiceBtns.forEach(choiceBtn => addEventListener("click", e => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = `Player choice: ${playerChoice}`;

    getComputerChoice();
    checkWinner();
}));

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomChoice];
    return computerChoiceDisplay.innerHTML = `Computer choice: ${computerChoice}`;
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

    } else if (
        (playerChoice === "rock" && computerChoice == "paper") ||
        (playerChoice === "paper" && computerChoice == "scissors") ||
        (playerChoice === "scissors" && computerChoice == "rock")
    ){
        resultDisplay.innerHTML = "You lost!";
    }
}
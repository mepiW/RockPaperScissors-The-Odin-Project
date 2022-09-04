const playBtn = document.querySelector("button");
const inputField = document.querySelector("input");

const playerChoiceDisplay = document.getElementById("pc");
const computerChoiceDisplay = document.getElementById("cc");
const resultDisplay = document.getElementById("result");

const choices = ["rock", "paper", "scissors"];

let playerSelection;
let computerSelection;

function getComputerChoice() {
    computerSelection =  choices[Math.floor(Math.random() * choices.length)];
    return computerChoiceDisplay.innerHTML = `Computer choice: ${computerSelection}`;
}
playBtn.onclick = function getPlayerChoice() { 
    if (inputField.value == "") {
        alert("You must type your selection!");
    } else {
        playerSelection = inputField.value;
        playerSelection = playerSelection.toLowerCase(playerSelection);
        playerSelection = playerSelection.replaceAll(" ", "");
        
        playerChoiceDisplay.innerHTML = `Player choice: ${playerSelection}`;
        getComputerChoice(playerSelection);
        checkWinner();

        inputField.value = "";
    }
}

function checkWinner() {
    if (playerSelection === computerSelection) {
        resultDisplay.innerHTML = "Result: Tie!";
    } else if (
        (playerSelection === "rock" && computerSelection == "scissors") ||
        (playerSelection === "paper" && computerSelection == "rock") ||
        (playerSelection === "scissors" && computerSelection == "paper")
    ){
        resultDisplay.innerHTML = "Result: You win!";
    } else if (
        (playerSelection === "rock" && computerSelection == "paper") ||
        (playerSelection === "paper" && computerSelection == "scissors") ||
        (playerSelection === "scissors" && computerSelection == "rock")
    ){
        resultDisplay.innerHTML = "Result: You lost!";
    } else {
        alert(`${playerSelection} is not part of the choices!`);
        inputField.value = "";
        playerChoiceDisplay.innerHTML = "Player choice: ";
        computerChoiceDisplay.innerHTML = "Computer choice: ";
        resultDisplay.innerHTML = "Result: "
    }
}
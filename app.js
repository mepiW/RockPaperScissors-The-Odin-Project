const playBtn = document.querySelector("button");
const inputField = document.querySelector("input");
const choices = ["rock", "paper", "scissors"];

let playerSelection;
let computerSelection;

function getComputerChoice() {
    computerSelection =  choices[Math.floor(Math.random() * choices.length)];
    return console.log(computerSelection);
}
playBtn.onclick = function getPlayerChoice() { 
    if (inputField.value == "") {
        alert("You must type your selection");
    } else {
        playerSelection = inputField.value;
        playerSelection = playerSelection.toLowerCase(playerSelection);
        playerSelection = playerSelection.replaceAll(" ", "");
        
        console.log(playerSelection);
        getComputerChoice(playerSelection);
        checkWinner();
    }
    
}

function playRound(computerChoice, playerChoice) {
}

function checkWinner() {
    if (playerSelection === computerSelection) {
        console.log("Tie!");
    } else if (
        (playerSelection === "rock" && computerSelection == "scissors") ||
        (playerSelection === "paper" && computerSelection == "rock") ||
        (playerSelection === "scissors" && computerSelection == "paper")
    ){
                console.log("You win!");
    } else if (
        (playerSelection === "rock" && computerSelection == "paper") ||
        (playerSelection === "paper" && computerSelection == "scissors") ||
        (playerSelection === "scissors" && computerSelection == "rock")
    ){
        console.log("You lost");
    }
}
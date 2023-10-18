

let playerScore = 0
let computerScore = 0
let gameResult = ""
const playerSelection = prompt("Rock Paper Scissors","SCisSoRS").toLowerCase();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let result = choices[Math.floor(Math.random() * choices.length)]
    return result
}

function playRound(playerSelection, computerSelection) {
    let log = "";

    
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerScore++;
        log = "You Win!";
        
    }

    else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ){
        computerScore++
        log = "You Lose!";

       
    }
    
    
    else {
        log = "Tie!";
    }
    return log
}



function game(){

    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
   


}
   

  console.log(game());

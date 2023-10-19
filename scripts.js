

let playerScore = 0
let computerScore = 0
let gameResult = ""
let playerSelection = prompt("Rock Paper Scissors","SCisSoRS").toLowerCase();
let computerSelection = getComputerChoice();

function getPlayerChoice(){
    
}


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

function isGameOver(){
    let overMsg = "Game is Over!"
    return overMsg
}



function game(){
    if (
        (playerScore != 5) ||
        (computerScore !=5)
    ) {
        playRound(playerSelection, computerSelection);
    }

    else if (
        (playerScore === 5) ||
        (computerScore ===5)
    ){
        isGameOver()
    }

   
}
   

  console.log(game());

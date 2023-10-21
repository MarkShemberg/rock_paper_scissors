// Rock Paper Scissors Game

// Declaring Global Variables
let playerScore = 0;
let computerScore =0;
let result = "";

// Declaring variables used to connect to HTML elements 
const rockbtn = document.getElementById("rockBtn")
const paperbtn = document.getElementById("paperBtn")
const scissorsbtn = document.getElementById("scissorsBtn")
const playerScoreP = document.getElementById("playerScore")
const computerScoreP = document.getElementById("computerScore")
const resultText = document.getElementById("resultText")
const resultMsg = document.getElementById("resultMsg")
const resetBtn = document.getElementById("resetBtn")
const modal = document.getElementById("endgameModal")
const endgameMsg= document.getElementById("endgameMsg")

// Adding Eventlisteners to buttons and connecting functions to clicks
rockbtn.addEventListener("click", () => startGame("✊"))
paperbtn.addEventListener("click", () => startGame("✋"))
scissorsbtn.addEventListener("click", () => startGame("✌"))
resetBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click",() => {modal.close();})

// Function to generate a choice for the computer
function getComputerChoice(){
  let choices = ["✊", "✋", "✌"]
  return choices[Math.floor(Math.random() * 3)]
}

// Function to play a round of RPS, used in "click" eventlistener for buttons 
function playRound(playerSelection, computerSelection){

  if (playerSelection === computerSelection){
    result = "Tie"
  }

  else if (
    (playerSelection === "✊" && computerSelection === "✌") ||
    (playerSelection === "✋" && computerSelection === "✊") ||
    (playerSelection === "✌" && computerSelection === "✋")
    ){
      result = "Win";
      playerScore++
  }

  else if (
    (computerSelection === "✊" && playerSelection === "✌") ||
    (computerSelection === "✋" && playerSelection === "✊") ||
    (computerSelection === "✌" && playerSelection === "✋")
   ){
    result = "Lose";
    computerScore++
  }
  updateMsg(result, playerSelection, computerSelection)
  console.log(result);
}

// Function to end the game after a side reaches 5 points, displays the end message in a modal popup
function isGameOver(){
  if (playerScore === 5 || computerScore === 5){
    console.log("Game is Over!");
    setEndmsg();
    modal.showModal();
    
  }
}

// Function to update the score on either side and displays whether player wins/lose/ties
function updateScore(){
  if (result === "Tie"){
    resultText.textContent = "It's a Tie!"
  } else if (result === "Win"){
    resultText.textContent = "You Win!"
  } else if (result === "Lose"){
    resultText.textContent = "You Lose!"
  }

  playerScoreP.textContent = `Player: ${playerScore}`
  computerScoreP.textContent = `Computer: ${computerScore}`
}

// Function to display what both sides chose and who beats who
function updateMsg(result, playerSelection, computerSelection){
  if (result === "Win"){
    resultMsg.textContent = `${playerSelection} \xa0\xa0\xa0beats\xa0\xa0\xa0 ${computerSelection}`
    return
  }

  if (result === "Lose"){
    resultMsg.textContent = `${playerSelection} \xa0\xa0\xa0is beaten by\xa0\xa0\xa0 ${computerSelection}`
    return
  }

  resultMsg.textContent = `${playerSelection} \xa0\xa0\xa0is tied with\xa0\xa0\xa0 ${computerSelection}`
}

// Function tied to the resetBtn which resets the value to default. Shows up in the modal popup
function resetGame(){
  playerScore = 0
  computerScore = 0
  resultText.textContent = "Press a Button to Start"
  resultMsg.textContent = "First to Five points Wins!"
  playerScoreP.textContent = "Player: 0"
  computerScoreP.textContent = "Computer: 0"
}

// Function to change the message which shows up in the modal popup
function setEndmsg(){
  if (playerScore > computerScore){
    endgameMsg.textContent = "You Won!"
  }
  else if (computerScore > playerScore){
    endgameMsg.textContent = "You Lost!"
  }

}

// Function to start game which plays rounds of RPS, updating scores each round until game over requirements are met
function startGame(playerSelection){
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection)
  updateScore()
  isGameOver() 
}


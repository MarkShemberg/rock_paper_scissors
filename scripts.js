// GAME

let playerScore = 0;
let computerScore =0;
let result = "";


function getComputerChoice(){
  let choices = ["✊", "✋", "✌"]
  return choices[Math.floor(Math.random() * 3)]
}

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

function isGameOver(){
  if (playerScore === 5 || computerScore === 5){
    console.log("Game is Over!");
    setEndmsg();
    modal.showModal();
    
  }
}

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

function updateMsg(result, playerSelection, computerSelection){
  if (result === "Win"){
    resultMsg.textContent = `${playerSelection} beats ${computerSelection}`
    return
  }

  if (result === "Lose"){
    resultMsg.textContent = `${playerSelection} is beaten by ${computerSelection}`
    return
  }

  resultMsg.textContent = `${playerSelection} is tied with ${computerSelection}`
}

function restartGame(){
  playerScore = 0
  computerScore = 0
  resultText.textContent = "Press a Button to Start"
  resultMsg.textContent = "First to 5 points Wins!"
  playerScoreP.textContent = "Player: 0"
  computerScoreP.textContent = "Computer: 0"
}

function setEndmsg(){
  if (playerScore > computerScore){
    endgameMsg.textContent = "You Won!"
  }
  else if (computerScore > playerScore){
    endgameMsg.textContent = "You Lost!"
  }

}





const rockbtn = document.getElementById("rockBtn")
const paperbtn = document.getElementById("paperBtn")
const scissorsbtn = document.getElementById("scissorsBtn")
const playerScoreP = document.getElementById("playerScore")
const computerScoreP = document.getElementById("computerScore")
const resultText = document.getElementById("resultText")
const resultMsg = document.getElementById("resultMsg")
const restartBtn = document.getElementById("restartBtn")
const modal = document.getElementById("endgameModal")
const endgameMsg= document.getElementById("endgameMsg")

rockbtn.addEventListener("click", () => startGame("✊"))
paperbtn.addEventListener("click", () => startGame("✋"))
scissorsbtn.addEventListener("click", () => startGame("✌"))
restartBtn.addEventListener("click", restartGame)
restartBtn.addEventListener("click",() => {modal.close();})

function startGame(playerSelection){
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection)
  updateScore()
  isGameOver()
  
}


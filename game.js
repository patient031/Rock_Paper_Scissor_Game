function getComputerChoice (){
  let comp_choice = Math.random();
  if (comp_choice<0.35){
     comp_choice="rock";
  }
  else if (comp_choice >= 0.35 && comp_choice < 0.65){
    comp_choice="paper";
 }
 else if (comp_choice >= 0.65 && comp_choice <= 1){
  comp_choice="scissor";
}

return comp_choice;

}
function getHumanChoice(){
  let human_choice;
  while (true) {
    human_choice = prompt("Choose rock, paper, or scissor:").toLowerCase().trim();
    if (human_choice === "rock" || human_choice === "paper" || human_choice === "scissor") {
      break;
    }
    alert("Invalid input, please enter rock, paper, or scissor.");
  }
  return human_choice;
}

let humanScore=0;
let computerScore=0;

function playRound (human_choice, comp_choice){

 if(human_choice === comp_choice){
  console.log("it's a tie");

 }
 else if ((comp_choice==="rock" &&human_choice==="scissor") || 
 (comp_choice=="paper" && human_choice==="rock") || (comp_choice==="scissor" && human_choice==="paper"))
  {
  console.log("you lose");
  computerScore++;

 }
 else if ((comp_choice==="rock" &&human_choice==="paper") || 
 (comp_choice=="paper" && human_choice==="scissor") || (comp_choice==="scissor" && human_choice==="rock"))
  {
  console.log("you win!");
  humanScore++;

 }
}

function playGame(){
  let rounds=5; 
  for(let i=1; i<=rounds; i++){
    console.log(`round: ${i}`);
    let comp_choice=getComputerChoice();
    let human_choice= getHumanChoice();
    playRound(human_choice, comp_choice);
  }
  console.log("Thank you for playing the game!");
  console.log(`total score: Computer Score : ${computerScore} | User Score: ${humanScore}`);
  }
  playGame();
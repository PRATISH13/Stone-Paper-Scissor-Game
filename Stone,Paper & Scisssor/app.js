let userScore=0;
let computerScore=0;

let choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice =()=>{
    const options=["rock","paper","scissors"];
    //rock,paper,scissor
    const randIdx = Math.floor(Math.random() * 3);//using the random function in js use computer
  return options[randIdx];
};

const drawGame=()=>{
console.log("Game was draw");
msg.innerText="Game was draw!. Play again/";
msg.style.backgroundColor="orange";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        compScorePara.innerText=computerScore;
        console.log("you lose");
        msg.innerText=`You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
  console.log("User choice= ",userChoice);
  //Generate computer choice
  const compChoice=genComputerChoice();
  console.log("comp choice=",compChoice);

  if(userChoice==compChoice){
    //Draw game
    drawGame();
  } else {
    let userWin = true;
    if(userChoice=="rock"){
        //if the compchoice is paper then the user is loss 
        //if the compchoice scissor then the user is win
        userWin=compChoice=="paper" ? false :true;
    } else if(userChoice=="paper"){
        //rock,scissors
        userWin=compChoice=="scissors"? false : true;
    } else{
        //rock,paper this is compchoice
        //user choice is scissor
         userWin=compChoice=="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id"); //take the id value of choice in the html
            console.log("choice was clicked",userChoice);
            playGame(userChoice);
    });
})
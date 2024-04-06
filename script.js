let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const generateComputerchoice = () => {
     const options =["rock", "paper", "scissors"];
  // rock, papar, scissors


  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];

}
// Random no. generate krne ke liye hm const randomIdx = Math.floor(Math.random() * Multiply any no. ); code ka use krte hai


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");  
 


const drawGame = () => {
  // console.log("game was draw");
  msg.innerText = "Game was draw.Play a new game.";
  msg.style.backgroundColor ="red";
};



const showWinnerPartner =(userWin, choiceId, Computerchoice) => {
  if(userWin) {
     userScore++;
     userScorePara.innerText = userScore;


      // console.log("you win!");
      msg.innerText = `Badhai-Ho-Aap-Jeet-chuke-hai! your ${choiceId} beats ${Computerchoice}`
      msg.style.backgroundColor ="green";

  } else{
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("you lose");
    msg.innerText = `Jayiye-Sikh-ke-aaye! ${Computerchoice} beats your ${choiceId}`
    msg.style.backgroundColor ="purple";
 }
};

// console.log ko ham apne windows ke inspect me show krne ke liye console.log ka use krte hai.


const playGame =(choiceId) => {
  //  console.log("choice Id =",  choiceId);  
   //Generate computer choice --> modular
   const Computerchoice = generateComputerchoice();
  //  console.log("computer choice = ",Computerchoice);

  if (choiceId === Computerchoice){
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (choiceId === "rock"){
      //scissors, paper
      userWin = Computerchoice === "paper" ? false : true;
    }else if(choiceId === "paper") {
      //rock,scissors 
      userWin = Computerchoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userWin = Computerchoice === "rock" ? false : true;
    }
    showWinnerPartner(userWin,choiceId, Computerchoice);
  }
};


choices.forEach((choice) => {
  // console.log(choice); ye line ham basically console.log ko ham apne windows ke inspect me show krne ke liye console.log ka use krte hai.



  choice.addEventListener("click",() => {
   const choiceId = choice.getAttribute("id");
    playGame(choiceId)
   // console.log("choice was clicked", choiceId);
  });
});
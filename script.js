let userScore = 0;
let compuScore = 0;
const choices = document.querySelectorAll(".choice");
const dispMsg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const pcScorePara = document.querySelector("#pc-score");

const drawGame = () => {
  dispMsg.innerText = "Game Draw! Play Again";
};

const genCompChoice = () => {
  const options = ["Rock", "Paper", "Scissor"];
  const ran = Math.floor(Math.random() * 3);
  return options[ran];
};

const showWin = (userWin, userChoice, pcChoice) => {
  if (userWin) {
    dispMsg.innerText = `You Win! ${userChoice} beats ${pcChoice}`;
    dispMsg.style.backgroundColor = "Green";
    userScore++;
    userScorePara.innerText = userScore;
  } else {
    dispMsg.innerText = `You Lose! ${pcChoice} beats ${userChoice}`;
    dispMsg.style.backgroundColor = "Red";
    compuScore++;
    pcScorePara.innerText = compuScore;
  }
};

const playGame = (userChoice) => {
  console.log("User Choice", userChoice);
  //Computer Choice
  const pcChoice = genCompChoice();
  console.log("Computer Choice =", pcChoice);
  if (userChoice === pcChoice) {
    //Draw Match
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      //Scissor , paper
      userWin = pcChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      //Scissor , rock
      userWin = pcChoice === "Scissor" ? false : true;
    } else {
      //Rock , Paper
      userWin = pcChoice === "Rock" ? false : true;
    }
    showWin(userWin, userChoice, pcChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

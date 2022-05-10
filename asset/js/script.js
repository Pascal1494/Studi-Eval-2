// alert("La page est bien reliée au fichier html");

//Variables definition
let playing;
let scoreBoard;
let scores;
let activePlayer;

init();

// init Function
function init() {
  // Varibles initilazation
  playing = true;
  scoreBoard = true;
  scores = [0, 0];
  activePlayer = 0;

  //Scores update
  document.getElementById("name-0").innerText = "Player 1";
  document.getElementById("name-1").innerText = "Player 2";
  document.getElementById("actual-0").innerText = "0";
  document.getElementById("actual-1").innerText = "0";
  document.getElementById("score-0").innerText = "0";
  document.getElementById("score-1").innerText = "0";

  // init classes

  document.getElementById("name-0").innerText = "Player 1";
  document.getElementById("name-1").innerText = "Player 2";
  document.getElementById("actual-0").innerText = "0";
  document.getElementById("actual-1").innerText = "0";
  document.getElementById("score-0").innerText = "0";
  document.getElementById("score-1").innerText = "0";
}

// Player change function
//fonction de changement de joueur
function changePlayer() {
  //reset current score
  scoreBoard = 0;

  document.getElementById("actual-" + activePlayer).innerText = scoreBoard;

  //réinitialization active Player
  activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
}

//Roll of the dice function
document.querySelector(".btn-roll").addEventListener("click", () => {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6 + 1);

    //If Dice is not = 1
    if (dice !== 1) {
      scoreBoard += dice;

      document.getElementById("actual-" + activePlayer).innerText = scoreBoard;
      document.querySelector(".dice").style.display = "block";
      document.querySelector(".dice").src = "asset/img/dice-" + dice + ".png";
      console.log(dice);
    } else {
      //Next player
      document.querySelector(".dice").src = "asset/img/dice-" + dice + ".png";

      changePlayer();
    }
  }
});

//Passage to the HOLD function allowing to collect the points accumulated in the "global round" part
document.querySelector(".btn-hold").addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += scoreBoard;
    document.getElementById("score-" + activePlayer).innerText =
      scores[activePlayer];
    //If the active player reaches 100 or more, he wins
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");

      //Display of the winner's message
      document.getElementById("name-" + activePlayer).innerText = "Gagnant !";
      //Game stoppage
      playing = false;
    } else {
      //Sinon changement de joueur
      changePlayer();
    }
  }
});

//New game /

document.querySelector(".btn-new").addEventListener("click", () => {
  init();
});

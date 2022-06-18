//Variables definition
let playing;
let scoreBoard;
let scores;
let activePlayer;

//Music const
const diceSong = new Audio("asset/sound/dice3.wav");
const holdSong = new Audio("asset/sound/Coin.wav");
const winSong = new Audio("asset/sound/win.mp3");
const startSong = new Audio("asset/sound/Jingle-sncf.wav");
const looseSong = new Audio("asset/sound/percut.wav");

//start function
function init() {
  // Variables initilazation
  playing = true;
  scoreBoard = 0;
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
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.add("active");

  //display the dice
  document.querySelector(".dice").style.display = "none";
  //display the dice move
  document.querySelector(".dice-move").style.display = "none";
  //   document.querySelector(".btn-hold").style.display = "none";
  //display the hold button
}

// Player change function
function changePlayer() {
  //reset current score
  scoreBoard = 0;
  document.getElementById("actual-" + activePlayer).innerText = scoreBoard;

  //réinitialization active Player
  activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);

  //Display the dice
  document.querySelector(".dice").style.display = "none";
  //

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
}

function resultDice() {
  setInterval(() => {
    document.querySelector(".dice").src = "asset/img/dice-" + dice + ".png";
  }, 0);
  document.querySelector(".dice").style.display = "block";
}

function letDice() {
  console.log("Yes!");
  document.querySelector(".dice-throw").style.display = "none";
  document.querySelector(".dice-throw").style.display = "block";
  setInterval(() => {
    document.querySelector(".dice-throw").style.display = "none";
  }, 3300);
  setTimeout(() => {
    resultDice();
  }, 3500);
  setTimeout(() => {
    document.querySelector(".dice").style.display = "none";
  }, 6500);
}

function moneyDice() {
  //Si ce n'est pas = 1
  if (dice != 1) {
    scoreBoard += dice;

    setTimeout(() => {
      document.getElementById("actual-" + activePlayer).innerText = scoreBoard;
    }, 3600);
  } else {
    //Next player
    setTimeout(() => {
      looseSong.play();
      changePlayer();
    }, 4000);
  }
}

// button Roll of the dice function
document.querySelector(".btn-roll").addEventListener("click", () => {
  dice = Math.floor(Math.random() * 6 + 1);
  console.log(dice);
  diceSong.play();
  letDice();
  moneyDice();
});

// button New game /
document.querySelector(".btn-new").addEventListener("click", () => {
  init();
  startSong.play();
  console.log("New Game ?");
});

//button hold
document.querySelector(".btn-hold").addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += scoreBoard;
    document.getElementById("score-" + activePlayer).innerText =
      scores[activePlayer];
    holdSong.play();

    //Si le joueur actif arrive à 100 ou plus, il gagne
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");

      //Display of the winner's message
      document.getElementById("name-" + activePlayer).innerText = "Winner !";
      winSong.play();
      //arrêt de partie
      playing = false;
    } else {
      //Game stoppage
      changePlayer();
    }
  }
});

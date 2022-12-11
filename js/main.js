const residentEvilCards = [
  {
    top: 3,
    right: 4,
    bottom: 5,
    left: 7,
    player: 1,
    image: "./images/albertWeskerCard.png",
  },
  {
    top: 4,
    right: 7,
    bottom: 3,
    left: 5,
    player: 1,
    image: "./images/chrisRedfieldCard.png",
  },
  {
    top: 4,
    right: 5,
    bottom: 5,
    left: 3,
    player: 1,
    image: "./images/jillValentineCard.png",
  },
  {
    top: 1,
    right: 5,
    bottom: 9,
    left: 4,
    player: 1,
    image: "./images/lickerCard.png",
  },
  {
    top: 5,
    right: 8,
    bottom: 8,
    left: 7,
    player: 1,
    image: "./images/chrisRedfieldCard2.png",
  },
  {
    top: 9,
    right: 8,
    bottom: 7,
    left: 6,
    player: 1,
    image: "./images/nemisisCard.png",
  },
];

const finalFantasyCards = [
  {
    top: 7,
    right: 8,
    bottom: 6,
    left: 5,
    player: 2,
    image: "./images/cloudCard.png",
  },
  {
    top: 2,
    right: 3,
    bottom: 9,
    left: 6,
    player: 2,
    image: "./images/dragoonCard.png",
  },
  {
    top: 4,
    right: 5,
    bottom: 5,
    left: 6,
    player: 2,
    image: "./images/lightningCard.png",
  },
  {
    top: 4,
    right: 5,
    bottom: 7,
    left: 6,
    player: 2,
    image: "./images/tidusCard.png",
  },
  {
    top: 8,
    right: 6,
    bottom: 7,
    left: 5,
    player: 2,
    image: "./images/vincentCard.png",
  },
  {
    top: 8,
    right: 6,
    bottom: 7,
    left: 5,
    player: 2,
    image: "./images/zidaneCard.png",
  },
];

//shuffle the array of cards before assigning them to the players;
const shuffledResidentEvilCards = residentEvilCards.sort(
  (a, b) => 0.5 - Math.random()
);
const shuffledFinalFantasyCards = finalFantasyCards.sort(
  (a, b) => 0.5 - Math.random()
);

const player1sCardsBackEnd = [];
const player2sCardsBackEnd = [];

for (let i = 0; i < 5; i++) {
  player1sCardsBackEnd.push(shuffledResidentEvilCards[i]);
  player2sCardsBackEnd.push(shuffledFinalFantasyCards[i]);
}

//get the html elemenets and add the relevant card images to them
const player1Card1 = document.getElementById("player1-card1");
const player1Card2 = document.getElementById("player1-card2");
const player1Card3 = document.getElementById("player1-card3");
const player1Card4 = document.getElementById("player1-card4");
const player1Card5 = document.getElementById("player1-card5");

const player2Card1 = document.getElementById("player2-card1");
const player2Card2 = document.getElementById("player2-card2");
const player2Card3 = document.getElementById("player2-card3");
const player2Card4 = document.getElementById("player2-card4");
const player2Card5 = document.getElementById("player2-card5");

const player1sCardsFrontEnd = [
  player1Card1,
  player1Card2,
  player1Card3,
  player1Card4,
  player1Card5,
];

const player2sCardsFrontEnd = [
  player2Card1,
  player2Card2,
  player2Card3,
  player2Card4,
  player2Card5,
];

const squareSix = document.getElementById("square-one");
const squareSeven = document.getElementById("square-two");
const squareEight = document.getElementById("square-three");
const squareEleven = document.getElementById("square-four");
const squareTwelve = document.getElementById("square-five");
const squareThirteen = document.getElementById("square-six");
const squareSixteen = document.getElementById("square-seven");
const squareSeventeen = document.getElementById("square-eight");
const squareEighteen = document.getElementById("square-nine");

const boardSquaresFrontEnd = [
  "dummy", //zero
  "dummy", //one
  "dummy", //two
  "dummy", //three
  "dummy", //four
  "dummy", //five
  squareSix,
  squareSeven,
  squareEight,
  "dummy", //nine
  "dummy", //ten
  squareEleven,
  squareTwelve,
  squareThirteen,
  "dummy", //fourteen
  "dummy", //fifteen
  squareSixteen,
  squareSeventeen,
  squareEighteen,
  "dummy", //nineteen
  "dummy", //twenty
  "dummy", //twentyOne
  "dummy", //twentyTwo
  "dummy", //twentyThree
  "dummy", //tentyFour
];

const boardBackEnd = [
  {
    //dummyZero
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyOne
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyTwo
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyThree
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyFour
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyFive
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //six
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //seven
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //eight
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyNine
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyTen
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //eleven
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //twelve
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //thirteen
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyFourteen
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyFifteen
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //sixteen
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //seventeen
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //eighteen
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyNineteen
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyTwenty
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyTwentyOne
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyTwentyOne
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyTwentyTwo
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyTwentyThree
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
  {
    //dummyTwentyFour
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    player: 0,
  },
];

class Game {
  constructor() {
    this.boardSquareStatuses = [
      { blocked: false }, //dummyZero
      { blocked: false }, //dummyOne
      { blocked: false }, //dummyTwo
      { blocked: false }, //dummyThree
      { blocked: false }, //dummyFour
      { blocked: false }, //dummyFive
      { blocked: false }, //six
      { blocked: false }, //seven
      { blocked: false }, //eight
      { blocked: false }, //dummyNine
      { blocked: false }, //dummyTen
      { blocked: false }, //eleven
      { blocked: false }, //twelve
      { blocked: false }, //thirteen
      { blocked: false }, //dummyFourteen
      { blocked: false }, //dummyFifteen
      { blocked: false }, //sixteen
      { blocked: false }, //seventeen
      { blocked: false }, //eighteen
      { blocked: false }, //dummyNineteen
      { blocked: false }, //dummyTwenty
      { blocked: false }, //dummytwentyOne
      { blocked: false }, //dummyTwentyTwo
      { blocked: false }, //dummyTwentyThree
      { blocked: false }, //dummyTwentyFour
    ];
    this.movesCounter = 0;
    this.gameInProgress = false;
    this.instructions = document.getElementById("instructions");
    this.player1ActiveToken = document.getElementById("player1-active-token");
    this.player2ActiveToken = document.getElementById("player2-active-token");
    instructions.addEventListener("click", () => {
      if (this.gameInProgress === false) {
        const players = new Players();
        this.gameInProgress = true;
        instructions.innerText = "flipping a coin to see who goes first";
        this.timer = setInterval(() => {
          if (this.playerActive === true) {
            this.player1ActiveToken.style.backgroundColor = "green";
            this.player2ActiveToken.style.background = "gray";
            this.playerActive = !this.playerActive;
          } else {
            this.gameInprogress = true;
            this.player1ActiveToken.style.backgroundColor = "gray";
            this.player2ActiveToken.style.background = "green";
            this.playerActive = !this.playerActive;
          }
        }, 300);
        setTimeout(() => {
          clearInterval(this.timer);
          const goesFirst = Math.floor(Math.random() * 2);
          if (goesFirst === 0) {
            this.player1ActiveToken.style.backgroundColor = "green";
            this.player2ActiveToken.style.backgroundColor = "gray";
            this.instructions.innerText = "Player 1 goes first!";
            players.player1Active();
          } else {
            this.player1ActiveToken.style.backgroundColor = "gray";
            this.player2ActiveToken.style.backgroundColor = "green";
            this.instructions.innerText = "Player 2 goes first!";
            players.player2Active();
          }
        }, 3000);
      }
    });
  }
}

class Players {
  constructor() {
    this.player1CardChosen = false;
    this.player2CardChosen = false;
    this.player1SquareChosen = false;
    this.player2SquareChosen = false;
    this.player1Color = "lightblue";
    this.player2Color = "lightcoral";
    this.player1sChosenCard = document.getElementById("player1-chosen-card");
    this.player2sChosenCard = document.getElementById("player2-chosen-card");
    this.player1Points = document.getElementById("player1-points");
    this.player2Points = document.getElementById("player2-points");
    this.player1PointsCounter = 5;
    this.player2PointsCounter = 5;

    for (let i = 0; i < player1sCardsFrontEnd.length; i++) {
      player1sCardsFrontEnd[
        i
      ].style.backgroundImage = `url(${player1sCardsBackEnd[i].image})`;
      player2sCardsFrontEnd[
        i
      ].style.backgroundImage = `url(${player2sCardsBackEnd[i].image})`;
    }
  }

  player1Active() {
    if (game.movesCounter < 9) {
      game.instructions.innerText = "choose a card player 1!";
      this.player1CardChosen = false;
      this.player2CardChosen = true;
      this.player1SquareChosen = false;
      this.player2SquareChosen = true;
      this.player1AddEventListeners();
    } else {
      game.player1ActiveToken.style.backgroundColor = "#000";
      game.player2ActiveToken.style.backgroundColor = "#000";
      game.instructions.innerText = "";
      if (this.player1PointsCounter > this.player2PointsCounter) {
        game.instructions.innerHTML =
          "<a href='./index.html'> Player 1 wins! Click here To start a new game!</a>";
      } else if (this.player1PointsCounter < this.player2sPointsCounter) {
        game.imstructions.innerHTML =
          "<a href='./index.html'> Player 2 wins! Click here To start a new game!</a>";
      } else {
        game.instructions.innerHTML =
          "<a href='./index.html'> It was a draw! Click here To start a new game!</a>";
      }
    }
  }

  player2Active() {
    if (game.movesCounter < 9) {
      game.instructions.innerText = "choose a card player 2!";
      this.player1CardChosen = true;
      this.player2CardChosen = false;
      this.player1SquareChosen = true;
      this.player2SquareChosen = false;
      this.player2AddEventListeners();
    } else {
      game.player1ActiveToken.style.backgroundColor = "#000";
      game.player2ActiveToken.style.backgroundColor = "#000";
      game.instructions.innerText = "";
      if (this.player1PointsCounter > this.player2PointsCounter) {
        game.instructions.innerHTML =
          "<a href='./index.html'> Player 1 wins! Click here To start a new game!</a>";
      } else if (this.player1PointsCounter < this.player2sPointsCounter) {
        game.imstructions.innerHTML =
          "<a href='./index.html'> Player 2 wins! Click here To start a new game!</a>";
      } else {
        game.instructions.innerHTML =
          "<a href='./index.html'> It was a draw! Click here To start a new game!</a>";
      }
    }
  }

  player1AddEventListeners() {
    this.player1sChosenCardBackEnd;
    for (let i = 0; i < player1sCardsFrontEnd.length; i++) {
      player1sCardsFrontEnd[i].addEventListener("click", () => {
        if (this.player1CardChosen === false) {
          this.player1sChosenCard.style.backgroundImage =
            player1sCardsFrontEnd[i].style.backgroundImage;
          this.player1sChosenCard.style.backgroundSize = "contain";
          this.player1sChosenCard.style.backgroundRepeat = "no-repeat";
          this.player1sChosenCard.style.visibility = "visible";
          game.instructions.innerText = "now choose a square to put it on";
          this.player1CardChosen = true;
          this.player1BoardEventListeners();
          player1sCardsFrontEnd[i].style.visibility = "hidden";
          this.player1sChosenCardBackEnd = player1sCardsBackEnd[i];
          console.log(this.player1sChosenCardBackEnd);
        }
      });
    }
  }

  player2AddEventListeners() {
    this.player2sChosenCardBackEnd;
    for (let i = 0; i < player2sCardsFrontEnd.length; i++) {
      player2sCardsFrontEnd[i].addEventListener("click", () => {
        if (this.player2CardChosen === false) {
          this.player2sChosenCard.style.backgroundImage =
            player2sCardsFrontEnd[i].style.backgroundImage;
          this.player2sChosenCard.style.backgroundSize = "contain";
          this.player2sChosenCard.style.backgroundRepeat = "no-repeat";
          this.player2sChosenCard.style.visibility = "visible";
          this.player2BoardEventListeners();
          game.instructions.innerText = "now choose a square to put it on";
          this.player2CardChosen = true;
          player2sCardsFrontEnd[i].style.visibility = "hidden";
          this.player2sChosenCardBackEnd = player2sCardsBackEnd[i];
          console.log(this.player2sChosenCardBackEnd);
        }
      });
    }
  }

  player1BoardEventListeners() {
    /*boardSquaresFrontEnd.forEach((elm) => {
      elm.addEventListener("click", () => {
        if (
          this.player1SquareChosen === false &&
          this.player1CardChosen === true
        ) {
          elm.style.backgroundImage =
            this.player1sChosenCard.style.backgroundImage;
          elm.style.backgroundSize = "contain";
          elm.style.backgroundRepeat = "no-repeat";
          elm.style.backgroundColor = this.player1Color;
          elm.style.backgroundColor = this.player1SquareChosen = true;
          game.player1ActiveToken.style.backgroundColor = "gray";
          game.player2ActiveToken.style.backgroundColor = "green";
          game.movesCounter++;
          this.player1sChosenCard.style.visibility = "hidden";
          this.player2Active();
        }
      });
    });*/
    for (let i = 6; i < 9; i++) {
      boardSquaresFrontEnd[i].addEventListener("click", () => {
        if (
          this.player1SquareChosen === false &&
          this.player1CardChosen === true &&
          game.boardSquareStatuses[i].blocked === false
        ) {
          boardSquaresFrontEnd[i].style.backgroundImage =
            this.player1sChosenCard.style.backgroundImage;
          boardSquaresFrontEnd[i].style.backgroundSize = "contain";
          boardSquaresFrontEnd[i].style.backgroundRepeat = "no-repeat";
          boardSquaresFrontEnd[i].style.backgroundColor = this.player1Color;
          boardSquaresFrontEnd[i].style.backgroundColor =
            this.player1SquareChosen = true;
          game.player1ActiveToken.style.backgroundColor = "gray";
          game.player2ActiveToken.style.backgroundColor = "green";
          game.movesCounter++;
          this.player1sChosenCard.style.visibility = "hidden";
          boardBackEnd[i] = this.player1sChosenCardBackEnd;
          game.boardSquareStatuses[i].blocked = true;
          if (
            boardBackEnd[i].top > boardBackEnd[i - 5].bottom &&
            boardBackEnd[i - 5].player === 2
          ) {
            boardSquaresFrontEnd[i - 5].style.backgroundColor =
              this.player1Color;
            this.player1PointsCounter++;
            this.player2PointsCounter--;
            boardBackEnd[i - 5].player = 1;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].bottom > boardBackEnd[i + 5].top &&
            boardBackEnd[i + 5].player === 2
          ) {
            boardSquaresFrontEnd[i + 5].style.backgroundColor =
              this.player1Color;
            this.player1PointsCounter++;
            this.player2PointsCounter--;
            boardBackEnd[i + 5].player = 1;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].left > boardBackEnd[i - 1].right &&
            boardBackEnd[i - 1].player === 2
          ) {
            boardSquaresFrontEnd[i - 1].style.backgroundColor =
              this.player1Color;
            this.player1PointsCounter++;
            this.player2PointsCounter--;
            boardBackEnd[i - 1].player = 1;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].right > boardBackEnd[i + 1].left &&
            boardBackEnd[i + 1].player === 2
          ) {
            boardSquaresFrontEnd[i + 1].style.backgroundColor =
              this.player1Color;
            this.player1PointsCounter++;
            this.player2PointsCounter--;
            boardBackEnd[i + 1].player = 1;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          game.player1ActiveToken.style.backgroundColor = "gray";
          game.player2ActiveToken.style.backgroundColor = "green";
          this.player2Active();
        }
      });
    }

    for (let i = 11; i < 14; i++) {
      boardSquaresFrontEnd[i].addEventListener("click", () => {
        if (
          this.player1SquareChosen === false &&
          this.player1CardChosen === true &&
          game.boardSquareStatuses[i].blocked === false
        ) {
          boardSquaresFrontEnd[i].style.backgroundImage =
            this.player1sChosenCard.style.backgroundImage;
          boardSquaresFrontEnd[i].style.backgroundSize = "contain";
          boardSquaresFrontEnd[i].style.backgroundRepeat = "no-repeat";
          boardSquaresFrontEnd[i].style.backgroundColor = this.player1Color;
          boardSquaresFrontEnd[i].style.backgroundColor =
            this.player1SquareChosen = true;
          game.player1ActiveToken.style.backgroundColor = "gray";
          game.player2ActiveToken.style.backgroundColor = "green";
          game.movesCounter++;
          this.player1sChosenCard.style.visibility = "hidden";
          boardBackEnd[i] = this.player1sChosenCardBackEnd;
          game.boardSquareStatuses[i].blocked = true;
          if (
            boardBackEnd[i].top > boardBackEnd[i - 5].bottom &&
            boardBackEnd[i - 5].player === 2
          ) {
            boardSquaresFrontEnd[i - 5].style.backgroundColor =
              this.player1Color;
            this.player1PointsCounter++;
            this.player2PointsCounter--;
            boardBackEnd[i - 5].player = 1;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].bottom > boardBackEnd[i + 5].top &&
            boardBackEnd[i + 5].player === 2
          ) {
            boardSquaresFrontEnd[i + 5].style.backgroundColor =
              this.player1Color;
            this.player1PointsCounter++;
            this.player2PointsCounter--;
            boardBackEnd[i + 5].player = 1;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].left > boardBackEnd[i - 1].right &&
            boardBackEnd[i - 1].player === 2
          ) {
            boardSquaresFrontEnd[i - 1].style.backgroundColor =
              this.player1Color;
            this.player1PointsCounter++;
            this.player2PointsCounter--;
            boardBackEnd[i - 1].player = 1;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].right > boardBackEnd[i + 1].left &&
            boardBackEnd[i + 1].player === 2
          ) {
            boardSquaresFrontEnd[i + 1].style.backgroundColor =
              this.player1Color;
            this.player1PointsCounter++;
            this.player2PointsCounter--;
            boardBackEnd[i + 1].player = 1;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          game.player1ActiveToken.style.backgroundColor = "gray";
          game.player2ActiveToken.style.backgroundColor = "green";
          this.player2Active();
        }
      });
    }

    for (let i = 16; i < 19; i++) {
      boardSquaresFrontEnd[i].addEventListener("click", () => {
        if (
          this.player1SquareChosen === false &&
          this.player1CardChosen === true &&
          game.boardSquareStatuses[i].blocked === false
        ) {
          boardSquaresFrontEnd[i].style.backgroundImage =
            this.player1sChosenCard.style.backgroundImage;
          boardSquaresFrontEnd[i].style.backgroundSize = "contain";
          boardSquaresFrontEnd[i].style.backgroundRepeat = "no-repeat";
          boardSquaresFrontEnd[i].style.backgroundColor = this.player1Color;
          boardSquaresFrontEnd[i].style.backgroundColor =
            this.player1SquareChosen = true;
          game.player1ActiveToken.style.backgroundColor = "green";
          game.player2ActiveToken.style.backgroundColor = "gray";
          game.movesCounter++;
          this.player1sChosenCard.style.visibility = "hidden";
          boardBackEnd[i] = this.player1sChosenCardBackEnd;
          game.boardSquareStatuses[i].blocked = true;

          if (
            boardBackEnd[i].top > boardBackEnd[i - 5].bottom &&
            boardBackEnd[i - 5].player === 2
          ) {
            boardSquaresFrontEnd[i - 5].style.backgroundColor =
              this.player1Color;
            this.player1PointsCounter++;
            this.player2PointsCounter--;
            boardBackEnd[i - 5].player = 1;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].bottom > boardBackEnd[i + 5].top &&
            boardBackEnd[i + 5].player === 2
          ) {
            boardSquaresFrontEnd[i + 5].style.backgroundColor =
              this.player1Color;
            this.player1PointsCounter++;
            this.player2PointsCounter--;
            boardBackEnd[i + 5].player = 1;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].left > boardBackEnd[i - 1].right &&
            boardBackEnd[i - 1].player === 2
          ) {
            boardSquaresFrontEnd[i - 1].style.backgroundColor =
              this.player1Color;
            this.player1PointsCounter++;
            this.player2PointsCounter--;
            boardBackEnd[i - 1].player = 1;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].right > boardBackEnd[i + 1].left &&
            boardBackEnd[i + 1].player === 2
          ) {
            boardSquaresFrontEnd[i + 1].style.backgroundColor =
              this.player1Color;
            this.player1PointsCounter++;
            this.player2PointsCounter--;
            boardBackEnd[i + 1].player = 1;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          game.player1ActiveToken.style.backgroundColor = "gray";
          game.player2ActiveToken.style.backgroundColor = "green";

          this.player2Active();
        }
      });
    }
  }

  player2BoardEventListeners() {
    /*boardSquaresFrontEnd.forEach((elm) => {
      elm.addEventListener("click", () => {
        if (
          this.player2SquareChosen === false &&
          this.player2CardChosen === true
        ) {
          elm.style.backgroundImage =
            this.player2sChosenCard.style.backgroundImage;
          elm.style.backgroundSize = "contain";
          elm.style.backgroundRepeat = "no-repeat";
          elm.style.backgroundColor = this.player2Color;
          this.player2SquareChosen = true;
          game.player2ActiveToken.style.backgroundColor = "gray";
          game.player1ActiveToken.style.backgroundColor = "green";
          game.movesCounter++;
          this.player2sChosenCard.style.visibility = "hidden";
          this.player1Active();
        }
      });
    });*/
    for (let i = 6; i < 9; i++) {
      boardSquaresFrontEnd[i].addEventListener("click", () => {
        if (
          this.player2SquareChosen === false &&
          this.player2CardChosen === true &&
          game.boardSquareStatuses[i].blocked === false
        ) {
          boardSquaresFrontEnd[i].style.backgroundImage =
            this.player2sChosenCard.style.backgroundImage;
          boardSquaresFrontEnd[i].style.backgroundSize = "contain";
          boardSquaresFrontEnd[i].style.backgroundRepeat = "no-repeat";
          boardSquaresFrontEnd[i].style.backgroundColor = this.player2Color;
          boardSquaresFrontEnd[i].style.backgroundColor =
            this.player2SquareChosen = true;
          game.player1ActiveToken.style.backgroundColor = "green";
          game.player2ActiveToken.style.backgroundColor = "gray";
          game.movesCounter++;
          this.player2sChosenCard.style.visibility = "hidden";
          boardBackEnd[i] = this.player2sChosenCardBackEnd;
          game.boardSquareStatuses[i].blocked = true;

          if (
            boardBackEnd[i].top > boardBackEnd[i - 5].bottom &&
            boardBackEnd[i - 5].player === 1
          ) {
            boardSquaresFrontEnd[i - 5].style.backgroundColor =
              this.player2Color;
            this.player1PointsCounter--;
            this.player2PointsCounter++;
            boardBackEnd[i - 5].player = 2;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].bottom > boardBackEnd[i + 5].top &&
            boardBackEnd[i + 5].player === 1
          ) {
            boardSquaresFrontEnd[i + 5].style.backgroundColor =
              this.player2Color;
            this.player1PointsCounter--;
            this.player2PointsCounter++;
            boardBackEnd[i + 5].player = 2;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].left > boardBackEnd[i - 1].right &&
            boardBackEnd[i - 1].player === 1
          ) {
            boardSquaresFrontEnd[i - 1].style.backgroundColor =
              this.player2Color;
            this.player1PointsCounter--;
            this.player2PointsCounter++;
            boardBackEnd[i - 1].player = 2;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].right > boardBackEnd[i + 1].left &&
            boardBackEnd[i + 1].player === 1
          ) {
            boardSquaresFrontEnd[i + 1].style.backgroundColor =
              this.player2Color;
            this.player1PointsCounter--;
            this.player2PointsCounter++;
            boardBackEnd[i + 1].player = 2;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          game.player2ActiveToken.style.backgroundColor = "gray";
          game.player1ActiveToken.style.backgroundColor = "green";
          this.player1Active();
        }
      });
    }

    for (let i = 11; i < 14; i++) {
      boardSquaresFrontEnd[i].addEventListener("click", () => {
        if (
          this.player2SquareChosen === false &&
          this.player2CardChosen === true &&
          game.boardSquareStatuses[i].blocked === false
        ) {
          boardSquaresFrontEnd[i].style.backgroundImage =
            this.player2sChosenCard.style.backgroundImage;
          boardSquaresFrontEnd[i].style.backgroundSize = "contain";
          boardSquaresFrontEnd[i].style.backgroundRepeat = "no-repeat";
          boardSquaresFrontEnd[i].style.backgroundColor = this.player2Color;
          boardSquaresFrontEnd[i].style.backgroundColor =
            this.player2SquareChosen = true;
          game.player1ActiveToken.style.backgroundColor = "green";
          game.player2ActiveToken.style.backgroundColor = "gray";
          game.movesCounter++;
          this.player2sChosenCard.style.visibility = "hidden";
          boardBackEnd[i] = this.player2sChosenCardBackEnd;
          game.boardSquareStatuses[i].blocked = true;

          if (
            boardBackEnd[i].top > boardBackEnd[i - 5].bottom &&
            boardBackEnd[i - 5].player === 1
          ) {
            boardSquaresFrontEnd[i - 5].style.backgroundColor =
              this.player2Color;
            this.player1PointsCounter--;
            this.player2PointsCounter++;
            boardBackEnd[i - 5].player = 2;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].bottom > boardBackEnd[i + 5].top &&
            boardBackEnd[i + 5].player === 1
          ) {
            boardSquaresFrontEnd[i + 5].style.backgroundColor =
              this.player2Color;
            this.player1PointsCounter--;
            this.player2PointsCounter++;
            boardBackEnd[i + 5].player = 2;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].left > boardBackEnd[i - 1].right &&
            boardBackEnd[i - 1].player === 1
          ) {
            boardSquaresFrontEnd[i - 1].style.backgroundColor =
              this.player2Color;
            this.player1PointsCounter--;
            this.player2PointsCounter++;
            boardBackEnd[i - 1].player = 2;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].right > boardBackEnd[i + 1].left &&
            boardBackEnd[i + 1].player === 1
          ) {
            boardSquaresFrontEnd[i + 1].style.backgroundColor =
              this.player2Color;
            this.player1PointsCounter--;
            this.player2PointsCounter++;
            boardBackEnd[i + 1].player = 2;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          game.player2ActiveToken.style.backgroundColor = "gray";
          game.player1ActiveToken.style.backgroundColor = "green";
          this.player1Active();
        }
      });
    }

    for (let i = 16; i < 19; i++) {
      boardSquaresFrontEnd[i].addEventListener("click", () => {
        if (
          this.player2SquareChosen === false &&
          this.player2CardChosen === true &&
          game.boardSquareStatuses[i].blocked === false
        ) {
          boardSquaresFrontEnd[i].style.backgroundImage =
            this.player2sChosenCard.style.backgroundImage;
          boardSquaresFrontEnd[i].style.backgroundSize = "contain";
          boardSquaresFrontEnd[i].style.backgroundRepeat = "no-repeat";
          boardSquaresFrontEnd[i].style.backgroundColor = this.player2Color;
          boardSquaresFrontEnd[i].style.backgroundColor =
            this.player2SquareChosen = true;
          game.player1ActiveToken.style.backgroundColor = "green";
          game.player2ActiveToken.style.backgroundColor = "gray";
          game.movesCounter++;
          this.player2sChosenCard.style.visibility = "hidden";
          boardBackEnd[i] = this.player2sChosenCardBackEnd;
          game.boardSquareStatuses[i].blocked = true;

          if (
            boardBackEnd[i].top > boardBackEnd[i - 5].bottom &&
            boardBackEnd[i - 5].player === 1
          ) {
            boardSquaresFrontEnd[i - 5].style.backgroundColor =
              this.player2Color;
            this.player1PointsCounter--;
            this.player2PointsCounter++;
            boardBackEnd[i - 5].player = 2;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].bottom > boardBackEnd[i + 5].top &&
            boardBackEnd[i + 5].player === 1
          ) {
            boardSquaresFrontEnd[i + 5].style.backgroundColor =
              this.player2Color;
            this.player1PointsCounter--;
            this.player2PointsCounter++;
            boardBackEnd[i + 5].player = 2;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].left > boardBackEnd[i - 1].right &&
            boardBackEnd[i - 1].player === 1
          ) {
            boardSquaresFrontEnd[i - 1].style.backgroundColor =
              this.player2Color;
            this.player1PointsCounter--;
            this.player2PointsCounter++;
            boardBackEnd[i - 1].player = 2;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          if (
            boardBackEnd[i].right > boardBackEnd[i + 1].left &&
            boardBackEnd[i + 1].player === 1
          ) {
            boardSquaresFrontEnd[i + 1].style.backgroundColor =
              this.player2Color;
            this.player1PointsCounter--;
            this.player2PointsCounter++;
            boardBackEnd[i + 1].player = 2;
            this.player1Points.innerText = this.player1PointsCounter;
            this.player2Points.innerText = this.player2PointsCounter;
          }
          game.player2ActiveToken.style.backgroundColor = "gray";
          game.player1ActiveToken.style.backgroundColor = "green";

          this.player1Active();
        }
      });
    }
  }
}

const game = new Game();

/*if (
  this.backEndBoard[this.numberSquare9].t >
    this.backEndBoard[this.numberSquare9 - 5].d &&
  this.backEndBoard[this.numberSquare9 - 5].p === 2
) {
  this.boardSquaresFrontEnd[this.numberSquare9 - 5].style.backgroundColor =
    this.player1Color;
  this.backEndBoard[this.numberSquare9 - 5].p = 1;
  this.player1PointsCounter++;
  this.player2PointsCounter--;
  this.player1Points.innerText = this.player1PointsCounter;
  this.player2Points.innerText = this.player2PointsCounter;
}
if (
  this.backEndBoard[this.numberSquare9].r >
    this.backEndBoard[this.numberSquare9 + 1].l &&
  this.backEndBoard[this.numberSquare9 + 1].p === 2
) {
  this.boardSquaresFrontEnd[this.numberSquare9 + 1].style.backgroundColor =
    this.player1Color;
  this.backEndBoard[this.numberSquare9 + 1].p = 1;
  this.player1PointsCounter++;
  this.player2PointsCounter--;
  this.player1Points.innerText = this.player1PointsCounter;
  this.player2Points.innerText = this.player2PointsCounter;
}
if (
  this.backEndBoard[this.numberSquare9].d >
    this.backEndBoard[this.numberSquare9 + 5].t &&
  this.backEndBoard[this.numberSquare9 + 5].p === 2
) {
  this.boardSquaresFrontEnd[this.numberSquare9 + 5].style.backgroundColor =
    this.player1Color;
  this.backEndBoard[this.numberSquare9 + 5].p = 1;
  this.player1PointsCounter++;
  this.player2PointsCounter--;
  this.player1Points.innerText = this.player1PointsCounter;
  this.player2Points.innerText = this.player2PointsCounter;
}
if (
  this.backEndBoard[this.numberSquare9].l >
    this.backEndBoard[this.numberSquare9 - 1].r &&
  this.backEndBoard[this.numberSquare9 - 1].p === 2
) {
  this.boardSquaresFrontEnd[this.numberSquare9 - 1].style.backgroundColor =
    this.player1Color;
  this.backEndBoard[this.numberSquare9 - 1].p = 1;
  this.player1PointsCounter++;
  this.player2PointsCounter--;
  this.player1Points.innerText = this.player1PointsCounter;
  this.player2Points.innerText = this.player2PointsCounter;
}*/

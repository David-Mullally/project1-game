const residentEvilCards = [
  {
    top: 3,
    right: 4,
    bottom: 5,
    left: 7,
    player: 1,
    image: "../images/albertWeskerCard.png",
  },
  {
    top: 4,
    right: 7,
    bottom: 3,
    left: 5,
    player: 1,
    image: "../images/chrisRedfieldCard.png",
  },
  {
    top: 4,
    right: 5,
    bottom: 5,
    left: 3,
    player: 1,
    image: "../images/jillValentineCard.png",
  },
  {
    top: 1,
    right: 5,
    bottom: 9,
    left: 4,
    player: 1,
    image: "../images/lickerCard.png",
  },
  {
    top: 5,
    right: 8,
    bottom: 8,
    left: 7,
    player: 1,
    image: "../images/chrisRedfieldCard2.png",
  },
  {
    top: 9,
    right: 8,
    bottom: 7,
    left: 6,
    player: 1,
    image: "../images/nemisisCard.png",
  },
];

const finalFantasyCards = [
  {
    top: 7,
    right: 8,
    bottom: 6,
    left: 5,
    player: 2,
    image: "../images/cloudCard.png",
  },
  {
    top: 2,
    right: 3,
    bottom: 9,
    left: 6,
    player: 2,
    image: "../images/dragoonCard.png",
  },
  {
    top: 4,
    right: 5,
    bottom: 5,
    left: 6,
    player: 2,
    image: "../images/lightningCard.png",
  },
  {
    top: 4,
    right: 5,
    bottom: 7,
    left: 6,
    player: 2,
    image: "../images/tidusCard.png",
  },
  {
    top: 8,
    right: 6,
    bottom: 7,
    left: 5,
    player: 2,
    image: "../images/vincentCard.png",
  },
  {
    top: 8,
    right: 6,
    bottom: 7,
    left: 5,
    player: 2,
    image: "../images/zidaneCard.png",
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

<<<<<<< HEAD
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
          "<a href='/index.html'> Player 1 wins! Click here To start a new game!</a>";
      } else {
        ("<a href='/index.html'> Player 2 wins! Click here To start a new game!</a>");
=======
    this.backEndBoard = [
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE0
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE1
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE2
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE3
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE4
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE5
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //SquareSix
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //SquareSeven
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //SquareEight
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE9
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE10
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //SquareEleven
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //squareTwelve
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //SquareThirteen
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE14
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE15
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //SquareSixteen
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //SquareSeventeen
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //SquareEighteen
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE19
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE20
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE21
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE22
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE23
      { t: 12, r: 12, d: 12, l: 12, p: 0 }, //DUMMYSQUARE24
    ];

    // Board squares
    this.squareOne = document.getElementById("one");
    this.squareTwo = document.getElementById("two");
    this.squareThree = document.getElementById("three");
    this.sqaureFour = document.getElementById("four");
    this.squareFive = document.getElementById("five");
    this.squareSix = document.getElementById("six");
    this.squareSeven = document.getElementById("seven");
    this.squareEight = document.getElementById("eight");
    this.squareNine = document.getElementById("nine");

    this.boardSquaresFrontEnd = [
      0,
      1,
      2,
      3,
      4,
      5,
      this.squareOne,
      this.squareTwo,
      this.squareThree,
      9,
      10,
      this.sqaureFour,
      this.squareFive,
      this.squareSix,
      14,
      15,
      this.squareSeven,
      this.squareEight,
      this.squareNine,
      19,
      20,
      21,
      22,
      23,
      24,
    ];

    // Board placeholders for card values
    this.c1T = document.getElementById("c1T");
    this.c1R = document.getElementById("c1R");
    this.c1D = document.getElementById("c1D");
    this.c1L = document.getElementById("c1L");
    this.c2T = document.getElementById("c2T");
    this.c2R = document.getElementById("c2R");
    this.c2D = document.getElementById("c2D");
    this.c2L = document.getElementById("c2L");
    this.c3T = document.getElementById("c3T");
    this.c3R = document.getElementById("c3R");
    this.c3D = document.getElementById("c3D");
    this.c3L = document.getElementById("c3L");
    this.c4T = document.getElementById("c4T");
    this.c4R = document.getElementById("c4R");
    this.c4D = document.getElementById("c4D");
    this.c4L = document.getElementById("c4L");
    this.c5T = document.getElementById("c5T");
    this.c5R = document.getElementById("c5R");
    this.c5D = document.getElementById("c5D");
    this.c5L = document.getElementById("c5L");
    this.c6T = document.getElementById("c6T");
    this.c6R = document.getElementById("c6R");
    this.c6D = document.getElementById("c6D");
    this.c6L = document.getElementById("c6L");
    this.c7T = document.getElementById("c7T");
    this.c7R = document.getElementById("c7R");
    this.c7D = document.getElementById("c7D");
    this.c7L = document.getElementById("c7L");
    this.c8T = document.getElementById("c8T");
    this.c8R = document.getElementById("c8R");
    this.c8D = document.getElementById("c8D");
    this.c8L = document.getElementById("c8L");
    this.c9T = document.getElementById("c9T");
    this.c9R = document.getElementById("c9R");
    this.c9D = document.getElementById("c9D");
    this.c9L = document.getElementById("c9L");

    this.boardSquareValues = [
      {}, //DUMMYZERO
      {}, //DUMMYONE
      {}, //DUMMYTWO
      {}, //DUMMYTHREE
      {}, //DUMMYFOUR
      {}, //DUMMYFIVE
      { t: this.c1T, r: this.c1R, d: this.c1D, l: this.c1L }, //Six
      { t: this.c2T, r: this.c2R, d: this.c2D, l: this.c2L }, //seven
      { t: this.c3T, r: this.c3R, d: this.c3D, l: this.c3L }, //eight
      {}, //DUMMYNINE
      {}, //DUMMYTEN
      { t: this.c4T, r: this.c4R, d: this.c4D, l: this.c4L }, //eleven
      { t: this.c5T, r: this.c5R, d: this.c5D, l: this.c5L }, //twelve
      { t: this.c6T, r: this.c6R, d: this.c6D, l: this.c6L }, //thirteen
      {}, //DUMMYFOURTEEN
      {}, //DUMMYFIFTEEN
      { t: this.c7T, r: this.c7R, d: this.c7D, l: this.c7L }, //sixteen
      { t: this.c8T, r: this.c8R, d: this.c8D, l: this.c8L }, //seventeen
      { t: this.c9T, r: this.c9R, d: this.c9D, l: this.c9L }, //eighteen
      {}, //DUMMYNINETEEN
      {}, //DUMMYTWENTY
      {}, //DUMMYTWENTYONE
      {}, //DUMMYTWENTYTWO
      {}, //DUMMYTWENTYTHREE
      {}, //DUMMYTWENTYFOUR
    ];

    //////////////// GAME START /////////////////////////////
    //////////////// GAME START /////////////////////////////

    this.player1Token.style.backgroundColor = this.inactiveColor;
    this.player2Token.style.backgroundColor = this.inactiveColor;
    //const interval = prompt("set time (in seconds)");
    this.interval = 6000;
    setTimeout(() => {
      const player1sName = prompt("Enter your name: player1");
      this.player1sNameDisplay.innerText = player1sName;
    }, this.interval);

    setTimeout(() => {
      const player2sName = prompt("Enter your name: player2");
      this.player2sNameDisplay.innerText = player2sName;
    }, this.interval * 2);

    setTimeout(() => {
      this.player1Color = prompt("Favourite color: player 1");
      this.player1Token.style.backgroundColor = this.player1Color;
    }, this.interval * 3);

    setTimeout(() => {
      this.player2Color = prompt("favourite color: player 2");
      this.player2Token.style.backgroundColor = this.player2Color;
    }, this.interval * 4);

    setTimeout(() => {
      this.player1Token.style.backgroundColor = this.inactiveColor;
      this.player2Token.style.backgroundColor = this.inactiveColor;
    }, this.interval * 5);

    /////////////   ROUND1 ///////////////////////////////
    /////////////  Player1  //////////////////////////////
    setTimeout(() => {
      this.player1Token.style.backgroundColor = this.player1Color;
      this.player2Token.style.backgroundColor = this.inactiveColor;
    }, this.interval * 6);

    setTimeout(() => {
      this.player1FirstMoveCard = prompt(
        "Which card would you like to play first?"
      );

      this.numberCard1 = Number(this.player1FirstMoveCard);
      this.player1CardsFrontend[this.numberCard1].innerText = "USED";
      this.player1FirstMoveSquare = prompt("Where would you like to place it?");
      this.numberSquare1 = Number(this.player1FirstMoveSquare);
      this.backEndBoard[this.numberSquare1] =
        this.player1sHand[this.numberCard1];
      console.log(this.backEndBoard);
      this.boardSquareValues[this.numberSquare1].t.innerText =
        this.player1sHand[this.numberCard1].t;
      this.boardSquareValues[this.numberSquare1].r.innerText =
        this.player1sHand[this.numberCard1].r;
      this.boardSquareValues[this.numberSquare1].d.innerText =
        this.player1sHand[this.numberCard1].d;
      this.boardSquareValues[this.numberSquare1].l.innerText =
        this.player1sHand[this.numberCard1].l;
      this.boardSquaresFrontEnd[this.numberSquare1].style.backgroundColor =
        this.player1Color;
      console.log(this.backEndBoard);
      this.counter++;
    }, this.interval * 7);
    ///////////////  player 2   ////////////////////////////
    setTimeout(() => {
      this.player2Token.style.backgroundColor = this.player2Color;
      this.player1Token.style.backgroundColor = this.inactiveColor;
    }, this.interval * 8);

    setTimeout(() => {
      this.player2FirstMoveCard = prompt(
        "Which card would you like to play first?"
      );

      this.numberCard2 = Number(this.player2FirstMoveCard);
      this.player2CardsFrontend[this.numberCard2].innerText = "USED";
      this.player2FirstMoveSquare = prompt("Where would you like to place it?");
      this.numberSquare2 = Number(this.player2FirstMoveSquare);
      this.backEndBoard[this.numberSquare2] =
        this.player2sHand[this.numberCard2];
      console.log(this.backEndBoard);
      this.boardSquareValues[this.numberSquare2].t.innerText =
        this.player2sHand[this.numberCard2].t;
      this.boardSquareValues[this.numberSquare2].r.innerText =
        this.player2sHand[this.numberCard2].r;
      this.boardSquareValues[this.numberSquare2].d.innerText =
        this.player2sHand[this.numberCard2].d;
      this.boardSquareValues[this.numberSquare2].l.innerText =
        this.player2sHand[this.numberCard2].l;
      this.boardSquaresFrontEnd[this.numberSquare2].style.backgroundColor =
        this.player2Color;
      if (
        this.backEndBoard[this.numberSquare2].t >
          this.backEndBoard[this.numberSquare2 - 5].d &&
        this.backEndBoard[this.numberSquare2 - 5].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare2 - 5
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare2 - 5].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
>>>>>>> 841c7e9ace218a40c1a285a1f77d20207508d7f0
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
          "<a href='/index.html'> Player 1 wins! Click here To start a new game!</a>";
      } else {
        ("<a href='/index.html'> Player 2 wins! Click here To start a new game!</a>");
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

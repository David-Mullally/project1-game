class Game {
  constructor() {
    this.player1sNameDisplay = document.getElementById("player1-name");
    this.player2sNameDisplay = document.getElementById("player2-name");
    this.inactiveColor = "gray";
    this.counter = 0;
    this.player1Token = document.getElementById("player1-token");
    this.player2Token = document.getElementById("");
    this.player1sHand = [
      { t: 3, r: 4, d: 6, l: 7, p: 1 }, //player1Card0
      { t: 1, r: 2, d: 5, l: 4, p: 1 }, //player1Card1
      { t: 9, r: 4, d: 2, l: 8, p: 1 }, //player1Card2
      { t: 7, r: 1, d: 5, l: 6, p: 1 }, //player1Card3
      { t: 1, r: 4, d: 8, l: 7, p: 1 }, //player1Card2
    ];

    this.player2sHand = [
      { t: 4, r: 6, d: 6, l: 5, p: 2 }, //player2Card0
      { t: 9, r: 3, d: 2, l: 6, p: 2 }, //player2Card1
      { t: 3, r: 4, d: 6, l: 7, p: 2 }, //player2Card2
      { t: 1, r: 1, d: 7, l: 5, p: 2 }, //Player2Card3
      { t: 2, r: 4, d: 2, l: 7, p: 2 }, //Player2Card4
    ];

    this.player1Card0 = document.getElementById("p1c1");
    this.player1Card0.innerText = `Card 0: t${this.player1sHand[0].t}: r${this.player1sHand[0].r}: d${this.player1sHand[0].d}: l${this.player1sHand[0].l}`;
    this.player1Card1 = document.getElementById("p1c2");
    this.player1Card1.innerText = `Card 1: t${this.player1sHand[1].t}: r${this.player1sHand[1].r}: d${this.player1sHand[1].d}: l${this.player1sHand[1].l}`;
    this.player1Card2 = document.getElementById("p1c3");
    this.player1Card2.innerText = `Card 2: t${this.player1sHand[2].t}: r${this.player1sHand[2].r}: d${this.player1sHand[2].d}: l${this.player1sHand[2].l}`;
    this.player1Card3 = document.getElementById("p1c4");
    this.player1Card3.innerText = `Card 3: t${this.player1sHand[3].t}: r${this.player1sHand[3].r}: d${this.player1sHand[3].d}: l${this.player1sHand[3].l}`;
    this.player1Card4 = document.getElementById("p1c5");
    this.player1Card4.innerText = `Card 4: t${this.player1sHand[4].t}: r${this.player1sHand[4].r}: d${this.player1sHand[4].d}: l${this.player1sHand[4].l}`;

    this.player2Card0 = document.getElementById("p2c1");
    this.player2Card0.innerText = `Card 0: t${this.player2sHand[0].t}: r${this.player2sHand[0].r}: d${this.player2sHand[0].d}: l${this.player2sHand[0].l}`;
    this.player2Card1 = document.getElementById("p2c2");
    this.player2Card1.innerText = `Card 1: t${this.player2sHand[1].t}: r${this.player2sHand[1].r}: d${this.player2sHand[1].d}: l${this.player2sHand[1].l}`;
    this.player2Card2 = document.getElementById("p2c3");
    this.player2Card2.innerText = `Card 2: t${this.player2sHand[2].t}: r${this.player2sHand[2].r}: d${this.player2sHand[2].d}: l${this.player2sHand[2].l}`;
    this.player2Card3 = document.getElementById("p2c4");
    this.player2Card3.innerText = `Card 3: t${this.player2sHand[3].t}: r${this.player2sHand[3].r}: d${this.player2sHand[3].d}: l${this.player2sHand[3].l}`;
    this.player2Card4 = document.getElementById("p2c5");
    this.player2Card4.innerText = `Card 4: t${this.player2sHand[4].t}: r${this.player2sHand[4].r}: d${this.player2sHand[4].d}: l${this.player2sHand[4].l}`;

    this.player1CardsFrontend = [
      this.player1Card0,
      this.player1Card1,
      this.player1Card2,
      this.player1Card3,
      this.player1Card4,
    ];

    this.player2CardsFrontend = [
      this.player2Card0,
      this.player2Card1,
      this.player2Card2,
      this.player2Card3,
      this.player2Card4,
    ];

    // players points
    this.player1Points = document.getElementById("player1-points");
    this.player2Points = document.getElementById("player2-points");
    this.player1PointsCounter = 5;
    this.player2PointsCounter = 5;

    //player tokens
    this.player1Token = document.getElementById("player1-token");
    this.player2Token = document.getElementById("player2-token");

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
    const interval = prompt("set time (in seconds)");
    this.interval = interval * 1000;
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
      }
      if (
        this.backEndBoard[this.numberSquare2].r >
          this.backEndBoard[this.numberSquare2 + 1].l &&
        this.backEndBoard[this.numberSquare2 + 1].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare2 + 1
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare2 + 1].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare2].d >
          this.backEndBoard[this.numberSquare2 + 5].t &&
        this.backEndBoard[this.numberSquare2 + 5].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare2 + 5
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare2 + 5].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare2].l >
          this.backEndBoard[this.numberSquare2 - 1].r &&
        this.backEndBoard[this.numberSquare2 - 1].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare2 - 1
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare2 - 1].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      this.counter++;
    }, this.interval * 9);

    /////////////   ROUND2 ///////////////////////////////
    /////////////  Player1  /////////////////////////////4
    setTimeout(() => {
      this.player1Token.style.backgroundColor = this.player1Color;
      this.player2Token.style.backgroundColor = this.inactiveColor;
    }, this.interval * 10);

    setTimeout(() => {
      this.player1FirstMoveCard = prompt("Which card would you like to play?");

      this.numberCard3 = Number(this.player1FirstMoveCard);
      this.player1CardsFrontend[this.numberCard3].innerText = "USED";
      this.player1FirstMoveSquare = prompt("Where would you like to place it?");
      this.numberSquare3 = Number(this.player1FirstMoveSquare);
      this.backEndBoard[this.numberSquare3] =
        this.player1sHand[this.numberCard3];
      console.log(this.backEndBoard);
      this.boardSquareValues[this.numberSquare3].t.innerText =
        this.player1sHand[this.numberCard3].t;
      this.boardSquareValues[this.numberSquare3].r.innerText =
        this.player1sHand[this.numberCard3].r;
      this.boardSquareValues[this.numberSquare3].d.innerText =
        this.player1sHand[this.numberCard3].d;
      this.boardSquareValues[this.numberSquare3].l.innerText =
        this.player1sHand[this.numberCard3].l;
      this.boardSquaresFrontEnd[this.numberSquare3].style.backgroundColor =
        this.player1Color;
      if (
        this.backEndBoard[this.numberSquare3].t >
          this.backEndBoard[this.numberSquare3 - 5].d &&
        this.backEndBoard[this.numberSquare3 - 5].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare3 - 5
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare3 - 5].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare3].r >
          this.backEndBoard[this.numberSquare3 + 1].l &&
        this.backEndBoard[this.numberSquare3 + 1].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare3 + 1
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare3 + 1].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare3].d >
          this.backEndBoard[this.numberSquare3 + 5].t &&
        this.backEndBoard[this.numberSquare3 + 5].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare3 + 5
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare3 + 5].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare3].l >
          this.backEndBoard[this.numberSquare3 - 1].r &&
        this.backEndBoard[this.numberSquare3 - 1].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare3 - 1
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare3 - 1].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      console.log(this.backEndBoard);
      this.counter++;
    }, this.interval * 11);
    ///////////////  player 2   ////////////////////////////
    setTimeout(() => {
      this.player2Token.style.backgroundColor = this.player2Color;
      this.player1Token.style.backgroundColor = this.inactiveColor;
    }, this.interval * 12);

    setTimeout(() => {
      this.player2FirstMoveCard = prompt("Which card would you like to play?");

      this.numberCard4 = Number(this.player2FirstMoveCard);
      this.player2CardsFrontend[this.numberCard4].innerText = "USED";
      this.player2FirstMoveSquare = prompt("Where would you like to place it?");
      this.numberSquare5 = Number(this.player2FirstMoveSquare);
      this.backEndBoard[this.numberSquare5] =
        this.player2sHand[this.numberCard4];
      console.log(this.backEndBoard);
      this.boardSquareValues[this.numberSquare5].t.innerText =
        this.player2sHand[this.numberCard4].t;
      this.boardSquareValues[this.numberSquare5].r.innerText =
        this.player2sHand[this.numberCard4].r;
      this.boardSquareValues[this.numberSquare5].d.innerText =
        this.player2sHand[this.numberCard4].d;
      this.boardSquareValues[this.numberSquare5].l.innerText =
        this.player2sHand[this.numberCard4].l;
      this.boardSquaresFrontEnd[this.numberSquare5].style.backgroundColor =
        this.player2Color;
      if (
        this.backEndBoard[this.numberSquare5].t >
          this.backEndBoard[this.numberSquare5 - 5].d &&
        this.backEndBoard[this.numberSquare5 - 5].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare5 - 5
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare5 - 5].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare5].r >
          this.backEndBoard[this.numberSquare5 + 1].l &&
        this.backEndBoard[this.numberSquare5 + 1].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare5 + 1
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare5 + 1].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare5].d >
          this.backEndBoard[this.numberSquare5 + 5].t &&
        this.backEndBoard[this.numberSquare5 + 5].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare5 + 5
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare5 + 5].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare5].l >
          this.backEndBoard[this.numberSquare5 - 1].r &&
        this.backEndBoard[this.numberSquare5 - 1].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare5 - 1
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare5 - 1].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      this.counter++;
    }, this.interval * 13);

    /////////////   ROUND3 ///////////////////////////////
    /////////////  Player1  //////////////////////////////
    setTimeout(() => {
      this.player1Token.style.backgroundColor = this.player1Color;
      this.player2Token.style.backgroundColor = this.inactiveColor;
    }, this.interval * 14);

    setTimeout(() => {
      this.player1FirstMoveCard = prompt("Which card would you like to play?");

      this.numberCard5 = Number(this.player1FirstMoveCard);
      this.player1CardsFrontend[this.numberCard5].innerText = "USED";
      this.player1FirstMoveSquare = prompt("Where would you like to place it?");
      this.numberSquare6 = Number(this.player1FirstMoveSquare);
      this.backEndBoard[this.numberSquare6] =
        this.player1sHand[this.numberCard5];
      console.log(this.backEndBoard);
      this.boardSquareValues[this.numberSquare6].t.innerText =
        this.player1sHand[this.numberCard5].t;
      this.boardSquareValues[this.numberSquare6].r.innerText =
        this.player1sHand[this.numberCard5].r;
      this.boardSquareValues[this.numberSquare6].d.innerText =
        this.player1sHand[this.numberCard5].d;
      this.boardSquareValues[this.numberSquare6].l.innerText =
        this.player1sHand[this.numberCard5].l;
      this.boardSquaresFrontEnd[this.numberSquare6].style.backgroundColor =
        this.player1Color;
      if (
        this.backEndBoard[this.numberSquare3].t >
          this.backEndBoard[this.numberSquare3 - 5].d &&
        this.backEndBoard[this.numberSquare3 - 5].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare3 - 5
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare3 - 5].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare3].r >
          this.backEndBoard[this.numberSquare3 + 1].l &&
        this.backEndBoard[this.numberSquare3 + 1].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare3 + 1
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare3 + 1].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare3].d >
          this.backEndBoard[this.numberSquare3 + 5].t &&
        this.backEndBoard[this.numberSquare3 + 5].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare3 + 5
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare3 + 5].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare3].l >
          this.backEndBoard[this.numberSquare3 - 1].r &&
        this.backEndBoard[this.numberSquare3 - 1].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare3 - 1
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare3 - 1].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      this.counter++;
    }, this.interval * 15);
    ///////////////  player 2   ////////////////////////////
    setTimeout(() => {
      this.player2Token.style.backgroundColor = this.player2Color;
      this.player1Token.style.backgroundColor = this.inactiveColor;
    }, this.interval * 16);

    setTimeout(() => {
      this.player2FirstMoveCard = prompt("Which card would you like to play?");

      this.numberCard6 = Number(this.player2FirstMoveCard);
      this.player2CardsFrontend[this.numberCard6].innerText = "USED";
      this.player2FirstMoveSquare = prompt("Where would you like to place it?");
      this.numberSquare7 = Number(this.player2FirstMoveSquare);
      this.backEndBoard[this.numberSquare7] =
        this.player2sHand[this.numberCard6];
      console.log(this.backEndBoard);
      this.boardSquareValues[this.numberSquare7].t.innerText =
        this.player2sHand[this.numberCard6].t;
      this.boardSquareValues[this.numberSquare7].r.innerText =
        this.player2sHand[this.numberCard6].r;
      this.boardSquareValues[this.numberSquare7].d.innerText =
        this.player2sHand[this.numberCard6].d;
      this.boardSquareValues[this.numberSquare7].l.innerText =
        this.player2sHand[this.numberCard6].l;
      this.boardSquaresFrontEnd[this.numberSquare7].style.backgroundColor =
        this.player2Color;
      if (
        this.backEndBoard[this.numberSquare7].t >
          this.backEndBoard[this.numberSquare7 - 5].d &&
        this.backEndBoard[this.numberSquare7 - 5].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare7 - 5
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare7 - 5].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare7].r >
          this.backEndBoard[this.numberSquare7 + 1].l &&
        this.backEndBoard[this.numberSquare7 + 1].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare7 + 1
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare7 + 1].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare7].d >
          this.backEndBoard[this.numberSquare7 + 5].t &&
        this.backEndBoard[this.numberSquare7 + 5].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare7 + 5
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare7 + 5].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare7].l >
          this.backEndBoard[this.numberSquare7 - 1].r &&
        this.backEndBoard[this.numberSquare7 - 1].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare7 - 1
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare7 - 1].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      this.counter++;
    }, this.interval * 17);

    /////////////   ROUND4 ///////////////////////////////
    /////////////  Player1  //////////////////////////////
    setTimeout(() => {
      this.player1Token.style.backgroundColor = this.player1Color;
      this.player2Token.style.backgroundColor = this.inactiveColor;
    }, this.interval * 18);

    setTimeout(() => {
      this.player1FirstMoveCard = prompt("Which card would you like to play?");

      this.numberCard7 = Number(this.player1FirstMoveCard);
      this.player1CardsFrontend[this.numberCard7].innerText = "USED";
      this.player1FirstMoveSquare = prompt("Where would you like to place it?");
      this.numberSquare8 = Number(this.player1FirstMoveSquare);
      this.backEndBoard[this.numberSquare8] =
        this.player1sHand[this.numberCard7];
      console.log(this.backEndBoard);
      this.boardSquareValues[this.numberSquare8].t.innerText =
        this.player1sHand[this.numberCard7].t;
      this.boardSquareValues[this.numberSquare8].r.innerText =
        this.player1sHand[this.numberCard7].r;
      this.boardSquareValues[this.numberSquare8].d.innerText =
        this.player1sHand[this.numberCard7].d;
      this.boardSquareValues[this.numberSquare8].l.innerText =
        this.player1sHand[this.numberCard7].l;
      this.boardSquaresFrontEnd[this.numberSquare8].style.backgroundColor =
        this.player1Color;
      this.counter++;
      if (
        this.backEndBoard[this.numberSquare8].t >
          this.backEndBoard[this.numberSquare8 - 5].d &&
        this.backEndBoard[this.numberSquare8 - 5].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare8 - 5
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare8 - 5].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare8].r >
          this.backEndBoard[this.numberSquare8 + 1].l &&
        this.backEndBoard[this.numberSquare8 + 1].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare8 + 1
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare8 + 1].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare8].d >
          this.backEndBoard[this.numberSquare8 + 5].t &&
        this.backEndBoard[this.numberSquare8 + 5].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare8 + 5
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare8 + 5].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare8].l >
          this.backEndBoard[this.numberSquare8 - 1].r &&
        this.backEndBoard[this.numberSquare8 - 1].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare8 - 1
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare8 - 1].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
    }, this.interval * 19);
    ///////////////  player 2   ////////////////////////////
    setTimeout(() => {
      this.player2Token.style.backgroundColor = this.player2Color;
      this.player1Token.style.backgroundColor = this.inactiveColor;
    }, this.interval * 20);

    setTimeout(() => {
      this.player2FirstMoveCard = prompt("Which card would you like to play?");
      8;
      this.numberCard8 = Number(this.player2FirstMoveCard);
      this.player2CardsFrontend[this.numberCard8].innerText = "USED";
      this.player2FirstMoveSquare = prompt("Where would you like to place it?");
      this.player2FirstCardPlayed = this.player2sHand[this.numberCard8];
      this.numberSquare9 = Number(this.player2FirstMoveSquare);
      this.backEndBoard[this.numberSquare9] =
        this.player2sHand[this.numberCard8];
      console.log(this.backEndBoard);
      this.boardSquareValues[this.numberSquare9].t.innerText =
        this.player2sHand[this.numberCard8].t;
      this.boardSquareValues[this.numberSquare9].r.innerText =
        this.player2sHand[this.numberCard8].r;
      this.boardSquareValues[this.numberSquare9].d.innerText =
        this.player2sHand[this.numberCard8].d;
      this.boardSquareValues[this.numberSquare9].l.innerText =
        this.player2sHand[this.numberCard8].l;
      this.boardSquaresFrontEnd[this.numberSquare9].style.backgroundColor =
        this.player2Color;
      if (
        this.backEndBoard[this.numberSquare9].t >
          this.backEndBoard[this.numberSquare9 - 5].d &&
        this.backEndBoard[this.numberSquare9 - 5].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare9 - 5
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare9 - 5].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare9].r >
          this.backEndBoard[this.numberSquare9 + 1].l &&
        this.backEndBoard[this.numberSquare9 + 1].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare9 + 1
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare9 + 1].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare9].d >
          this.backEndBoard[this.numberSquare9 + 5].t &&
        this.backEndBoard[this.numberSquare9 + 5].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare9 + 5
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare9 + 5].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare9].l >
          this.backEndBoard[this.numberSquare9 - 1].r &&
        this.backEndBoard[this.numberSquare9 - 1].p === 1
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare9 - 1
        ].style.backgroundColor = this.player2Color;
        this.backEndBoard[this.numberSquare9 - 1].p = 2;
        this.player2PointsCounter++;
        this.player1PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      this.counter++;
    }, this.interval * 21);

    /////////////   ROUND5 ///////////////////////////////
    /////////////  Player1  //////////////////////////////
    setTimeout(() => {
      this.player1Token.style.backgroundColor = this.player1Color;
      this.player2Token.style.backgroundColor = this.inactiveColor;
    }, this.interval * 23);

    setTimeout(() => {
      this.player1FirstMoveCard = prompt("Last card Player one");

      this.numberCard9 = Number(this.player1FirstMoveCard);
      this.player1CardsFrontend[this.numberCard9].innerText = "USED";
      this.player1FirstMoveSquare = prompt("only one square left now");
      this.numberSquare10 = Number(this.player1FirstMoveSquare);
      this.backEndBoard[this.numberSquare10] =
        this.player1sHand[this.numberCard9];
      console.log(this.backEndBoard);
      this.boardSquareValues[this.numberSquare10].t.innerText =
        this.player1sHand[this.numberCard9].t;
      this.boardSquareValues[this.numberSquare10].r.innerText =
        this.player1sHand[this.numberCard9].r;
      this.boardSquareValues[this.numberSquare10].d.innerText =
        this.player1sHand[this.numberCard9].d;
      this.boardSquareValues[this.numberSquare10].l.innerText =
        this.player1sHand[this.numberCard9].l;
      this.boardSquaresFrontEnd[this.numberSquare10].style.backgroundColor =
        this.player1Color;
      if (
        this.backEndBoard[this.numberSquare10].t >
          this.backEndBoard[this.numberSquare10 - 5].d &&
        this.backEndBoard[this.numberSquare10 - 5].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare10 - 5
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare10 - 5].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare10].r >
          this.backEndBoard[this.numberSquare10 + 1].l &&
        this.backEndBoard[this.numberSquare10 + 1].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare10 + 1
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare10 + 1].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare10].d >
          this.backEndBoard[this.numberSquare10 + 5].t &&
        this.backEndBoard[this.numberSquare10 + 5].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare10 + 5
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare10 + 5].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      if (
        this.backEndBoard[this.numberSquare10].l >
          this.backEndBoard[this.numberSquare10 - 1].r &&
        this.backEndBoard[this.numberSquare10 - 1].p === 2
      ) {
        this.boardSquaresFrontEnd[
          this.numberSquare10 - 1
        ].style.backgroundColor = this.player1Color;
        this.backEndBoard[this.numberSquare10 - 1].p = 1;
        this.player1PointsCounter++;
        this.player2PointsCounter--;
        this.player1Points.innerText = this.player1PointsCounter;
        this.player2Points.innerText = this.player2PointsCounter;
      }
      this.counter++;
    }, this.interval * 25);
    console.log(this.backEndBoard);

    setTimeout(() => {
      this.player1Token.style.backgroundColor = this.inactiveColor;
      this.player2Token.style.backgroundColor = this.inactiveColor;
    }, this.interval * 27);
  }
}
const game = new Game();

class Game {
  constructor() {
    this.player1sName = prompt("Greetings Player 1! What's your name?");
    this.player2sName = prompt("Welcome player2. What's your name?");
    this.player1sColor = prompt(
      `${this.player1sName}: What's your favourite color?`
    );
    this.player1FirstMoveCard = null;
    this.player2sColor = prompt(`and yours, ${this.player2sName}`);
    this.inactiveColor = "gray";
    this.counter = 0;
    this.player1Token = document.getElementById("player1-token");
    this.player2Token = document.getElementById("");
    this.player1sHand = [
      { t: 3, r: 4, d: 6, l: 7 }, //player1Card0
      { t: 1, r: 2, d: 5, l: 4 }, //player1Card1
      { t: 9, r: 4, d: 2, l: 8 }, //player1Card4
      { t: 7, r: 1, d: 5, l: 6 }, //player1Card5
      { t: 1, r: 4, d: 8, l: 7 }, //player1Card6
    ];

    this.player2sHand = [
      { t: 4, r: 6, d: 6, l: 5 }, //player2Card0
      { t: 9, r: 3, d: 2, l: 6 }, //player2Card1
      { t: 3, r: 4, d: 6, l: 7 }, //player2Card2
      { t: 1, r: 1, d: 7, l: 5 }, //Player2Card3
      { t: 2, r: 4, d: 2, l: 7 }, //Player2Card4
    ];

    this.player1Card0 = document.getElementById("p1c1");
    this.player1Card0.innerText = `Card 0: t${this.player1sHand[4].t}: r${this.player1sHand[4].r}: d${this.player1sHand[4].d}: l${this.player1sHand[4].l}`;
    this.player1Card1 = document.getElementById("p1c2");
    this.player1Card1.innerText = `Card 1: t${this.player1sHand[3].t}: r${this.player1sHand[3].r}: d${this.player1sHand[3].d}: l${this.player1sHand[3].l}`;
    this.player1Card2 = document.getElementById("p1c3");
    this.player1Card2.innerText = `Card 2: t${this.player1sHand[2].t}: r${this.player1sHand[2].r}: d${this.player1sHand[2].d}: l${this.player1sHand[2].l}`;
    this.player1Card3 = document.getElementById("p1c4");
    this.player1Card3.innerText = `Card 3: t${this.player1sHand[1].t}: r${this.player1sHand[1].r}: d${this.player1sHand[1].d}: l${this.player1sHand[1].l}`;
    this.player1Card4 = document.getElementById("p1c5");
    this.player1Card4.innerText = `Card 4: t${this.player1sHand[0].t}: r${this.player1sHand[0].r}: d${this.player1sHand[0].d}: l${this.player1sHand[0].l}`;

    this.player2Card0 = document.getElementById("p2c1");
    this.player2Card0.innerText = `Card 0: t${this.player2sHand[4].t}: r${this.player2sHand[4].r}: d${this.player2sHand[4].d}: l${this.player2sHand[4].l}`;
    this.player2Card1 = document.getElementById("p2c2");
    this.player2Card1.innerText = `Card 1: t${this.player2sHand[3].t}: r${this.player2sHand[3].r}: d${this.player2sHand[3].d}: l${this.player2sHand[3].l}`;
    this.player2Card2 = document.getElementById("p2c3");
    this.player2Card2.innerText = `Card 2: t${this.player2sHand[2].t}: r${this.player2sHand[2].r}: d${this.player2sHand[2].d}: l${this.player2sHand[2].l}`;
    this.player3Card3 = document.getElementById("p2c4");
    this.player3Card3.innerText = `Card 3: t${this.player2sHand[1].t}: r${this.player2sHand[1].r}: d${this.player2sHand[1].d}: l${this.player2sHand[1].l}`;
    this.player4Card4 = document.getElementById("p2c5");
    this.player4Card4.innerText = `Card 4: t${this.player2sHand[0].t}: r${this.player2sHand[0].r}: d${this.player2sHand[0].d}: l${this.player2sHand[0].l}`;

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
      { t: 0, r: 0, d: 0, l: 0 }, //SquareOne
      { t: 0, r: 0, d: 0, l: 0 }, //squareTwO
      { t: 0, r: 0, d: 0, l: 0 }, //SquareThree
      { t: 0, r: 0, d: 0, l: 0 }, //SquareFour
      { t: 0, r: 0, d: 0, l: 0 }, //SquareFive
      { t: 0, r: 0, d: 0, l: 0 }, //SquareSix
      { t: 0, r: 0, d: 0, l: 0 }, //SquareSeven
      { t: 0, r: 0, d: 0, l: 0 }, //SquareEight
      { t: 0, r: 0, d: 0, l: 0 }, //SquareNine
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
      this.squareOne,
      this.squareTwo,
      this.squareThree,
      this.sqaureFour,
      this.squareFive,
      this.squareSix,
      this.squareSeven,
      this.squareEight,
      this.squareNine,
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
      { t: this.c1T, r: this.c1R, d: this.c1D, l: this.c1L },
      { t: this.c2T, r: this.c2R, d: this.c2D, l: this.c2L },
      { t: this.c3T, r: this.c3R, d: this.c3D, l: this.c3L },
      { t: this.c4T, r: this.c4R, d: this.c4D, l: this.c4L },
      { t: this.c5T, r: this.c5R, d: this.c5D, l: this.c5L },
      { t: this.c6T, r: this.c6R, d: this.c6D, l: this.c6L },
      { t: this.c7T, r: this.c7R, d: this.c7D, l: this.c7l },
      { t: this.c8T, r: this.c8R, d: this.c8D, l: this.c8L },
      { t: this.c9T, r: this.c9R, d: this.c9D, l: this.c9L },
    ];

    //////////////// GAME START /////////////////////////////
    //////////////// GAME START /////////////////////////////
    this.counter = 0;
    setInterval(() => {
      if (this.counter === 0) {
        this.player1Token.style.backgroundColor = this.inactiveColor;
        this.player2Token.style.backgroundColor = this.inactiveColor;
        const readyPlayer1 = prompt(
          "Are you ready player 1? 8type: ('yes/no')"
        );
        const readyPlayer2 = prompt(
          "Are you ready player 1? 8type: ('yes/no')"
        );
        this.counter++;
      }
      /////////////   ROUNDs ///////////////////////////////
      /////////////  FIRST MOVE  //////////////////////////////
      if (this.counter === 1) {
        this.player1Token.style.backgroundColor = this.player1sColor;
        const player1FirstMoveCard = prompt(
          "Which card would you like to play first?"
        );
        this.numberCard1 = Number(player1FirstMoveCard);
        console.log(this.numberCard1);
        console.log(this.player1sHand[0]);
        this.counter++;
      }
      if (this.counter === 2) {
        const player1FirstMoveSquare = prompt(
          "Where would you like to place it?"
        );
        this.numberSquare1 = Number(player1FirstMoveSquare);
        this.boardSquareValues[this.numberSquare1].t.innerText =
          this.player1FirstCardPlayed.t;
        this.boardSquareValues[this.numberSquare1].r.innerText =
          this.player1FirstCardPlayed.r;
        this.boardSquareValues[this.numberSquare1].d.innerText =
          this.player1FirstCardPlayed.d;
        this.boardSquareValues[this.numberSquare1].l.innerText =
          this.player1FirstCardPlayed.l;
        this.boardSquaresFrontEnd[this.numberSquare1].style.backgroundColor =
          player1sColor;
      }
      ///////////////  SECOND MOVE   ////////////////////////////
      if (this.counter === 3) {
        this.player1Token.style.backgroundColor = this.inactiveColor;
        this.player2Token.style.backgroundColor = this.player2sColor;
        this.player2FirstMoveCard = prompt(
          `Which card would you like to play first, ${this.player2sName}`
        );
        this.numberCard2 = Number(this.player1FirstMoveCard);
        this.player2FirstCardPlayed = this.player2sHand[this.numberCard2];
        this.player1CardsFrontEnd[this.numberCard1].innerText = " ";
      }
      if (this.counter === 4) {
        this.player1FirstMoveSquare = prompt(
          "Where would you like to place it?"
        );
        this.numberSquare1 = Number(this.player1FirstMoveSquare);
        this.boardSquareValues[numberSquare1].t = this.player1FirstCardPlayed.t;
        this.boardSquareValues[numberSquare1].r = this.player1FirstCardPlayed.r;
        this.boardSquareValues[numberSquare1].d = this.player1FirstCardPlayed.d;
        this.boardSquareValues[numberSquare1].l = this.player1FirstCardPlayed.l;
        this.boardSquaresFrontEnd[this.numberSquare1].style.backgroundColor =
          this.player1sColor;
      }
      console.log(this.counter);
    }, 3000);

    setTimeout(() => {
      const clearTimer = clearTimeout(timer);
    }, 3000 * 12);
  }
}

const game = new Game();
/*  /////////////   ROUNDs ///////////////////////////////
    /////////////  FIRST MOVE  //////////////////////////////
    this.player1Token.style.backgroundColor = this.player1sColor;
    this.player1FirstMoveCard = prompt(
      "Which card would you like to play first?"
    );
    this.numberCard1 = Number(this.player1FirstMoveCard);
    console.log(this.numberCard1);
    this.player1FirstCardPlayed = this.player1sHand[this.numberCard1];
    console.log(this.player1FirstCardPlayed);
    this.player1CardsFrontEnd[this.numberCard1].innerText = " ";
    this.player1FirstMoveSquare = prompt("Where would you like to place it?");
    this.numberSquare1 = Number(this.player1FirstMoveSquare);
    this.boardSquareValues[this.numberSquare1].t.innerText =
      this.player1FirstCardPlayed.t;
    this.boardSquareValues[this.numberSquare1].r.innerText =
      this.player1FirstCardPlayed.r;
    this.boardSquareValues[this.numberSquare1].d.innerText =
      this.player1FirstCardPlayed.d;
    this.boardSquareValues[this.numberSquare1].l.innerText =
      this.player1FirstCardPlayed.l;
    this.boardSquaresFrontEnd[this.numberSquare1].style.backgroundColor =
      player1sColor;

    ///////////////  SECOND MOVE   ////////////////////////////
    this.player1Token.style.backgroundColor = this.inactiveColor;
    this.player2Token.style.backgroundColor = this.player2sColor;
    this.player2FirstMoveCard = prompt(
      `Which card would you like to play first, ${this.player2sName}`
    );
    this.numberCard2 = Number(this.player1FirstMoveCard);
    this.player2FirstCardPlayed = this.player2sHand[this.numberCard2];

    this.player1CardsFrontEnd[this.numberCard1].innerText = " ";
    this.player1FirstMoveSquare = prompt("Where would you like to place it?");
    this.numberSquare1 = Number(this.player1FirstMoveSquare);
    this.boardSquareValues[numberSquare1].t = this.player1FirstCardPlayed.t;
    this.boardSquareValues[numberSquare1].r = this.player1FirstCardPlayed.r;
    this.boardSquareValues[numberSquare1].d = this.player1FirstCardPlayed.d;
    this.boardSquareValues[numberSquare1].l = this.player1FirstCardPlayed.l;
    this.boardSquaresFrontEnd[this.numberSquare1].style.backgroundColor =
      this.player1sColor;
      /////////////   ROUNDs ///////////////////////////////
      /////////////  FIRST MOVE  //////////////////////////////
      this.player1Token.style.backgroundColor = this.player1sColor;
      this.player1FirstMoveCard = prompt(
        "Which card would you like to play first?"
      );
      this.numberCard1 = Number(this.player1FirstMoveCard);
      console.log(this.numberCard1);
      this.player1FirstCardPlayed = this.player1sHand[this.numberCard1];
      console.log(this.player1FirstCardPlayed);
      this.player1CardsFrontEnd[this.numberCard1].innerText = " ";
      this.player1FirstMoveSquare = prompt("Where would you like to place it?");
      this.numberSquare1 = Number(this.player1FirstMoveSquare);
      this.boardSquareValues[this.numberSquare1].t.innerText =
        this.player1FirstCardPlayed.t;
      this.boardSquareValues[this.numberSquare1].r.innerText =
        this.player1FirstCardPlayed.r;
      this.boardSquareValues[this.numberSquare1].d.innerText =
        this.player1FirstCardPlayed.d;
      this.boardSquareValues[this.numberSquare1].l.innerText =
        this.player1FirstCardPlayed.l;
      this.boardSquaresFrontEnd[this.numberSquare1].style.backgroundColor =
        player1sColor;

      ///////////////  SECOND MOVE   ////////////////////////////
      this.player1Token.style.backgroundColor = this.inactiveColor;
      this.player2Token.style.backgroundColor = this.player2sColor;
      this.player2FirstMoveCard = prompt(
        `Which card would you like to play first, ${this.player2sName}`
      );
      this.numberCard2 = Number(this.player1FirstMoveCard);
      this.player2FirstCardPlayed = this.player2sHand[this.numberCard2];

      this.player1CardsFrontEnd[this.numberCard1].innerText = " ";
      this.player1FirstMoveSquare = prompt("Where would you like to place it?");
      this.numberSquare1 = Number(this.player1FirstMoveSquare);
      this.boardSquareValues[numberSquare1].t = this.player1FirstCardPlayed.t;
      this.boardSquareValues[numberSquare1].r = this.player1FirstCardPlayed.r;
      this.boardSquareValues[numberSquare1].d = this.player1FirstCardPlayed.d;
      this.boardSquareValues[numberSquare1].l = this.player1FirstCardPlayed.l;
      this.boardSquaresFrontEnd[this.numberSquare1].style.backgroundColor =
        this.player1sColor;
    })
    

    /////////////   ROUNDs ///////////////////////////////
    /////////////  FIRST MOVE  //////////////////////////////
    this.player1Token.style.backgroundColor = this.player1sColor;
    this.player1FirstMoveCard = prompt(
      "Which card would you like to play first?"
    );
    this.numberCard1 = Number(this.player1FirstMoveCard);
    console.log(this.numberCard1);
    this.player1FirstCardPlayed = this.player1sHand[this.numberCard1];
    console.log(this.player1FirstCardPlayed);
    this.player1CardsFrontEnd[this.numberCard1].innerText = " ";
    this.player1FirstMoveSquare = prompt("Where would you like to place it?");
    this.numberSquare1 = Number(this.player1FirstMoveSquare);
    this.boardSquareValues[this.numberSquare1].t.innerText =
      this.player1FirstCardPlayed.t;
    this.boardSquareValues[this.numberSquare1].r.innerText =
      this.player1FirstCardPlayed.r;
    this.boardSquareValues[this.numberSquare1].d.innerText =
      this.player1FirstCardPlayed.d;
    this.boardSquareValues[this.numberSquare1].l.innerText =
      this.player1FirstCardPlayed.l;
    this.boardSquaresFrontEnd[this.numberSquare1].style.backgroundColor =
      player1sColor;

    ///////////////  SECOND MOVE   ////////////////////////////
    this.player1Token.style.backgroundColor = this.inactiveColor;
    this.player2Token.style.backgroundColor = this.player2sColor;
    this.player2FirstMoveCard = prompt(
      `Which card would you like to play first, ${this.player2sName}`
    );
    this.numberCard2 = Number(this.player1FirstMoveCard);
    this.player2FirstCardPlayed = this.player2sHand[this.numberCard2];

    this.player1CardsFrontEnd[this.numberCard1].innerText = " ";
    this.player1FirstMoveSquare = prompt("Where would you like to place it?");
    this.numberSquare1 = Number(this.player1FirstMoveSquare);
    this.boardSquareValues[numberSquare1].t = this.player1FirstCardPlayed.t;
    this.boardSquareValues[numberSquare1].r = this.player1FirstCardPlayed.r;
    this.boardSquareValues[numberSquare1].d = this.player1FirstCardPlayed.d;
    this.boardSquareValues[numberSquare1].l = this.player1FirstCardPlayed.l;
    this.boardSquaresFrontEnd[this.numberSquare1].style.backgroundColor =
      this.player1sColor;
  }
}
const game = new Game();
/*

    if (counter === 1) {
      p1token.style.backgroundColor = "lightblue";
    }

    if (counter === 2) {
      p1token.style.backgroundColor = "black";
      p2token.style.backgroundColor = "lightcoral";

      //player one chooses a card
      const whichCard = prompt("choose a card");
      const card = player1sHand[Number(whichCard)];
      if (whichCard === "0") {
        p1c5.innerText = "used ";
      } else if (whichCard === "1") {
        p1c4.innerText = "used";
      } else if (whichCard === "2") {
        p1c3.innerText = "used";
      } else if (whichCard === "3") {
        p1c2.innerText = "used";
      } else if (whichCard === "4") {
        p1c1.innerText = "used";
      }

      //player chooses a square
      const whichSquare = prompt("choose a square");
      const square = Number(whichSquare);
      //card is placed
      if (square === 1) {
        c1T.innerText = card.t;
        c1R.innerText = card.r;
        c1D.innerText = card.d;
        c1L.innerText = card.l;
        one.style.backgroundColor = "lightblue";
        oneColor = true;
        oneArray.push(card);
      }
      if (square === 2) {
        c2T.innerText = card.t;
        c2R.innerText = card.r;
        c2D.innerText = card.d;
        c2L.innerText = card.l;
        two.style.backgroundColor = "lightblue";
        twoColor = true;
        twoArray.push(card);
      }
      if (square === 3) {
        c3T.innerText = card.t;
        c3R.innerText = card.r;
        c3D.innerText = card.d;
        c3L.innerText = card.l;
        three.style.backgroundColor = "lightblue";
        threeColor = true;
        threeArray.push(card);
      }
      if (square === 4) {
        c4T.innerText = card.t;
        c4R.innerText = card.r;
        c4D.innerText = card.d;
        c4L.innerText = card.l;
        four.style.backgroundColor = "lightblue";
        fourColor = true;
        fourArray.push(card);
      }
      if (square === 5) {
        c5T.innerText = card.t;
        c5R.innerText = card.r;
        c5D.innerText = card.d;
        c5L.innerText = card.l;
        five.style.backgroundColor = "lightblue";
        fiveColor = true;
        fiveArray.push(card);
      }
      if (square === 6) {
        c6T.innerText = card.t;
        c6R.innerText = card.r;
        c6D.innerText = card.d;
        c6L.innerText = card.l;
        six.style.backgroundColor = "lightblue";
        sixColor = true;
        sixArray.push(card);
      }
      if (square === 7) {
        c7T.innerText = card.t;
        c7R.innerText = card.r;
        c7D.innerText = card.d;
        c7L.innerText = card.l;
        seven.style.backgroundColor = "lightblue";
        sevenColor = true;
        sevenArray.push(card);
      }
      if (square === 8) {
        c8T.innerText = card.t;
        c8R.innerText = card.r;
        c8D.innerText = card.d;
        c8L.innerText = card.l;
        eight.style.backgroundColor = "lightblue";
        eightColor = true;
        eightArray.push(card);
      }
      if (square === 9) {
        c9T.innerText = card.t;
        c9R.innerText = card.r;
        c9D.innerText = card.d;
        c9L.innerText = card.l;
        nine.style.backgroundColor = "lightblue";
        nineColor = true;
        nineArray.push(card);
      }
    }

    //Player 2 chooses a card
    if (counter === 3) {
      p1token.style.backgroundColor = "lightblue";
      p2token.style.backgroundColor = "black";
      const whichCard2 = prompt("choose a card");
      const card2 = player2sHand[Number(whichCard2)];
      if (whichCard2 === "0") {
        p2c5.innerText = "used";
      } else if (whichCard2 === "1") {
        p2c4.innerText = "used";
      } else if (whichCard2 === "2") {
        p2c3.innerText = "used";
      } else if (whichCard2 === "3") {
        p2c2.innerText = "used";
      } else if (whichCard2 === "4") {
        p2c1.innerText = "used";
      }

      const whichSquare2 = prompt("choose a square");
      const square2 = Number(whichSquare2);
      //card is placed
      if (square2 === 1) {
        c1T.innerText = card2.t;
        c1R.innerText = card2.r;
        c1D.innerText = card2.d;
        c1L.innerText = card2.l;
        one.style.backgroundColor = "lightcoral";
        oneColor = false;
      }
      if (square2 === 2) {
        c2T.innerText = card2.t;
        c2R.innerText = card2.r;
        c2D.innerText = card2.d;
        c2L.innerText = card2.l;
        two.style.backgroundColor = "lightcoral";
        twoColor = false;
        twoArray.push(card2);
      }
      if (square2 === 3) {
        c3T.innerText = card2.t;
        c3R.innerText = card2.r;
        c3D.innerText = card2.d;
        c3L.innerText = card2.l;
        three.style.backgroundColor = "lightcoral";
        threeColor = false;
      }
      if (square2 === 4) {
        c4T.innerText = card2.t;
        c4R.innerText = card2.r;
        c4D.innerText = card2.d;
        c4L.innerText = card2.l;
        four.style.backgroundColor = "lightcoral";
        fourColor = false;
      }
      if (square2 === 5) {
        c5T.innerText = card2.t;
        c5R.innerText = card2.r;
        c5D.innerText = card2.d;
        c5L.innerText = card2.l;
        five.style.backgroundColor = "lightcoral";
        fiveColor = false;
      }
      if (square2 === 6) {
        c6T.innerText = card2.t;
        c6R.innerText = card2.r;
        c6D.innerText = card2.d;
        c6L.innerText = card2.l;
        six.style.backgroundColor = "lightcoral";
        sixColor = false;
      }
      if (square2 === 7) {
        c7T.innerText = card2.t;
        c7R.innerText = card2.r;
        c7D.innerText = card2.d;
        c7L.innerText = card2.l;
        seven.style.backgroundColor = "lightcoral";
        sevenColor = false;
      }
      if (square2 === 8) {
        c8T.innerText = card2.t;
        c8R.innerText = card2.r;
        c8D.innerText = card2.d;
        c8L.innerText = card2.l;
        eight.style.backgroundColor = "lightcoral";
        eightColor = false;
      }
      if (square2 === 9) {
        c9T.innerText = card2.t;
        c9R.innerText = card2.r;
        c9D.innerText = card2.d;
        c9L.innerText = card2.l;
        nine.style.backgroundColor = "lightcoral";
        nineColor = false;
      }
    }

    //player 1 chooses card
    if (counter === 4) {
      p1token.style.backgroundColor = "black";
      p2token.style.backgroundColor = "lightcoral";
      const whichCard3 = prompt("choose a card");
      const card3 = player1sHand[Number(whichCard3)];
      if (whichCard3 === "0") {
        p1c5.innerText = "used";
      } else if (whichCard3 === "1") {
        p1c4.innerText = "used";
      } else if (whichCard3 === "2") {
        p1c3.innerText = "used";
      } else if (whichCard3 === "3") {
        p1c2.innerText = "used";
      } else if (whichCard3 === "4") {
        p1c1.innerText = "used";
      }
      const whichSquare3 = prompt("choose a square");
      const square3 = Number(whichSquare3);
      //card is placed
      if (square3 === 1) {
        c1T.innerText = card3.t;
        c1R.innerText = card3.r;
        c1D.innerText = card3.d;
        c1L.innerText = card3.l;
        one.style.backgroundColor = "lightblue";
        oneColor = true;
      }
      if (square3 === 2) {
        c2T.innerText = card3.t;
        c2R.innerText = card3.r;
        c2D.innerText = card3.d;
        c2L.innerText = card3.l;
        two.style.backgroundColor = "lightblue";
        twoColor = true;
      }
      if (square3 === 3) {
        c3T.innerText = card3.t;
        c3R.innerText = card3.r;
        c3D.innerText = card3.d;
        c3L.innerText = card3.l;
        three.style.backgroundColor = "lightblue";
        threeColor = true;
      }
      if (square3 === 4) {
        c4T.innerText = card3.t;
        c4R.innerText = card3.r;
        c4D.innerText = card3.d;
        c4L.innerText = card3.l;
        four.style.backgroundColor = "lightblue";
        fourColor = true;
      }
      if (square3 === 5) {
        c5T.innerText = card3.t;
        c5R.innerText = card3.r;
        c5D.innerText = card3.d;
        c5L.innerText = card3.l;
        five.style.backgroundColor = "lightblue";
        fiveColor = true;
      }
      if (square3 === 6) {
        c6T.innerText = card3.t;
        c6R.innerText = card3.r;
        c6D.innerText = card3.d;
        c6L.innerText = card3.l;
        six.style.backgroundColor = "lightblue";
        sixColor = true;
      }
      if (square3 === 7) {
        c7T.innerText = card3.t;
        c7R.innerText = card3.r;
        c7D.innerText = card3.d;
        c7L.innerText = card3.l;
        seven.style.backgroundColor = "lightblue";
        sevenColor = true;
      }
      if (square3 === 8) {
        c8T.innerText = card3.t;
        c8R.innerText = card3.r;
        c8D.innerText = card3.d;
        c8L.innerText = card3.l;
        eight.style.backgroundColor = "lightblue";
        eightColor = true;
      }
      if (square3 === 9) {
        c9T.innerText = card3.t;
        c9R.innerText = card3.r;
        c9D.innerText = card3.d;
        c9L.innerText = card3.l;
        nine.style.backgroundColor = "lightblue";
        nineColor = true;
      }
    }

    //player 2 chooses a card
    if (counter === 5) {
      p1token.style.backgroundColor = "lightblue";
      p2token.style.backgroundColor = "black";
      const whichCard4 = prompt("choose a card");
      const card4 = player2sHand[Number(whichCard4)];
      if (whichCard4 === "0") {
        p2c5.innerText = "used";
      } else if (whichCard4 === "1") {
        p2c4.innerText = "used";
      } else if (whichCard4 === "2") {
        p2c3.innerText = "used";
      } else if (whichCard4 === "3") {
        p2c2.innerText = "used";
      } else if (whichCard4 === "4") {
        p2c1.innerText = "used";
      }
      const whichSquare4 = prompt("choose a square");
      const square4 = Number(whichSquare4);
      //card is placed
      if (square4 === 1) {
        c1T.innerText = card4.t;
        c1R.innerText = card4.r;
        c1D.innerText = card4.d;
        c1L.innerText = card4.l;
        one.style.backgroundColor = "lightcoral";
        oneColor = false;
      }
      if (square4 === 2) {
        c2T.innerText = card4.t;
        c2R.innerText = card4.r;
        c2D.innerText = card4.d;
        c2L.innerText = card4.l;
        two.style.backgroundColor = "lightcoral";
        twoColor = false;
      }
      if (square4 === 3) {
        c3T.innerText = card4.t;
        c3R.innerText = card4.r;
        c3D.innerText = card4.d;
        c3L.innerText = card4.l;
        three.style.backgroundColor = "lightcoral";
        threeColor = false;
      }
      if (square4 === 4) {
        c4T.innerText = card4.t;
        c4R.innerText = card4.r;
        c4D.innerText = card4.d;
        c4L.innerText = card4.l;
        four.style.backgroundColor = "lightcoral";
        fourColor = false;
      }
      if (square4 === 5) {
        c5T.innerText = card4.t;
        c5R.innerText = card4.r;
        c5D.innerText = card4.d;
        c5L.innerText = card4.l;
        five.style.backgroundColor = "lightcoral";
        fiveColor = false;
      }
      if (square4 === 6) {
        c6T.innerText = card4.t;
        c6R.innerText = card4.r;
        c6D.innerText = card4.d;
        c6L.innerText = card4.l;
        six.style.backgroundColor = "lightcoral";
        sixColor = false;
      }
      if (square4 === 7) {
        c7T.innerText = card4.t;
        c7R.innerText = card4.r;
        c7D.innerText = card4.d;
        c7L.innerText = card4.l;
        seven.style.backgroundColor = "lightcoral";
        sevenColor = false;
      }
      if (square4 === 8) {
        c8T.innerText = card4.t;
        c8R.innerText = card4.r;
        c8D.innerText = card4.d;
        c8L.innerText = card4.l;
        eight.style.backgroundColor = "lightcoral";
        eightColor = false;
      }
      if (square4 === 9) {
        c9T.innerText = card4.t;
        c9R.innerText = card4.r;
        c9D.innerText = card4.d;
        c9L.innerText = card4.l;
        nine.style.backgroundColor = "lightcoral";
        nineColor = false;
      }
    }

    //player 1 chooses a card
    if (counter === 6) {
      p1token.style.backgroundColor = "black";
      p2token.style.backgroundColor = "lightcoral";
      const whichCard5 = prompt("choose a card");
      const card5 = player1sHand[Number(whichCard5)];
      if (whichCard5 === "0") {
        p1c5.innerText = "used";
      } else if (whichCard5 === "1") {
        p1c4.innerText = "used";
      } else if (whichCard5 === "2") {
        p1c3.innerText = "used";
      } else if (whichCard5 === "3") {
        p1c2.innerText = "used";
      } else if (whichCard5 === "4") {
        p1c1.innerText = "used";
      }
      const whichSquare5 = prompt("choose a square");
      const square5 = Number(whichSquare5);
      //card is placed
      if (square5 === 1) {
        c1T.innerText = card5.t;
        c1R.innerText = card5.r;
        c1D.innerText = card5.d;
        c1L.innerText = card5.l;
        one.style.backgroundColor = "lightblue";
        oneColor = true;
      }
      if (square5 === 2) {
        c2T.innerText = card5.t;
        c2R.innerText = card5.r;
        c2D.innerText = card5.d;
        c2L.innerText = card5.l;
        two.style.backgroundColor = "lightblue";
        twoColor = true;
      }
      if (square5 === 3) {
        c3T.innerText = card5.t;
        c3R.innerText = card5.r;
        c3D.innerText = card5.d;
        c3L.innerText = card5.l;
        three.style.backgroundColor = "lightblue";
        threeColor = true;
      }
      if (square5 === 4) {
        c4T.innerText = card5.t;
        c4R.innerText = card5.r;
        c4D.innerText = card5.d;
        c4L.innerText = card5.l;
        four.style.backgroundColor = "lightblue";
        fourColor = true;
      }
      if (square5 === 5) {
        c5T.innerText = card5.t;
        c5R.innerText = card5.r;
        c5D.innerText = card5.d;
        c5L.innerText = card5.l;
        five.style.backgroundColor = "lightblue";
        fiveColor = true;
      }
      if (square5 === 6) {
        c6T.innerText = card5.t;
        c6R.innerText = card5.r;
        c6D.innerText = card5.d;
        c6L.innerText = card5.l;
        six.style.backgroundColor = "lightblue";
        sixColor = true;
      }
      if (square5 === 7) {
        c7T.innerText = card5.t;
        c7R.innerText = card5.r;
        c7D.innerText = card5.d;
        c7L.innerText = card5.l;
        seven.style.backgroundColor = "lightblue";
        sevenColor = true;
      }
      if (square5 === 8) {
        c8T.innerText = card5.t;
        c8R.innerText = card5.r;
        c8D.innerText = card5.d;
        c8L.innerText = card5.l;
        eight.style.backgroundColor = "lightblue";
        eightColor = true;
      }
      if (square5 === 9) {
        c9T.innerText = card5.t;
        c9R.innerText = card5.r;
        c9D.innerText = card5.d;
        c9L.innerText = card5.l;
        nine.style.backgroundColor = "lightblue";
        nineColor = true;
      }
    }

    //player 2 chooses a card
    if (counter === 7) {
      p1token.style.backgroundColor = "lightblue";
      p2token.style.backgroundColor = "black";
      const whichCard6 = prompt("choose a card");
      const card6 = player2sHand[Number(whichCard6)];
      if (whichCard6 === "0") {
        p2c5.innerText = "used";
      } else if (whichCard6 === "1") {
        p2c4.innerText = "used";
      } else if (whichCard6 === "2") {
        p2c3.innerText = "used";
      } else if (whichCard6 === "3") {
        p2c2.innerText = "used";
      } else if (whichCard6 === "4") {
        p2c1.innerText = "used";
      }
      const whichSquare6 = prompt("choose a square");
      const square6 = Number(whichSquare6);
      //card is placed
      if (square6 === 1) {
        c1T.innerText = card6.t;
        c1R.innerText = card6.r;
        c1D.innerText = card6.d;
        c1L.innerText = card6.l;
        one.style.backgroundColor = "lightcoral";
        oneColor = false;
      }
      if (square6 === 2) {
        c2T.innerText = card6.t;
        c2R.innerText = card6.r;
        c2D.innerText = card6.d;
        c2L.innerText = card6.l;
        two.style.backgroundColor = "lightcoral";
        twoColor = false;
      }
      if (square6 === 3) {
        c3T.innerText = card6.t;
        c3R.innerText = card6.r;
        c3D.innerText = card6.d;
        c3L.innerText = card6.l;
        three.style.backgroundColor = "lightcoral";
        threeColor = false;
      }
      if (square6 === 4) {
        c4T.innerText = card6.t;
        c4R.innerText = card6.r;
        c4D.innerText = card6.d;
        c4L.innerText = card6.l;
        four.style.backgroundColor = "lightcoral";
        fourColor = false;
      }
      if (square6 === 5) {
        c5T.innerText = card6.t;
        c5R.innerText = card6.r;
        c5D.innerText = card6.d;
        c5L.innerText = card6.l;
        five.style.backgroundColor = "lightcoral";
        fiveColor = false;
      }
      if (square6 === 6) {
        c6T.innerText = card6.t;
        c6R.innerText = card6.r;
        c6D.innerText = card6.d;
        c6L.innerText = card6.l;
        six.style.backgroundColor = "lightcoral";
        sixColor = false;
      }
      if (square6 === 7) {
        c7T.innerText = card6.t;
        c7R.innerText = card6.r;
        c7D.innerText = card6.d;
        c7L.innerText = card6.l;
        seven.style.backgroundColor = "lightcoral";
        sevenColor = false;
      }

      if (square6 === 8) {
        c8T.innerText = card6.t;
        c8R.innerText = card6.r;
        c8D.innerText = card6.d;
        c8L.innerText = card6.l;
        eight.style.backgroundColor = "lightcoral";
        eightColor = false;
      }
      if (square6 === 9) {
        c9T.innerText = card6.t;
        c9R.innerText = card6.r;
        c9D.innerText = card6.d;
        c9L.innerText = card6.l;
        nine.style.backgroundColor = "lightcoral";
        nineColor = false;
      }
    }
    //player 1 chooses a card
    if (counter === 8) {
      p1token.style.backgroundColor = "black";
      p2token.style.backgroundColor = "lightcoral";
      const whichCard7 = prompt("choose a card");
      const card7 = player1sHand[Number(whichCard7)];
      if (whichCard7 === "0") {
        p1c5.innerText = "used";
      } else if (whichCard7 === "1") {
        p1c4.innerText = "used";
      } else if (whichCard7 === "2") {
        p1c3.innerText = "used";
      } else if (whichCard7 === "3") {
        p1c2.innerText = "used";
      } else if (whichCard7 === "4") {
        p1c1.innerText = "used";
      }
      const whichSquare7 = prompt("choose a square");
      const square7 = Number(whichSquare7);
      //card is placed
      if (square7 === 1) {
        c1T.innerText = card7.t;
        c1R.innerText = card7.r;
        c1D.innerText = card7.d;
        c1L.innerText = card7.l;
        one.style.backgroundColor = "lightblue";
        oneColor = true;
      }
      if (square7 === 2) {
        c2T.innerText = card7.t;
        c2R.innerText = card7.r;
        c2D.innerText = card7.d;
        c2L.innerText = card7.l;
        two.style.backgroundColor = "lightblue";
        twoColor = true;
      }
      if (square7 === 3) {
        c3T.innerText = card7.t;
        c3R.innerText = card7.r;
        c3D.innerText = card7.d;
        c3L.innerText = card7.l;
        three.style.backgroundColor = "lightblue";
        threeColor = true;
      }
      if (square7 === 4) {
        c4T.innerText = card7.t;
        c4R.innerText = card7.r;
        c4D.innerText = card7.d;
        c4L.innerText = card7.l;
        four.style.backgroundColor = "lightblue";
        fourColor = true;
      }
      if (square7 === 5) {
        c5T.innerText = card7.t;
        c5R.innerText = card7.r;
        c5D.innerText = card7.d;
        c5L.innerText = card7.l;
        five.style.backgroundColor = "lightblue";
        fiveColor = true;
      }
      if (square7 === 6) {
        c6T.innerText = card7.t;
        c6R.innerText = card7.r;
        c6D.innerText = card7.d;
        c6L.innerText = card7.l;
        six.style.backgroundColor = "lightblue";
        sixColor = true;
      }
      if (square7 === 7) {
        c7T.innerText = card7.t;
        c7R.innerText = card7.r;
        c7D.innerText = card7.d;
        c7L.innerText = card7.l;
        seven.style.backgroundColor = "lightblue";
        sevenColor = true;
      }
      if (square7 === 8) {
        c8T.innerText = card7.t;
        c8R.innerText = card7.r;
        c8D.innerText = card7.d;
        c8L.innerText = card7.l;
        eight.style.backgroundColor = "lightblue";
        eightColor = true;
      }
      if (square7 === 9) {
        c9T.innerText = card7.t;
        c9R.innerText = card7.r;
        c9D.innerText = card7.d;
        c9L.innerText = card7.l;
        nine.style.backgroundColor = "lightblue";
        nineColor = true;
      }
    }

    //player 2 chooses a card
    if (counter === 9) {
      p1token.style.backgroundColor = "lightblue";
      p2token.style.backgroundColor = "black";
      const whichCard8 = prompt("choose a card");
      const card8 = player2sHand[Number(whichCard8)];
      if (whichCard8 === "0") {
        p2c5.innerText = "used";
      } else if (whichCard8 === "1") {
        p2c4.innerText = "used";
      } else if (whichCard8 === "2") {
        p2c3.innerText = "used";
      } else if (whichCard8 === "3") {
        p2c2.innerText = "used";
      } else if (whichCard8 === "4") {
        p2c1.innerText = "used";
      }
      const whichSquare8 = prompt("choose a square");
      const square8 = Number(whichSquare8);

      //card is placed
      if (square8 === 1) {
        c1T.innerText = card8.t;
        c1R.innerText = card8.r;
        c1D.innerText = card8.d;
        c1L.innerText = card8.l;
        one.style.backgroundColor = "lightcoral";
        oneColor = false;
      }
      if (square8 === 2) {
        c2T.innerText = card8.t;
        c2R.innerText = card8.r;
        c2D.innerText = card8.d;
        c2L.innerText = card8.l;
        two.style.backgroundColor = "lightcoral";
        twoColor = false;
      }
      if (square8 === 3) {
        c3T.innerText = card8.t;
        c3R.innerText = card8.r;
        c3D.innerText = card8.d;
        c3L.innerText = card8.l;
        three.style.backgroundColor = "lightcoral";
        threeColor = false;
      }
      if (square8 === 4) {
        c4T.innerText = card8.t;
        c4R.innerText = card8.r;
        c4D.innerText = card8.d;
        c4L.innerText = card8.l;
        four.style.backgroundColor = "lightcoral";
        fourColor = false;
      }
      if (square8 === 5) {
        c5T.innerText = card8.t;
        c5R.innerText = card8.r;
        c5D.innerText = card8.d;
        c5L.innerText = card8.l;
        five.style.backgroundColor = "lightcoral";
        fiveColor = false;
      }
      if (square8 === 6) {
        c6T.innerText = card8.t;
        c6R.innerText = card8.r;
        c6D.innerText = card8.d;
        c6L.innerText = card8.l;
        six.style.backgroundColor = "lightcoral";
        sixColor = false;
      }
      if (square8 === 7) {
        c7T.innerText = card8.t;
        c7R.innerText = card8.r;
        c7D.innerText = card8.d;
        c7L.innerText = card8.l;
        seven.style.backgroundColor = "lightcoral";
        sevenColor = false;
      }
      if (square8 === 8) {
        c8T.innerText = card8.t;
        c8R.innerText = card8.r;
        c8D.innerText = card8.d;
        c8L.innerText = card8.l;
        eight.style.backgroundColor = "lightcoral";
        eightColor = false;
      }
      if (square8 === 9) {
        c9T.innerText = card8.t;
        c9R.innerText = card8.r;
        c9D.innerText = card8.d;
        c9L.innerText = card8.l;
        nine.style.backgroundColor = "lightcoral";
        nineColor = false;
      }
    }

    //player 1 chooses a card
    if (counter === 10) {
      p1token.style.backgroundColor = "black";
      p2token.style.backgroundColor = "lightcoral";
      const whichCard9 = prompt("choose a card");
      const card9 = player1sHand[Number(whichCard9)];
      if (whichCard9 === "0") {
        p1c5.innerText = "used";
      } else if (whichCard9 === "1") {
        p1c4.innerText = "used";
      } else if (whichCard9 === "2") {
        p1c3.innerText = "used";
      } else if (whichCard9 === "3") {
        p1c2.innerText = "used";
      } else if (whichCard9 === "4") {
        p1c1.innerText = "used";
      }
      const whichSquare9 = prompt("choose a square");
      const square9 = Number(whichSquare9);
      //card is placed
      if (square9 === 1) {
        c1T.innerText = card9.t;
        c1R.innerText = card9.r;
        c1D.innerText = card9.d;
        c1L.innerText = card9.l;
        one.style.backgroundColor = "lightblue";
        oneColor = true;
      }
      if (square9 === 2) {
        c2T.innerText = card9.t;
        c2R.innerText = card9.r;
        c2D.innerText = card9.d;
        c2L.innerText = card9.l;
        two.style.backgroundColor = "lightblue";
        twoColor = true;
      }
      if (square9 === 3) {
        c3T.innerText = card9.t;
        c3R.innerText = card9.r;
        c3D.innerText = card9.d;
        c3L.innerText = card9.l;
        three.style.backgroundColor = "lightblue";
        threeColor = true;
      }
      if (square9 === 4) {
        c4T.innerText = card9.t;
        c4R.innerText = card9.r;
        c4D.innerText = card9.d;
        c4L.innerText = card9.l;
        four.style.backgroundColor = "lightblue";
        fourColor = true;
      }
      if (square9 === 5) {
        c5T.innerText = card9.t;
        c5R.innerText = card9.r;
        c5D.innerText = card9.d;
        c5L.innerText = card9.l;
        five.style.backgroundColor = "lightblue";
        fiveColor = true;
      }
      if (square9 === 6) {
        c6T.innerText = card9.t;
        c6R.innerText = card9.r;
        c6D.innerText = card9.d;
        c6L.innerText = card9.l;
        six.style.backgroundColor = "lightblue";
        sixColor = true;
      }
      if (square9 === 7) {
        c7T.innerText = card9.t;
        c7R.innerText = card9.r;
        c7D.innerText = card9.d;
        c7L.innerText = card9.l;
        seven.style.backgroundColor = "lightblue";
        sevenColor = true;
      }
      if (square9 === 8) {
        c8T.innerText = card9.t;
        c8R.innerText = card9.r;
        c8D.innerText = card9.d;
        c8L.innerText = card9.l;
        eight.style.backgroundColor = "lightblue";
        eightColor = true;
      }
      if (square9 === 9) {
        c9T.innerText = card9.t;
        c9R.innerText = card9.r;
        c9D.innerText = card9.d;
        c9L.innerText = card9.l;
        nine.style.backgroundColor = "lightblue";
        nineColor = true;
      }

      if (counter === 11) {
        p1token.style.backgroundColor = "gray";
        p2token.style.backgroundColor = "gray";
      }
    }
  }
}


*/

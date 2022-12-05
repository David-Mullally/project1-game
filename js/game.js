const player1sHand = [
  //Front-end ids;
  { t: 3, r: 4, d: 6, l: 7 }, //p1c1
  { t: 1, r: 2, d: 5, l: 4 }, //p2c2
  { t: 9, r: 4, d: 2, l: 8 }, //p2c3
  { t: 7, r: 1, d: 5, l: 6 }, //p2c4
  { t: 1, r: 4, d: 8, l: 7 }, //p2c5
]; //Back-end

const player2sHand = [
  //Front-end ids;
  { t: 4, r: 6, d: 6, l: 5 }, //p2c1
  { t: 9, r: 3, d: 2, l: 6 }, //p2c2
  { t: 3, r: 4, d: 6, l: 7 }, //p2c3
  { t: 1, r: 1, d: 7, l: 5 }, //p2c4
  { t: 2, r: 4, d: 2, l: 7 }, //p2c5
]; //Back-end

const frontEndBoard = document.getElementById("board");
const backEndBoard = [
  [
    //Front-end ids:
    { t: 0, r: 0, d: 0, l: 0 }, //c1T, c1R, c1D, c1L
    { t: 0, r: 0, d: 0, l: 0 },
    { t: 0, r: 0, d: 0, l: 0 },
  ],
  [
    { t: 0, r: 0, d: 0, l: 0 },
    { t: 0, r: 0, d: 0, l: 0 },
    { t: 0, r: 0, d: 0, l: 0 },
  ],
  [
    { t: 0, r: 0, d: 0, l: 0 },
    { t: 0, r: 0, d: 0, l: 0 },
    { t: 0, r: 0, d: 0, l: 0 },
  ],
];

//Front-end players hands
const p1c1 = document.getElementById("p1c1");
p1c1.innerText = `${player1sHand[4].t}: ${player1sHand[4].r}: ${player1sHand[4].d}: ${player1sHand[4].l}`;
const p1c2 = document.getElementById("p1c2");
p1c2.innerText = `${player1sHand[3].t}: ${player1sHand[3].r}: ${player1sHand[3].d}: ${player1sHand[3].l}`;
const p1c3 = document.getElementById("p1c3");
p1c3.innerText = `${player1sHand[2].t}: ${player1sHand[2].r}: ${player1sHand[2].d}: ${player1sHand[2].l}`;
const p1c4 = document.getElementById("p1c4");
p1c4.innerText = `${player1sHand[1].t}: ${player1sHand[1].r}: ${player1sHand[1].d}: ${player1sHand[1].l}`;
const p1c5 = document.getElementById("p1c5");
p1c5.innerText = `${player1sHand[0].t}: ${player1sHand[0].r}: ${player1sHand[0].d}: ${player1sHand[0].l}`;

const p2c1 = document.getElementById("p2c1");
p2c1.innerText = `${player2sHand[4].t}: ${player2sHand[4].r}: ${player2sHand[4].d}: ${player2sHand[4].l}`;
const p2c2 = document.getElementById("p2c2");
p2c2.innerText = `${player2sHand[3].t}: ${player1sHand[3].r}: ${player1sHand[3].d}: ${player1sHand[3].l}`;
const p2c3 = document.getElementById("p2c3");
p2c3.innerText = `${player2sHand[2].t}: ${player2sHand[2].r}: ${player2sHand[2].d}: ${player2sHand[2].l}`;
const p2c4 = document.getElementById("p2c4");
p2c4.innerText = `${player2sHand[1].t}: ${player2sHand[1].r}: ${player2sHand[1].d}: ${player2sHand[1].l}`;
const p2c5 = document.getElementById("p2c5");
p2c5.innerText = `${player1sHand[0].t}: ${player1sHand[0].r}: ${player1sHand[0].d}: ${player1sHand[0].l}`;

// players points
let counter = 0;
const p1pts = document.getElementById("player1-points");
const p2pts = document.getElementById("player2-points");
let player1Points = 5;
let player2Points = 5;

//player tokens
const p1token = document.getElementById("player1-token");
const p2token = document.getElementById("player2-token");

// Board placeholders for card values
const c1T = document.getElementById("c1T");
const c1R = document.getElementById("c1R");
const c1D = document.getElementById("c1D");
const c1L = document.getElementById("c1L");
const c2T = document.getElementById("c2T");
const c2R = document.getElementById("c2R");
const c2D = document.getElementById("c2D");
const c2L = document.getElementById("c2L");
const c3T = document.getElementById("c3T");
const c3R = document.getElementById("c3R");
const c3D = document.getElementById("c3D");
const c3L = document.getElementById("c3L");
const c4T = document.getElementById("c4T");
const c4R = document.getElementById("c4R");
const c4D = document.getElementById("c4D");
const c4L = document.getElementById("c4L");
const c5T = document.getElementById("c5T");
const c5R = document.getElementById("c5R");
const c5D = document.getElementById("c5D");
const c5L = document.getElementById("c5L");
const c6T = document.getElementById("c6T");
const c6R = document.getElementById("c6R");
const c6D = document.getElementById("c6D");
const c6L = document.getElementById("c6L");
const c7T = document.getElementById("c7T");
const c7R = document.getElementById("c7R");
const c7D = document.getElementById("c7D");
const c7L = document.getElementById("c7L");
const c8T = document.getElementById("c8T");
const c8R = document.getElementById("c8R");
const c8D = document.getElementById("c8D");
const c8L = document.getElementById("c8L");
const c9T = document.getElementById("c9T");
const c9R = document.getElementById("c9R");
const c9D = document.getElementById("c9D");
const c9L = document.getElementById("c9L");

/*
let squareOne = null;
let squareTwo = null;
let SquareThree = null;
let squareFour = null;
let squareFive = null;
let squareSix = null;
let squareSeven = null;
let squareEight = null;
*/

const timer = setInterval(() => {
  p1token.style.backgroundColor = "gray";
  p2token.style.backgroundColor = "gray";

  if (counter === 1) {
    p1token.style.backgroundColor = "green";
    p2token.style.backgroundColor = "red";
  }

  if (counter === 2) {
    // switch player token
    p1token.style.backgroundColor = "red";
    p2token.style.backgroundColor = "green";
    //player chooses a card
    const whichCard = prompt("Which card would you like to play this round?");
    const card = player1sHand[Number(whichCard)];
    if (whichCard === "0") {
      p1c5.innerText = " ";
    } else if (whichCard === "1") {
      p1c4.innerText = " ";
    } else if (whichCard === "2") {
      p1c3.innerText = " ";
    } else if (whichCard === "3") {
      p1c2.innerText = " ";
    } else if (whichCard === "4") {
      p1c1.innerText = " ";
    }
    //player chooses a square
    const whichSquare = prompt(
      "A fine choice! Where would you like to put it?......that's what she said"
    );
    const square = Number(whichSquare);
    //card is placed
    if (square === 1) {
      c1T.innerText = card.t;
      c1R.innerText = card.r;
      c1D.innerText = card.d;
      c1L.innerText = card.l;
    }
  }

  if (counter === 3) {
    p1token.style.backgroundColor = "green";
    p2token.style.backgroundColor = "red";
    const whichCard2 = prompt("Which card would you like to play this round?");
    const card2 = player2sHand[Number(whichCard2)];
    const whichSquare2 = prompt(
      "A fine choice! Where would you like to put it?......that's what she said"
    );
    const square2 = Number(whichSquare2);

    if (square2 === 2) {
      c2T.innerText = card2.t;
      c2R.innerText = card2.r;
      c2D.innerText = card2.d;
      c2L.innerText = card2.l;
    }
  }
  if (counter === 4) {
    p1token.style.backgroundColor = "red";
    p2token.style.backgroundColor = "green";
    const whichCard3 = prompt("Which card would you like to play this round?");
    const card3 = player1sHand[Number(whichCard3)];
    const whichSquare3 = prompt(
      "A fine choice! Where would you like to put it?......that's what she said"
    );
    const square3 = Number(whichSquare3);

    if (square3 === 3) {
      c3T.innerText = card3.t;
      c3R.innerText = card3.r;
      c3D.innerText = card3.d;
      c3L.innerText = card3.l;
    }
  }
  if (counter === 5) {
    p1token.style.backgroundColor = "green";
    p2token.style.backgroundColor = "red";
    const whichCard4 = prompt("Which card would you like to play this round?");
    const card4 = player2sHand[Number(whichCard4)];
    const whichSquare4 = prompt(
      "A fine choice! Where would you like to put it?......that's what she said"
    );
    const square4 = Number(whichSquare4);

    if (square4 === 4) {
      c4T.innerText = card4.t;
      c4R.innerText = card4.r;
      c4D.innerText = card4.d;
      c4L.innerText = card4.l;
    }
  }
  if (counter === 6) {
    p1token.style.backgroundColor = "red";
    p2token.style.backgroundColor = "green";
    const whichCard5 = prompt("Which card would you like to play this round?");
    const card5 = player1sHand[Number(whichCard5)];
    const whichSquare5 = prompt(
      "A fine choice! Where would you like to put it?......that's what she said"
    );
    const square5 = Number(whichSquare5);

    if (square5 === 5) {
      c5T.innerText = card5.t;
      c5R.innerText = card5.r;
      c5D.innerText = card5.d;
      c5L.innerText = card5.l;
    }
  }
  if (counter === 7) {
    p1token.style.backgroundColor = "green";
    p2token.style.backgroundColor = "red";
    const whichCard6 = prompt("Which card would you like to play this round?");
    const card6 = player2sHand[Number(whichCard6)];
    const whichSquare6 = prompt(
      "A fine choice! Where would you like to put it?......that's what she said"
    );
    const square6 = Number(whichSquare6);

    if (square6 === 6) {
      c6T.innerText = card6.t;
      c6R.innerText = card6.r;
      c6D.innerText = card6.d;
      c6L.innerText = card6.l;
    }
  }
  if (counter === 8) {
    p1token.style.backgroundColor = "red";
    p2token.style.backgroundColor = "green";
    const whichCard7 = prompt("Which card would you like to play this round?");
    const card7 = player1sHand[Number(whichCard7)];
    const whichSquare7 = prompt(
      "A fine choice! Where would you like to put it?......that's what she said"
    );
    const square7 = Number(whichSquare7);

    if (square7 === 7) {
      c7T.innerText = card7.t;
      c7R.innerText = card7.r;
      c7D.innerText = card7.d;
      c7L.innerText = card7.l;
    }
  }
  if (counter === 9) {
    p1token.style.backgroundColor = "green";
    p2token.style.backgroundColor = "red";
    const whichCard8 = prompt("Which card would you like to play this round?");
    const card8 = player2sHand[Number(whichCard8)];
    const whichSquare8 = prompt(
      "A fine choice! Where would you like to put it?......that's what she said"
    );
    const square8 = Number(whichSquare8);

    if (square8 === 8) {
      c8T.innerText = card8.t;
      c8R.innerText = card8.r;
      c8D.innerText = card8.d;
      c8L.innerText = card8.l;
    }
  }
  if (counter === 10) {
    p1token.style.backgroundColor = "green";
    p2token.style.backgroundColor = "red";
    const whichCard9 = prompt("Which card would you like to play this round?");
    const card9 = player1sHand[Number(whichCard9)];
    const whichSquare9 = prompt(
      "A fine choice! Where would you like to put it?......that's what she said"
    );
    const square9 = Number(whichSquare9);

    if (square9 === 9) {
      c9T.innerText = card9.t;
      c9R.innerText = card9.r;
      c9D.innerText = card9.d;
      c9L.innerText = card9.l;
    }
  }
  if (counter === 11) {
    p1token.style.backgroundColor = "gray";
    p2token.style.backgroundColor = "gray";
  }

  counter++;
  console.log(counter);
}, 3000);

setTimeout(() => {
  const clearTimer = clearTimeout(timer);
}, 3000 * 11);

//const timer = setInterval(() => {
//counter++;
//Round1
//player1 places first card
//if (counter === 1) {
//Player chooses a card from there hand//
/*const cardNumber = prompt(
  "Which card would you like to use? (type the number here)"
);

if (cardNumber === 1) {
  const p1c1 = document.getElementById("p1c1");
  p1c1.innerText = " ";
}

const cardNumberAsNumber = Number(cardNumber);
const cardToBePlaced1 = player1sHand[cardNumberAsNumber];
console.log(cardToBePlaced1);
//const cardToBePlaced1 = player1sHand.pop();

//player chooses a square to place their chosen card on
const whereToPlaceNum = prompt(
  "Where would you like to place your card?(type the number of the square)"
);

//const whereToPlaceNum = Number(whereToPlace);
if (whereToPlaceNum === 1) {
  const valueTop1 = document.getElementById("c1T");
  const valueRight1 = document.getElementById("c1R");
  const valueDown1 = document.getElementById("c1D");
  const valueLeft1 = document.getElementById("c1L");
  valueTop1.innerText = cardToBePlaced1.t;
  valueRight1.innerText = cardToBePlaced1.r;
  valueDown1.innerText = cardToBePlaced1.d;
  valueLeft1.innerText = cardToBePlaced1.l;
} else if (whereToPlaceNum === 2) {
  const c2ValueTop1 = document.getElementById("c2T");
  const c2ValueRight1 = document.getElementById("c2R");
  const c2ValueDown1 = document.getElementById("c2D");
  const c2ValueLeft1 = document.getElementById("c2L");
  c2ValueTop1.innerText = cardToBePlaced1.t;
  c2ValueRight1.innerText = cardToBePlaced1.r;
  c2ValueDown1.innerText = cardToBePlaced1.d;
  c2ValueLeft1.innerText = cardToBePlaced1.l;
} else if (whereToPlaceNum === 3) {
  const c3ValueTop1 = document.getElementById("c3T");
  const c3ValueRight1 = document.getElementById("c3R");
  const c3ValueDown1 = document.getElementById("c3D");
  const c3ValueLeft1 = document.getElementById("c3L");
  c3ValueTop1.innerText = cardToBePlaced1.t;
  c3ValueRight1.innerText = cardToBePlaced1.r;
  c3ValueDown1.innerText = cardToBePlaced1.d;
  c3ValueLeft1.innerText = cardToBePlaced1.l;
} else if (whereToPlaceNum === 4) {
  const c4ValueTop1 = document.getElementById("c4T");
  const c4ValueRight1 = document.getElementById("c4R");
  const c4ValueDown1 = document.getElementById("c4D");
  const c4ValueLeft1 = document.getElementById("c4L");
  c4ValueTop1.innerText = cardToBePlaced1.t;
  c4ValueRight1.innerText = cardToBePlaced1.r;
  c4ValueDown1.innerText = cardToBePlaced1.d;
  c4ValueLeft1.innerText = cardToBePlaced1.l;
} else if (whereToPlaceNum === 5) {
  const c5ValueTop1 = document.getElementById("c5T");
  const c5ValueRight1 = document.getElementById("c5R");
  const c5ValueDown1 = document.getElementById("c5D");
  const c5ValueLeft1 = document.getElementById("c5L");
  c5ValueTop1.innerText = cardToBePlaced1.t;
  c5ValueRight1.innerText = cardToBePlaced1.r;
  c5ValueDown1.innerText = cardToBePlaced1.d;
  c5ValueLeft1.innerText = cardToBePlaced1.l;
} else if (whereToPlaceNum === 6) {
  const c6ValueTop1 = document.getElementById("c6T");
  const c6ValueRight1 = document.getElementById("c6R");
  const c6ValueDown1 = document.getElementById("c6D");
  const c6ValueLeft1 = document.getElementById("c6L");
  c6ValueTop1.innerText = cardToBePlaced1.t;
  c6ValueRight1.innerText = cardToBePlaced1.r;
  c6ValueDown1.innerText = cardToBePlaced1.d;
  c6ValueLeft1.innerText = cardToBePlaced1.l;
} else if (whereToPlaceNum === 7) {
  const c7ValueTop1 = document.getElementById("c7T");
  const c7ValueRight1 = document.getElementById("c7R");
  const c7ValueDown1 = document.getElementById("c7D");
  const c7ValueLeft1 = document.getElementById("c7L");
  c7ValueTop1.innerText = cardToBePlaced1.t;
  c7ValueRight1.innerText = cardToBePlaced1.r;
  c7ValueDown1.innerText = cardToBePlaced1.d;
  c7ValueLeft1.innerText = cardToBePlaced1.l;
} else if (whereToPlaceNum === 8) {
  const c8ValueTop1 = document.getElementById("c8T");
  const c8ValueRight1 = document.getElementById("c8R");
  const c8ValueDown1 = document.getElementById("c8D");
  const c8ValueLeft1 = document.getElementById("c8L");
  c8ValueTop1.innerText = cardToBePlaced1.t;
  c8ValueRight1.innerText = cardToBePlaced1.r;
  c8ValueDown1.innerText = cardToBePlaced1.d;
  c8ValueLeft1.innerText = cardToBePlaced1.l;
} else if (whereToPlaceNum === 9) {
  const c9ValueTop1 = document.getElementById("c9T");
  const c9ValueRight1 = document.getElementById("c9R");
  const c9ValueDown1 = document.getElementById("c9D");
  const c9ValueLeft1 = document.getElementById("c9L");
  c9ValueTop1.innerText = cardToBePlaced1.t;
  c9ValueRight1.innerText = cardToBePlaced1.r;
  c9ValueDown1.innerText = cardToBePlaced1.d;
  c9ValueLeft1.innerText = cardToBePlaced1.l;
}

//player2 places first card
if (counter === 2) {
  const cardToBePlaced2 = player2sHand.pop();
  const valueTop2 = document.getElementById("c2T");
  const valueRight2 = document.getElementById("c2R");
  const valueDown2 = document.getElementById("c2D");
  const valueLeft2 = document.getElementById("c2L");
  valueTop2.innerText = cardToBePlaced2.t;
  valueRight2.innerText = cardToBePlaced2.r;
  valueDown2.innerText = cardToBePlaced2.d;
  valueLeft2.innerText = cardToBePlaced2.l;
  p2c1.innerText = " ";
  const two = document.getElementById("two");
  two.style.backgroundColor = "lightblue";
  if (cardToBePlaced2.l > 4) {
    const one = document.getElementById("one");
    one.style.backgroundColor = "lightblue";
    let p1p = document.getElementById("player1-points");
    player1Points--;
    p1p.innerText = player1Points;
    let p2p = document.getElementById("player2-points");
    player2Points++;
    p2p.innerText = player2Points;
  }
}

//Round2
//player1 places second card
if (counter === 3) {
  const cardToBePlaced3 = player1sHand.pop();
  const valueTop3 = document.getElementById("c3T");
  const valueRight3 = document.getElementById("c3R");
  const valueDown3 = document.getElementById("c3D");
  const valueLeft3 = document.getElementById("c3L");
  valueTop3.innerText = cardToBePlaced3.t;
  valueRight3.innerText = cardToBePlaced3.r;
  valueDown3.innerText = cardToBePlaced3.d;
  valueLeft3.innerText = cardToBePlaced3.l;
  p1c2.innerText = " ";
  const three = document.getElementById("three");
  three.style.backgroundColor = "lightcoral";
  if (cardToBePlaced3.l > 4) {
    const two = document.getElementById("two");
    two.style.backgroundColor = "lightcoral";
    const p2p = document.getElementById("player2-points");
    player2Points--;
    p2p.innerText = player2Points;
    const p1p = document.getElementById("player1-points");
    player1Points++;
    p1p.innerText = player1Points;
  }
}

//player2 places second card
if (counter === 4) {
  const cardToBePlaced4 = player2sHand.pop();
  const valueTop4 = document.getElementById("c4T");
  const valueRight4 = document.getElementById("c4R");
  const valueDown4 = document.getElementById("c4D");
  const valueLeft4 = document.getElementById("c4L");
  valueTop4.innerText = cardToBePlaced4.t;
  valueRight4.innerText = cardToBePlaced4.r;
  valueDown4.innerText = cardToBePlaced4.d;
  valueLeft4.innerText = cardToBePlaced4.l;
  p2c2.innerText = " ";
  const four = document.getElementById("four");
  four.style.backgroundColor = "lightblue";
  if (cardToBePlaced4.t > 8) {
    const one = document.getElementById("one");
    one.style.backgroundColor = "lightblue";
    const p1p = document.getElementById("player1-points");
    player1Points--;
    p1p.innerText = player1Points;
    const p2p = document.getElementById("player2-points");
    player2Points++;
    p2p.innerText = player2Points;
  }
}

//Round3
//player1 places third card
if (counter === 5) {
  const cardToBePlaced5 = player1sHand.pop();
  const valueTop5 = document.getElementById("c5T");
  const valueRight5 = document.getElementById("c5R");
  const valueDown5 = document.getElementById("c5D");
  const valueLeft5 = document.getElementById("c5L");
  valueTop5.innerText = cardToBePlaced5.t;
  valueRight5.innerText = cardToBePlaced5.r;
  valueDown5.innerText = cardToBePlaced5.d;
  valueLeft5.innerText = cardToBePlaced5.l;
  p1c3.innerText = " ";
  const five = document.getElementById("five");
  five.style.backgroundColor = "lightcoral";
  if (cardToBePlaced5.l > 1) {
    const four = document.getElementById("four");
    four.style.backgroundColor = "lightcoral";
    const p2p = document.getElementById("player2-points");
    player2Points--;
    p2p.innerText = player2Points;
    const p1p = document.getElementById("player1-points");
    player1Points++;
    p1p.innerText = player1Points;
  }
  if (cardToBePlaced5.t < 2) {
    const two = document.getElementById("two");
    two.style.backgroundColor = "lightCoral";
    const p2p = document.getElementById("player2-points");
    player2Points--;
    p2p.innerText = player2Points;
    const p1p = document.getElementById("player1-points");
    player1Points++;
    p1p.innerText = player1Points;
  }
}

//player2 places third card
if (counter === 6) {
  const cardToBePlaced6 = player2sHand.pop();
  const valueTop6 = document.getElementById("c6T");
  const valueRight6 = document.getElementById("c6R");
  const valueDown6 = document.getElementById("c6D");
  const valueLeft6 = document.getElementById("c6L");
  valueTop6.innerText = cardToBePlaced6.t;
  valueRight6.innerText = cardToBePlaced6.r;
  valueDown6.innerText = cardToBePlaced6.d;
  valueLeft6.innerText = cardToBePlaced6.l;
  p2c3.innerText = " ";
  const six = document.getElementById("six");
  six.style.backgroundColor = "lightblue";
  if (cardToBePlaced6.l > 4) {
    const five = document.getElementById("five");
    five.style.backgroundColor = "lightblue";
    const p1p = document.getElementById("player1-points");
    player1Points--;
    p1p.innerText = player1Points;
    const p2p = document.getElementById("player2-points");
    player2Points++;
    p2p.innerText = player2Points;
  }
  if (cardToBePlaced6.t > 5) {
    const three = document.getElementById("three");
    three.style.backgroundColor = "lightblue";
    const p1p = document.getElementById("player1-points");
    player1Points--;
    p1p.innerText = player1Points;
    const p2p = document.getElementById("player2-points");
    player2Points++;
    p2p.innerText = player2Points;
  }
}

//Round4
//player1 places forth card
if (counter === 7) {
  const cardToBePlaced7 = player1sHand.pop();
  const valueTop7 = document.getElementById("c7T");
  const valueRight7 = document.getElementById("c7R");
  const valueDown7 = document.getElementById("c7D");
  const valueLeft7 = document.getElementById("c7L");
  valueTop7.innerText = cardToBePlaced7.t;
  valueRight7.innerText = cardToBePlaced7.r;
  valueDown7.innerText = cardToBePlaced7.d;
  valueLeft7.innerText = cardToBePlaced7.l;
  p1c4.innerText = " ";
  const seven = document.getElementById("seven");
  seven.style.backgroundColor = "lightcoral";
  if (cardToBePlaced7.t > 7) {
    const four = document.getElementById("four");
    four.style.backgroundColor = "lightcoral";
    const p2p = document.getElementById("player2-points");
    player2Points--;
    p2p.innerText = player2Points;
    const p1p = document.getElementById("player1-points");
    player1Points++;
    p1p.innerText = player1Points;
  }
}

//player2 places forth card
if (counter === 8) {
  const cardToBePlaced8 = player2sHand.pop();
  const valueTop8 = document.getElementById("c8T");
  const valueRight8 = document.getElementById("c8R");
  const valueDown8 = document.getElementById("c8D");
  const valueLeft8 = document.getElementById("c8L");
  valueTop8.innerText = cardToBePlaced8.t;
  valueRight8.innerText = cardToBePlaced8.r;
  valueDown8.innerText = cardToBePlaced8.d;
  valueLeft8.innerText = cardToBePlaced8.l;
  p2c4.innerText = " ";
  const eight = document.getElementById("eight");
  eight.style.backgroundColor = "lightblue";
  if (cardToBePlaced8.r > 2) {
    const seven = document.getElementById("seven");
    seven.style.backgroundColor = "lightblue";
    const p1p = document.getElementById("player1-points");
    player1Points--;
    p1p.innerText = player1Points;
    const p2p = document.getElementById("player2-points");
    player2Points++;
    p2p.innerText = player2Points;
  }
  if (cardToBePlaced8.t > 2) {
    const five = document.getElementById("five");
    five.style.backgroundColor = "lightblue";
    const p1p = document.getElementById("player1-points");
    player1Points--;
    p1p.innerText = player1Points;
    const p2p = document.getElementById("player2-points");
    player2Points++;
    p2p.innerText = player2Points;
  }
}

//final card
//player1 places fifth card
if (counter === 9) {
  const cardToBePlaced9 = player1sHand.pop();
  const valueTop9 = document.getElementById("c9T");
  const valueRight9 = document.getElementById("c9R");
  const valueDown9 = document.getElementById("c9D");
  const valueLeft9 = document.getElementById("c9L");
  valueTop9.innerText = cardToBePlaced9.t;
  valueRight9.innerText = cardToBePlaced9.r;
  valueDown9.innerText = cardToBePlaced9.d;
  valueLeft9.innerText = cardToBePlaced9.l;
  p2c5.innerText = " ";
  const nine = document.getElementById("nine");
  nine.style.backgroundColor = "lightcoral";
  if (cardToBePlaced9.l > 3) {
    const eight = document.getElementById("eight");
    eight.style.backgroundColor = "lightcoral";
    const p2p = document.getElementById("player2-points");
    player2Points--;
    p2p.innerText = player2Points;
    const p1p = document.getElementById("player1-points");
    player1Points++;
    p1p.innerText = player1Points;
  }
  if (cardToBePlaced9.t > 6) {
    const p2p = document.getElementById("player2-points");
    player2Points--;
    p2p.innerText = player2Points;
    const p1p = document.getElementById("player1-points");
    player1Points++;
    p1p.innerText = player1Points;
  }
}
//console.log("hello");
//}, 3000);

//setTimeout(() => {
// const clearTimer = clearTimeout(timer);
//}, 3020);
/*
class Game {
  constructor() {
    this.turnCount = 0;
    this.token = true;
    this.board = [
      [
        { x: 0, y: 2 },
        { x: 1, y: 2 },
        { X: 2, y: 2 },
      ],
      [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ],
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
      ],
    ];
    this.player1Turn();
  }

  player1Turn() {
    this.turnCount++;
    const player1Token = document.getElementById("player1-token");
    player1Token.style.backgroundColor = "lightblue";
    const player2Token = document.getElementById("player2-token");
    player2Token.style.backgroundColor = "";
    const p1selectBtn = document.getElementById("p1-select-card");
    p1selectBtn.innerText = "....choose a card";
    const p2selectBtn = document.getElementById("p2-select-card");
    p2selectBtn.innerText = "....wait ";
    const c1t = document.getElementById("c1t");
    console.log(this.deck);
  }

  player2Turn() {
    const player1Token = document.getElementById("player1-token");
    player1Token.style.backgroundColor = "";
    const player2Token = document.getElementById("player2-token");
    player2Token.style.backgroundColor = "lightcoral";
    const p1selectBtn = document.getElementById("p1-select-card");
    p1selectBtn.innerText = "....wait";
    const p2selectBtn = document.getElementById("p2-select-card");
    p2selectBtn.innerText = "choose a crad ";
  }
}

class Player1 {
  constructor() {
    this.name = "Dengo";
    this.posX = 0;
    this.posY = 0;
    this.player1active = document.getElementById("player1-token");
    this.nameOnScreen = document.getElementById("player1-name");
    this.nameOnScreen.innerText = this.name;
    this.deck = [
      { t: 1, r: 4, b: 5, l: 2 },
      { t: 5, r: 8, b: 3, l: 5 },
      { t: 1, r: 3, b: 8, l: 7 },
      { t: 7, r: 2, b: 4, l: 5 },
      { t: 2, r: 6, b: 6, l: 1 },
    ];
    ///////////Player 2s deck SCREEN////////////
    this.deckOnScreen = document.getElementById("player1Hand");

    this.card1OnScreen = document.getElementById("p1c1");
    this.card1OnScreen.innerText = `top:${this.deck[0].t} right:${this.deck[0].r} bottom: ${this.deck[0].b} left:${this.deck[0].l}`;

    this.card2OnScreen = document.getElementById("p1c2");
    this.card2OnScreen.innerText = `top:${this.deck[1].t} right:${this.deck[1].r} bottom: ${this.deck[1].b} left:${this.deck[1].l}`;

    this.card3OnScreen = document.getElementById("p1c3");
    this.card3OnScreen.innerText = `top:${this.deck[2].t} right:${this.deck[2].r} bottom: ${this.deck[2].b} left:${this.deck[2].l}`;

    this.card4OnScreen = document.getElementById("p1c4");
    this.card4OnScreen.innerText = `top:${this.deck[3].t} right:${this.deck[3].r} bottom: ${this.deck[3].b} left:${this.deck[3].l}`;

    this.card5OnScreen = document.getElementById("p1c5");
    this.card5OnScreen.innerText = `top:${this.deck[4].t} right:${this.deck[4].r} bottom: ${this.deck[4].b} left:${this.deck[4].l}`;

    this.points = document.getElementById("player1-points");
    this.points.innerText = this.deck.length;
  }
}

const player1 = new Player1();

class Player2 {
  constructor() {
    this.name = "Doodles";
    this.posX = 0;
    this.posY = 0;
    this.player2active = document.getElementById("player2-token");
    this.nameOnScreen = document.getElementById("player2-name");
    this.nameOnScreen.innerText = this.name;
    this.deck = [
      { t: 3, r: 2, b: 7, l: 3 },
      { t: 5, r: 2, b: 6, l: 3 },
      { t: 3, r: 5, b: 1, l: 2 },
      { t: 5, r: 2, b: 2, l: 9 },
      { t: 2, r: 3, b: 6, l: 1 },
    ];

    ///////////Player 2s deck SCREEN////////////
    this.deckOnScreen = document.getElementById("player2Hand");

    this.card1OnScreen = document.getElementById("p2c1");
    this.card1OnScreen.innerText = `top:${this.deck[0].t} right:${this.deck[0].r} bottom: ${this.deck[0].b} left:${this.deck[0].l}`;

    this.card2OnScreen = document.getElementById("p2c2");
    this.card2OnScreen.innerText = `top:${this.deck[1].t} right:${this.deck[1].r} bottom: ${this.deck[1].b} left:${this.deck[1].l}`;

    this.card3OnScreen = document.getElementById("p2c3");
    this.card3OnScreen.innerText = `top:${this.deck[2].t} right:${this.deck[2].r} bottom: ${this.deck[2].b} left:${this.deck[2].l}`;

    this.card4OnScreen = document.getElementById("p2c4");
    this.card4OnScreen.innerText = `top:${this.deck[3].t} right:${this.deck[3].r} bottom: ${this.deck[3].b} left:${this.deck[3].l}`;

    this.card5OnScreen = document.getElementById("p2c5");
    this.card5OnScreen.innerText = `top:${this.deck[4].t} right:${this.deck[4].r} bottom: ${this.deck[4].b} left:${this.deck[4].l}`;

    this.points = document.getElementById("player2-points");
    this.points.innerText = this.deck.length;
  }
}
const player2 = new Player2();

//player1 chooses a card from their hand
//player1 places this card on the board
//captures are determined
//play switrhed to player two and repeats

const actionButton1 = document.getElementById("action-button1");
const player1Starts = actionButton1.addEventListener("click", () => {
  const game = new Game();
  actionButton1.innerText = "choose wisely player 1..";
  actionButton2.innerText = "waiting for player 1";
  const player1Token = document.getElementById("player1-token");
  player1Token.style.backgroundColor = "lightblue";
  const player2Token = document.getElementById("player2-token");
  player2Token.style.backgroundColor = "";
  const p2selectBtn = document.getElementById("p2-select-card");
  p2selectBtn.style.innerText = " ";
});

const actionButton2 = document.getElementById("action-button2");
actionButton2.addEventListener("click", () => {
  const game = new Game();
  actionButton1.innerText = "waiting for player 2..";
  actionButton2.innerText = "choose wisely player 2!";
  const player1Token = document.getElementById("player1-token");
  player1Token.style.backgroundColor = "";
  const player2Token = document.getElementById("player2-token");
  player2Token.style.backgroundColor = "lightcoral";
  const p1selectBtn = document.getElementById("p1-select-card");
  p1selectBtn.style.innerText = " ";
});

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

let oneTimesClicked = 0;
let twoTimesClicked = 0;
let threeTimesClicked = 0;
let fourTimesClicked = 0;
let fiveTimesClicked = 0;
let sixTimesClicked = 0;
let sevenTimesClicked = 0;
let eightTimesClicked = 0;
let nineTimesClicked = 0;

const oneClicks = one.addEventListener("click", function () {
  const number = Math.floor(Math.random() * 7);
  if (number === 0) {
    one.style.backgroundColor = "red";
  } else if (number === 1) {
    one.style.backgroundColor = "orange";
  } else if (number === 2) {
    one.style.backgroundColor = "yellow";
  } else if (number === 3) {
    one.style.backgroundColor = "green";
  } else if (number === 4) {
    one.style.backgroundColor = "blue";
  } else if (number === 5) {
    one.style.backgroundColor = "indigo";
  } else if (number === 6) {
    one.style.backgroundColor = "violet";
  } else {
    one.style.backgroundColor;
  }
});

two.addEventListener("click", function () {});
three.addEventListener("click", function () {});
four.addEventListener("click", function () {});
five.addEventListener("click", function () {});
six.addEventListener("click", function () {});
seven.addEventListener("click", function () {});
eight.addEventListener("click", function () {});
nine.addEventListener("click", function () {});

let positionX = 0;
let positionY = 0;

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    positionX++;
  } else if (event.key === "ArrowRight") {
    positionY++;
  } else if (event.key === "ArrowDown") {
    positionY--;
  } else if (event.key === "ArrowLeft") {
    positionX--;
  }
});*/

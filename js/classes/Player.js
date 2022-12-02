class Player {
  constructor() {
    this.height = 10;
    this.positionX = 25;
    this.positionY = 31;
    this.width = 3;
    this.domElement = null;
    this.createDomElement();
  }

  createDomElement() {
    //first step: create ther dom element
    this.domElement = document.createElement("div");

    //second step: add content and modify the dom element
    this.domElement.id = "player";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.width = this.width + "vw";

    // third step: append the element to it's parent element
    const boardElm = document.getElementById("board");
    boardElm.appendChild(this.domElement);
  }

  moveLeft() {
    if (this.positionX > 11.3) {
      this.positionX--;
      this.domElement.style.left = this.positionX + "vw";
      this.domElement.style.transform = "rotate(-90deg)";
    } else {
      this.domElement.innerHTML =
        '<img style="width: 5vw" src = "/images/explosion.png"></src>';
    }
  }

  moveRight() {
    if (this.positionX < 86) {
      this.positionX++;
      this.domElement.style.left = this.positionX + "vw";
      this.domElement.style.transform = "rotate(90deg)";
    } else {
      this.domElement.innerHTML =
        '<img style="width: 5vw" src = "/images/explosion.png"></src>';
    }
  }

  moveUp() {
    if (this.positionY < 80) {
      this.positionY++;
      this.domElement.style.bottom = this.positionY + "vh";
      this.domElement.style.transform = "rotate(0deg)";
    } else {
      this.domElement.innerHTML =
        '<img style="width: 5vw" src = "/images/explosion.png"></src>';
    }
  }
  moveDown() {
    if (this.positionY > 20) {
      this.positionY--;
      this.domElement.style.bottom = this.positionY + "vh";
      this.domElement.style.transform = "rotate(180deg)";
    } else {
      this.domElement.innerHTML =
        '<img style="width: 5vw" src = "/images/explosion.png"></src>';
    }
  }

  shoot() {
    console.log("shots fired!");
  }
}

const player = new Player();

class ObstaclesTTB {
  constructor() {
    this.width = 10;
    this.height = 10;
    this.positionX = Math.random() * 80 + 10;
    this.positionY = 80;

    this.domElement = null;
    this.createDomElement();
  }

  createDomElement() {
    //first step: create ther dom element
    this.domElement = document.createElement("div");

    //second step: add content and modify the dom element
    this.domElement.className = "obstacle";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.position = "absolute";
    this.domElement.style.backgroundSize = "170px";
    this.domElement.style.backgroundImage =
      "url('/images/asteroid.png.crdownload')";

    // third step: append the element to it's parent element
    const boardElm = document.getElementById("board");
    boardElm.appendChild(this.domElement);
  }

  moveDown() {
    this.positionY--;
    this.domElement.style.bottom = this.positionY + "vh";
  }
}

// Create obstacles
const obstaclesTTB = [];
setInterval(() => {
  const newObstacle = new ObstaclesTTB();
  obstaclesTTB.push(newObstacle);
}, 1000);

//Move obstacles & detect collision
setInterval(() => {
  obstaclesTTB.forEach((obstacleInstance) => {
    //move current obstacle
    obstacleInstance.moveDown();
    // delete obstacles when they/if reach the bottom

    //detect if there's a collision between player and current obstacle
    if (
      player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
      player.positionX + player.width > obstacleInstance.positionX &&
      player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
      player.height + player.positionY > obstacleInstance.positionY
    ) {
      console.log("collision detected");
    }
  });
}, 50);

class ObstaclesLTR {
  constructor() {
    this.width = 10;
    this.height = 10;
    this.positionX = 0;
    this.positionY = Math.random() * 50 + 30;

    this.domElement = null;
    this.createDomElement();
  }

  createDomElement() {
    //first step: create ther dom element
    this.domElement2 = document.createElement("div");

    //second step: add content and modify the dom element
    this.domElement2.className = "obstacle";
    this.domElement2.style.bottom = this.positionY + "vh";
    this.domElement2.style.height = this.height + "vh";
    this.domElement2.style.left = this.positionX + "vw";
    this.domElement2.style.width = this.width + "vw";
    this.domElement2.style.position = "absolute";
    this.domElement2.style.backgroundSize = "170px";
    this.domElement2.style.backgroundImage =
      "url('/images/asteroid.png.crdownload')";

    // third step: append the element to it's parent element
    const boardElm = document.getElementById("board");
    boardElm.appendChild(this.domElement2);
  }

  fly() {
    this.positionX++;
    this.domElement2.style.left = this.positionX + "vh";
  }
}

// Create obstacles
const obstaclesLTR = [];
setInterval(() => {
  const newObstacleLTR = new ObstaclesLTR();
  obstaclesLTR.push(newObstacleLTR);
}, 1000);

//Move obstacles & detect collision
setInterval(() => {
  obstaclesLTR.forEach((obstacleInstance2) => {
    //move current obstacle
    obstacleInstance2.fly();

    // delete obstacles when they/if reach the bottom

    //detect if there's a collision between player and current obstacle
    if (
      player.positionX <
        obstacleInstance2.positionX + obstacleInstance2.width &&
      player.positionX + player.width > obstacleInstance2.positionX &&
      player.positionY <
        obstacleInstance2.positionY + obstacleInstance2.height &&
      player.height + player.positionY > obstacleInstance2.positionY
    ) {
      console.log("collision detected!!");
    }
  });
}, 50);

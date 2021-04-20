const GameView = require("./game_view.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");


module.exports = {
  canvas: document.addEventListener("DOMContentLoaded", () => { 
      const canvasEle = document.getElementById("game-canvas");
      canvasEle.width = 500;
      canvasEle.height = 500; 

      const ctx = canvasEle.getContext("2d");
      const game = new GameView(ctx);
      game.start();

      // ctx.fillStyle = "green";
      // ctx.fillRect(0, 0, 500, 500);
  })

}

// window.MovingObject = MovingObject;
// window.Asteroid = Asteroid;

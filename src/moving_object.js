const GameView = require("./game_view.js");

function MovingObject(options){
    debugger
    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
}

MovingObject.prototype.move = function(){

}

MovingObject.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.strokeStyle = this.color;
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.stroke();
}

// MovingObject.prototype.isCollidedWith(otherMovingObject) = function(){
  
// }

module.exports = MovingObject;

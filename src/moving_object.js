const GameView = require("./game_view.js");

function MovingObject(options, game){
   
    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
    this.game = game; 
}

MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.game.wrap(this.pos);

}

MovingObject.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.strokeStyle = this.color;
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.stroke();
}

MovingObject.prototype.isCollidedWith = function(otherObject){
  // debugger
    if (Math.abs((this.pos[0] - otherObject.pos[0])) < this.radius
        && Math.abs((this.pos[1] - otherObject.pos[1])) < this.radius){
        return true;
    }else {
        return false;
    }
}

module.exports = MovingObject;

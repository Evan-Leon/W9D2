const Asteroid = require("./asteroid");

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS= 5;

function Game(){
    this.asteroids = [];
    this.addAsteroids();

}

Game.prototype.randomPosition = function(){
    let arr = []
    arr.push(Math.random() * (DIM_X - 0) + 0);
    arr.push(Math.random() * (DIM_Y - 0) + 0);
    return arr;
}

Game.prototype.addAsteroids = function (){
    for (let i = 0; i < NUM_ASTEROIDS; i++){
        this.asteroids.push(new Asteroid(this.randomPosition(), this));
    }
}

Game.prototype.moveObjects = function (){
    this.asteroids.forEach(function (asteroid){
        asteroid.move();
    });
}

Game.prototype.draw = function(ctx){
    // debugger
    ctx.clearRect(0, 0, 500, 500);
    this.asteroids.forEach(function (asteroid){
        asteroid.draw(ctx);
    });
}

Game.prototype.wrap = function(pos){
    if (pos[0] > DIM_X || pos[1] > DIM_Y){
        pos[0] = pos[0] % DIM_X;
        pos[1] = pos[1] % DIM_Y;
    }
    if (pos[0] < 0 ){
        pos[0]= pos[0] + DIM_X;
    }
    if (pos[1] < 0){
        pos[1] = pos[1] + DIM_Y;
    }
    return pos;
}
Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.checkCollisions = function(){
    for (let i = 0; i < this.asteroids.length; i++ ){
        for (let j = i+1; j < this.asteroids.length; j++){
            // debugger
            if (this.asteroids[i].isCollidedWith(this.asteroids[j])
                && this.asteroids[i] != this.asteroids[j]){
                alert("COLLISION");
            }
        }
    }
}


module.exports = Game;




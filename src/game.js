const Asteroid = require("./asteroid");

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS= 20;

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
    for (let i = 1; i < NUM_ASTEROIDS; i++){
        this.asteroids.push(new Asteroid(this.randomPosition()));
    }
}

Game.prototype.moveObjects = function (){
    this.asteroids.forEach(function (asteroid){
        asteroid.move();
    });
}

Game.prototype.draw = function(ctx){
    debugger
    ctx.clearRect(0, 0, 500, 500);
    this.asteroids.forEach(function (asteroid){
        asteroid.draw(ctx);
    });
}

Game.prototype.wrap = function(pos){
    
}

module.exports = Game;


// Game.prototype.step = function(){

// }

// Game.prototype.move = function(){

// }

// Game.prototype.checkCollisions = function(){

// }

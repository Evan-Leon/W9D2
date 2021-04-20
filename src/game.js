const Asteroid = require("./asteroid");

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS= 20;

function Game(){
    this.asteroids = [];
    this.addAsteroids();

}

Game.prototype.addAsteroids = function (){
    for (let i = 1; i < NUM_ASTEROIDS; i++){
        this.asteroids.push(new Asteroid());
    }
}

Game.prototype.moveObjects = function (){
    asteroids.forEach(function (asteroid){
        asteroid.move();
    });
}

Game.prototype.draw(ctx) = function(){
    ctx.clearRect();
    asteroids.forEach(function (asteroid){
        asteroid.draw(ctx);
    });
}

// Game.prototype.step = function(){

// }

// Game.prototype.move = function(){

// }

// Game.prototype.checkCollisions = function(){

// }

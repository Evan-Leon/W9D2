const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

const COLOR = "turquoise";
const RADIUS = 50;

function Asteroid(options){
    options.color = COLOR;
    options.radius = RADIUS;
    options.vel = Util.randomVec(10); 
    // options.pos = options.pos; don't need, user inputted, inherited from MovingObject
    MovingObject.call(this, options); 
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
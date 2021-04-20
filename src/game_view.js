const Game = require("./game");

function GameView(context) {
    this.game = new Game();
    // debugger
    this.context = context;
}

GameView.prototype.start = function(){
    // debugger
    const that = this;
    setInterval(function(){
        // debugger
        that.game.moveObjects();
        debugger
        that.game.draw(that.context);
    }, 20);
}

module.exports = GameView;
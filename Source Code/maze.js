goog.provide('maze');

// lime
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Sprite');

goog.require('maze.Level_1');

maze.size = {
    width: 600,
    height: 400
}

maze.start = function() {
    // create game director to manage screens
    var director = new lime.Director(document.getElementById('maze'), maze.size.width, maze.size.height);
    // create maze first level
    var level = new maze.Level_1(); // in constructor you set up the maze rooms, see maze.Level_1 class
    level.create(); // we start the engine to build the maze
    director.replaceScene(level); // show it!
    director.setDisplayFPS(false);
}

goog.exportSymbol('maze.start', maze.start);
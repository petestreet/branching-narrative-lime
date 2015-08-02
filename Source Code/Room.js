goog.provide('maze.Room');

goog.require('lime.Sprite');

/** 
 * @constructor
 * @extends {lime.Sprite}
 * @param {Array.<maze.direction>} directions
 * @param {Array} roomPosition
 */
maze.Room = function(directions, roomPosition) {
    goog.base(this);
    this.directions = directions;
    this.roomPosition = roomPosition;
    /** @type {Array.<maze.Room>} */
    this.neighbours = [];
    this.roomVisited = false;
}

goog.inherits(maze.Room, lime.Sprite);

/**
 * Get image of the room based on directions.
 * Direction must be in this order: up, right, down, left
 */
maze.Room.prototype.getImage = function() {
    return 'mazeres'.concat('/', this.directions.join('_'), '.jpg');
}

/**
 * @param {Object} neighbours
 */
maze.Room.prototype.setNeighbours = function(neighbours) {
    this.neighbours = neighbours;
}
goog.provide('maze.Level');

goog.require('lime.Scene');
goog.require('lime.animation.MoveBy');

goog.require('goog.events.KeyHandler.EventType');
goog.require('goog.events.EventType');

goog.require('maze.direction');

/** 
 * @constructor
 * @extends {lime.Scene}
 */
maze.Level = function() {
    goog.base(this);
    /** @type {Array.<maze.Room>} */
    this.rooms = [];
    this.roomContent = {};
    // setup keypress listener
    goog.events.listen(
        new goog.events.KeyHandler(document),
        goog.events.KeyHandler.EventType.KEY,
        this.onKeyDown, false, this);
}

goog.inherits(maze.Level, lime.Scene);

/** @type {maze.Room} */
maze.Level.currentRoom = null;

/**
 * Constants to translate keyCode to direction
 * @enum {string}
 */
maze.Level.keyCodeTranslate = {
    37: maze.direction.LEFT,
    39: maze.direction.RIGHT,
    38: maze.direction.UP,
    40: maze.direction.DOWN
}

/**
 * Create maze.
 */ 
maze.Level.prototype.create = function() {
    /** @type {maze.Room} */
    var room;
    for (var row = 0; row < this.rooms.length; row++) {
        for (var col = 0; col < this.rooms[0].length; col++) {
            room = this.rooms[row][col];
            // set room image and move room outside of the screen
            room.setFill(room.getImage()).setPosition(-1000, 0).setSize(600, 400).setAnchorPoint(0, 0);
            if (row == 0 && col == 0) {
                // set first room as starting point
                room.setPosition(0, 0);
                maze.Level.currentRoom = room;
            }
            // set room neighbours, so we can know which room to show based on direction
            room.setNeighbours(this.getNeighbours(room, row, col));
            this.appendChild(room);
        }
    }
    // add click/touch navigation
    this.setTouchNav();
    
    //Set the dialog to the first room's content.
    document.getElementById("myDialog").innerHTML = this.roomContent.roomCont[maze.Level.currentRoom.roomPosition[0]][maze.Level.currentRoom.roomPosition[1]];
}

/**
 * Find room neighbours.
 * @param {maze.Room} room
 * @param {int} roomIndex
 * @return {Object.<maze.Room>}
 */ 
maze.Level.prototype.getNeighbours = function (room, rowIndex, colIndex) {
    var row = rowIndex, 
    col = colIndex, 
    neighbors = {}, neighborPos;
    // loop through all room directions and find neighbours rooms
    for (var i = 0; i < room.directions.length; i++) {
        switch(room.directions[i]) {
            case maze.direction.RIGHT:
                neighborPos = [row, col + 1];
                break;
            case maze.direction.LEFT:
                neighborPos = [row, col - 1];
                break;
            case maze.direction.UP:
                neighborPos = [row + 1, col];
                break;
            case maze.direction.DOWN:
                neighborPos = [row - 1, col];
                break;
        }
        neighbors[room.directions[i]] = this.rooms[neighborPos[0]][neighborPos[1]];
    }
    return neighbors;
}

/**
 * Get index of the room from UP or DOWN direction.
 * @param {int} row
 * @param {int} col
 * @return {int|null}
 */
maze.Level.prototype.getNeighborIndexByRowCol = function (row, col) {
    for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].roomPosition[0] == row && this.rooms[i].roomPosition[1] == col) {
            return i;
        }
    }
    return null;
}

/**
 * A flag which tells whether room animation is in progress.
 * We need this to NOT interrupt moving to another room.
 * @type {bool}
 */
maze.Level.moving = false;

/**
 * Move to another room based on direction.
 * @param {maze.direction} direction
 */
maze.Level.prototype.move = function(direction) {
    // check if room has this direction and if animation is in progress
    if (goog.array.contains(maze.Level.currentRoom.directions, direction) === false || maze.Level.moving === true) {
        //alert("return early!");
        return;
    }
    var nextRoom = maze.Level.currentRoom.neighbours[direction];
    
    //This is a special case at the end of the maze, which transports you back to the beginning.
    if (maze.Level.currentRoom.roomPosition[0] == 7 && maze.Level.currentRoom.roomPosition[1] == 10) {
        nextRoom = this.rooms[0][0];
    }
    
    //Set the dialog to the next room's content.
    if (nextRoom.roomVisited) {
        //If alt-content exists for this room
        var altContentIndex = nextRoom.roomPosition[0].toString() + "_" + nextRoom.roomPosition[1].toString();
        if (altContentIndex in this.roomContent.altRoomCont) {
            document.getElementById("myDialog").innerHTML = this.roomContent.altRoomCont[altContentIndex];
        }
        else {
            document.getElementById("myDialog").innerHTML = this.roomContent.roomCont[nextRoom.roomPosition[1]][nextRoom.roomPosition[0]]; 
        }
    }
    else {
        document.getElementById("myDialog").innerHTML = this.roomContent.roomCont[nextRoom.roomPosition[1]][nextRoom.roomPosition[0]];    
    }
    
    /** @type {goog.math.Coordinate} */
    var coordinate;
    // based on direction, set next room starting position and coordinates where should animation end
    switch(direction) {
        case maze.direction.LEFT:
            nextRoom.setPosition(-maze.size.width, 0);
            coordinate = new goog.math.Coordinate(maze.size.width, 0);
            break;
        case maze.direction.RIGHT:
            nextRoom.setPosition(maze.size.width, 0);
            coordinate = new goog.math.Coordinate(-maze.size.width, 0);
            break;
        case maze.direction.UP:
            nextRoom.setPosition(0, -maze.size.height);
            coordinate = new goog.math.Coordinate(0, maze.size.height);
            break;
        case maze.direction.DOWN:
            nextRoom.setPosition(0, maze.size.height);
            coordinate = new goog.math.Coordinate(0, -maze.size.height);
            break;
    }
    // move both, next and current, rooms 
    // we can see current room is going away and next room is coming
    var moveAction = new lime.animation.MoveBy(coordinate).setDuration(0.35);
    moveAction.addTarget(maze.Level.currentRoom);
    moveAction.addTarget(nextRoom);
    moveAction.play();
    // we don't want to interrupt current animation
    maze.Level.moving = true;
    // set event to know when animation is finished
    // so we can set next room to current and maze.Level.moving that animation is finished
    goog.events.listen(
        moveAction, 
        lime.animation.Event.STOP, function(){
            maze.Level.moving = false;
            maze.Level.currentRoom.roomVisited = true;
            maze.Level.currentRoom = nextRoom;
        });
}

/**
 * Handle key pressed.
 */
var isDialogShown = false;
maze.Level.prototype.onKeyDown = function(e) {
    if (e.keyCode == 32) {
        isDialogShown = !isDialogShown;
    }
    else {
        if (!isDialogShown) {
            this.move(maze.Level.keyCodeTranslate[e.keyCode]);
        }
    }
}

/**
 * Set click/touch navigation. 
 * Add 4 small transparent boxes to every side of the screen
 * which can be clicked or touched
 */
maze.Level.prototype.setTouchNav = function() {
    var x = 156, y = 103, walls = 12, thickness = 50;
    this.setNavSprite(x, 0, x + walls, thickness, maze.direction.UP);
    this.setNavSprite(maze.size.width - thickness, y, thickness, y + walls, maze.direction.RIGHT);
    this.setNavSprite(x, maze.size.height - thickness, x + walls, thickness, maze.direction.DOWN);
    this.setNavSprite(0, y, thickness, y + walls, maze.direction.LEFT);
}

/**
 * Set a single navigation box
 */
maze.Level.prototype.setNavSprite = function(x, y, width, height, direction) {
    var sprite = new lime.Sprite().setAnchorPoint(0, 0).setPosition(x, y).setSize(width, height);
    goog.events.listen(sprite, ['mousedown','touchstart'], function() {
        this.move(direction);
    }, false, this);
    this.appendChild(sprite);
}
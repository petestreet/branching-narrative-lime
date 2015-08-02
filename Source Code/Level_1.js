goog.provide('maze.Level_1');

goog.require('maze.Level');
goog.require('maze.Room');
goog.require('maze.Content_1');

/** 
 * @constructor
 * @extends {maze.Level}
 */
maze.Level_1 = function() {
    goog.base(this);
    this.roomContent = new maze.Content_1();
    this.rooms = [
        
        [new maze.Room([maze.direction.UP, maze.direction.RIGHT], [0, 0]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.LEFT], [1, 0]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.LEFT], [2, 0]),
        new maze.Room([maze.direction.UP, maze.direction.LEFT], [3, 0]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT], [4, 0]),
        new maze.Room([maze.direction.RIGHT, maze.direction.LEFT], [5, 0]),
        new maze.Room([maze.direction.UP, maze.direction.LEFT], [6, 0]),
        new maze.Room([maze.direction.UP], [7, 0]),
        new maze.Room([maze.direction.UP], [8, 0])],
        [new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN], [0, 1]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [1, 1]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [2, 1]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [3, 1]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [4, 1]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.LEFT], [5, 1]),
        new maze.Room([maze.direction.DOWN, maze.direction.LEFT], [6, 1]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [7, 1]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [8, 1])],
        [new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN], [0, 2]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [1, 2]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [2, 2]),
        new maze.Room([maze.direction.DOWN, maze.direction.LEFT], [3, 2]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [4, 2]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [5, 2]),
        new maze.Room([maze.direction.RIGHT], [6, 2]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [7, 2]),
        new maze.Room([maze.direction.DOWN, maze.direction.LEFT], [8, 2])],
        [new maze.Room([maze.direction.UP, maze.direction.DOWN], [0, 3]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN], [1, 3]),
        new maze.Room([maze.direction.RIGHT, maze.direction.LEFT], [2, 3]),
        new maze.Room([maze.direction.UP, maze.direction.LEFT], [3, 3]),
        new maze.Room([maze.direction.UP,maze.direction.DOWN], [4, 3]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN], [5, 3]),
        new maze.Room([maze.direction.RIGHT, maze.direction.LEFT], [6, 3]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [7, 3]),
        new maze.Room([maze.direction.UP, maze.direction.LEFT], [8, 3])],
        [new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN], [0, 4]),
        new maze.Room([maze.direction.RIGHT, maze.direction.LEFT], [1, 4]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.LEFT], [2, 4]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN, maze.direction.LEFT], [3, 4]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [4, 4]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [5, 4]),
        new maze.Room([maze.direction.RIGHT], [6, 4]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN, maze.direction.LEFT], [7, 4]),
        new maze.Room([maze.direction.DOWN], [8, 4])],
        [new maze.Room([maze.direction.UP, maze.direction.DOWN], [0, 5]),
        new maze.Room([maze.direction.UP], [1, 5]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [2, 5]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN], [3, 5]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [4, 5]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [5, 5]),
        new maze.Room([maze.direction.UP, maze.direction.LEFT], [6, 5]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN], [7, 5]),
        new maze.Room([maze.direction.UP, maze.direction.LEFT], [8, 5])],
        [new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN], [0, 6]),
        new maze.Room([maze.direction.DOWN, maze.direction.LEFT], [1, 6]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [2, 6]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT], [3, 6]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [4, 6]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.LEFT], [5, 6]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [6, 6]),
        new maze.Room([maze.direction.UP, maze.direction.LEFT], [7, 6]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [8, 6])],
        [new maze.Room([maze.direction.UP, maze.direction.DOWN], [0, 7]),
        new maze.Room([maze.direction.UP], [1, 7]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [2, 7]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [3, 7]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN], [4, 7]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [5, 7]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN, maze.direction.LEFT], [6, 7]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN], [7, 7]),
        new maze.Room([maze.direction.DOWN, maze.direction.LEFT], [8, 7])],
        [new maze.Room([maze.direction.RIGHT, maze.direction.DOWN], [0, 8]),
        new maze.Room([maze.direction.DOWN, maze.direction.LEFT], [1, 8]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [2, 8]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN], [3, 8]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN, maze.direction.LEFT], [4, 8]),
        new maze.Room([maze.direction.DOWN], [5, 8]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN], [6, 8]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.LEFT], [7, 8]),
        new maze.Room([maze.direction.UP, maze.direction.LEFT], [8, 8])],
        [new maze.Room([maze.direction.UP, maze.direction.RIGHT], [0, 9]),
        new maze.Room([maze.direction.RIGHT, maze.direction.LEFT], [1, 9]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [2, 9]),
        new maze.Room([maze.direction.RIGHT, maze.direction.LEFT], [3, 9]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN, maze.direction.LEFT], [4, 9]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT], [5, 9]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.LEFT], [6, 9]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [7, 9]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN, maze.direction.LEFT], [8, 9])],
        [new maze.Room([maze.direction.DOWN], [0, 10]),
        new maze.Room([maze.direction.RIGHT], [1, 10]),
        new maze.Room([maze.direction.RIGHT, maze.direction.LEFT], [2, 10]),
        new maze.Room([maze.direction.RIGHT, maze.direction.LEFT], [3, 10]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [4, 10]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [5, 10]),
        new maze.Room([maze.direction.DOWN, maze.direction.LEFT], [6, 10]),
        new maze.Room([maze.direction.RIGHT], [7, 10]),
        new maze.Room([maze.direction.DOWN, maze.direction.LEFT], [8, 10])]
        
        /*
        [new maze.Room([maze.direction.UP, maze.direction.RIGHT], [0, 0]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.LEFT], [1, 0]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.LEFT], [2, 0]),
        new maze.Room([maze.direction.UP, maze.direction.LEFT], [3, 0])],
        [new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN], [0, 1]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [1, 1]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [2, 1]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN, maze.direction.LEFT], [3, 1])],
        [new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN], [0, 2]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [1, 2]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [2, 2]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN, maze.direction.LEFT], [3, 2])],
        [new maze.Room([maze.direction.RIGHT, maze.direction.DOWN], [0, 3]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [1, 3]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN, maze.direction.LEFT], [2, 3]),
        new maze.Room([maze.direction.DOWN, maze.direction.LEFT], [3, 3])]
        */
        
        /*
        new maze.Room([maze.direction.UP, maze.direction.RIGHT], [0, 0]),
        new maze.Room([maze.direction.LEFT], [0, 2]),
        new maze.Room([maze.direction.UP, maze.direction.RIGHT, maze.direction.LEFT], [0, 1]),//
        new maze.Room([maze.direction.DOWN], [1, 1]),//
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [1, 0]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN], [2, 0]),
        new maze.Room([maze.direction.UP, maze.direction.LEFT], [2, 1]),
        new maze.Room([maze.direction.RIGHT, maze.direction.DOWN], [3, 1]),
        new maze.Room([maze.direction.UP, maze.direction.LEFT], [3, 2]),
        new maze.Room([maze.direction.UP, maze.direction.DOWN], [4, 2]),
        new maze.Room([maze.direction.RIGHT], [5, 0]),
        new maze.Room([maze.direction.RIGHT, maze.direction.LEFT], [5, 1]),
        new maze.Room([maze.direction.DOWN, maze.direction.LEFT], [5, 2])
        */
    ];
}

goog.inherits(maze.Level_1, maze.Level);
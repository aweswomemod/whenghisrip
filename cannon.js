'use strict' 
var Drone = require('drone'),
    blocks = require('blocks'),
    Events = require('events'),
    Sounds = require('sounds');

function cannonwarfare(event) {
  for(var i = 0; i <= 1; i++;){
    this.up(i)
        .box(49,3,1,1)
        .fwd(4)
        .right(1)
        .box(49,1,1,1)
        .right(1)
        .back(3)
        .box(49,3,1,1)
        .left(1)
        .fwd(2)
        .box(8,1,1,1)
        .back(2)
        .box(46,1,1,1)
        .fwd(2)
        .box(46,1,1,1)
        .up(1)
        .box(152,1,1,1);
   }
};

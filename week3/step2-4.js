'use strict';

function Dog() {
  this.name = 'Carry';
  this.color = 'black';
  this.numLegs = 4;
}

const hound = new Dog();
hound.name = 'Isabella';
hound.color = 'Gray';
hound.numLegs = 4;


module.exports = hound;

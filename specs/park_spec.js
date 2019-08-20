const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Pterodactyl', 'herbivore', 20);
    dinosaur2 = new Dinosaur('T-rex', 'carnivore', 100);
    dinosaur3 = new Dinosaur('Triceratops', 'omnivore', 20);

    dinosaurs_array = [dinosaur1, dinosaur2, dinosaur3];

    park = new Park('Dinoland', 5, dinosaurs_array);


  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Dinoland')
  });

  it('should have a ticket price');

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});

const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Pterodactyl', 'herbivore', 20);
    dinosaur2 = new Dinosaur('T-rex', 'carnivore', 100);
    dinosaur3 = new Dinosaur('Triceratops', 'omnivore', 20);
    dinosaur4 = new Dinosaur('Diplodocus', 'herbivore', 75);
    dinosaur5 = new Dinosaur('Pterodactyl', 'herbivore', 50);

    dinosaurs_array = [dinosaur1, dinosaur2, dinosaur3];

    park = new Park('Dinoland', 5, dinosaurs_array);


  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Dinoland')
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.strictEqual(actual.length, 3);
    assert.deepStrictEqual(actual, dinosaurs_array)
  });

  it('should be able to add a dinosaur to its collection', function(){
    //ACT
    park.addDinosaur(dinosaur4);
    //ASSERT
    const actual = park.dinosaurs;
    assert.strictEqual(actual.length, 4);
    assert.deepStrictEqual(actual, dinosaurs_array)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    //ACT
    park.removeDinosaur(dinosaur2);
    //ASSERT
    const actual = park.dinosaurs;
    assert.strictEqual(actual.length, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostPopular();
    assert.deepStrictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur5);
    const actual = park.findBySpecies('Pterodactyl');
    assert.strictEqual(actual.length, 2);
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur5]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.removeBySpecies('Pterodactyl');
    assert.strictEqual(actual.length, 3);
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to calculate total number of visitors per day', function(){
    const actual = park.countVisitorsPerDay();
    assert.strictEqual(actual, 140);
  });

  it('should be able to calculate total number of visitors per year', function(){
    const actual = park.countVisitorsPerYear();
    assert.strictEqual(actual, (140*350));
  });

  it('should be able to calculate total revenue from ticket sales for one year',function(){
    const actual = park.totalRevenue();
    assert.strictEqual(actual, (140*350*5));
  });

});

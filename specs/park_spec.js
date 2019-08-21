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

    park = new Park('Dinoland', 5);


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
    assert.strictEqual(actual.length, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    //ACT
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    //ASSERT
    const actual = park.dinosaurs;
    assert.strictEqual(actual.length, 4);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    //ACT
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur2);
    //ASSERT
    const actual = park.dinosaurs;
    assert.strictEqual(actual.length, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.mostPopular();
    assert.deepStrictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.findBySpecies('Pterodactyl');
    assert.strictEqual(actual.length, 2);
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur5]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.removeBySpecies('Pterodactyl')
    const actual = park.findBySpecies('Pterodactyl');
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to calculate total number of visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.countVisitorsPerDay();
    assert.strictEqual(actual, 140);
  });

  it('should be able to calculate total number of visitors per year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.countVisitorsPerYear();
    assert.strictEqual(actual, (140*350));
  });

  it('should be able to calculate total revenue from ticket sales for one year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalRevenue();
    assert.strictEqual(actual, (140*350*5));
  });

  it('should be able to provide the number of dinosaurs with their specific diet types', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.dinosaurDiet();
    assert.deepStrictEqual(actual, {'herbivore': 3, 'carnivore': 1, 'omnivore': 1 });
  });

});


//
// Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type
// Example: { 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }

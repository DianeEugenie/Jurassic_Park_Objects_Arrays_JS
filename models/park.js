const Dinosaur = require('./dinosaur.js');

const Park = function (name, price, dinosaurs) {
  this.name = name;
  this.price = price;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  let index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1);
};

Park.prototype.mostPopular = function(){
  let popularDinosaur = this.dinosaurs[0];

  for (dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > popularDinosaur.guestsAttractedPerDay) {
      popularDinosaur = dinosaur;
    };
  }
  return popularDinosaur;
};

Park.prototype.findBySpecies = function(species){
  let foundDinosaurs = [];

  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.species === species){
      foundDinosaurs.push(dinosaur);
    };
  };

  return foundDinosaurs;
};



module.exports = Park;


// guestsAttractedPerDay

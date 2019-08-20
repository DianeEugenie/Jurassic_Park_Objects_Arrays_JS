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

Park.prototype.removeBySpecies = function(species){

  let foundDinosaurs = this.findBySpecies(species)

  for (let dinosaur of foundDinosaurs) {
    this.removeDinosaur(dinosaur);
  }

  return this.dinosaurs;
};

Park.prototype.countVisitorsPerDay = function(){
  let guests = 0
  for (let dinosaur of this.dinosaurs) {
    guests += dinosaur.guestsAttractedPerDay;
  }

  return guests
};

Park.prototype.countVisitorsPerYear = function(){
  return this.countVisitorsPerDay() * 350;
};

Park.prototype.totalRevenue = function(){
  return this.countVisitorsPerYear() * this.price;
};





module.exports = Park;


// guestsAttractedPerDay

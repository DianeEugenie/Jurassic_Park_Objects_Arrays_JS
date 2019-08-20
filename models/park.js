const Dinosaur = require('./dinosaur.js');

const Park = function (name, price, dinosaurs) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
};

module.exports = Park;

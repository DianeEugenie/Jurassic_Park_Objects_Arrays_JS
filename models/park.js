const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
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
  const foundDinosaurs = [];

  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.species === species){
      foundDinosaurs.push(dinosaur);
    };
  };

  return foundDinosaurs;
};

Park.prototype.removeBySpecies = function(species){

  const foundDinosaurs = this.findBySpecies(species)

  for (let dinosaur of foundDinosaurs) {
    this.removeDinosaur(dinosaur);
  }
};

Park.prototype.countVisitorsPerDay = function(){
  let guests = 0
  for (let dinosaur of this.dinosaurs) {
    guests += dinosaur.guestsAttractedPerDay;
  };

  return guests
};

Park.prototype.countVisitorsPerYear = function(){
  return this.countVisitorsPerDay() * 350;
};

Park.prototype.totalRevenue = function(){
  return this.countVisitorsPerYear() * this.price;
};

Park.prototype.dinosaurDiet = function(){



  // for (let dinosaur of this.dinosaurs) {
  //   return `${dinosaur.diet}`;
  // };

  // const foundDiet = [];
  // for (let dinosaur of this.dinosaurs) {
  //   foundDiet.push(dinosaur.diet)
  // };
  //
  // // return foundDiet // returns array of all the diets
  //
  // // let dietCounter = foundDiet.reduce(function (allDiets, diet) {
  // //   if (diet in allDiets) {
  // //     allDiets[diet]++;
  // //   } else {
  // //     allDiets[diet] = 1;
  // //   }
  // //   return allDiets;
  // // }, {});
  // //
  // // return dietCounter;
  //
  // // OR
  // const dietCounter = foundDiet.reduce(function (allDiets, diet) {
  // if (typeof allDiets[diet] === 'undefined') {
  //   allDiets[diet] = 1;
  // } else {
  //   allDiets[diet] += 1;
  // }
  // return allDiets;
  // }, {});
  //
  // return dietCounter;


  // TO DO WITHOUT ENUMERATION
const dinosaurDiets = {};

  for (let dino of this.dinosaurs){
    if (dinosaurDiets[dino.diet]){
      dinosaurDiets[dino.diet] += 1;
    } else {
      dinosaurDiets[dino.diet] = 1;
    }
  }

  return dinosaurDiets;
  //
  //
  // let total = 0;
  // let dietCounter = {};
  // for (let i = 0; i < this.dinosaurs.length; i++) {
  //   let dinosaur = this.dinosaurs[i];
  //   dietCounter[dinosaur.diet] = total += 1;
  // }
  //
  // return dietCounter;
  // return this.dinosaurs

  // let foundDiet = [];
  // for (let dinosaur of this.dinosaurs) {
  //   foundDiet.push(dinosaur.diet)
  // };
  // let allFoundDiets = foundDiet;
  //
  // // return allFoundDiets;
  //
  // let dietCounter = {}
  // let total = 0
  // for (let dietFound of allFoundDiets) {
  //   dietCounter[dietFound] = total +=1;
  //
  // }
  //
  // return dietCounter;
  //
  // {
  //   -  "carnivore": 2
  //   -  "herbivore": 5
  //   -  "omnivore": 3
  //   +  "carnivore": 1
  //   +  "herbivore": 3
  //   +  "omnivore": 1
  // }
  //


};


// function() {
// let carnivores = 0;
// let herbivores = 0;
// let omnivores = 0;
// for (let dinosaur of this.dinosaurs){
//   if (dinosaur.diet === 'carnivore') {
//     carnivores++
//   } else if (dinosaur.diet === 'herbivore') {
//     herbivores++
//   } else if (dinosaur.diet === 'omnivore') {
//     omnivores++
//   };
// };
// return {
//   'carnivore': carnivores;
//   'herbivore': herbivores;
//   'omnivore': omnivores;
// };
// };





module.exports = Park;


// guestsAttractedPerDay

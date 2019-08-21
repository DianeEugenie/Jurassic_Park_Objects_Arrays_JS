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

  let foundDiet = [];
  for (let dinosaur of this.dinosaurs) {
    foundDiet.push(dinosaur.diet)
  };

  // return foundDiet // returns array of all the diets

  // let dietCounter = foundDiet.reduce(function (allDiets, diet) {
  //   if (diet in allDiets) {
  //     allDiets[diet]++;
  //   } else {
  //     allDiets[diet] = 1;
  //   }
  //   return allDiets;
  // }, {});
  //
  // return dietCounter;

  // OR
  let dietCounter = foundDiet.reduce(function (allDiets, diet) {
  if (typeof allDiets[diet] === 'undefined') {
    allDiets[diet] = 1;
  } else {
    allDiets[diet] += 1;
  }
  return allDiets;
  }, {});

  return dietCounter;


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





module.exports = Park;


// guestsAttractedPerDay

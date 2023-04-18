// Class is a template for an object
// Class Components.

// common properties of an animal
//constructor//
// Whenever we have a function inside a class. we call it a method

//consturctor is a function that will be called when you intialize
// A new object

// class AnimalKindom {
//   //   species = "";
//   //   legs = "";
//   //   sound = null;
//   //   weight = "";

//   //Pass parameters to a class
//   constructor(species, legs, sound, weight) {
//     // console.log("Just called after initialization: ", hello);
//     // console.log("20:", this);
//     this.species = species;
//     this.legs = legs;
//     this.sound = sound;
//     this.weight = weight;
//   }
// }

// let dog = new AnimalKindom("dogados", 4, "bark", "20kg"); // Intializing: Instance of a class
// let cat = new AnimalKindom("catinuis", 4, "meaow", "5kg"); // Intializing
// console.log("DOG:", dog);
// console.log("CAT:", cat);

// Inheritance. Animal kingdom

class Multi {
  code = "Text";
}

class Kingdom {
  next_hirachy = null;

  constructor(hirachy) {
    this.next_hirachy = hirachy;
  }

  get_hirachy() {
    console.log(this.next_hirachy);
  }
}

class Animalia extends Kingdom {
  constructor(legs, sound) {
    //super
    super("Animalia");
    this.legs = legs;
    this.sound = sound;
  }
}

class Plantae extends Kingdom {
  constructor(habitat, leaves) {
    super("Plantae");
    this.habitat = habitat;
    this.leaves = leaves;
  }
}

let animal = new Animalia(4, "Barks");
let plant = new Plantae("Rain Forest", 4);

console.log(animal);
console.log(animal.get_hirachy());
console.log(plant);

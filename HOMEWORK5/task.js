//task 1
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

function propsCount(currentObject) {
 let keys = Object.keys(currentObject).length;
return keys
}

propsCount(mentor);

// task2

let car = { 
    brand: "Skoda", 
    model: "Fabia",
    transmission: "manual",
    color: "gray",
    age: 8.
};

  let obj = [];

function showProps(car) {
  for (let keys in car) {
   obj.push(car[keys]);
  }
return obj;
}

console.log(showProps(car));

//task3
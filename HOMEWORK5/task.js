//task 1
let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};

function propsCount(currentObject) {
  let keys = Object.keys(currentObject).length;
  return keys;
}

propsCount(mentor);

// task2

let car = {
  brand: "Skoda",
  model: "Fabia",
  transmission: "manual",
  color: "gray",
  age: 8,
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

function Person(name, surname) {
    this.name = firstName;
    this.surname = lastName;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    };


/* function Employee(firstName, lastName, position) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.position = position;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
} */

//task 4\
class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
  
      this.fullName = function showFullName() {
        this.name + " " + this.surname;
      }
    }
  }

class Student extends Person {
    constructor(name, surname, year, midleName) {
        super(name, surname);
        this.year = year;
        this.midleName = midleName;
        showFullName(midleName) {
            this.midleName;
        }
        showCourse() {
            let systemYear = today.getFullYear();
            let course = systemYear - year;
            return course;
        }
}
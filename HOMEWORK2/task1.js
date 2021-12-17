// task1
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = (x===x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x < y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x / y*0;// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

// Task 2
let x = prompt("Введіть число", "");

if (x == 7) {
    console.log("Вітаю! Ви вгадали число!")
} else {
    console.log("Невірне число, спробуй ще")
}

let y = prompt("Введіть число", "");

if (y % 2 == 0 && y > 0) {
console.log("Вітаю! Ви вгадали число!")
} else {
    console.log("Невірне число, спробуй ще")
}

//Task3
let Numbers = []; 

Numbers.push(1); //1
Numbers.push("Lviv"); //2
Numbers.push(1 > 0); //3
Numbers.push(10 / 0); //4

Numbers.length //5

Numbers.push(prompt("Введіть дані", "")) //6
Numbers(5); //7

Numbers.splice(1); //8
Numbers;

//Task4
let cities = ["Rome", "Lviv", "Warsaw"]; 
    console.log(cities[0] + "*" + cities[1] + "*" + cities[2]);

//Task5
let isAdult = prompt("Вкажіть Ваш вік", "");
if (isAdult >= 18) {
    console.log("Ви досягли повнолітнього віку");
} else {
    console.log("Ви ще надто молоді");
};

//Task6
let firstSide = prompt("Введіть довжину 1 сторони трикутника", "");
let secondSide = prompt("Введіть довжину 2 сторони трикутника", "");
let thirdSide = prompt("Введіть довжину 3 сторони трикутника", "");

let p = (Number (firstSide) + Number(secondSide) + Number(thirdSide)) / 2;
console.log(p);

let s = (p * (p - firstSide) * (p - secondSide) * (p - thirdSide)) ** (1/2);

if (firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide) {
    console.log("Площа Ващого трикутника: " + Math.floor(s * 1000) / 1000 + ", та він рівнобедрений");
} else {
    console.log("Площа Ващого трикутника: " + Math.floor(s * 1000) / 1000);
};

//Task7
let currDay = new Date();
let dayTime = currDay.getHours();

if (dayTime >= 23 && dayTime <= 5) {
    console.log("Доброї ночі!");
} else if (dayTime >= 5 && dayTime <= 11) {
    console.log("Доброго ранку!");
} else if (dayTime >= 11 && dayTime <= 17) {
 console.log("Доброго дня!");
} else {
    console.log("Доброго вечора!");
};

//task7 other
let date = new Date();
let hour = date.getHours();

switch(true) {
    case (hour >= 23 || hour <= 5):
        console.log(Доброї ночі);
    break;
    case (hour >= 5 && hour <= 11):
        console.log(Доброго ранку);
    break;
    case (hour >= 11 && hour <= 17):
        console.log(Доброго дня);
    break;
    case (hour >= 17 && hour <= 23):
        console.log(Доброго вечора);
    break;
}

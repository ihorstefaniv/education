let arr = [2, 3, 4, 5];
let result = 1;

for (let i = 1; i < arr.length; i++ ) {
    result *= arr[i];
}

console.log(result);

//Task 2
for (i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
//Task 3
function randArray(k) {
    const m = [];
    for (i = 0; i < k; i++) {
        m[i] = Math.floor(Math.random() * 500) + 1;
    }
    console.log(m);
}
randArray(5);

// task4

function raiseToDegree(a, b) {
    let degree = a;
     for (let i = 1; i < b; i++) {
        degree *=a;
      }
      return degree;
}

let a = +prompt("Введіть число a", "");
let b = +prompt("Введіть число b", "");

if (Number.isInteger(a) && Number.isInteger(b)) {
    console.log(raiseToDegree(a, b));
} else {
    console.log("Некоректні дані!");
}
raiseToDegree(a, b);

//task5

function findMin() {
    let min = arguments[0];
    for (i = 1; i < arguments.length; i++) {
if (arguments[i] < min) {
   min = arguments[i] ;
    }
}
return min;
}
console.log( findMin(13, 14, 4, 4, -0.2) );

// task6
function findUnique(array) {
    for (let i = 0; i < array.length; i++) {
        for (let k = (i + 1); k < array.length; k++) {
            if (array[i] === array[k]){
                return false;
            }
        }
    }
    return true;
}

console.log(findUnique([1, 2, 3, 5, 2]));
console.log(findUnique([1, 2, 3, 5, 11]));

//task 7
function lastElem(arr, count) {
    if (count == 0 || isNaN(count)) return arr[arr.length - 1];
    if (count >= arr.length) return arr;
  
    return arr.slice(-Math.abs(count));
  }
  
  console.log(lastElem([3, 4, 10, -5])); // -5
  console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
  console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

//task8 
function firstUpperCase(text) {
    let newArray = text.split (" ");
    let arr = [];

    for (let i = 0; i < newArray.length; i++) {
        arr.push(newArray[i].charAt(0).toUpperCase()+ newArray[i].slice(1));
    }
    return arr.join(" ");
}

console.log(firstUpperCase("i love javascript" ));
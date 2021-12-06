let arr = [2, 3, 4, 5];
let result = 1;

for (let i = 1; i < arr.length; i++ ) {
    result *= arr[i];
}

console.log(result);

//Task 2
for (i = 0; i <= 15; i++) {
    if (i % 2 == 0){
        console.log(i + " is even" );
    } else {
        console.log(i + " is odd" );
    }
}
//Task 3
let k = [];

function randArray() {
    for (var i = 1; i <= 500; i++) {
        console.log(randomNumber(0, 10))
      }
} 


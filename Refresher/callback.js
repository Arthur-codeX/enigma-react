// Logic behind callbacks.
// Callback function is a function that takes another function
// another function As a parameter.

//function that takes two numbers and prints their sum.
// a,b and prints the sum of a and b.
// print the sum is this and this.
// We are unsare how to be printed.

function sumAndPrint(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

function print1(num) {
  console.log(`Hello World the sum is ${num}`);
}

function print2(num) {
  console.log(`Displaying sum ${num}`);
}

sumAndPrint(10, 2, print1);
sumAndPrint(3, 23, print2);
sumAndPrint(3, 3, function (sum) {
  console.log(`Showing the sum ${sum}`);
});

function helloWorld() {
  console.log("Hello World");
}

function helloWorld2() {
  console.log("Hello World2");
}

setInterval(helloWorld, 2000);

setTimeout(helloWorld2, 4000);

// Some callback

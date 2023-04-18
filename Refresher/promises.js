// Promises were invented. So that you can write unbloking code.

//
//console.log("The beginig");

// MAking request. <Control how much time it might take>
//Blocking the process below.

// request > promise.
// Moves away does some other work.

//fetch
// write your own promises. Promise KEyword in js

function getId() {
  return new Promise((resolve, rejects) => {
    return resolve("Here is my id");
  });
}

function getId2() {
  return new Promise((resolve, reject) => {
    return reject("Did not find my id");
  });
}

// //console.log("Promise: ", getId());

//console.log("Step 1");
let k = 23;
getId()
  .then((data) => {
    //console.log("Data section,", data);
    k = 40;
  })
  .catch((e) => {
    //console.log("Error section", e);
  });
// //console.log(k);
// //console.log("Step 2");
getId2()
  .then((data) => {
    //console.log("Data section,", data);
  })
  .catch((e) => {
    //console.log("Error section", e);
  });
//console.log("Step 3");

// Try Might fail run.
// Error handling=>Yourself
// Api, Books, Movies.= Api=> You dont control
// Your code should

async function tryIt() {
  try {
    // This is trial code
    // console.log(m);
    // await=> Wait for  promise to be resolved or rejected

    let res = await getId2();
    console.log(res);
    console.log("HEllow World");
  } catch (error) {
    console.log("Error Section", error);
    // This code will be executed when there is an eror
  } finally {
    // This code will be executed regardless.
    console.log("Finally");
  }
}
tryIt();
console.log("Final Code");

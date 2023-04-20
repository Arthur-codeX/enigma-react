function stray(numbers) {
  //hold the last digit.
  //   let a = numbers[0];
  //recussion

  console.log(numbers);

  if (numbers.length < 2) {
  }

  for (let i = 2; i < numbers.length; i++) {
    console.log("");
    console.log("Iteration:  ", i - 2);
    let a = numbers[i - 2]; // o //1-3->1
    let b = numbers[i - 1]; //1   //
    let c = numbers[i]; //2
    console.log(`i: `, i);
    console.log(`a: `, a);
    console.log(`b: `, b);
    console.log(`c: `, c);
    //a+b+c === a*3
    if (a === b && b === c) {
      continue;
    }

    if (a === b) {
      return c;
    }

    if (a === c) {
      return b;
    }

    if (c === b) {
      return a;
    }
  }
}

//[1,2]
//[a,b,c]
//[1,2,2]
//[2,1,2]
//[2,2,1]
// console.log(stray([2, 1, 1]));
console.log(stray([17, 17, 17, 3, 17, 17, 17]));
// console.log(stray([0, 2, 2, 2, 2]));
// console.log(
//   stray([
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     2209,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//   ])
// );

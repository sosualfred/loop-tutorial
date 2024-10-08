// const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

// for (let i = 0; i < letters.length; i = i + 1) {
//   console.log(`${letters[i]} : ${letters[i].toUpperCase()}`);
// }

// let i = 0;
// while (i < letters.length) {
//     console.log(`Value of i is: ${i}`);
//     console.log(`${letters[i]} : ${letters[i].toUpperCase()}`);
//     i = i + 1;
// }

// for (let i = 0; i < letters.length; i = i + 1) {
//   // Checking if i is an even number
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(`${letters[i]} : ${letters[i].toUpperCase()}`);
// }

// console.log("We're outside the loop");

// const purchases = [0.5, 5, 10, 2, 4, 5.5, 9, 10, 2, 40, 4, 10];

// let total = 0;

// for (let i = 0; i < purchases.length; i++) {
//   console.log(`Item price: ${purchases[i]}`);
//   console.log(`Old Total: ${total}, New Total: ${total + purchases[i]}`);
//   total = total + purchases[i];
// }

// console.log(`The total amount is: ${total}`);

// const purchases = [0.5, 5, 10, 2, 4, 5.5, 9, 10, 2, 40, 4, 10];

// let total = 0;

// let i = 0;
// while (i < purchases.length) {
//   console.log(`Item price: ${purchases[i]}`);
//   console.log(`Old Total: ${total}, New Total: ${total + purchases[i]}`);
//   total = total + purchases[i];
//   i++;
// }

// console.log(`The total amount is: ${total}`);

const purchases = [0.5, 5, 10, 2, 4, 5.5, 9, 10, 2, 40, 4, 10];

let total = 0;

for (let i = 0; i < purchases.length; i++) {
  console.log(`Item price: ${purchases[i]}`);
  console.log(`Old Total: ${total}, New Total: ${total + purchases[i]}`);
  total = total + purchases[i];
}

console.log(`The total amount is: ${total}`);

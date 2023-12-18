//Loops are used to excute a piece of code again and again

//1. for Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//2. While loop
let i = 0;
while (i > 5) {
  console.log(i);
  i++;
}

//3. Do While
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

//4. For of Loop
let str = "Mahesh";
for (const i of str) {
  console.log(i);
}

//5. For in Loop
let student = {
  name: "Mahesh Dash",
  roll: 20010157,
  cgpa: 9.24,
};
for (const key in student) {
  console.log("Key:", key, "Value:", student[key]);
}

//Ques 1
//Print all even numbers from 0 to 100
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Ques 2
/*Create a game where you start with any random game number. 
Ask the user to keep
guessing the game number until the user enters correct value.*/

// let guessNumber = Math.floor(Math.random() * 10);
// let userGuess = prompt("Guess the number: ");
// while (userGuess != guessNumber) {
//   userGuess = prompt("You Entered Wrong Number guess again: ");
// }
// console.log("Congrats !");

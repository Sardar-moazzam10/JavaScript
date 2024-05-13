//Easy
// Write a script to log "Hello, World!" to the console.
console.log("Easy Part");
console.log("Question 1");
console.log("Hello, World!");
// Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
console.log("Question 2");
let temperature: number = 0;
if (temperature < 20) {
  console.log("It's cold!");
} else {
  console.log("temperature is normal");
}
// Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
console.log("Question 3");
let apples: number = 10;
let give_away: number = 3;
let left;
left = apples - give_away;
console.log(`Remaining apples: ${left}`);
// Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
console.log("Question 4");
let firstName: string = "Muhammad";
let lastName: string = " Moazzam";
let combines;
combines = firstName + lastName;
console.log(combines);
// Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
console.log("Question 5");
let number: number = 5;
if (number > 3) {
  console.log("Yes");
} else {
  console.log("No");
}
//Medium
// Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
console.log("Medium");
console.log("Question 6");
let calculateArea = (r: any, pi = 3.14) => {
  let areaOfcircle = pi * r * r;
  console.log(`Areaofcircle = ${areaOfcircle}`);
};
console.log(calculateArea(5));
// Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
console.log("Question 7");
for (let i = 1; i <= 50; i++) {
  console.log(i);
  while (i % 3 === 0) {
    console.log(i + " Multiples of 3 ==> Fizz");
    break;
  }
  while (i % 5 === 0) {
    console.log(i + " Multiples of 5 ==> Buzz");
    break;
  }
}
//Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
console.log("Question 8");
let temp = [10, 30, 400, 50, 310];
let heigesttemp = temp[0];
for (let i = 0; i <= 4; i++) {
  console.log(temp[i]);
  if (temp[i] > heigesttemp) {
    heigesttemp = temp[i];
  }
}
console.log(`heigest temperature : ${heigesttemp} `);
//Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
console.log("Question 9");
let aGe: number = 16;
if (aGe >= 18) {
  console.log(`Adult : ${aGe}`);
} else {
  console.log(`Minor (under 18) : ${aGe} `);
}
//Write a function that takes an array of numbers and returns the count of positive numbers in the array.
console.log("Question 10");
let numbers = [-1, 1, -2, 3, 4, 5, 6];
console.log(`Array of number`);
for (let i = 0; i <= 6; i++) {
  console.log(numbers[i]);
}
for (let i = 0; i <= 6; i++) {
  if (numbers[i] > 0) {
    console.log(`Positive numbers in array : ${numbers[i]}`);
  }
}
//Arrays and Array Methods
//Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
console.log(`Question 11`);
function Startingwithlettera(words: any) {
  return words.filter((word: string) => word.startsWith(`a`));
  // word.starts Withfunction to find character start define in javascript
}
let words = ["apple", "orange", "banana", "ali", "ahmad", "avacado"];
console.log(`Array of words`);
for (let i = 0; i <= 5; i++) {
  console.log(`${words[i]}`);
}
let resulT = Startingwithlettera(words);
console.log(`Array starts with letter a`);
console.log(resulT);
//Create a script that logs the second to last element of an array named fruits.
console.log(`Questuin 12`);
let fruits: string[] = [
  "apple",
  "orange",
  "banana",
  "falsa",
  "mango",
  "pineapple",
];
console.log(`Originle Array from one to last`);
for (let i = 0; i <= 5; i++) {
  console.log(`${fruits[i]}`);
}
console.log(` Array from second to last`);
for (let i = 1; i <= 5; i++) {
  console.log(`${fruits[i]}`);
}
//Develop a function that takes an array of numbers and returns a new array with each number squared.
console.log(`Questuin 13`);
console.log(`Find square array`);
function findsquarearray() {
  let array: number[] = [1, 2, 3, 4, 5];
  for (let i = 0; i <= 4; i++) {
    console.log(`${array[i]}`);
  }
  console.log(`Sqare of array `);
  for (let i = 0; i <= 4; i++) {
    array[i] = array[i] * array[i];
    console.log(`${array[i]}`);
  }
}
console.log(findsquarearray());
//Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
console.log(`Question 14`);
function reverseanArray() {
  let Array: number[] = [1, 2, 2, 3, 3, 3];
  console.log(`Array Before Reversing`);
  for (let i = 0; i <= 5; i++) {
    console.log(`${Array[i]}`);
  }
  console.log(`Array After Reversing`);
  for (let i = 5; i >= 0; i--) {
    console.log(`${Array[i]}`);
  }
}
reverseanArray();
//note reverse method let b = 10;
// for (b = 10; b >= 0; b--) {
//   console.log(`${b}`);
// }
// //note order by methos
// for (b = 0; b <= 10; b++) {
//   console.log(`${b}`);
// }
//Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
console.log(`Question 15`);
console.log(`Find maximum and minimum score`);
function arrayscore() {
  let array_scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
  let maximumscore = array_scores[0];
  let minimumscore = array_scores[0];
  for (let i = 0; i <= 8; i++) {
    console.log(`${array_scores[i]}`);
    if (array_scores[i] > maximumscore) {
      maximumscore = array_scores[i];
    } else {
      minimumscore = array_scores[i];
    }
  }
  console.log(`maximum score exceeded : ${maximumscore}`);
  console.log(`minimum score fall : ${minimumscore}`);
}
arrayscore();

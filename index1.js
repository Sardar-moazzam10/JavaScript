//While loop condition remain true untill not false
//print to 10
console.log("While loop");
var num1 = 1;
while (num1 <= 10) {
  console.log(num1);
  num1++;
}
//do while
//proint untill 12
console.log("Do While loop");
var num2 = 2;
do {
  console.log(num2);
  num2++;
} while (num2 <= 12);
//For loop
console.log("For loop");
for (var num3 = 1; num3 <= 20; num3++) {
  console.log(num3);
}
//create a table of 5
console.log("Print table of 5 using while loop");
var num4 = 5;
var count = 1;
var table;
while (count <= 10) {
  table = num4 * count;
  console.log(num4, "*", count, "=", table);
  count++;
}
//using do while loop
console.log("Print table of 15 using Do while loop");
var num5 = 15;
var countrr = 1;
var tablee;
do {
  tablee = num5 * countrr;
  console.log(num5, "*", countrr, "=", tablee);
  countrr++;
} while (countrr <= 10);
//For loop
console.log("Print table of 20 using For loop");
var countrrr = 1;
var tableee;
for (var num6 = 20; countrrr <= 10; countrrr++) {
  tableee = num6 * countrrr;
  console.log(num6, "*", countrrr, "=", tableee);
}
//Find validate number using do while loop
// console.log("Check valid number");
// var userinput=-1;
// var positivenumber;
// do{
// positivenumber=(parseFloat(userinput));
// }while(isNaN(positivenumber) || positivenumber<0)
// console.log("You enter valiide number;",positivenumber);

//How to create infinit for loop enter ;; in for (;;)
// for(;;){

// }
//calulating sum of 1to 10 usng for loop
console.log("calulating sum of 1to 10 usng for loop");
var sum = 0;
for (var i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);
//Wrie a program to check if a number isprime or not using.
console.log(
  "Wrie a program to check if a number isprime or not using for loop."
);
var check_num = 133;
var isprime = true;
for (var i = 2; i < check_num; i++) {
  if (check_num % i === 0) {
    isprime = false;
    break;
  }
}
if (isprime) {
  console.log("Number is prime :", check_num);
} else {
  console.log("Not a prime number :", check_num);
}
////For loop
console.log("Print table of 8 using For loop");
var countrrr8 = 1;
var tableee8;
for (var num8 = 8; countrrr8 <= 10; countrrr8++) {
  tableee8 = num8 * countrrr8;
  console.log(num8, "*", countrrr8, "=", tableee8);
}
//
console.log("Print table of 9 using For loop");
var countrrr9 = 1;
var tableee9;
for (var num9 = 9; countrrr9 <= 10; countrrr9++) {
  tableee9 = num9 * countrrr9;
  console.log(num9, "*", countrrr9, "=", tableee9);
}
//
console.log("Print table of 12 using For loop");
var countrrr12 = 1;
var tableee12;
for (var num12 = 12; countrrr12 <= 10; countrrr12++) {
  tableee12 = num12 * countrrr12;
  var resUlt = `${num12} * ${countrrr12} = ${tableee12}`;
  //Templete stringd
  //make code more readable for comples string constructions increase readability
  console.log(resUlt);
}
//
console.log("Print table of 15 using For loop");
var countrrr15 = 1;
var tableee15;
for (var num15 = 15; countrrr15 <= 10; countrrr15++) {
  tableee15 = num15 * countrrr15;
  console.log(num15, "*", countrrr15, "=", tableee15);
}
//checkleapyear
console.log("Check leep year or not");
var year = 2028;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is  not a leap year");
}
//print straic * pattren like
//   *
//   * *
//   * * *
//   * * * *
//   * * * * *
console.log("Print pattern");
for (var i = 0; i <= 4; i++) {
  pattern = " ";
  for (var j = 0; j <= 4; j++) {
    pattern = pattern + " *";
    console.log(pattern);
  }
  break;
}
//Array
var temp = [1, 222, 3, 99, 66];
var higesttemp = temp[0];
for (var i = 0; i <= 4; i++) {
  console.log(temp[i]);
  if (temp[i] > higesttemp) {
    higesttemp = temp[i];
  }
}
console.log("higest temp:" + higesttemp);

//Functions
//Function is ablock of code reuse ,more readable.

function summ(a, b) {
  return a + b;
}
console.log(summ(5, 5));
console.log(summ(4, 4));
//Function Gret
function greet(Name) {
  console.log("Hello " + [Name] + " Welcome to Thapa technical JS course");
}
greet("Moazzam");
greet("Ali");
greet("Zain");
//Calculator
console.log("Calculator with function");
function calculator(a, b) {
  console.log("The sum of a and b is :", a + b);
  console.log("The sub of a and b is :", a - b);
  console.log("The mul of a and b is :", a * b);
  console.log("The sum of a and b is :", a / b);
}
calculator(5, 7);
//Ecmascript in jAvascript
// var ............ let
var myName = "Moazzam";
if (true) {
  myName = "Aslam";
  console.log(myName);
}
myName = "Daniyal";
console.log(myName);
//let
let MyName = "Moazzam";
if (true) {
  MyName = "Aslam";
  console.log(MyName);
}
myName = "Daniyal";
console.log(MyName);
//Templete string (in ecma script ES6) provide a convient and flexible way to write string in javascript in brackets ('')
//rather than in single or double qoutes
let m = "Moazzam";
let o = "Zom";
let n = `${m} ${o}`;
console.log(n);
let age = 9;
let print = `i ma ${age} year old `;
console.log(print);

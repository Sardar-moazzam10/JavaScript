var number = 10;
console.log(number); //10
var nAme = "Rauf";
console.log(nAme); //Rauf
let badhabiTs = null;
console.log(null); //null
console.log(typeof null); //object
var israininGOutside = true;
console.log(israininGOutside); //true
console.log(typeof israininGOutside); //boolean
//changr number to string
var nUmber = 10;
console.log(nUmber); //10
//add + sing after var
console.log(typeof (nUmber + " ")); //string
console.log(nUmber); //10
//using string constructor
console.log(typeof String(nUmber)); //string
//string to number
let myString = "Moazzam";
console.log(myString); //Moazzam
//Adding +sign
console.log(typeof +myString); //number
//using Number constructor
console.log(typeof Number(myString)); //number

//change using function
console.log(parseInt("123")); //123
console.log(parseInt("123", 10)); //123
console.log(parseInt("   123")); //123
console.log(parseInt("0.11")); //0
//concantation in js
var str = "Hello";
console.log(str + " world"); //Hello world
//Types Coerican in Java Script
console.log(10 + "20"); //1020
console.log(10 - "15"); //-5
console.log("Java " + "Script"); //java script
console.log(" " + " "); //
console.log(" " + "0"); //0
console.log("Java " - "Script"); //NaN
//Task
var result = "hello" / 2; //NaN
console.log(result);
var result = 0.1 + 0.2; //0.3..
console.log(result);
//using decimal points upto 3/2 points use function
console.log(result.toFixed(3));

//concentation using 3 variable
var str1 = "Hello ";
var str2 = "World";
var str3;
str3 = str1 + str2;
console.log(str3); //Hello World
//Assingment operator (=)
var chaNNelName = "myYoutube";
console.log(chaNNelName); //myYoutube
//Arthmitic operator
var x1 = 4;
var x2 = 19;
var sum = x1 + x2;
console.log(sum); //23
//comparison operator
//use to check vale onle (==)//double equal
//ue to check vale as well as datatype(===) tripal or stric equal
var nUmber = 10;
if (nUmber == 10) {
  console.log("Enter number is correct", number);
} else {
  console.log("Enter number is incorrect", number);
}
//(===)
console.log(5 === "5"); //false
//or
console.log(5 === 5); //true
//Not equal(!=)
console.log(5 != 5); //false
console.log(3 != 5); //true
//Greater than
console.log(5 > 10); //false
console.log(10 > 4); //true
//Less than
//Greater than
console.log(5 < 10); //true
console.log(10 < 4); //false

//Greater than eual to
console.log(10 >= 10); //true
//Less than eual to
console.log(10 <= 10); //true

console.log(5 < "fsfd");
//Task Question
//Write a program i.e aperson eligible to deive...age or age grater than or equal to 18 than valid driver licence
var person_age = 18;
var haddrivinglicence = false;
if (person_age >= 18 && haddrivinglicence) {
  console.log("Pesron is eligible for driving having a valid driving licence ");
} else {
  console.log(
    "Pesron is  not eligible for driving  and not having a valid driving licence "
  );
}
//Person is eligibal to drive using ternary operators age >=18
//syntax: condition? expressioniftrue:expressioniffalse;
var aGe = 50;
var result = aGe >= 18 ? "Yes" : "No";
console.log(result);
//2 question using ternary operator
var stu_score = 20;
var resulT = stu_score >= 60 ? "Student pass" : "Student fail";
console.log(resulT);
//some tricky questions
console.log(2 < 12 < 5);
console.log("2" - 1);
console.log("20" + 10 + 10);
//CONDITIONALS STATEMENTS
//IF ELSE,IF ELSE IF
//Exp:1
var voter_age = 20;
var citizenship = true;
var registered_tovote = false;
if (voter_age >= 18) {
  if (citizenship) {
    if (registered_tovote) {
      console.log("Person is eligiable to vote");
    } else {
      console.log("Person is not eligiable due to registraction status");
    }
  } else {
    console.log("Person not eligible to vote due to citizenship status");
  }
} else {
  console.log("Person is not eligiable to vote (YOUNGER)");
}
//Even or Odd
var numbe_r = 193;
if (numbe_r % 2 === 0) {
  console.log("Number is even :", numbe_r);
} else {
  console.log("Number is odd :", numbe_r);
}
//Switch statments
//Switch statment is use to perform different actions based on diff cond.
var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Monady 2 lectures");
    break;
  case "Tuesday":
    console.log("Tuesday 3 lectures");
    break;
  case "Wednesday":
    console.log("Wednesday 4 lecturs");
    break;
  case "Thursday":
    console.log("Thursday 5 lecturs");
    break;
  case "Friday":
    console.log("Friday 4 lecturs");
    break;
  case "Saturday":
    console.log("NO lecturs");
    break;
  case "Sunday":
    console.log("OFF ITs Sundat :)");
    break;
  default:
    console.log("Off its boaring");
    break;
}
//Test Question Using Switch Statments
var areaOfShapes = "Square";
// a=side; b=length; r=radius;
var a = 10,
  b = 2,
  r = 7;
const pi = 3.14;
switch (areaOfShapes) {
  case "Rectangle":
    console.log("Area of Rectangle =", a * b);
    break;
  case "Circle":
    console.log("Area of Circle =", pi * r * r);
    break;
  case "Square":
    console.log("Area of Square =", a * a);
    break;
  default:
    console.log("Sorry the shape is not avaliable");
    break;
}

//Default parameter
function sunm(a, b = 5) {
  return a + b;
}
console.log(sunm(5));
//FAT ARROW FUNCTION
//Say:its a easy and consice way to write anonymous function
//calculator two numbers
let calc = (a = 5, b = 9) => {
  var resUlt = `sum of a and b if ${a + b}`;
  console.log(resUlt);
};
calc();
//# parameter calculator
let menu = `Calculator using Function`;
console.group(menu);
function calculatoR(num1, num2, operator) {
  if (operator === "+") {
    let Sum = `Sum of ${num1} and ${num2} is = ${num1 + num2}`;
    return Sum;
  } else if (operator === "-") {
    let Sub = `Sub of ${num1} and ${num2} is = ${num1 - num2}`;
    return Sub;
  } else if (operator === "*") {
    let mul = `Mul of ${num1} and ${num2} is = ${num1 * num2}`;
    return mul;
  } else if (operator === "/") {
    let Div = `Div of ${num1} and ${num2} is = ${num1 / num2}`;
    return Div;
  } else {
    return 0;
  }
}
console.log(calculatoR(10, 2, "/"));
//Write afunction to reverse a string;
console.log(`Function to reverse a string`);
let reverseaString = (String) => {
  let string;
  let forward = "";
  let reverse = "";

  console.log(`string Before Reverse`);
  for (let i = 0; i < String.length; i++) {
    forward = forward + String[i];
  }
  console.log(`${forward}`);

  console.log(`string After Reverse`);
  for (let i = String.length - 1; i >= 0; i--) {
    reverse = reverse + String[i];
  }
  return reverse;
};

console.log(reverseaString("m o a z z a m"));
//Palidrome check
console.log(`PROGRAME TO CHECK PALIDROME STRING`);
function Palidromecheck(plaidrome) {
  let str = "";
  let original_str = "";
  let reverse_str = "";
  for (let i = 0; i < plaidrome.length; i++) {
    original_str = original_str + plaidrome[i];
  }
  console.log(`${original_str}`);
  for (let i = plaidrome.length - 1; i >= 0; i--) {
    reverse_str = reverse_str + plaidrome[i];
  }
  console.log(`${reverse_str}`);

  if (original_str === reverse_str) {
    console.log(`String is a plaidrome String `);
  } else {
    console.log(`String is not a plaidrome String`);
  }
}
Palidromecheck("LEVEL");
Palidromecheck("level");
//Array in javaScript
console.log(`Array in Java script`);
let fruits=["apple","orange","bamana","Pineaple","Mango"];
//one ethod to show it
for(let i=0;i<=fruits.length;i++){
  console.log(`${fruits[i]}`);
}
//for of loop
console.log(`for of loop`);
for(let i of fruits){
  console.log(`${i}`);
}
//for in loop
console.log(`for in loop`);
for(let j  in fruits){
  console.log(`${j}`);
}
//for each loop
console.log("For each loop");
let arra=fruits.forEach ((currentvalue,index,arr) => {
  return ` ${currentvalue} ${index}`
  //foreach not return value

},);

console.log(`${arra}`);
//map loop
console.log("Foe map loop")
let arrai=fruits.map ((currentvalue,index,arr) => {
  return ` ${currentvalue} ${index}`
  //map return value
  //big difference

},);
//MULTIPLY each element by 2
console.log("For each loop");
console.log(`Multiply each element by 2`);
let Mul=[1,2,3,4,5]
Mul.forEach ((currentvalue,index,arr) => {
  console.log(` ${currentvalue} * 2 = ${currentvalue *2}`);
  //foreach not return value
},);
//MULTIPLY each element by 2
console.log("For map loop");
console.log(`Multiply each element by 2`);
let mul=[1,2,3,4,5]
let mularray=mul.map ((currentvalue,index,arr) => {
  
  return ` ${currentvalue} * 2 = ${currentvalue *2}`;
  //foreach not return value
},);
console.log(`${mularray}`);
//SQL AVG FORMULS and MAx MIN FORMULA
//select max(age) from student;
//select min(age) from students;
//select avg(age) From Students;
//count queryselect count(*)from table_name;
//select count(*) from students;
//sum
//syantax
//select sum(age from table_name;
//select sum(age) from students;

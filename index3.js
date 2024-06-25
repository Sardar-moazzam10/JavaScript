//string in javascript
//string propities
const str = "Moazzam Aslam";
console.log(str.length);
//search in string
let text =
  'My name is "Moazzam Aslam" \n I beacome a full stack developer one day inshallah';
console.log(text);
// let searchin=text.indexOf("Moazzam");
// console.log(searchin);
let searchin = text.lastIndexOf("M", 10);
console.log(searchin);
let las = [1, 2, 3, 2, 4, 3, 5, 6, 4];
let findlas;
findlas = las.lastIndexOf(4, 7);
console.log(findlas);

let text1 = `Welcome to the world of Javascript`;
//   let res=text1.slice(1);
//   console.log(res);
//   let res1=text1.replace("t","");
//   console.log(res1);
let res = text1.substring(2, 20);
console.log(res);

//print letter a to z
function printalphabet() {
  console.log("Alphabets from (a-z) are:");
  for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
    console.log(String.fromCharCode(i));
  }
  // Using for loop for (a-z):
  // for (i = 97; i <= 122; i++) {
  //     console.log(String.fromCharCode(i));
}
printalphabet();
//count number of vowels in a string
let s = "MY NAME IS MUHAMMAD MOAZZAM ";

//check is all vowels presnt or not in a string
console.log("check is all vowels presnt or not in a string  \n");
let st = "Moazzam";
// let vowels="aeiou";
// for(let i of st){
//    if(st.includes(vowels)){
//     return true;
//    }
//    else{
//     return false;
//    }
//   }

// let checkvowel=(str)=>{
//   // let str="My Name is Moazzam";
//   let vowels="aeiou";
//   for(let char of vowels){
//     if(!str.includes(char)){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkvowel("My Name is Moazzam"));
//count number of vowels presnt in a string
let countvowel = (str) => {
  let vowel = "aeiou";
  let counte = 0;
  for (let item of str) {
    if (vowel.includes(item)) {
      counte ++;
    }
  }
  return counte;
};
console.log(countvowel("i am muslim  aei"));
// console.log(st.includes("a"));
// console.log(st.includes("e"));
// console.log(st.includes("i"));
// console.log(st.includes("o"));
// console.log(st.includes("u"));
check is pangram string all alphabets present or not or deal with upper or lower case latter

let Pangramcheck = (str) => {
  let inputString = str.toLowerCase().split("");
  console.log(inputString);
  let newString = inputString.filter(
    (currelem) =>
      currelem.charCodeAt() >= "a".charCodeAt(0) &&
      currelem.charCodeAt() <= "z".charCodeAt(0)
  );
  console.log(newString);
  console.log([...new Set(newString)].length);
  return [...new Set(newString)].length === 26;
};
console.log(Pangramcheck("The quick brown fox jumps over the lazy dog"));

let checkPangram = (strargu) => {
  let inputString = strargu.toLowerCase().split("");
  console.log(inputString);
  let filterstring = inputString.filter(
    (currElem) =>
      currElem.charCodeAt() >= "a".charCodeAt() &&
      currElem.charCodeAt() <= "z".charCodeAt()
  );
  console.log(filterstring);
  console.log([...new Set(filterstring)].length);
  return [...new Set(filterstring)].length === 26;
};
console.log(checkPangram("The quick brown fox jumps over the lazy dog"));

/==============================         Math Obiects           ==========================================
dealing with pi

const pivalue=Math.PI;
console.log(pivalue);


===================Basic Operations===============================
1.Math.abs()  return the absolute of a function...........
Absolute : how far the number is from 0,always positive +
console.log(Math.abs(-119));
console.log(Math.abs(9));


2. Math.round()  
round to the nearest integer
console.log(Math.round(3.7));
console.log(Math.round(3.4));

3. Math.floor()  
round down to the nearest integer
console.log(Math.floor(3.7));
console.log(Math.floor(3.4));

4. Math.Ceil()  
round upto the nearest integer
console.log(Math.ceil(3.7));
console.log(Math.ceil(3.4));



//5. Math.trunc()  
//return the value of  integer in decimal points
console.log(Math.trunc(3.7));
 console.log(Math.trunc(3.4));


 ==================== difference btw floor and trunc==============================
 ==========during when we enter negative value
 3. Math.floor()  
round down to the nearest integer
console.log(Math.floor(-3.7));
console.log(Math.floor(-3.4));

//5. Math.trunc()  
// //return the value of  integer in decimal points
console.log(Math.trunc(-3.7));
  console.log(Math.trunc(-3.4));



================================== Exponential and Log Functions============================
powwer
let res=Math.pow(9,2);
console.log(res);
//same 
console.log(9**2);
square root
let res=Math.sqrt(9);
console.log(res);
log(x)
let res=Math.log(1);
console.log(res);
log2: return base 2  of logx 
let res=Math.log2(9);
console.log(res);


====================Grnerate random numbers=====================
Math.random()

let number=Math.random().toFixed(5);
console.log(number);
want only integer paru use round or trunc
let number=Math.round(Math.random()*100);
console.log(number);

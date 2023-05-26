// console.log("hello console");
// Task 1
// capitalize the first letter/character of the string.
// method 1 index and slice

// let mystr = "capitalize the first letter of string.";
// let char = mystr[0].toUpperCase();
// console.log(char + mystr.slice(1));

// //method 2 slice

// console.log(mystr.slice(0,1).toUpperCase() + mystr.slice(1) );

// //method 3 function + charAt and slice
// function capitalizer(mystr){
//     return mystr.charAt(0).toUpperCase() + mystr.slice(1);
// }
// console.log(capitalizer(mystr));
// //method 4 replace method
// function capitalize(mystr){
//     return str.replace(mystr.slice(0,1), mystr.slice(0,1).toUpperCase());
// }
// console.log(capitalize(mystr));

// Task 2
// Capitalize the first letter/character of every word in the string
// let myString = 'capitalize the first letter of every word in the string'
// method 1 function and for loop
// function capitalize(str){
//     let word = str.split(' ');
//     for(let i=0; i < word.length; i++){
//         word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
//     }
//     return word.join(' ');
// }
// let output =capitalize(myString);
// console.log(output);

// method 2 for of loop
// function capitalize(str){
//     let word = str.split(' ');
//     let newArray = [];
//     for (let value of word){
//         let result = value.charAt(0).toUpperCase() + value.slice(1);
//         newArray.push(result);
//     }
//     return newArray.join(' ');
// }
// console.log(capitalize(myString));
// method 3 map function and replace function
// function capitalize(str){
//     let word = str.split(' ');
//     return word.map(str => {
//         return str.replace(str.charAt(0) , str.charAt(0).toUpperCase())
//     }).join(' ');
// }
// console.log(capitalize(myString));

//    Task 3
// convert uppercase to lowercase and vise versa
// myString = "cONveRt UpPErcaSe To loWerCaSe aNd viSe VerSa";
// method 1  for of
// function swapCase(str){
//     let letters = str.split('');
//     let newArray = [];
//     for(let letter of letters ){
//         if (letter === letter.toUpperCase()){
//             newArray.push(letter.toLowerCase());
//         }
//         else{
//             newArray.push(letter.toUpperCase());
//         }
//     }
//     return newArray.join('');
// }
// console.log(swapCase(myString));

// method 2 for of and match
// function swapCase(str){
//     let letters = str.split('');
//     let newArray = [];
//     for(letter of letters){
//         if (letter.match('[A-Z]')){
//             newArray.push(letter.toLowerCase());
//         }
//         else{
//             newArray.push(letter.toUpperCase());
//         }
//     }
//     return newArray.join('');
// }
// console.log(swapCase(myString));

// method 3 map function and ternary operator
// function swapCase(str){
//     let letters = str.split('');
//     let newArray = [];
//     return letters.map(letter =>
//         (letter === letter.toUpperCase()) ? letter.toLowerCase(): letter.toUpperCase()
//         ).join('');
// }

// console.log(swapCase(myString));

// method 4 reduce method
// function swapCase(str){
//     let letters = str.split('');
//     return letters.reduce((str, letter)=>
//     str + (letter === letter.toUpperCase()?
//     letter.toLowerCase() : letter.toUpperCase()), '')
// }
// console.log(swapCase(myString));

// task 4
// concatenate a specific string for a specific number of time
// method 1 foor loop
// function repeatString(str, times) {
// let result = "";
// if (typeof times === "undefines" || times === 0) {
//     return str;
//  } else {
//     for (let i = 0; i < times; i++) {
//     result += str;
//     }
// }
// return result;
// }
// console.log(repeatString("hello", 4));
// method 2 while loop
// function repeatString(str, times) {
// let result = "";
// if (typeof times === "undefines" || times === 0) {
//     return str;
// }
// else {
// while (times > 0) {
//     result += str;
//     times--;
// }
// }
// return result;
// }
// console.log(repeatString("hello", 0));
// method 3 repeat method
// function repeatString(str, times) {
// let result = "";
// if (typeof times === "undefines" || times === 0) {
//     return str;
// } else {
//     if (times > 0) {
//     return str.repeat(times);
//     } else {
//     return "";
//     }
// }
// }
// console.log(repeatString("hello", 6));

// task 5
// chop a string into chunks of a specific length
// myString = "chop a string into chunks of a specific length";
// method 1 for loop
// function stringChop(str, n) {
//   let newArray = [];
//   if (n > 0) {
//     for (let i = 0; i < str.length; i += n) {
//       newArray.push(str.slice(i, i + n));
//     }
//   } else {
//     return str;
//   }
//   return newArray;
// }
// console.log(stringChop(myString, 2));

// method 2 regex
//     function stringChop(str, n) {
//     let newArray = [];
//     if (n > 0) {
//         return n > 0 ? str.match(new RegExp(".{1," + n + "}", "g")) : [str];
//     } else {
//         return [str];
//     }
//     return newArray;
//     }
//     console.log(stringChop(myString, 0));
// method 3 reduce method
//     function stringChop(str, n) {
//     let newArray = [];
//     if (n > 0) {
//         let letters = str.split('');
//         return letters.reduce(function(acc, currentValue,index){
//             if(index % n !== 0 || !(index)){
//                 return acc.concat(currentValue)
//             }
//             else{
//                 return acc.concat(',',currentValue)
//             }
//         }, '')
//     }
//     else {
//         return [str];
//     }
//     return newArray;
//     }
//     console.log(stringChop(myString, 5));

// task 6
// Reverse a string
//     myString = "Reverse a string";
//     function reverseString(str){
//         let letters = str.split('');
//         return strReverse = letters.reverse().join('')
//     }
//     console.log(reverseString(myString));

// method 2
//     myString = "Reverse a string";
//     function reverseString(str){
//         return str.split('').reverse().join('');
//     }
//     console.log(reverseString(myString));

// method 3 for loop
// myString = "Reverse a string";
// function reverseString(str){
//     let newString = '';
//     for(let i= str.length-1 ;i>= 0 ; i--){
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString(myString));

// task 7
// create a string using the middle three charecters
// myString = "create a string using the middle three charecters";
// method 1
// function middleThree(str){
//     if (str.length % 2 === 0){
//         return str;
//     }
//     else{
//         let middle = (str.length + 1)/2;
//         return str.slice(middle - 2, middle + 1)
//     }
// }
// console.log(middleThree(myString));
// method 2 substr method
//     function middleThree(str){
//         if (str.length % 2 === 0){
//             return str;
//         }
//         else{
//             let middle = (str.length + 1)/2;
//             return str.substr(middle - 1, 1 )
//         }
//     }
//     console.log(middleThree(myString));

// task 8
// Crreate a new string adding "Pr" in front of a given string
// myString = "Create a new string adding \"Pr\" in front of a given string";
// method 1

// function PR(str){
//     if(str === null || (str === undefined) || (str.substr(0,2) === 'Pr')){
//         return str;
//     }
//     else {
//         return 'Pr' + str;
//     }

// }
// console.log(PR(myString));

// method 2
// function PR(str){
//     if(str === null || (str === undefined) || (str.indexOf('Pr')=== -1)){
//         return str;
//     }
//     else {
//         return 'Pr' + str;
//     }

// }
// console.log(PR(myString));

// task 9
// Insert a string within a specific position i another string
// method 1
// function insert(mainString, insertString, position){
//     if(typeof(position)=== 'undefined'){
//         position = 0;
//     }
//     if(typeof(insertString) === 'undefined'){
//         insertString = ' ';
//     }
//     return mainString.slice(0,position) + insertString + mainString.slice(position)
// }
// console.log(insert('Hello Everyone'));

// Task 10
// Count the occerence of a substring in a string
// myString = "Count the occerence of a substring in a string";
// method 1
// function count(str, find){
//     let myStr = str.toLowerCase().split(' ');
//     return myStr.reduce(function(acc,current){
//         if(!acc[find]){
//             acc[find] = 0;
//         }
//         if(current === find ){
//             acc[find]++;
//         }
//         return acc;
//     },{})[find]
// }
// console.log(count(myString, 'a'));

// method 2
//     function count(str, find){
//         let myStr = str.toLowerCase().split(' ');
//     return myStr.filter(function(result){
//         return result === find
//     }).length
//     }
//     console.log(count(myString, 'a'));

//task 11
//Repeat a string a specific time
//myString = "Repeat a string a specific time ";
//method 1 repeat function
// function repeatString(str, count){
//     if ((str == null) || (count == null) || (count === Infinity) || (count < 0)){
//         return "ERROR OR INVALID INPUT";
//     }
//     else{
//         return str.repeat(count)
//     }
// }
// console.log(repeatString(myString,1));

//method 2 for loop
// function repeatString(str, count) {
//   if (str == null || count == null || count === Infinity || count < 0) {
//     return "ERROR OR INVALID INPUT";
//   } else {
//     let text = "";
//     for (let i = 0; i < count; i++) {
//       text += str;
//     }
//     return text;
//   }
// }

// console.log(repeatString(myString, 3));

//method 3 foor loop and push
// function repeatString(str, count) {
//     if (str == null || count == null || count === Infinity || count < 0) {
//       return "ERROR OR INVALID INPUT";
//     } else {
//       let text = [];
//       for (let i = 0; i < count; i++) {
//         text.push(str);
//       }
//       return text.join('');
//     }
//   }
  
//   console.log(repeatString(myString, 3));

//Task 12
//Trunculate a string to a certain number of words
//myString = "Trunculate a string to a certain number of words";
//method 1 slice function
// function trunculate(str, limit) {
//     let myStr = str.split(' ');
//     //return myStr.slice(0,limit).join(' ');
//     return myStr.splice(0, limit).join(' ');

// }
// console.log(trunculate(myString,4));
// method 2  for loop 
// function trunculate(str, limit) {
//     let myStr = str.split(' ');
//     let newArray = [];
//     let i = 0;
//     for(let value of myStr){
//         if(i === limit){
//             3 === 3
//             break;
//         }
//         newArray.push(value);
//         i++;
//     }
//     return newArray.join(' ');
// }
// console.log(trunculate(myString,3));

//Task 13 
//Alphabetize a given string
//myString = "Alphabetize a given string";
//method 1
// function alphabetize(str){
//     let myStr = str.split('');
//     return myStr.sort().join('').trim();
// }
// console.log(alphabetize(myString));

//method 2 fol loop
// function alphabetize(str){
//     let myStr = str.split('');
//     let temp 
//     for ( let i = 0; i < myStr.length; i++){
//         for( let j = i + 1; j < myStr.length ; j++){
//             if (myStr[i]>myStr[j]){
//                 temp = myStr[i];
//                 myStr[i] = myStr[j];
//                 myStr[j] = temp;
//             }
//         }
//     }
//     return myStr.join('');
// }
// console.log(alphabetize(myString));

//Task 14
//Factorialize a Number in Javascript
//method 1
// function factorialize(num) {
//     let result = 1 
//     for (let i = 1; i <= num; i++ ){
//         result = result * i;
//     }
//     return result;
// }
// console.log(factorialize(0));  
//method 2
// function factorialize(num) {
//     let result = 1; 
//     if (num === 0 || num === 1){
//         return 1;
//     }
//     for (let i = num; i >= 1; i-- ){
//         result = result * i;
//     }
//     return result;
// }
// console.log(factorialize(0));  

//Task 15
//slasher
//method 1
//  let myArr = [1, 2, 3 , 4, 5, 6, 7, 8, 9];
// console.log(myArr.slice(1))
//method 2 by function 
// function slasher(arr, howMany){
//     return arr.slice(howMany);
// }
// console.log(slasher(myArr, 2))

//method 3 
// function slasher(arr, howMany){
//     return arr.splice(howMany);
// }
// console.log(slasher(myArr, 2))







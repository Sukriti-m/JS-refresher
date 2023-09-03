//Q1.Given a string, reverse each word in the sentence eg: "i love javascript" ==> "i evol tpircsavaj"

const str = "I love javascript";

const revWord = str
  .split(" ")
  .map((word) => {
    return word.split("").reverse().join("");
  })
  .join(" ");
console.log(revWord);

/*reverse func works on arrays

const str = "I love javascript";: This line declares a constant variable str and assigns it the value "I love javascript", which is our input string.

.split(" "): Here, we use the .split(" ") method on the string str. 
This method splits the string into an array of substrings using a space character " " as the separator. 
So, the string "I love javascript" is split into an array like ["I", "love", "javascript"].

.map((word) => { ... }): The .map() method is called on the array created in the previous step. 
It iterates over each element (in this case, each word) of the array and applies a function to each element. 
The provided function takes each word as an argument.

return word.split("").reverse().join("");: Inside the .map() function, each word is processed. This line of code does the following:

word.split(""): It splits the word into an array of characters. For example, "love" becomes ["l", "o", "v", "e"].

.reverse(): This method reverses the order of elements in the array. So, ["l", "o", "v", "e"] becomes ["e", "v", "o", "l"].

.join(""): Finally, it joins the reversed array of characters back into a single string.

The empty string "" as the argument ensures that there are no spaces between the characters.
So, ["e", "v", "o", "l"] becomes "evol". .join(" "): After the .map() operation, we have an array of reversed words. 

This .join(" ") method is used to join these reversed words back together into a single string, with a space " " as the separator.
*/
// Q2. How to check if an object is an array or not? (Provide some code.)

const checkArr = (arg) => {
  return Array.isArray(arg);
};
console.log(checkArr([])); //arr
console.log(checkArr({})); //not arr

//Q3. How to empty an array in Javascript without using any function or loops
//primitive and ref data types
//static and dynamic memory
let arrs = [1, 2, 3, 4];
arrs.length = 0; // Setting its length to zero
console.log(arrs);

/* 1) Assigning it to a new empty array
      arrs=[];
   2) Using splice() method
      arrs.splice(0,arrs.length); // starting from 0 index, remove all the elements upto arrs.length
   3) Using pop() method
      empty an array is to remove each element of the array one by one using the while loop and pop() method:
      while(arrs.length>0)
      {arrs.pop();}
*/
//Q4.  How would you check if a number is an integer or not?

const isIntegers = (num) => {
  return num % 1 === 0;
};
console.log(isIntegers(-12.8));

//Q5.Make this work : duplicate([1,2,3,4,5]); [1,2,3,4,5,1,2,3,4,5]

const a = [1, 2, 3, 4, 5];
const duplicate = (arrNum) => {
  //   return [...arrNum,...arrNum];
  return arrNum.concat(arrNum);
};
console.log(duplicate(a));

//Q6. func to reverse a number

const reverse = (num) => {
  //return num.toString().split("").reverse().join("");

  let rev = 0,
    rem = 0;
  while (num != 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10);
  }
  return rev;
};
console.log(reverse(16));

//Q7. Write a Javascript function that checks whether a passed string is palindrome or not

const palindrome = (str) => {
  return str === str.split("").reverse().join("");
};
console.log(palindrome("mom"));
console.log(palindrome("moma"));

//Q8. Write a Javascript function that return a passed string with letters in alphabetical order

const sortOrder = (str) => {
  return str.split("").sort().join("");
};
console.log(sortOrder("sukriti"));

//Q9.Write a Javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

const convert = (str) => {
return str.split(" ").map((word)=>{
return word.substr(0,1).toUpperCase() + word.substr(1);
 }).join(" "); 
};
console.log(convert("hi ups down"));

//Q10. Write a Javascript function which accepts an argument and returns the type.

const type = (arg) => {
  return typeof arg;
  }
  console.log(type("hi ups down"));
  console.log(type(123));
  console.log(type(true));
  console.log(type([]));
  
//Q11. Write a Javascript function to get the number of occurrences of each letter in specified string


//Q13. loop an array of objects and remove all objects which don't have gender's value male
// [ {name:"Aman",gender:"male"}, {name:"Amit",gender:"male"}, {name:"KuchBhi",gender:"non-binary"}, {name:"Shubhi",gender:"female"} {name:"Nandini",gender:"female"} {name:"Parkhi",gender:"female"} {name:"Sukriti",gender:"female"} ]

// const res = names.filter(check);

// function check(names) {
//   return names.gender === "M";
// }

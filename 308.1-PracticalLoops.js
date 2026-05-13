// Practical Loops
//Loop through all numbers from 1 to 100
//If a number is divisble by 3, log "Fizz"
//If a number is divisible by 5, log "Buzz"
//If a number is divisible by both 3 and 5, log "Fizz Buzz"
//If a number is not divisible by either 3 or 5, log the number
console.log('Part 1-Fizz Buzz')

// i would be the starting # and <= as it would need to count up to 100.
for (let i = 1; i <= 100; i++) {  

// statement to see if a number is divisible by 3 and 5, if so, logs Fizz Buzz
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
      
// If devisible by 3, log Fizz
  } else if (i % 3 === 0) {
    console.log("Fizz");

// If divisible by 5, log Buzz
  } else if (i % 5 === 0) {
    console.log("Buzz");

// If it is devisible by either 3 or 5, log the number
  } else {
    console.log(i);
  }
} 




// Cant' divide these numbers by anything other than 1 and itself 
//Declare an arbitrary number,n .
// Create a loop that searches for the next prime number, starting at n and incrementing from there. 
//As soon as you find the prime number, log that number and exit loop. 
//Prime Numbers: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 
console.log('Part 2- Prime Time')

let n = 9; // not a prime number

// i++  <-- increments i plus 1

for (let i = n + 1; ; i++) {

// i / j 
// 10 / 9
// 10 / 8
// 10 / 7
// 10 / 6
// 10 / 5 <-- not prime
// 10 / 4 
// 10 / 3
// 10 / 2 <-- stop here


let isPrime = true;

for (let j = n - 1; j >= 2; j--) {
// cheking if i (10) is divisible by j (9,8,7,6,5)
    if (i % j === 0) {
        // number must not be prime, because j is not 1 or the number itself
        isPrime = false;
        break; //exits the inner loop
    }
}

// if we go through nested loop and isPrime is STILL true then the current i/# must be prime
    if (isPrime === true) {
        console.log(i);
        break; // exits the outer loop 
    }

}


console.log('Part 3 - Feeling Loopy')
// CSV data looks like this: ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:
// ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26
// Once data process, it looks like this:
// ID Name   Occupation  Age
// 42 Bruce  Knight      41
// 57 Bob    Fry Cook    19
// 63 Blaine Quiz Master 58
// 98 Bill   Doctor      26

// Write a script that accomplishes:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

// Storing all the data inside long string. \n means a new line
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Breaks string apart everytime it sees a new line. Converts table into array. 
const table = csv.split("\n")

// logs the csv after dividing string into ordered list 
console.log(table)

// [] creates an empty array that can later store processed data. 
let arr2 = [];

// Loop goes through each item inside the table array one at a time. 
for (i of table){

//Splits the string whenever there is a comma
   arr2.push( i.split(","));
}
console.log(arr2);

//First iteration: ["ID, "Name', "Occupation", "Age"],
//2nd iteration: ["42", "Bruce", "Knight", "41"],
// 3rd / 4th / 5th iteration .... etc 
// Practical Loops
//Loop through all numbers from 1 to 100
//If a number is divisble by 3, log "Fizz"
//If a number is divisible by 5, log "Buzz"
//If a number is divisible by both 3 and 5, log "Fizz Buzz"
//If a number is not divisible by either 3 or 5, log the number
console.log('Part 1-Fizz Buzz')




// Cant' divide these numbers by anything other than 1 and itself 
//Declare an arbitrary number,n .
// Create a loop that searches for the next prime number, starting at n and incrementing from there. 
//As soon as you find the prime number, log that number and exit loop. 
//Prime Numbers: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 
console.log('Part 2- Primte Time')

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

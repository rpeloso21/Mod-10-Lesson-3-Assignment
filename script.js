// Task 1 

let fruits = ['apple', 'banana', 'orange'];

fruits.push("pears");

console.log(fruits);

fruits.pop();

console.log(fruits);

// Task 2

let numbers = [3, 1, 5, 2, 4];

let sortedNumbers = numbers.sort((a, b) => a -b);

console.log(sortedNumbers);

// Task 3

doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers);

let oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers);

let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum)

// Part 2 -------------------------------------------------------

// Task 1

let message = "Hello, World!";
console.log('length of message:', message.length)

// Task 2

let text = "Hello, World!";

console.log(text.toUpperCase());
console.log(text.toLowerCase());

// Task 3

let sentence = "The quick brown fox jumps over the lazy dog";

// should log 'fox'
console.log(sentence.substring(16, 19));

// Task 4

let sentence1 = "The quick brown fox";

console.log(sentence1.split(' '))

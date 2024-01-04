// a.Print odd numbers in an array


// const oddNumbers = array => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             console.log(array[i]);
//         }
//     }
// };


// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// oddNumbers(numbersArray);

// b.Convert all the strings to title caps in a string array


// const titleCaps = array => {
//     for (let i = 0; i < array.length; i++) {
//         let words = array[i].split(' ');

//         for (let j = 0; j < words.length; j++) {
//             words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1).toLowerCase();
//         }

//         array[i] = words.join(' ');
//     }
// };

// const stringsArray = ["hello world", "this is an example", "javascript is fun"];
// titleCaps(stringsArray);

// console.log(stringsArray);

// c.Sum of all numbers in an array
// const titleCapsAndSum = array => {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'number') {
//             sum += array[i];
//         } else if (typeof array[i] === 'string') {
//             let words = array[i].split(' ');

//             for (let j = 0; j < words.length; j++) {
//                 words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1).toLowerCase();
//             }

//             array[i] = words.join(' ');
//         }
//     }

//     console.log("Sum of numbers:", sum);
// };

// const mixedArray = ["hello world", 1, "this is an example", 5, "javascript is fun"];
// titleCapsAndSum(mixedArray);

// console.log(mixedArray);


// d.Return all the prime numbers in an array
// const sumOfNumbers = array => {
//     return array.reduce((accumulator, currentValue) => {
//         if (typeof currentValue === 'number') {
//             return accumulator + currentValue;
//         }
//         return accumulator;
//     }, 0);
// };

// const mixedArray = ["hello world", 1, "this is an example", 5, "javascript is fun"];
// const result = sumOfNumbers(mixedArray);

// console.log("Sum of numbers:", result);


// e.Return all the palindromes in an array
// const isPalindrome = str => {
//     const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversedStr = cleanStr.split('').reverse().join('');
//     return cleanStr === reversedStr;
// };

// const findPalindromes = array => {
//     return array.filter(item => isPalindrome(item));
// };

// const stringsArray = ["level", "hello", "civic", "world", "deed", "12321"];
// const palindromeStrings = findPalindromes(stringsArray);

// console.log("Palindromes:", palindromeStrings);


/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator, the values in the array is the same.
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Second array:", arr2)
console.log("First array:", arr1);

// Copying an array, spread the first array into the forth, lets you create a new array.
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);

// Copying an object
let obj1 = {a: 1, b: 2, };
let obj2 = { ...obj1, d:4 }; //To spread obj1 into obj2 and add a value
let obj3 = { ...obj1, b: 5 }; //To spread obj1 into obj3 and overwriting b from 2 to 5.
console.log('First Object:', obj1);
console.log('Second Object:', obj2);
console.log('Third Object:', obj3);

// Copying only part of an array/object
let arr5 = [...arr1, { ...obj1 }, ...arr3, "x", "y", "z"];
console.log(arr5);

// Define a new array, spread the first array, the first object in curly brackets,
//the third array and three arbitrary values.
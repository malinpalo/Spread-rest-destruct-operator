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

//rest-parameter-syntax
/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call (add a few numbers together)
// Create a simple arrow function
const sumAll = (a, b, c) => a + b + c; //returns the sum of abc
let sum = sumAll(1, 2, 3); //calls the function
console.log("sum:", sum)

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("sum2:", sum2);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c; //rest=array within the function
    for (let i of rest) {
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3:", sum3);

//DESTRUCTING
/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [,, maryNative, marySecondary] = languages; //To skip the to first values use commas
console.log(maryNative, marySecondary);

//working with objects

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let {firstLanguage, thirdLanguage} = languages2; //Destructure the things I need by using their property names.
console.log(firstLanguage, thirdLanguage); 


// Using rest parameter syntax //if we don't know how many names in a databas ...rest
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
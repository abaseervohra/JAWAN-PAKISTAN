var password = prompt("Please enter your password:");
if (password !== "") {
    if (password.length >= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("ok");
    }
} else {
    alert("empty");
}

//
// var a = 1; 
var c = "max"; 

if (a === 1) {
    if (c === "max") {
        alert("OK");
    }
} else {
    alert("baseer");
}
//
if (a === 1 && c === "Max") {
    alert("ok")
}
//
var a = 2;
var b = 2;

if(a !== b){
    if(a<=b){
        alert("it is equal")
    }
    else {
        alert ("not equal")
    }
}

//
var emptyarr = []
var onestring = ["baseer"]
//
var alphabet = ["h","i","j","k"];

alert(alphabet[2]);
//
var alphabet = ["h","i","j","k","L","M","n","o","p"];
document.write(alphabet.length)
//

var mArray = ["firstElement"];

mArray[1] = "secondElement";

alert(mArray[1]);

//
var myarray = ["baseer"]
 myarray.push("lastelement")

document.write(myarray[myarray.length-1])
//
var alphabet2 = ["h","i","j","k"];
alphabet2.pop()
document.write(alphabet2)
//
var alphabet3= ["h","i","j","k"];
alphabet3.push(5)
document.write(alphabet3)
//
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift()
document.write(sizes)
//

var sizes1 = ["<br>","S", "M", "XL", "XXL", "XXXL"];
sizes1.unshift(1,2,3);
document.write(sizes1)
//
var elementarr = ["one element"]
elementarr[1]="secound element";
document.write(elementarr[elementarr.length-1])
//

var sizes4 = ["S", "M", "XL", "XXL", "XXXL"];
 sizes4.splice(2,0,"L")
document.write(sizes4)
//
var sizes5 = ["S", "M", "XL", "XXL", "XXXL"];
var regsizes = sizes5.slice(0,3)
document.write(regsizes)
//
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,3,"tiger","monkey")
document.write(pets)
//
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,2)
document.write(pets)
//
var pets1 = ["dog", "cat", "ox", "duck", "frog", "flea"];
pets.slice(3,4)
document.write(pets1)

// 1. A loop that runs 10 times
for (let i = 0; i < 10; i++) {
    console.log("Loop 1 iteration:", i);
}

// 2. A loop that runs 12 times using `<=`
for (let i = 0; i <= 11; i++) {
    console.log("Loop 2 iteration:", i);
}

// 3. A loop with a counter name that's not `i`, running 100 times
for (let j = 0; j < 100; j++) {
    console.log("Loop 3 iteration:", j);
}


for (let i = 2; i >= 0; i--) {
    console.log("Loop 4 iteration:", i);
}
let flag = true; // Set a boolean flag

// Loop limited by the number of elements in the array `pets`
for (let i = 0; i < pets.length; i++) {
}

// For loop for a specific action on the second iteration
for (let i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i); // Alerts "1"
        break; // Exits the loop
    }
}

// Array of usernames and prompt interaction
let userNames = ["user1", "user2", "user3"]; // Example usernames
let firstName = prompt("Enter first name");

for (let i = 0; i < userNames.length; i++) {
    if (firstName === userNames[i]) {
        alert("Enter");
        break;
    } else if (i === userNames.length - 1) {
        alert("Please write the correct user name");
    }
}

// Check for match in an array
var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}
if (!matchFound) {
    alert("No match found");
}

// Nested loops for concatenating elements from two arrays
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}
// 1. Declare an empty array using JS literal notation
let studentNames = [];

// 2. Declare an empty array using JS object notation
let studentNamesObj = new Array();

// 3. Declare and initialize a strings array
let stringArray = ["apple", "banana", "cherry"];

// 4. Declare and initialize a numbers array
let numbersArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array
let booleanArray = [true, false, true];

// 6. Declare and initialize a mixed array
let mixedArray = [1, "apple", true, 3.14];

// 7. Declare and Initialize an array for education qualifications in Pakistan
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Display the qualifications in the browser
document.write("<h2>Available Education Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (let i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");
// Storing student names and their scores
let studentNames = ["Student 1", "Student 2", "Student 3"];
let studentScores = [320, 230, 480];
let totalMarks = 500;

// Displaying scores and percentages
studentScores.forEach((score, index) => {
    let percentage = (score / totalMarks) * 100;
    document.write(`Score of ${studentNames[index]} is ${score}. Percentage: ${percentage.toFixed(2)}%<br>`);
});

// Initialize an array with color names
let colors = ["Red", "Green", "Blue"];
document.write("Initial colors: " + colors.join(", ") + "<br>");

// a. Add color to the beginning
let addStart = prompt("What color do you want to add to the beginning?");
colors.unshift(addStart);
document.write("After adding to the beginning: " + colors.join(", ") + "<br>");

// b. Add color to the end
let addEnd = prompt("What color do you want to add to the end?");
colors.push(addEnd);
document.write("After adding to the end: " + colors.join(", ") + "<br>");

// c. Add two more colors to the beginning
colors.unshift("Cyan", "Magenta");
document.write("After adding two more colors to the beginning: " + colors.join(", ") + "<br>");

// d. Delete the first color
colors.shift();
document.write("After deleting the first color: " + colors.join(", ") + "<br>");

// e. Delete the last color
colors.pop();
document.write("After deleting the last color: " + colors.join(", ") + "<br>");

// f. Add color at desired position
let indexToAdd = prompt("At which index do you want to add a color?");
let colorToAdd = prompt("What color do you want to add?");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("After adding a color at desired position: " + colors.join(", ") + "<br>");

// g. Delete color(s) at user-defined position
let indexToDelete = prompt("At which index do you want to delete color(s)?");
let countToDelete = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, countToDelete);
document.write("After deleting colors at user-defined position: " + colors.join(", ") + "<br>");

// Sort student scores in ascending order
let sortedScores = studentScores.sort((a, b) => a - b);
document.write("Sorted Scores: " + sortedScores.join(", ") + "<br>");

// Initialize an array with city names and copy elements
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(1, 4);
document.write("Selected Cities: " + selectedCities.join(", ") + "<br>");

// Create a single string from an array
let arr = ["This ", " is ", " my ", " cat"];
let sentence = arr.join("");
document.write("Sentence: " + sentence + "<br>");

// Create a new array and access values in FIFO order
let fifoArray = [];
// Example of inserting values
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");
// Accessing values in FIFO order
while (fifoArray.length > 0) {
    document.write("FIFO Value: " + fifoArray.shift() + "<br>");
}

//chapter
let multiDimensionalArray = [];

for (let i = 1; i <= 10; i++) {
    console.log(`Counting ${i}`);
}

let tableNumber = parseInt(prompt("Enter table number"), 10);
let tableLength = parseInt(prompt("Enter table length"), 10);
for (let i = 1; i <= tableLength; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

let counting = [], reverseCounting = [], even = [], odd = [], series = [];
for (let i = 1; i <= 15; i++) {
    counting.push(i);
    if (i <= 10) reverseCounting.unshift(i);
    if (i % 2 === 0) {
        even.push(i);
        series.push(`${i}k`);
    }
    if (i % 2 !== 0) odd.push(i);
}
console.log(`Counting: ${counting.join(', ')}`);
console.log(`Reverse Counting: ${reverseCounting.join(', ')}`);
console.log(`Even: ${even.join(', ')}`);
console.log(`Odd: ${odd.join(', ')}`);
console.log(`Series: ${series.join(', ')}`);

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let search = prompt("What item are you looking for?");
if (A.includes(search)) {
    alert(`${search} is available in the list.`);
} else {
    alert(`${search} is not available in the list.`);
}

let numbers = [24, 53, 78, 91, 12];
console.log(`Largest number: ${Math.max(...numbers)}`);
console.log(`Smallest number: ${Math.min(...numbers)}`);

for (let i = 5; i <= 100; i += 5) {
    console.log(`Multiple of 5: ${i}`);
}

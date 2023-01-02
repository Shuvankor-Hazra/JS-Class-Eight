// // Function Calling Other Function
// const calculateAge = function (birthyear) {
//   return 2022 - birthyear;
// };

// const jobLeft = function (birthyear) {
//   const age = calculateAge(birthyear);
//   return 65 - age;
// };

// // const aAge = calculateAge(1975);
// // console.log(aAge);

// const aJobLeft = jobLeft(1975);
// console.log(aJobLeft);

// // JavaScript Events
// function displayText() {
//   console.log("This is console text");
// }

// function alertText() {
//   alert("This Is Alert Text");
// }

// // JavaScript Strings
// const firstName = "Asif";
// const larstName = "Akbar";
// console.log(firstName);
// console.log(larstName);

// // Example
// const text = 'I Love "Bangladesh!"';
// console.log(text);

// // Example 2
// const text2 = "I Love 'Bangladesh!'";
// console.log(text2);

// // Example 3
// const text3 = 'I Love "Bangladesh!"'; // "I Love \"Bangladesh!\"";
// console.log(text3);

// // Example 4
// const text4 = "I Love \\ Bangladesh!";
// console.log(text4);

// // String Mathods
// const x = "Shuvankor Hazra";
// console.log(x.length);

// // String Slice
// const fruits = "Apple, Banana, Mango, Pineapple";
// console.log(fruits);

// const fruit1 = fruits.slice(0, 5);
// console.log(fruit1);

// const fruit2 = fruits.slice(7, 13);
// console.log(fruit2);

// const fruit3 = fruits.slice(15, 20);
// console.log(fruit3);

// const fruit4 = fruits.slice(22, 31);
// console.log(fruit4);

// console.log(fruit1, fruit2, fruit3, fruit4);

// // Negative Slice
// const fruits = "Apple, Banana, Mango, Pineapple";
// console.log(fruits);

// const fruit1 = fruits.slice(-9);
// console.log(fruit1);

// const fruit2 = fruits.slice(-16, -11);
// console.log(fruit2);

// const fruit3 = fruits.slice(-24, -18);
// console.log(fruit3);

// const fruit4 = fruits.slice(-31, -26);
// console.log(fruit4);

// // Substring
// const fruits = "Apple, Banana, Mango, Pineapple";
// console.log(fruits);

// const fruit1 = fruits.substring(0, 5);
// console.log(fruit1);

// // Substr

// // String replace
// const text = "I Love Khulna";
// console.log(text);

// const text2 = text.replace("Khulna", "Dhaka");
// console.log(text2);

// // String toUpperCase
// const text = "Hello World!";
// console.log(text);
// console.log(text.toUpperCase());

// // String toLowerCase
// const text = "Hello World!";
// console.log(text);
// console.log(text.toLowerCase());

// // String trim
// const text = "     Hello World!     ";
// console.log(text);
// console.log(text.trim());

// String Search
// const text = "Rahim, Karim, Sakib";
// console.log(text.indexOf("Sakib"));
// console.log(text.indexOf("Karim"));
// console.log(text.indexOf("Rahim"));

const text = "Rahim, Karim, Rahim, Sakib, Rahim";
console.log(text.indexOf("Rahim"));

console.log(text.lastIndexOf("Rahim"));

console.log(text.search("Karim"));

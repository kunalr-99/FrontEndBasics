// Variable declaration & viewing output
// var name = "Sushant Poojari";
// console.log(name);
// var marks = 70;
// console.log(marks);

// Datatypes in JavaScript
// 1. Number
// var num = 20;
// console.log(num);
// console.log(typeof num);

// console.log("------------");

// 2. String
// var fname = "Sushanth";
// console.log(fname);
// console.log(typeof fname);

// console.log("------------");

// 3. Boolean -> true, false
// var isMarried = true;
// console.log(isMarried);
// console.log(typeof isMarried);

// Operators in JavaScript
// 1. Arithmetic Operator +, -, *, /, % (Return type is a number)
// var num1 = 24;
// var num2 = 3;
// var res = num1 / num2;
// console.log(res);

// 2. Comparison Operators <, <=, >, >=, == (Return type is a boolean)
// var num1 = 24;
// var num2 = 24;
// var res = num1 >= num2;
// console.log(res);

// 3. Assignment Operator-> =

// Conditional statements
// If, If-else, If-else-If ladder
// var num1 = 24;
// var num2 = 30;
// if (num1 > num2) {
//   // Code block
//   console.log("Yes , NUM1 is greater than NUM2");
// } else {
//   console.log("No , NUM1 is not greater than NUM2");
// }

// var marks = 90;
// if (marks > 90) {
//   console.log("Grade A");
// } else if (marks > 80) {
//   console.log("Grade B");
// } else if (marks > 70) {
//   console.log("Grade C");
// } else {
//   console.log("Grade D");
// }

// For Loops
// Display the first 10 numbers
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// // for (initializer; condition; incrementor)
// for (var count = 10; count >= 1; count--) {
//   // Code block
//   console.log(count);
// }

// for (var count = 1; count <= 20; count++) {
//   // Code block
//   if (count % 2 == 0) {
//     console.log(count, "is Even");
//   } else {
//     console.log(count, "is Odd");
//   }
// }

// Type Coersion
// var data = "15";
// var newData = Number(data);
// console.log(data, typeof data);
// console.log(newData, typeof newData);

// var start = Number("20");
// console.log(start);
// console.log(typeof start);
// var end = Number("25");
// console.log(end);
// console.log(typeof end);
// console.log(start + end);

// 1 to 50 print kar
// var start = Number(prompt("Enter begining number"));
// var end = Number(prompt("Enter ending number"));

// for (var i = start; i <= end; i++) {
//   console.log(i);
// }

// var num1 = Number(prompt("Enter number 1"));
// var num2 = Number(prompt("Enter number 2"));
// var action = prompt("Enter action");
// var res = 0;

// if (action == "-") {
//   // Subtract
//   res = num1 - num2;
// } else if (action == "+") {
//   // Addtion
//   res = num1 + num2;
// } else if (action == "*") {
//   // Multiplicaton
//   res = num1 * num2;
// } else if (action == "/") {
//   // Division
//   res = num1 / num2;
// } else {
//   alert("Enter valid action");
// }

// console.log(res);

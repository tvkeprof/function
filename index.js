console.log("222");


// Create a function that takes two numbers as arguments and returns their sum.
// console.log(Somme(7,15))

// function sumOfTwoNumber (number1, number2){
//     return number1 + number2
// }
// console.log(sumOfTwoNumber(2,4));

 
// Write a function that takes the base and height of a triangle as arguments and returns its area.
// console.log(TriangleArea(10,12))

function TriangleArea (number1, number2){
    return 1/2*number1*number2
}
console.log(TriangleArea(10,12))

 
// Write a function that takes the height and the width of rectangle as arguments and returns its perimeter.
// console.log(RectanglePerimetre(6,6))

function RectanglePerimetre(number1, number2) {
    return 2*number1+2*number2
}
console.log(RectanglePerimetre(6,6));

 

// Write a function that takes a number as argument and returns it square.
// console.log(SquareNumber(9))
 function SquareNumber(number) {
    return Math.pow(number,2)
 }
 console.log(SquareNumber(9));
 
// Write a function that takes hours as argument  and converts its into seconds.
// console.log(HourToSecond(24))

function HourToSecond(hour) {
    return hour*60*60
} 
console.log(HourToSecond(4));

 
// Create a function that  takes a string as argument and returns the length of this string.
function lengthOfString(string) {
    return string.length
}
console.log(lengthOfString("rrdrgfef"));

 
// write a function that takes a string as argument and returns it to number
function returnNumber(string) {
    return string.quan
}

//split
// write a function that takes a number as argument and returns it to string

// Exercise 1
// <h3>Write a function which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>
function Exercise1(number) {
    if(number%3 === 0 && number%5 === 0)
        return "FizzBuzz"
    else if (number%3 === 0)
        return "Fizz"
    else if (number%5 === 0)
        return "Buzz"
    else{
        return "eeeeeee"
    }
} console.log(Exercise1(14));

// Exercise 2
 
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
//  In simple terms, the Factorial of 7 is solved like this:
// 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040
 
// Example:
// > console.log(factorializer(7));
// > 5040


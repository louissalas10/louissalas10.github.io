//use alrert funtion() for alert in JS //
//use window.prompt() to input using an alert//
var fName = window.prompt("Enter Your First Name");
alert(`Hello ${fName}`);

//use getElementById('id') function to use value from javascript//
document.getElementById("fName").innerHTML = "Your Name: " + fName;

//declaring variable piValue with value (3.1415926)//
var piValue = "3.1415926";


//use console.log to view in console//
console.log(`${piValue}`);

//the following is used to used to get favorite number aler box//
var myFavNum = window.prompt("Enter your favorite number.");
alert (`Your Favorite Number is ${myFavNum}`);

document.getElementById("myFavNum").innerHTML = "Your Favorite Number: " + myFavNum;

var myPi = window.prompt("Enter value Pi Hint: look at console");
var myArea = parseInt(myPi) * parseInt(myFavNum) * parseInt(myFavNum);
alert(`Area is ${myArea}`);

document.getElementById("area").innerHTML = "Hey, " + fName + ", your favorite number is " + myFavNum + ".  If that was the radius of a circle, the circle's area would be " + myArea + ".";

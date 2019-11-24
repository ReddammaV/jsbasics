document.write("<div class=container>");

var x = 10;
// only if statement
document.write("<h2>only if statement</h2>");

if (x > 5) {
    document.write("X is Greater <br>");
}

// ifandelse statement
document.write("<h2>ifandelse statement</h2>");

if (x > 15) {
    document.write("X is Greater <br>");

} else {
    document.write('X is Lesser <br>')
}

/* <h1>Logical Operators</h1>
<h4>&& - Logical AND</h4>
<h4>|| - Logical OR</h4>
<h4>! - Logical NOT</h4> */

var age = 21;

//Logical AND Operator
document.write("<h2>Logical AND Operator</h2>");

if (age >= 18 && age <= 25) {
    console.log("You are Eligible with AND Operator!")
    document.write("You are Eligible with AND Operator! <br>")
}
//Logical OR Operator
document.write("<h2>Logical OR Operator</h2>");

if (age >= 18 || age <= 20) {
    console.log("You are Eligible with OR Operator!")
    document.write("You are Eligible with OR Operator! <br>")
}

//Logical NOT Operator
document.write("<h2>Logical NOT Operator</h2>");

if (!age <= 18) {
    console.log("You are Eligible with NOT Operator!")
    document.write("You are Eligible with NOT Operator! <br>")
}

// ===
document.write("<h2>===</h2>");

var number = '100';

if (number === 100) {
    document.write("Number is Same <br>");
} else {
    document.write("Number is not same <br>");
}

// ==
document.write("<h2>== </h2>");

var myname = 'Reddamma';
var gender = 'Female';

if (gender == 'Female') {
    document.write("Welcome Miss." + myname + "<br>");
} else {
    document.write("Welcome Mr." + myname + "<br>");
}

//if elseif else condition on percentage marks
document.write("<h2>if elseif else condition on percentage marks</h2>");
var marks = 68;

if (marks >= 80 && marks <= 100) {
    document.write("You are in Merit <br>");
    console.log("You are in Merit");
} else if (marks >= 60 && marks < 80) {
    document.write("You are in Ist Division <br>");
    console.log("You are in Ist Division");
} else if (marks >= 45 && marks < 60) {
    document.write("You are in IInd Division <br>");
    console.log("You are in IInd Division");
} else if (marks >= 33 && marks < 45) {
    document.write("You are in IIIrd Division <br>");
    console.log("You are in IIIrd Division");
} else if (marks < 33) {
    document.write("You are Fail <br>");
    console.log("You are Fail");
} else {
    document.write("Please Enter Valid Percentage <br>");
    console.log("Please Enter Valid Percentage");
}

//Ternary Operator
document.write("<h2>Ternary Operator</h2>");
//syntax - (condition) ? True Statement : False Statement;

//example 1
// var t = (10>5) ? true : false ;
var t = "Value is " + (10 > 5 ? true : false);

document.write(t + "<br>");
console.log(t);

//example 2
var y = 15;
var z;

(y > 12) ? z = "18" : z = "22";
document.write(z);

//Switch Case
document.write("<h2>Switch Case</h2>");

//example 1
day = 6;

switch (day) {
    case 0:
        document.write("Today is Monday");
        break;
    case 1:
        document.write("Today is Tuesday");
        break;
    case 2:
        document.write("Today is Wednessday");
        break;
    case 3:
        document.write("Today is Thursday");
        break;
    case 4:
        document.write("Today is Friday");
        break;
    case 5:
        document.write("Today is Saturday");
        break;
    case 6:
        document.write("Today is Sunday");
        break;

    default:
        document.write("Enter Valid Week Day");
        break;
}
document.write("<br>");

//example 2
document.write("<h2>Here we are using two switch cases for one common statement</h2>");

var myAge = 15;

switch (true) {
    case (myAge >= 10 && myAge <= 20): case (myAge >= 5 && myAge <= 9):
        document.write("My Age is Lessthan 20");
        break;

    case (myAge >= 21 && myAge <= 50):
        document.write("My Age is Greaterthan 20");
        break;

    default:
        document.write("Enter valid Age");
        break;
}
document.write("<br>");


document.write("</div>");

document.write("<div class=container>");

//simple function
document.write('<h4>functions</h4>');

//fuction declaration or definition
function hello() {
    document.write("Hello World!");
}

hello(); // function calling
document.write("<br>");
hello();
document.write("<br>");

//function with parameters
document.write('<h4>function with parameters</h4>');
//while declaring in function declaration a,b values are parameters
function numberAdd(a, b) {
    console.log(a + b);
    document.write(a + b);
}
numberAdd(2, 3); //while declaring in function calling 2,3 values are aguments
document.write("<br>");

//another example
function greet(fname, lname) {
    document.write('Welcome ' + fname + ' ' + lname);
}

greet("Velasiri", "Reddamma"); //while declaring in function calling 2,3 values are aguments
document.write("<br>");

//function with return
document.write('<h4>function with parameters</h4>');
function sum(a, b) {
    return a + b;
}
document.write(sum(8, 3));

//another example
function add(a,b,c){
    s = a + b + c;
    return s;
}
document.write("<br>");

function percentage(tt){
 var per = tt/300 * 100;
 document.write('<br>' + per);
}
document.write("<br>");

total = add(20,30,40);
// document.write(total);
percentage(total);

document.write("<br>");


document.write("</div>");


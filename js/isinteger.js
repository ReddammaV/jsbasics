document.write('<div class="container mt-3">');
//isInteger Methods
document.write('<h4>isInteger Method</h4>');
document.write('<h5>isInteger() is used for the given value is integer or not. It not allows decimal value(.3545) .</h5>');

var a= 100;
document.write(a + '<br>');
var num = Number.isInteger(a);
document.write(num + '<br>');

document.write('<br>');

//Example 2
document.write('<h5>Example 2 </h5>');
var a= -1.23;
document.write(a + '<br>');
var num = Number.isInteger(a);
document.write(num + '<br>');

document.write('<br>');

//Example 3
document.write('<h5>Example 3 </h5>');
var a= 'hello';
document.write(a + '<br>');
var num = Number.isInteger(a);
document.write(num + '<br>');


document.write('<br>');

//Example 4
document.write('<h5>Example 4 </h5>');
var a= Infinity;
document.write(a + '<br>');
var num = Number.isInteger(a);
document.write(num + '<br>');

document.write('<br>');

//Example 5
document.write('<h5>Example 5</h5>');
var a= 10-5;
document.write(a + '<br>');
var num = Number.isInteger(a);
document.write(num + '<br>');



document.write('</div>');

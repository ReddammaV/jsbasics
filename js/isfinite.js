document.write('<div class="container mt-3">');
//isFinite Methods
document.write('<h4>isFinite Method</h4>');
document.write('<h5>isFinite() is used for to give boolean value is it finite number or not.</h5>');

var a= 100;
document.write(a + '<br>');
var num = isFinite(a);
document.write(num + '<br>');

document.write('<br>');

//Example 2
document.write('<h5>Example 2 </h5>');
var a= -1.23;
document.write(a + '<br>');
var num = isFinite(a);
document.write(num + '<br>');

document.write('<br>');

//Example 3
document.write('<h5>Example 3 </h5>');
var a= 'hello';
document.write(a + '<br>');
var num = isFinite(a);
document.write(num + '<br>');


document.write('<br>');

//Example 4
document.write('<h5>Example 4 </h5>');
var a= Infinity;
document.write(a + '<br>');
var num = isFinite(a);
document.write(num + '<br>');

document.write('</div>');

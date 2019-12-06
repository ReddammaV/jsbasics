document.write('<div class="container mt-3">');
//random Method
document.write('<h4>random(x,y) Method</h4>');
document.write('<h5>Math.random(x,y) is used to find the x*y means random(2,3) (2*2*2) x value multiplies y times</h5>');

var a=  Math.random();
document.write(a + '<br>');

document.write('<br>');
//Example 2
document.write('<h5>Example 2 Math.random with 10</h5>');

var a=  Math.random()*10;
document.write('Random value with below 10 number ' + a + '<br>');

document.write('<br>');

document.write('<h5>Example 2 Math.random with 10 with math.floor</h5>');
var a=  Math.floor(Math.random()*10)+1;
document.write('Random value with below 10 number ' + a + '<br>');

document.write('<br>');

//Example 3
document.write('<h5>Example 3 </h5>');

var a=  Math.random()*100;
document.write('Random value with below 100 number ' + a + '<br>');

document.write('<br>');

document.write('<h5>Example 2 Math.random with 100 with math.floor</h5>');
var a=  Math.floor(Math.random()*100)+1;
document.write('Random value with below 10 number ' + a + '<br>');

document.write('<br>');





document.write('</div>');

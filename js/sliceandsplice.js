document.write('<div class="container mt-3">');

//Slice and splice array
//Slice
document.write('<h4>Slice Array</h4>');
var a = ["Sanjay", "Aman", "Rehman", "Karan", "Aruna", "Mohan"];
document.write(a + '<br>');

b = a.slice(1,4);
document.write(b + '<br>');

//Splice
document.write('<h4>Splice Array</h4>');
var a = ["Sanjay", "Aman", "Rehman", "Karan", "Aruna", "Mohan"];
document.write(a + '<br>');

b = a.splice(2);
document.write(b + '<br>');

//second example
document.write('<h4>Splice Array Example 2</h4>');
var a = ["Sanjay", "Aman", "Rehman", "Karan", "Aruna", "Mohan"];
document.write(a + '<br>');

b = a.splice(2,2);
document.write(b + '<br>');

//second example
document.write('<h4>Splice Array Example 3</h4>');
var a = ["Sanjay", "Aman", "Rehman", "Karan", "Aruna", "Mohan"];
document.write(a + '<br>');

a.splice(2,0,"Hello","World");
document.write(a + '<br>');

//second example
document.write('<h4>Splice Array Example 4</h4>');
var a = ["Sanjay", "Aman", "Rehman", "Karan", "Aruna", "Mohan"];
document.write(a + '<br>');

a.splice(0,1,"Hello","World");
document.write(a + '<br>');


document.write('<h4>How to check is it Array or not with isArray</h4>');
var a = ["Sanjay", "Aman", "Rehman", "Karan", "Aruna", "Mohan"];
b= Array.isArray(a);
document.write(b+ '<br>');

var c = 12;
var d = Array.isArray(c);
document.write(d);


document.write('</div>');

document.write('<div class="container mt-3">');

//concat and join array
//concat
document.write('<h4>Concat Array</h4>');
var a = ["Sanjay", "Aman", "Rehman", "Karan"];
var b = a.concat(["Aruna", "Mohan"]);

document.write(b);

document.write('<h4>Example 2 Concat Array</h4>');
var a = ["Sanjay", "Aman", "Rehman", "Karan"];
var b = ["Aruna", "Mohan"];
var d = ["Reddy"];
var c = a.concat(b, d);

document.write(c);

//join
document.write('<h4>Join Array</h4>');
var a = ["Sanjay", "Aman", "Rehman", "Karan"];
var b = ["Reddy","Aruna", "Mohan"];
var c = a.concat(b);
document.write(c + '<br>');

//First Example
var d = c.join(" - ");
document.write(d + '<br>');

//second Example
var e = c.join(" ? ");
document.write(e + '<br>');


document.write('</div>');

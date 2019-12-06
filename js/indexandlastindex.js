document.write('<div class="container mt-3">');

//indexOf and lastIndexOf
//syntax: indexOf("value", "indexValue")
//indexOf
document.write('<h4>indexOf Array</h4>');

var a = ["Sanjay", "Aman", "Rehman", "Aman", "Karan"];
document.write(a + '<br>');

var b = a.indexOf("Aman");
document.write('Aman Index Value is: '+ b + '<br>');

//indexOf
document.write('<h4>indexOf Array Example 2</h4>');

var a = ["Sanjay", "Aman", "Rehman", "Aman", "Karan"];
document.write(a + '<br>');

var b = a.indexOf("Aman", 2);
document.write('Aman Index Value is: '+ b + '<br>');

//indexOf
document.write("<h4>indexOf Array Example 3 If value is doesn't exist</h4>");

var a = ["Sanjay", "Aman", "Rehman", "Aman", "Karan"];
document.write(a + '<br>');

var b = a.indexOf("Neha", 2);
document.write('Neha Index Value is: '+ b + '<br>');
document.write("<h6>NOTE: If value is not exist the index value shows -1</h6>");

//lastIndexOf
document.write("<h4>lastIndexOf Array</h4>");
document.write("<h6>NOTE: In lastIndexOf it counts from reverse order</h6>");

var a = ["Sanjay", "Aman", "Rehman", "Aman", "Karan"];
document.write(a + '<br>');

var b = a.lastIndexOf("Aman");
document.write('Aman lastIndexOf Value is: '+ b + '<br>');

//lastIndexOf
document.write("<h4>lastIndexOf Array Example 1</h4>");
document.write("<h6>NOTE: In lastIndexOf it counts from reverse order</h6>");

var a = ["Sanjay", "Aman", "Rehman", "Aman", "Karan"];
document.write(a + '<br>');

var b = a.lastIndexOf("Aman", 2);
document.write('Aman lastIndexOf Value is: '+ b + '<br>');



document.write('</div>');

document.write('<div class="container mt-3">');

//shift and unshift array
document.write('<h4>Shift Array</h4>');
document.write('<h6>Shift means delete object in the array from first</h6>');

var students = ["Sanjay", "Aman", "Rehman", "Karan"];
document.write(students + '<br>');

//shift
students.shift();
document.write(students + '<br>');

//unshift
document.write('<h4>Unshift Array</h4>');
document.write('<h6>Unshift means add the object in the array from first</h6>');

students.unshift("Reddy");
document.write(students + '<br>');


document.write('</div>');

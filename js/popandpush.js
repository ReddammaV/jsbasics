document.write('<div class="container mt-3">');

//pop and push array
document.write('<h4>Pop Array</h4>');
document.write('<h6>Pop means delete object in the array from last</h6>');

var students = ["Sanjay", "Aman", "Rehman", "Karan"];
document.write(students + '<br>');

//pop
students.pop();
document.write(students + '<br>');

//push
document.write('<h4>Push Array</h4>');
document.write('<h6>Push means add the object in the array from last</h6>');

students.push("Reddy");
document.write(students + '<br>');


document.write('</div>');

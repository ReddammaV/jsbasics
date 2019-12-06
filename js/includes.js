document.write('<div class="container mt-3">');

//syntax: includes("search item")
//includes
document.write('<h4>includes Array</h4>');
document.write('<h6>In Includes we search the item it gives boolean value true or false</h6>');

var a = ["Sanjay", "Aman", "Rehman", "Aman", "Karan"];
document.write(a + '<br>');

b= a.includes("Rehman");
document.write('Rehman value is - '+ b + '<br>');

//another example
document.write('<h4>includes Array Example 2</h4>');

var a = ["Sanjay", "Aman", "Rehman", "Aman", "Karan"];
document.write(a + '<br>');

b= a.includes("Neha");
document.write('Neha value is - '+ b + '<br>');


document.write('</div>');

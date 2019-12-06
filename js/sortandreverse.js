document.write('<div class="container mt-3">');

//sort with strings array
document.write('<h4>Sort with String Array</h4>');

var students = ["Sanjay", "Aman", "Rehman", "Karan"];
document.write(students + '<br>');

//After sort
document.write('<h5>After Sort</h5>');
students.sort();
document.write(students + '<br>');

document.write('<br>');
document.write('<br>');

//sort with numbers array
document.write('<h4>Sort with Numbers Ascending Order Array</h4>');

var b = [20, 500, 5, 300, 3, 8, 9000, 1];
document.write(b + '<br>');

//After sort
document.write('<h5>After Sort</h5>');

b.sort(function (a, b) { return a - b });
document.write(b + '<br>');

document.write('<br>');

//sort with numbers array
document.write('<h4>Sort with Numbers Descending Order Array</h4>');

var c = [20, 500, 5, 300, 3, 8, 9000, 1];
document.write(c + '<br>');

//After sort
document.write('<h5>After Sort</h5>');

c.sort(function (a, b) { return b - a });
document.write(c + '<br>');

document.write('<br>');
document.write('<br>');

//Reverse for string array
document.write('<h4>Reverse with String Array</h4>');
var array = ["Sanjay", "Aman", "Rehman", "Karan"];
document.write(array + '<br>');

//After Reverse
document.write('<h5>After Reverse</h5>');

array.reverse();
document.write(array + '<br>');

document.write('<br>');

//Reverse with numbers array
document.write('<h4>Reverse with Numbers Array</h4>');

var b = [20, 500, 5, 300, 3, 8, 9000, 1];
document.write(b + '<br>');

//After Reverse
document.write('<h5>After Reverse</h5>');

b.reverse();
document.write(b + '<br>');


//sort with an object with age(number)
document.write('<h4>sort with an object with age(number)</h4>');

var persons = [
    { name: "Reddy", age: 28 },
    { name: "Aruna", age: 58 },
    { name: "Mohan", age: 68 },
];

var sortedByAge = persons.sort(function (a, b) {
    return a.age - b.age;
});
console.log(sortedByAge);
document.write(JSON.stringify(sortedByAge));
document.write('<br>');



document.write('</div>');


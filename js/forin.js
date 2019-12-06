document.write('<div class="container mt-3">');
//object()
document.write('<h4>forin Loop</h4>');

//forin loop
document.write('<h4>For in loop for object</h4>');
var object = {
    firstName: "Reddy",
    lastName: "Velasiri",
    age: 28,
    email: "reddy@gmail.com",
    favMovies: ['Bahubali 2', 'Magadheera', 'f2'],
}

for (var key in object) {
    document.write(key + ' : ' + object[key] + '<br>');
}

document.write('<br>');

//example 2

//forin loop
document.write('<h4>For in loop Array</h4>');
var students = ["Reddy","Aruna","Aruna Mohan","Mohan","Reddy","Reddamma"];


for (let item in students) {
    document.write(students[item] + '<br>');
}


//Example 3
document.write('<h4>For in loop example 3 array with object</h4>');
var object = [ {
    firstName: "Reddy",
    lastName: "Velasiri",
    age: 28,
    email: "reddy@gmail.com",
    favMovies: ['Bahubali 2', 'Magadheera', 'f2'],
},
{
    firstName: "Aruna",
    lastName: "Velasiri",
    age: 58,
    email: "aruna@gmail.com",
    favMovies: ['Hello','Bahubali 2', 'Magadheera', 'f2'],
},
{
    firstName: "Mohan",
    lastName: "Velasiri",
    age: 68,
    email: "mohan@gmail.com",
    favMovies: ['Magadheera', 'f2'],
}]

for (var key in object) {
    document.write(object[key].firstName + '<br>');
    console.log(object[key]);
}
document.write('</div>');

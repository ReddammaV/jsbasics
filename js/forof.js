document.write('<div class="container mt-3">');
//object()
document.write('<h4>forof Loop</h4>');

//forin loop
document.write('<h4>For of loop for object</h4>');
var students = ["Reddy","Aruna","Aruna Mohan","Mohan","Reddy","Reddamma"];


for (let item of students) {
    document.write(item + '<br>');
}

document.write('<br>');


//Example 2
document.write('<h4>For of loop example 2</h4>');
var object = {
    firstName: "Reddy",
    lastName: "Velasiri",
    age: 28,
    email: "reddy@gmail.com",
    favMovies: ['Bahubali 2', 'Magadheera', 'f2'],
}

for (var key of object.firstName) {
    document.write(key);
}

document.write('<br>');


//Example 3
document.write('<h4>For of loop example 3 array with object</h4>');
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

for (var key of object) {
    document.write(key.firstName);
    console.log(key);
}
document.write('</div>');

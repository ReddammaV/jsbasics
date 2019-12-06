document.write('<div class="container mt-3">');
//object()
document.write('<h4>object()</h4>');

//Example 1
document.write('<h4>object() Example 1</h4>');

var a = {
    firstName: "Reddy",
    lastName: "Velasiri",
    age: 28,
    email: "reddy@gmail.com",
    favMovies: ['Bahubali 2', 'Magadheera', 'f2'],
    living: {
        city: 'Tirupati',
        country: 'India'
    },
    salary: function () {
        return 25000;
    },
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

document.write(a.firstName + '<br>');
document.write(a.favMovies + '<br>');
document.write(a.favMovies[0] + '<br>');
document.write(a.salary() + '<br>');
document.write(a.fullName() + '<br>');

document.write(a.living.city + '<br>');

console.log(a);


//Example 2
document.write('<h4>object() Example 2</h4>');

var person = new Object();
person.name = "Reddamma";
person.email = "reddamma@gmail.com";
person.age = 29;

document.write(person.name + '<br>');
document.write(person['name'] + '<br>');
document.write(person['age'] + '<br>');
document.write(person['email'] + '<br>');
console.log(person);
document.write('<br>');

//Example 3
document.write('<h4>Array of objects</h4>');
var a = [
    {name: "Reddy", age: 28, Ocuppation:"Designer"},
    {name: "Aruna", age: 58, Ocuppation:"House Wife"},
    {name: "Mohan", age: 68, Ocuppation:"Supervisor"},
    {name: "Reddamma", age: 28, Ocuppation:"Designer"},
];

// document.write(a + '<br>');
console.log(a);

document.write('<h6>ForEach lopp Array of objects</h6>');
// foreach loop to display array in object
a.forEach(element => {
    document.write(element.name + ' - ' + element.Ocuppation + '<br>');
});
document.write('<br>');
document.write('<h6>For loop Array of objects</h6>');

// for loop to display array in object
for (let i = 0; i < a.length; i++) {
    const element = a[i];
    document.write(a[i].name + ' ' + a[i].Ocuppation + '<br>');
    
}

document.write('<br>');

//forin loop
document.write('<h4>For in loop for object</h4>');
var object = {
    firstName: "Reddy",
    lastName: "Velasiri",
    age: 28,
    email: "reddy@gmail.com",
    favMovies: ['Bahubali 2', 'Magadheera', 'f2'],
}

for (const key in object) {
    document.write(key + ' : ' + object[key] + '<br>');
}

document.write('</div>');

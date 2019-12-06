document.write('<div class="container mt-3">');
//find and findIndex
//find()
document.write('<h4>find Array related to 18</h4>');
document.write('<h6>In find it finds the searched item of first value of item(if items have multiple)</h6>');

//example
var ages = [10,15,18,20];
document.write(ages + '<br>');
var b = ages.find(checkAdult);
document.write(b + '<br>');

//function for find 
function checkAdult(age){
    return age>= 18;
}

//example 2
document.write('<h4>find Array Example 2</h4>');

var a = ["Reddy","Aruna","Aruna Mohan","Mohan","Reddy","Reddamma"];
document.write(a + '<br>');
var b = a.find(checkName);

document.write(b + '<br>');
//function for find 
function checkName(name){
    return name === 'Reddy';
}


//example 2
document.write('<h4>find Array Example 3 function inside find</h4>');

var a = ["Reddy","Aruna","Aruna Mohan","Mohan","Reddy","Reddamma"];
myName = "Aruna";
document.write(a + '<br>');

var b = a.find(item => {
    if(myName === item) return true;
});
document.write(b + '<br>');



//example 3
document.write('<h4>find Array Example 3 function inside find</h4>');

var a = [
    {name: "Reddy", age: 28, Ocuppation:"Designer"},
    {name: "Aruna", age: 58, Ocuppation:"House Wife"},
    {name: "Mohan", age: 68, Ocuppation:"Supervisor"},
    {name: "Reddamma", age: 28, Ocuppation:"Designer"},
];
myName = "Aruna";
document.write(JSON.stringify(a) + '<br>');

var b = a.find(checkOcuppation);
document.write(b.name + '<br>');
console.log(b.name + '<br>');

function checkOcuppation(person) {
    return person.Ocuppation === 'House Wife';
}


document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');


//findIndex()
document.write('<h4>findIndex Array related to 18</h4>');
document.write('<h6>In findIndex it Index Value of the searched item of first value of item(if items have multiple)</h6>');
document.write('<h6>Note: findIndex count like 0,1,2,3,4 etc.,</h6>');

//example
var ages = [10,15,18,20];
document.write(ages + '<br>');
var b = ages.findIndex(checkAdult);
document.write(b + '<br>');

//function for findIndex 
function checkAdult(age){
    return age>= 18;
}

//example 2
document.write('<h4>findIndex Array Example 2</h4>');

var a = ["Reddy","Aruna","Aruna Mohan","Mohan","Reddy","Reddamma"];
document.write(a + '<br>');
var b = a.findIndex(checkName);

document.write(b + '<br>');
//function for findIndex 
function checkName(name){
    return name === 'Reddy';
}


//example 2
document.write('<h4>findIndex Array Example 3 function inside findIndex</h4>');

var a = ["Reddy","Aruna","Aruna Mohan","Mohan","Reddy","Reddamma"];
myName = "Aruna";
document.write(a + '<br>');

var b = a.findIndex(item => {
    if(myName === item) return true;
});
document.write(b + '<br>');



//example 2
document.write('<h4>findIndex Array Example 3 function inside findIndex</h4>');

var a = [
    {name: "Reddy", age: 28, Ocuppation:"Designer"},
    {name: "Aruna", age: 58, Ocuppation:"House Wife"},
    {name: "Mohan", age: 68, Ocuppation:"Supervisor"},
    {name: "Reddamma", age: 28, Ocuppation:"Designer"},
];
myName = "Aruna";
document.write(JSON.stringify(a) + '<br>');

var b = a.findIndex(checkOcuppation);
document.write(b + '<br>');

function checkOcuppation(person) {
    return person.Ocuppation === 'House Wife';
}

document.write('</div>');

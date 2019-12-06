document.write('<div class="container mt-3">');
//forEach()
document.write('<h4>forEach()</h4>');
document.write('<h6>forEach() is used for to display each item in the array</h6>');

var a = ["Reddy","Aruna","Mohan"];
document.write(a + '<br>');
a.forEach(value => {
    document.write(value + '<br>');
});

document.write('<br>');

// another example
document.write('<h4>forEach() Example 2</h4>');

a.forEach(eachItem);
function eachItem(value){
 document.write(value + '<br>');
}

document.write('<br>');

//example 3
document.write('<h4>forEach() Example 3</h4>');

var a = ["Reddy","Aruna","Mohan"];
a.forEach((value, index) => {
    document.write(`${index+1}` + value + '<br>');
});


//example 4
document.write('<h4>forEach() Example 4 with array with object</h4>');

var a = [
    {name: "Reddy", age: 28, Ocuppation:"Designer"},
    {name: "Aruna", age: 58, Ocuppation:"House Wife"},
    {name: "Mohan", age: 68, Ocuppation:"Supervisor"},
    {name: "Reddamma", age: 28, Ocuppation:"Designer"},
];
a.forEach((value) => {
    document.write( value.Ocuppation + '<br>');
});

document.write('</div>');

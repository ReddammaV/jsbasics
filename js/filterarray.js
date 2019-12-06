document.write('<div class="container mt-3">');
//filter()
document.write('<h4>filter Array related to 18</h4>');
document.write('<h6>In filter it finds the searched item of all value of item(if items also have multiple)</h6>');

var a=[10,20,30,15,12];
document.write(a + '<br>');
var b = a.filter(age => age >= 18 );

// function checkAdult(age){
//     return age >= 18;
// }
document.write(b + '<br>');


//Another Example
document.write('<h4>filter Array Example 2</h4>');

var a = [
    {name: "Reddy", age: 28, Ocuppation:"Designer"},
    {name: "Aruna", age: 58, Ocuppation:"House Wife"},
    {name: "Mohan", age: 68, Ocuppation:"Supervisor"},
    {name: "Reddamma", age: 28, Ocuppation:"Designer"},
];
document.write(JSON.stringify(a) + '<br>');
var b = a.filter(checkOcuppation);


document.write('<br>');
document.write('<br>');
function checkOcuppation(person){
    return person.Ocuppation === 'House Wife';
}

document.write(JSON.stringify(b) + '<br>');
document.write('<br>');



//example 3
document.write('<h4>filter Example 3 function inside find</h4>');

var a = ["Reddy","Aruna","Aruna Mohan","Mohan","Reddy","Reddamma"];
myName = "Reddy";
document.write(a + '<br>');

var b = a.filter(item => {
    if(myName === item) return true;
});
document.write(b + '<br>');


//example 4
document.write('<h4>Example 4 with array with object</h4>');

var a = [
    {name: "Reddy", age: 28, Ocuppation:"Designer"},
    {name: "Aruna", age: 58, Ocuppation:"House Wife"},
    {name: "Mohan", age: 68, Ocuppation:"Supervisor"},
    {name: "Reddamma", age: 28, Ocuppation:"Designer"},
];
a.filter((value) => {
    if(value.Ocuppation == 'Designer')
        document.write('my occupation is designer' + value.name + '<br>');
    else
    document.write( value.name + ' Occupation is ' + value.Ocuppation + '<br>');
});


document.write('</div>');

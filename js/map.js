document.write('<div class="container mt-3">');
//map()
document.write('<h4>map()</h4>');
document.write('<h6>map() is used for using same array to multiply,add,substract etc..,</h6>');

var num = [3, 6, 8, 10];
document.write(num + '<br>');
var b = num.map(value => value * 10);
document.write(b);

//Example 2
document.write('<h4>Example 2</h4>');

var num = [3, 6, 8, 10];
document.write(num + '<br>');
var b = num.map(testNum);
function testNum(value) {
    return value * 10;
}
document.write(b);

//Example 3
document.write('<h4>Example 3</h4>');

var a = ["Reddy", "Aruna", "Mohan"];
document.write(a + '<br>');

var b = a.map(test);
function test(value) {
    return 'Welcome ' + value;
}
document.write(b);


//example 4
document.write('<h4>Example 4 with array with object</h4>');

var a = [
    { name: "Reddy", age: 28, Ocuppation: "Designer" },
    { name: "Aruna", age: 58, Ocuppation: "House Wife" },
    { name: "Mohan", age: 68, Ocuppation: "Supervisor" },
    { name: "Reddamma", age: 28, Ocuppation: "Designer" },
];
// a.filter((value) => {
//     if(value.Ocuppation == 'Designer')
//         document.write('my occupation is designer' + value.name + '<br>');
//     else
//     document.write( value.name + ' Occupation is ' + value.Ocuppation + '<br>');
// });
a.map((value) => {
    document.write(value.name + ' Occupation is ' + value.Ocuppation + '<br>');
});
document.write('<br>');

a.map((value) => {
    if (value.Ocuppation == 'Designer')
        document.write('my occupation is designer' + value.name + '<br>');
    else
        document.write(value.name + ' Occupation is ' + value.Ocuppation + '<br>');
});

document.write('</div>');

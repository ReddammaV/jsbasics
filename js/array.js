document.write('<div class="container mt-3">');
//array

//for array variable
// Example 1
document.write('<h4>Array with prompt</h4>');

var array = new Array("Reddy", "Aruna", "Mohan");
for (g = 0; g < array.length; g++) {
    // array[g] = prompt("Enter the value");
    document.write(array[g] + '<br>');
}
for (i = 0; i < array.length; i++) {
    document.write(array[i] + '<br>');
}

//Example 2
document.write('<h4>Array</h4>');

x = [10, 20, 30, 40, 50]
// x[2] = "Reddy";
// document.write(x + '<br>');
for (i = 0; i < x.length; i++) {
    document.write(x[i] + '<br>');
}

//multi dimensional array
document.write('<h4>Multi Dimensional Array</h4>');
var students = [
    // {name:"Reddy", age:28, gender: "Female", class:"B.Tech"},
    // {name:"Aruna", age:58, gender: "Female", class:"M.A., Phd"},
    // {name:"Mohan", age:68, gender: "Male", class:"M.Tech"},

    ["Reddy", 28, "Female", "B.Tech"],
    ["Aruna", 58, "Female", "M.A., Phd"],
    ["Mohan", 68, "Male", "M.Tech"],
    ["Reddamma", 28, "Female", "M.Tech"],
]
document.write(students);
document.write('<br>');
// Multi Dimensional Array with for loop
document.write('<h4>Multi Dimensional Array with for loop</h4>');
document.write('<table border=1>');
for (let a = 0; a < students.length; a++) {
    document.write('<tr>');
    for (let b = 0; b < students[a].length; b++) {
        document.write('<td>' + students[a][b] + ' ' + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');







document.write('</div>');

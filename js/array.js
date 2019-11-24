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





document.write('</div>');

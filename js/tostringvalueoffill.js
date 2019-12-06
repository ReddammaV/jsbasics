document.write('<div class="container mt-3">');
//toString()
document.write('<h4>toString()</h4>');
document.write('<h6>toString() is used for to convert the arrays into the string</h6>');

var a = ["Reddy","Aruna","Mohan"];
document.write(a + ' is a - ' +typeof(a) + '<br>');
a.toString();
document.write(a + ' is a - ' +typeof(a) + '<br>');


//valueOf()
document.write('<h4>valueOf()</h4>');
document.write('<h6>valueOf() is used for to show the arrays into the arays only</h6>');

var a = ["Reddy","Aruna","Mohan"];
document.write(a + '<br>');
a.valueOf();
document.write(a + ' is a - ' +typeof(a) + '<br>');


//fill()
document.write('<h4>fill()</h4>');
document.write('<h6>fill() is used for to replace the total items of array os single name(or item)</h6>');

var a = ["Reddy","Aruna","Mohan"];
document.write(a + '<br>');
a.fill("Ram");
document.write(a + ' is a - ' +typeof(a) + '<br>');


document.write('</div>');

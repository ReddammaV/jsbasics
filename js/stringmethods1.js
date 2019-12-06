document.write('<div class="container mt-3">');
//String Methods
document.write('<h4>String Methods</h4>');

document.write('<h5>Length</h5>');
var a = "Javascript is a Great Language";
document.write(a + '<br>');

var b = a.length;
document.write('Above string length is: ' +  b + '<br>');
document.write('<br>');

// toLowerCase()
document.write('<h5>toLowerCase()</h5>');
var a = "Javascript is a Great Language";
document.write(a + '<br>');

var b = a.toLowerCase();
document.write( b + '<br>');
document.write('<br>');

// toUpperCase()
document.write('<h5>toUpperCase()</h5>');
var a = "Javascript is a Great Language";
document.write(a + '<br>');

var b = a.toUpperCase();
document.write( b + '<br>');

document.write('<br>');

// includes()
document.write('<h5>includes() - It is used for in the string to check the "given value" is there or not. And it is case sensitive</h5>');
var a = "Javascript is a Great Language";
document.write(a + '<br>');

var b = a.includes('Great');
document.write( 'Given value "Great" is - '+ b + '<br>');

var b = a.includes('GREAT');
document.write( 'Given value "GREAT" is - '+ b + '<br>');

document.write('<br>');

// startsWith()
document.write('<h5>startsWith() - It is used for in the string to check the "started" value wheather it is true or false</h5>');
var a = "Javascript is a Great Language";
document.write(a + '<br>');

var b = a.startsWith('Javascript');
document.write( 'Started value "Javascript" is - '+ b + '<br>');

var b = a.startsWith('Great');
document.write( 'Started value "GREAT" is - '+ b + '<br>');

document.write('<br>');

// endsWith()
document.write('<h5>endsWith() - It is used for in the string to check the "ending" value wheather it is true or false</h5>');
var a = "Javascript is a Great Language";
document.write(a + '<br>');

var b = a.endsWith('Language');
document.write( 'Ending value "Language" is - '+ b + '<br>');

var b = a.endsWith('Great');
document.write( 'Ending value "Great" is - '+ b + '<br>');

document.write('<br>');


// search()
document.write('<h5>search() - It is used to print the index value of "searched" value</h5>');
var a = "Javascript is a Great Language";
document.write(a + '<br>');

var b = a.search('Great');
document.write( 'Searched value index "Great" is - '+ b + '<br>');

document.write('<br>');

// match()
document.write('<h5>match() - It is used to print the value of "matched" value loop how many times it is there</h5>');
document.write('<h5>we have to use reular expression for match like "var b = a.match(/and/g);"</h5>');
var a = "Javascript is a Great Language and easy and important";
document.write(a + '<br>');

// var b = a.match('and'); we dont use like this for match() we need write regular expression like below
var b = a.match(/and/g);
document.write( 'Match value "and" is - '+ b + '<br>');

document.write('<br>');

// indexOf()
document.write('<h5>indexOf() - It is used to print the starting indexOf the string</h5>');
var a = "Javascript is a Great Language and easy and important";
document.write(a + '<br>');

var b = a.indexOf("and");
document.write( 'indexOf value "and" is - '+ b + '<br>');

document.write('<br>');

// lastIndexOf()
document.write('<h5>lastIndexOf() - It is used to print the ending indexOf the string</h5>');
var a = "Javascript is a Great Language and easy and important";
document.write(a + '<br>');

var b = a.lastIndexOf("and");
document.write( 'lastIndexOf value "and" is - '+ b + '<br>');

document.write('<br>');

// replace()
document.write('<h5>replace() - It is used to replace the value with another value</h5>');
var a = "Javascript is a Great Language and easy and important";
document.write(a + '<br>');

var b = a.replace("Javascript", "Angular");
document.write( 'replace value "Javascript" with - '+ b + '<br>');

//globally replace
document.write('<h4>For globally(multiple) values to replace means</h4>');
var a = "Javascript is a Great Language and easy and important";
document.write(a + '<br>');

var b = a.replace(/and/g, "are");
document.write( 'replace value "and" with "are" - '+ b + '<br>');

document.write('<br>');

// trim
document.write('<h4>trim() is used for delete the spaces</h4>');
var a = "     Javascript is a Great Language and easy and important   ";
document.write(a + '<br>');
alert(a);

var b = a.trim();
document.write(b + '<br>');
alert('trim : '+b);
document.write('<br>');






document.write('</div>');

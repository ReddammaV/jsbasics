document.write('<div class="container mt-3">');
//String Methods
document.write('<h4>String Methods</h4>');

// charAt()
document.write('<h5>charAt() is used for in which number which character is there.</h5>');
var a = "Javascript is a Great Language";
document.write(a + '<br>');

var b = a.charAt(2);
document.write( 'In index 2: '+ b + '<br>');
document.write('<br>');

// charCodeAt()
document.write('<h5>charCodeAt() is used for in to give keyboard spy code.</h5>');
var a = "Javascript is a Great Language";
document.write(a + '<br>');

var b = a.charCodeAt(2);
document.write( 'In index 2 spy code: '+ b + '<br>');
document.write('<br>');

// fromCharCode()
document.write('<h5>fromCharCode() is used for on which number which symbol/alphabet/number will be there in the sky table</h5>');
var a = String.fromCharCode(65)
document.write(a + '<br>');
var a = String.fromCharCode(118)
document.write(a + '<br>');

// concat()
document.write('<h5>concat() is used for combine(adding) the two strings.</h5>');
var a = "Javascript is a Great Language";
var studentName = 'Reddy';
document.write(a + '<br>');

var b = a.concat(' studying By '+studentName);
document.write( b + '<br>');
document.write('<br>');

// split()
document.write('<h5>split() is used to separate the string using space/comma/character etc..,</h5>');
var a = "Javascript is a Great Language";
document.write(a + '<br>');

var b = a.split(' ');
document.write( b + '<br>');
var b = a.split('i');
document.write( b + '<br>');
document.write('<br>');


// repeat()
document.write('<h5>repeat() is used to repeat the string how many times you need.</h5>');
var a = "Javascript is a Great Language";
document.write(a + '<br>');

var b = a.repeat(5);
document.write( b + '<br>');

document.write('<br>');


// slice()
document.write('<h5>slice() is used to slice the string how many times you need.</h5>');
var a = "Javascript is a Great Language";
document.write(a + '<br>');

var b = a.slice(5);
document.write( b + '<br>');

document.write('<br>');





document.write('</div>');

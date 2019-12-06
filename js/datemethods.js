document.write('<div class="container mt-3">');
//Date Method
document.write('<h4>Date Method</h4>');

//Date("January 25 2010")
document.write('<h5>new Date("January 25 2010") Method</h5>');
var now = new Date('January 25 2010');
document.write(now + '<br>');

document.write('<br>');
//Date()
document.write('<h5>new Date() Method</h5>');
var now = new Date();
document.write(now + '<br>');

document.write('<br>');

//toDateString()
document.write('<h5>toDateString() Method</h5>');
var now = new Date();
document.write(now.toDateString() + '<br>');

document.write('<br>');

//getDate()
document.write('<h5>getDate() Method</h5>');
var now = new Date();
document.write(now.getDate() + '<br>');

document.write('<br>');

//getFullYear()
document.write('<h5>getFullYear() Method</h5>');
var now = new Date();
document.write(now.getFullYear() + '<br>');

document.write('<br>');

//getMonth()
document.write('<h5>getMonth() Method - It counts from index 0 to 11 (0-jan,1-feb,2-mar,3-Apr,4_may,5-jun,6-jul,7-Aug,8-sep,9-oct,10-Nov,11-Dec)</h5>');
var now = new Date();
document.write(now.getMonth() + '<br>');

document.write('<br>');

//getDay()
document.write('<h5>getDay() Method - It counts from 0 index</h5>');
var now = new Date();
document.write(now.getDay() + '<br>');

document.write('<br>');

//getHours()
document.write('<h5>getHours() Method</h5>');
var now = new Date();
document.write(now.getHours() + '<br>');

document.write('<br>');

//getMinutes()
document.write('<h5>getMinutes() Method</h5>');
var now = new Date();
document.write(now.getMinutes() + '<br>');

document.write('<br>');

//getSeconds()
document.write('<h5>getSeconds() Method</h5>');
var now = new Date();
document.write(now.getSeconds() + '<br>');

document.write('<br>');

//getMilliseconds()
document.write('<h5>getMilliseconds() Method</h5>');
var now = new Date();
document.write(now.getMilliseconds() + '<br>');

document.write('<br>');


//setDate()
document.write('<h5>setDate() Method</h5>');
var now = new Date();
now.setDate(20); 
document.write(now + '<br>');

document.write('<br>');

//setFullYear()
document.write('<h5>setFullYear() Method</h5>');
var now = new Date();
now.setFullYear(2020); 
document.write(now + '<br>');

document.write('<br>');

//setHours()
document.write('<h5>setHours() Method</h5>');
var now = new Date();
now.setHours(13); 
document.write(now + '<br>');

document.write('<br>');

//setMilliseconds()
document.write('<h5>setMilliseconds() Method</h5>');
var now = new Date();
now.setMilliseconds(13); 
document.write(now + '<br>');

document.write('<br>');


//setMinutes()
document.write('<h5>setMinutes() Method</h5>');
var now = new Date();
now.setMinutes(13); 
document.write(now + '<br>');

document.write('<br>');

//setMonth()
document.write('<h5>setMonth() Method</h5>');
var now = new Date();
now.setMonth(4); 
document.write(now + '<br>');

document.write('<br>');

//setSeconds()
document.write('<h5>setSeconds() Method</h5>');
var now = new Date();
now.setSeconds(4); 
document.write(now + '<br>');

document.write('<br>');




document.write('</div>');

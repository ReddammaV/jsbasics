document.write('<div class="container mt-3">');

//some and every
//some()
document.write('<h4>some Array related to 18</h4>');
document.write('<h6>In some any one value should be above or equal to 18</h6>');

//example
var ages = [10,15,18,20];
document.write(ages + '<br>');
var b = ages.some(checkAdult);
document.write(b + '<br>');

//function for some and every
function checkAdult(age){
    return age>= 18;
}

document.write('<h4>some Array for not related to 18</h4>');
var ages = [10,15,8,0];
document.write(ages + '<br>');
var b = ages.some(checkAdult);
document.write(b + '<br>' + '<br>');


//every()
document.write('<h4>every Array related to 18</h4>');
document.write('<h6>every value should be above or equal to 18</h6>');

var ages = [30,35,18,20];
document.write(ages + '<br>');
var b = ages.every(checkAdult);
document.write(b + '<br>');

//function for every and every
function checkAdult(age){
    return age>= 18;
}

document.write('<h4>every Array for not related to 18</h4>');
var ages = [10,15,8,0];
document.write(ages + '<br>');
var b = ages.every(checkAdult);
document.write(b + '<br>');


document.write('</div>');

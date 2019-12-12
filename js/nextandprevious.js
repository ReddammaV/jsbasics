// open console
// previousElementSibling - It targets only main part of the previouselemntSibling
// var a = document.querySelector('#child-c').previousElementSibling.innerHTML;
var a = document.querySelector('#child-c').previousElementSibling;
console.log(a);
// Example
// document.querySelector('#child-c').previousElementSibling.style.background = 'red';
document.querySelector('#child-c').previousElementSibling.classList.add('bg-primary');


// previousSibling - It targets text nodes also means space,enter etc..,

// var a = document.querySelector('#child-c').previousSibling.innerHTML;
var a = document.querySelector('#child-c').previousSibling;
console.log(a);
// Example
// document.querySelector('#child-c').previousElementSibling.style.background = 'red';
document.querySelector('#child-c').previousSibling.classList.add('bg-primary');



// nextElementSibling - It targets only main part of the nextelemntSibling

// var a = document.querySelector('#child-c').nextElementSibling.innerHTML;
var a = document.querySelector('#child-c').nextElementSibling;
console.log(a);
// Example
// document.querySelector('#child-c').nextElementSibling.style.background = 'red';
document.querySelector('#child-c').nextElementSibling.classList.add('bg-primary');



// nextSibling - It targets text nodes also means space,enter etc..,
// var a = document.querySelector('#child-c').nextSibling.innerHTML;
var a = document.querySelector('#child-c').nextSibling;
console.log(a);

// Example
// document.querySelector('#child-c').nextSibling.style.background = 'red';
document.querySelector('#child-c').nextSibling.classList.add('bg-primary');


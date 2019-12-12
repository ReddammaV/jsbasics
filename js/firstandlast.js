// open console
// firstElementChild - It targets only main part of the firstelemntchild
var a = document.querySelector('.row').firstElementChild;
// var a = document.querySelector('.row').firstElementChild.innerHTML;
console.log(a);
// Example
// document.querySelector('.row').firstElementChild.style.background = 'red';
document.querySelector('.row').firstElementChild.classList.add('bg-primary');

// firstChild - It targets text nodes also means space,enter etc..,
var a = document.querySelector('#child-c').firstChild;
console.log(a);
// Example
// document.querySelector('#child-c').firstChild.style.background = 'red';
// document.querySelector('#child-c').firstChild.classList.add('bg-primary');





// lastElementChild - It targets only main part of the lastelemntchild
var a = document.querySelector('.row').lastElementChild;
// var a = document.querySelector('.row').lastElementChild.innerHTML;
console.log(a);
// Example
// document.querySelector('.row').lastElementChild.style.background = 'red';
document.querySelector('.row').lastElementChild.classList.add('bg-primary');


// lastChild - It targets text nodes also means space,enter etc..,
var a = document.querySelector('#child-c').lastChild;
console.log(a);
// Example
// document.querySelector('#child-c').lastChild.style.background = 'red';
// document.querySelector('#child-c').lastChild.classList.add('bg-primary');

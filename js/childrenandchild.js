// open console
// children - It targets only main parts like tags
var a = document.querySelector('.row').children;
console.log(a);

// Example
// document.querySelector('.row').children[0].style.background = 'red';
document.querySelector('.row').children[0].classList.add('bg-dark');
document.querySelector('.row').children[1].classList.add('bg-primary');
document.querySelector('.row').children[2].classList.add('bg-danger');
document.querySelector('.row').children[3].classList.add('bg-info');
document.querySelector('.row').children[4].classList.add('bg-warning');

// we can use any thing innerText,innerHTML etc..,
document.querySelector('.row').children[4].innerHTML = 'children';



// childNodes - It targets text nodes also means space,enter etc..,
var a = document.querySelector('.row').childNodes;
var a = document.querySelector('.row').childNodes[3].innerHTML;
console.log(a);

// Example
document.querySelector('.row').childNodes[3].classList.add('text-white');
document.querySelector('.row').childNodes[3].style.fontSize = '20px';
document.querySelector('.row').childNodes[3].innerHTML = 'B childNode';


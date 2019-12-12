// parentElement - This is will returns null value if parent node not find
// open console
var a = document.querySelector('#inner').parentElement;
// var a = document.querySelector('html').parentElement; -- it gives null value
// var a = document.querySelector('.text-small').parentElement.style.background = 'red';
console.log(a);

// Example 1
function changeColor(){
    // document.querySelector('#inner').parentElement.style.background = 'red';
    document.querySelector('#inner').parentElement.classList.add('bg-danger');
}


// parentNode - This is also same as parent Element but it not returns null value
// var a = document.querySelector('#inner').parentNode;
// var a = document.querySelector('html').parentNode; -- it returns document

// var a = document.querySelector('.text-small').parentNode.style.background = 'red';
console.log(a);

// Example 1
function changeColor(){
    // document.querySelector('#inner').parentNode.style.background = 'red';
    document.querySelector('#inner').parentNode.classList.add('bg-danger');
}
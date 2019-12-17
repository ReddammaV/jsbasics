// replaceChild - Is used to replace 
var newElement = document.createElement('li');
var newText = document.createTextNode('Wow replaceChild');

// to combined this two with appendChild - appendChild appends in last only
newElement.appendChild(newText);
console.log(newElement);

// to put in #outer tag
var target = document.querySelector('#list');
var oldElement = target.children[1];
console.log('oldElement Replacing this');
console.log(oldElement);

target.replaceChild(newElement,oldElement);





// removeChild - is used to remove the element
var target = document.querySelector('#list');
var oldElement = target.children[0];
console.log('oldElement removing this');
console.log(oldElement);

target.removeChild(oldElement);

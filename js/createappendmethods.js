// insertAdjacentElement - Is used for to create element tag
// createElement
var newElement = document.createElement('h2');

// createTextNode
var newText = document.createTextNode('This is a insertAdjacentElement');

// to combined this two with appendChild - appendChild appends in last only
newElement.appendChild(newText);
console.log(newElement);

// to put in #outer tag
var target = document.querySelector('#outer');
target.insertAdjacentElement('afterbegin',newElement);




// insertAdjacentHTML - Is used for to create HTML tag like <h2>paragraph... </h2>
// createHTML
var target = document.querySelector('#outer');
var newHTML = '<h2>Hello this is insertAdjacentHTML</h2>';
target.insertAdjacentHTML('beforebegin', newHTML);




// insertAdjacentText - Is used for to create Text tag like <h2>paragraph... </h2>
// createText
var target = document.querySelector('#outer');
var newText = 'This is insertAdjacentText';
target.insertAdjacentText('afterend', newText);
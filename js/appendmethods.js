// open console
// createElement
var newElement = document.createElement('h2');

// createTextNode
var newText = document.createTextNode('This is a text node appendChild');

// to combined this two with appendChild - appendChild appends in last only
newElement.appendChild(newText);
console.log(newElement);

// to put in #inner tag
document.querySelector('#inner').appendChild(newElement);






// insertBefore - is used for to append in this one in any where you want

// createElement
var myElement = document.createElement('h5');

// createTextNode
var myText = document.createTextNode('This is a text node of insertBefore');

// to combined this two with appendChild - appendChild appends in last only
myElement.appendChild(myText);
console.log(myElement);

target = document.querySelector('#inner');

// target.insertBefore(myElement, target.childNodes[0]);
target.insertBefore(myElement, target.childNodes[2]);
// coneNode - Is used to clone the element from one place to another place too
// var target = document.querySelector('#list1');
var target = document.querySelector('#list1').children[0];
var cloneElement = target.cloneNode(true);
console.log(cloneElement);

// to append this to list2
document.querySelector('#list2').appendChild(cloneElement);




// for insertBefore
var target1 = document.querySelector('#list1').children[2];
var cloneElement2 = target1.cloneNode(true);
console.log(cloneElement);

var insertElement = document.querySelector('#list2').children[0];
document.querySelector('#list2').insertBefore(cloneElement2, insertElement );

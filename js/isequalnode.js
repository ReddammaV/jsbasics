// isEqualNode - is used for to check the two element are same this have to equal

// 1.same Node Type
// 2.same nodeName
// 3.same nodeValue
// 4.same childNodes
// 5.same attributes
// 6.same attribute values


// Here we're checking both first values of ul list is same or not (only both first values)
var target1 =  document.querySelector('#list1').firstElementChild;
var target2 =  document.querySelector('#list2').firstElementChild;

var equal = target1.isEqualNode(target2);
console.log(equal);

// Example 2
var target1 =  document.querySelector('#list1').firstElementChild;
var target2 =  document.querySelector('#list2').children[1];

var equal = target1.isEqualNode(target2);
console.log(equal);
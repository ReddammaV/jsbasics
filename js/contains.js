var target = document.querySelector('#outer');
var result = document.querySelector('.text-primary');

// contains - Is used to find wheather the element child is there or not like children,grand children

var find = target.contains(result);
console.log('Is text-primary contains ' + find);
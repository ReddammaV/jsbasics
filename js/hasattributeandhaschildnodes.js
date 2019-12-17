// hasAttribute - Is used for to check wheather that html attributes contains or not
var target = document.querySelector('#outer');
var find = target.hasAttribute('class');
console.log('Class Attribute contains: ' + find);

var findstyle = target.hasAttribute('style');
console.log('Style Attribute contains: ' + findstyle);




// hasChildNodes - Is used for to check wheather that html attributes contains or not
var target = document.querySelector('#outer');
var find = target.hasChildNodes();
console.log('outer id contains child: ' + find);


var target2 = document.querySelector('#empty');
var findstyle = target2.hasChildNodes();
console.log('empty id contains child: ' + findstyle);


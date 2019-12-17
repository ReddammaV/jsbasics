// In DOM - Document Object Model based on document
// In BOM - Browser Object Model based on window

// for Height
var iHeight = window.innerHeight;
console.log('Browser Windoe Inner Height is: ' + iHeight);
document.write('Browser Windoe Inner Height is: ' + iHeight + '<br>');

var oHeight = window.outerHeight;
console.log('Browser Windoe Outer Height is: ' + oHeight);
document.write('Browser Windoe Outer Height is: ' + oHeight + '<br>');


// for Width
var iWidth = window.innerWidth;
console.log('Browser Windoe Inner Width is: ' + iWidth);
document.write('Browser Windoe Inner Width is: ' + iWidth + '<br>');

var oWidth = window.outerWidth;
console.log('Browser Windoe Outer Width is: ' + oWidth);
document.write('Browser Windoe Outer Width is: ' + oWidth + '<br>');

// for resize window - it's automatically update the width and height in console
function resizeFunction() {
    console.clear();
    // for Height
    var iHeight = window.innerHeight;
    console.log('Browser Windoe Inner Height is: ' + iHeight);

    var oHeight = window.outerHeight;
    console.log('Browser Windoe Outer Height is: ' + oHeight);


    // for Width
    var iWidth = window.innerWidth;
    console.log('Browser Windoe Inner Width is: ' + iWidth);

    var oWidth = window.outerWidth;
    console.log('Browser Windoe Outer Width is: ' + oWidth);

}
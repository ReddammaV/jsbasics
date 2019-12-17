var myWindow;
function openWindow(){
    // move to and moveBy not worked for url's
    // myWindow = window.open("http://www.yahoobaba.net","","width=500px,height=200px;");
    // myWindow = window.open("","","width=500px,height=200px;");
    myWindow = window.open("","","width=500px,height=200px,left=100px,top=100px");
    myWindow.document.write("<p>This is window</p>");
}

function moveWindow(){
    // moveTo - is used for absolute path
    myWindow.moveTo(200,200);

    // moveBy - is used for relative path
    // myWindow.moveBy(200,200);
}

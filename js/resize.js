var myWindow;
function openWindow(){
    myWindow = window.open("","","width=200px,height=200px");
    myWindow.document.write("<p>This is window</p>");
}

function resizeWindow(){
    // resizeTo - is used for absolute path
    // myWindow.resizeTo(400,400);

    // resizeBy - is used for relative path
    myWindow.resizeBy(400,400);
}

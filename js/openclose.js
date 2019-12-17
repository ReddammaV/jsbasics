// syntax - window.open(URL,name,specs)
// URL - Uniform Resource Locator
// name - You can specify - "_blank","_parent","_self","_top" - self and top is iframe and frameset respectfully
// specs - means you can specify width,height,top,left specifications

var myWindow;
function openWindow(){
    // window.open();
    // myWindow = window.open("http://www.yahoobaba.net","_blank");
    // myWindow = window.open("http://www.yahoobaba.net","_parent");
    // myWindow = window.open("http://www.yahoobaba.net","","width=500px,height=200px;");
    myWindow = window.open("http://www.yahoobaba.net","","width=500px,height=200px,left=200px,top=100px");
}

function closeWindow(){
    myWindow.close();
}
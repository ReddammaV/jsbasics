// setInterval() - Is used for animations mainly
// syntax - setInterval(functionName, milliseconds) - 1000ms = 1second
// var id = setInterval(anim, 1000);
var id = setInterval(anim, 500);
var a = 0;
// function anim(){
//     a = a + 10;
//     var target = document.getElementById("inner");
//     target.style.marginLeft = a + 'px';
//     // console.log("Hello" + a);
// }


function anim() {
    a = a + 10;
    if (a == 200) {
        clearInterval(id);
    } else {
        var target = document.getElementById("inner");
        target.style.marginLeft = a + 'px';
        console.log("Hello" + a);
    }
}

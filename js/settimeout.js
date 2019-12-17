// setTimeOut() - Is used for animations mainly
// syntax - setTimeOut(functionName, milliseconds) - 1000ms = 1second
var id = setTimeout(anim, 3000);

function anim(){
    var target = document.getElementById("inner");
    target.style.width = 250 + 'px';
    console.log('Hello');
}

function stopAnimation(){
    clearTimeout(id);
    console.log('Animation Stopped!');
}

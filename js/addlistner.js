// addEventListner
var element;

// this also one way to write functions
document.getElementById("header").onclick= abc;

//addEventListner
document.getElementById("header").addEventListener('mouseleave', abcleave);

document.getElementById("header").addEventListener('mouseover', xyzconsole);

function abcleave(){
    console.log("Header Leave!");
}
function abc(){
    console.log("Header clicked!");
}
function xyzconsole(){
    console.log("Header mouseover!");
}

// addEventListner
document.querySelector('#header h1').addEventListener('click', function(){
    // first way
    document.querySelector('#header h1').style.fontStyle = "italic";
    // this belongs to #header h1 -second way
    this.style.background = "blue";
    this.style.fontSize = "5em";
})

// useCapture also there here it is example below
//  false and true is useCapture it is mainly used for inner and outer div's perfomance

document.querySelector('#content h2').addEventListener('click', function(){
    this.style.color = "blue";
}, false)

document.querySelector('#content p').addEventListener('click', function(){
    this.style.color = "red";
}, true)


// removeEventListner
// it is used for to delete the event
document.querySelector('#header').addEventListener('click', xyz);

// Here the mouseleave function is removed after clicking the header
function xyz(){
    document.querySelector('#header').removeEventListener('mouseleave', abcleave);
}

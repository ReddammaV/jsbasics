// css styling have 3 types
// 1. style
// 2. className
// 3. classList

var element;
// style
document.querySelector("#header").style.backgroundColor="tan";
document.querySelector("#header h1").style.fontSize="3em";
document.querySelector("#header h1").style.fontStyle="italic";
element = document.querySelector("#header");
console.log(element);

// className
document.querySelector("#header h1").className="text-primary d-flex";
element = document.querySelector("#header h1").className;
console.log(element);

// By Clicking the button color is changes example
function changeColor(){
    document.querySelector("#header h1").className="text-danger";
    console.log('color changed');
}



// classList - just it returns array for the css
document.querySelector("#header h1").classList="text-info d-flex";
element = document.querySelector("#header h1").classList;
console.log(element);

// classList.add -to add the class
document.querySelector("#header h1").classList.add("mt-2");
element = document.querySelector("#header h1").classList;
console.log(element);


// classList.add -to add multiple classes
document.querySelector("#header h1").classList.add("mt-2", "mb-2");
element = document.querySelector("#header h1").classList;
console.log(element);

// classList.remove -to remove the class
document.querySelector("#header h1").classList.remove("mt-2");
element = document.querySelector("#header h1").classList;
console.log(element);

// classList.remove -to remove multiple class
document.querySelector("#header h1").classList.remove("mt-2", "mb-2");
element = document.querySelector("#header h1").classList;
console.log(element);
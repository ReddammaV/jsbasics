// querySelector and querySelectorAll

// querySelector is target first element selector(if it have multiples)
var element;
document.querySelector("#header").innerHTML = "<h1>QuerySelector</h1>"
// element = document.querySelector("#header").innerHTML;
element = document.querySelector("#header h1").innerHTML;
console.log(element);

// document.querySelector(".list").innerHTML = "<h1>QuerySelector</h1>"
element = document.querySelector(".list");
console.log(element);


// querySelectorAll is target all element selector(if it have multiples)
element = document.querySelectorAll(".list");
console.log(element);

//to select particular element by index value
element = document.querySelectorAll(".list")[1];
console.log(element);




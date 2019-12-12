var element;
// GET Methods
//innerText
//innerHTML
//getAttribute
//getAttributeNode
//attributes


//innerText
element = document.getElementById("header").innerText;
// element = document.getElementById("content").innerText;
console.log(element);



//innerHTML
element = document.getElementById("header").innerHTML;
// element = document.getElementById("content").innerHTML;
console.log(element);



//getAttribute By class
element = document.getElementById("header").getAttribute("class");
console.log(element);

//getAttribute By id
element = document.getElementById("header").getAttribute("id");
console.log(element);

//getAttribute By style
element = document.getElementById("header").getAttribute("style");
console.log(element);

//getAttribute By onclick (any function you can check)
element = document.getElementById("header").getAttribute("onclick");
console.log(element);



//getAttributeNode By class (getAttributeNode it gives complete name also)
element = document.getElementById("header").getAttributeNode("class");
// element = document.getElementById("header").getAttributeNode("class").value;
console.log(element);

//getAttributeNode By id
element = document.getElementById("header").getAttributeNode("id");
// element = document.getElementById("header").getAttributeNode("id").value;
console.log(element);

//getAttributeNode By style
element = document.getElementById("header").getAttributeNode("style");
// element = document.getElementById("header").getAttributeNode("style").value;
console.log(element);

//getAttributeNode By onclick (any function you can check)
element = document.getElementById("header").getAttributeNode("onclick");
// element = document.getElementById("header").getAttributeNode("onclick").value;
console.log(element);



//attributes
element = document.getElementById("header").attributes;
console.log(element);

//attributes
// element = document.getElementById("header").attributes[0];
// element = document.getElementById("header").attributes[1];
// element = document.getElementById("header").attributes[2];
element = document.getElementById("header").attributes[3];
console.log(element);




// SET Methods
//innerText
//innerHTML
//Set Attribute
//Attribute
//remove Attribute

//innerText
document.getElementById('header').innerText = "Hello Welcome to JS";
// document.getElementById('header').innerText = "<h1>Hello Welcome to JS</h1>";
element = document.getElementById('header').innerText;
console.log(element);

//innerHTML
// document.getElementById('header').innerHTML = "Hello Welcome to JS";
document.getElementById('header').innerHTML = "<h1>Hello Welcome to JS</h1>";
element = document.getElementById('header').innerHTML;
console.log(element);

//setAttribute (we'll set class,id,style.onclick any thing...)
// document.getElementById('header').setAttribute("class","text-primary");
document.getElementById('header').setAttribute("style","border: 1px solid red");
element = document.getElementById('header');
console.log(element);

//attributes (use for via index here in 0:id,1:class,2:onclick like that....)
document.getElementById('header').attributes[1].value = 'text-primary';
element = document.getElementById('header');
console.log(element);


//removeattribute (use for via index here in 0:id,1:class,2:onclick like that....)
document.getElementById('header').removeAttribute("onClick");
element = document.getElementById('header');
console.log(element);
//filter example 1 through string array
var heroes = [
    { name: "Batman", franchise: "DC" },
    { name: "Ironman", franchise: "Marvel" },
    { name: "Thor", franchise: "Marvel" },
    { name: "Superman", franchise: "DC" }
];

var marvelHeroes = heroes.filter(function (hero) {
    return hero.franchise == "Marvel";
    // console.log(hero.franchise)
});

var mHeros = '';
var wrapper = $('#wrapper'), container;
for (var key in marvelHeroes) {
    container = $('<div class="hero-list"></div>');
    wrapper.append(container);
    container.append('<div class="name">' + marvelHeroes[key].name + '</div>');
    container.append('<div class="franchise">' + marvelHeroes[key].franchise + '</div>');
}

// for (const element in marvelHeroes) {
//     mHeros = marvelHeroes[element];
//     console.log(mHeros);
//     document.write(mHeros.name + mHeros.franchise + '<br>');
//     // var myJSON = JSON.stringify(mHeros);
//     // html = `<ul><li>`+mHeros+`</li></ul>`
//     // document.getElementById("marvelHeroes").innerHTML = myJSON;
//     // document.getElementById("marvelHeroes2").innerHTML = element.franchise;
// }

console.log(marvelHeroes);


// [ {name: "Ironman", franchise: "Marvel"}, {name: "Thor", franchise: "Marvel"} ]

// filter example 2 through number array
array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var arrayList = array.filter(a => a % 2 === 0);

// console.log(arrayList);
// document.write(arrayList);
document.getElementById("arrayfilter").innerHTML = arrayList;

//map example 1 through number array
var mapList = array.map(a => a % 2 === 0);
console.log(mapList);

var mapList = array.map(a => a * a);

console.log(mapList);

//Example 3 For In loop
var txt = "";
var person = { fname: "John", lname: "Doe", age: 25 };
var x;
for (x in person) {
    txt += person[x] + " ";
}
document.getElementById("demo").innerHTML = txt;






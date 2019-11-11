//filter example 1 through string array
var heroes = [
	{name: "Batman", franchise: "DC"},
	{name: "Ironman", franchise: "Marvel"},
	{name: "Thor", franchise: "Marvel"},
	{name: "Superman", franchise: "DC"}
];

var marvelHeroes =  heroes.filter(function(hero) {
    return hero.franchise == "Marvel";
    // console.log(hero.franchise)
});

for (const element of marvelHeroes) {
    console.log(element);
    document.write(element.name + element.franchise + '<br>');
}

console.log(marvelHeroes);


// [ {name: "Ironman", franchise: "Marvel"}, {name: "Thor", franchise: "Marvel"} ]

// filter example 2 through number array
array = [1,2,3,4,5,6,7,8,9];

var arrayList = array.filter(a => a % 2 === 0);

console.log(arrayList);
document.write(arrayList);

//map example 1 through number array
var mapList = array.map(a => a % 2 === 0);
console.log(mapList);

var mapList = array.map(a => a * a);

console.log(mapList);







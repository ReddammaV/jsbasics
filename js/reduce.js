// reduce - is used to add all the values in the array as one value

var numbers = [20,25,30,45,76];
var sum = numbers.reduce(myfun);
document.getElementById('test').innerHTML = "The total value of the array is: " + sum;
function myfun(total,value,index,array) {
    return total + value;
}
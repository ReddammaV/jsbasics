// classList
var element;
document.querySelector('#header h1').addEventListener('click', xyz);

// classList add method
function xyz(){
    // this.style.background = 'green';
    this.classList.add('text-primary','bg-dark');

    // to check the length
    var a = this.classList.length;
    console.log('classList length of classes we have - ' + a);

    // to check the item(index)
    var a = this.classList.item(0);
    console.log('classList index of first value is - ' + a);

    // to check the class is there are not with - contains(className)
    // var a = this.classList.contains("mt-2");
    var a = this.classList.contains("bg-dark");
    console.log('mt-2 class contains or not - ' + a);
}

// classList remove method
document.querySelector('#content h2').addEventListener('click', abc);

function abc(){
    this.classList.remove('text-primary','bg-dark');
}

// classList toggle method for menu
document.querySelector('#menu').addEventListener('click', abc);

function abc(){
    this.classList.toggle('bg-info');
}
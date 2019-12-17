// some of form events we're discussing here
// 1. focus
// 2. blur
// 3.input

// focus - Is used for to focus onclick in the input
function focusFunction(element){
    // without parameter passing and with id
    // document.getElementById('name').style.background = 'lime';

    // with parameter passing
    element.style.background = 'cyan';
}

// blur - Is used for on blur we have to do any thing
function blurFunction(element){
    element.style.background = "";
}

// input - Is ised for to check the input value
function inputFunction(ele){
    var x = ele.value;
    document.querySelector('#inputValue').innerHTML = x;
}

// change - Is used for to see the changed name of the input - It is in only for select
function changeFunction(ele){
    var x = ele.value;
    document.querySelector('#changeValue').innerHTML = x;
}

// select - Is used for if select any text in the input tag then this will fire (means in name you type some text after that select that text on that time only it'll fire this function)
function selectFunction(){
    console.log('You selected some text');
}

// submit - On submit form it will fire
function formSubmit(formData){
    console.log('Submited!');
    // var x = document.getElementById('name').value; 
    var x = formData.name.value + ' ' +formData.class.value + ' ' + formData.select.value; 

    alert('Submited Data: ' + x);
    console.log('Submited Data: ' + x);

}


// Invalid - Is used for if form input is not valid to show the eroor msg to the user
// Here i'm giving only for name
function invalidFuction(){
    console.log("Enter Name it is invalid");
    // var msg = "Enter Name it is invalid";
    // document.getElementById("invalidText").innerHTML = msg;
    document.getElementById("invalidText").innerHTML = "Enter Name it is invalid";

}
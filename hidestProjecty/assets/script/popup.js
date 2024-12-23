console.log("This is a popup!")
let time = new Date().toLocaleString()
console.log(time)
let timeDiv = document.querySelector('#time')
timeDiv.innerHTML = time


let getButton = document.getElementById("getButton");
getButton.addEventListener("click", getData, false);
let button = document.getElementById("mybutton");
button.addEventListener("click", start, false);
let operator = document.querySelector('#operator')

console.log("===", localStorage.getItem('operator'))


function start(){
    console.log('start')
}

function showOperatorNameSaveButton(){
    console.log('showOperatorNameSaveButton')
}

function getData(){
    console.log('getData')
}

console.log("This is a popup!")
let time = new Date().toLocaleString()
console.log(time)
let timeDiv = document.querySelector('#time')
timeDiv.innerHTML = time

let buttonSaveOperator = document.getElementById("buttonSaveOperator");
buttonSaveOperator.addEventListener("click", saveOperator, false);
let getButton = document.getElementById("getButton");
getButton.addEventListener("click", getData, false);
let button = document.getElementById("mybutton");
button.addEventListener("click", start, false);
let operator = document.querySelector('#operator')
operator.addEventListener("input", showOperatorNameSaveButton, false);

operator.value = localStorage.getItem('operator')



function showOperatorNameSaveButton() {
    buttonSaveOperator.style.display='inline-block'
}
function saveOperator() {
    localStorage.setItem('operator', operator.value)
    buttonSaveOperator.style.display='none'
}
function start() {
    console.log('start')
    let list = document.querySelector('.list')
    if (list.classList.contains('active')){
        list.classList.remove('active')
    }    else {
        list.classList.add('active')
    }
}

function getData(){
    // посылает сигнал только активной вкладке
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        for (i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, 'Сообщение инициировано попапом', cb);
        }
    });
}

function cb(val) {
    // получает данные если нет ошибок
    if (!chrome.runtime.lastError) {
        if (val) {
            console.log('val', val)
            console.log(JSON.stringify(val))
        }
    }
}

//
//
//
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         console.log(' >> > > request', request)
//         console.log(sender.tab ?
//             "from a content script:" + sender.tab.url :
//             "from the extension");
//         if (request.greeting === "hello")
//             sendResponse({farewell: "goodbye"});
//     }
// );





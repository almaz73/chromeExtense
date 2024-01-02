console.log("This is a popup!")

let buttonSaveOperator = document.getElementById("buttonSaveOperator");
buttonSaveOperator.addEventListener("click", saveOperator, false);
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
    console.log('list', list)
    send()
}

function send(){
    chrome.tabs.query({}, function(tabs) {
        for (i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, 'Сообщение, которое нужно передать 11111', cb);
        }
    });
}

function cb(val) {
   if(val) console.log('val', val)
}




chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(' >> > > request', request)
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting === "hello")
            sendResponse({farewell: "goodbye"});
    }
);
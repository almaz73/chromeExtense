console.log("This is a popup!")
let time = new Date().toLocaleString()
console.log(time)

let button = document.getElementById("mybutton");
button.addEventListener("click", start, false);
let operator = document.querySelector('#operator')

console.log("===", localStorage.getItem('operator'))


function start(){
    console.log('start отправим каоманду странице')
    
    // посылает сигнал только активной вкладке
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        for (i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, 'Сообщение инициировано попапом', cb);
        }
    });


    // сообщение скрытой вкладке
    chrome.tabs.query({url: "https://fmap.ru/games/*"}, function (tabs) {
        if (tabs.length != 0) {    
            for (var i = 0; i < tabs.length; i++) {    
                // Определить условие можно, или сразу всем слать                
                chrome.tabs.sendMessage(tabs[i].id, '22222 2222 Сообщение инициировано попапом', cb);
            }
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
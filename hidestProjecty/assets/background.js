let isWatching = false;

console.log('::::: Сервис ыоркер запущен 222')

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
   
    console.log('::: request, sender, sendResponse', request, sender, sendResponse)

    if (request.action === "toggleWatch") {
        isWatching = !isWatching;
        sendResponse({ isWatching });
    }
});

/*
chrome.runtime.onMessage.addListener(function (message) {
    console.log('message - - -', JSON.stringify(message))
    switch (message.action) {
        case "openOptionsPage":
            openOptionsPage();
            break;
        case "setOperator":
            if (message.nameAccount) nameAccont = message.nameAccount
            break;
        case "showData":
            if (message.data.length) data = message.data
            break;
        default:
            break;
    }
    return true
});
*/
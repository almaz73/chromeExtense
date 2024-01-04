chrome.runtime.onMessage.addListener( // this is the message listener
    function (request, sender, sendResponse) {
        console.log('>>request>' + request);
        console.log('>>sendResponse>' + sendResponse);
        if(request.length>12)getData(sendResponse)
        else toScrollIntoView(request)
    }
);

function toScrollIntoView(id) {
    console.log('---id', id)
    var hiddenElement = document.getElementById(id);
    console.log('hiddenElement', hiddenElement)
    hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
}


function getData(sendResponse) {
    let fields = document.querySelectorAll('[data-marker="item"]')

    let data = []
    fields.forEach(el => {
        let id = el.id
        let title = el.querySelector(".iva-item-titleStep-pdebR > div > a").title
        let content = el.querySelector('meta').content
        data.push({id, title, content})
    })

    sendResponse(data);
}





console.log('9292929')


const article = document.querySelector(".content");

if (article) {
    // пример как поменять страницу
	let li = document.createElement("li"); // создаем новый элемент (пустой узел Element) с указанным именем тега
	const textNode = document.createTextNode("22222222 My element"); // создаем  текстовый узел с указанным текстом
	li.appendChild(textNode); // добавляем текстовый узел в конец списка дочерних элементов указанного родительского узла
	article.insertAdjacentElement("beforebegin", li); // элемент будет вставлен 
}


chrome.runtime.onMessage.addListener( // так получчаем команду от расширения
    function (request, sender, sendResponse) {

        console.log('request, sender, sendResponse', request, sender, sendResponse)
        

        sendResponse(' 9 9 9 9 9') // обратно отвечаем
       
    }
);


chrome.runtime.onMessage.addListener(
	// this is the message listener
	function (request, sender, sendResponse) {
		console.log('>>получил>>>>>>>>>> запрос от расширения>' + request)
		telefons = request.split('|||')[1]

		switch (+request.split('.')[0]) {
			case 1:
				if (location.pathname.includes('/avtomobili')) {
					getAvitoData()
					getPhone()
				}
				chrome.runtime.sendMessage({ action: 'openOptionsPage' }) // открываю вкладку опций
				break
			case 2:
				wichPageReady(sendResponse)
				break
			default:
		}

		return true
	}
)

function whichPageReady(sendResponse) {
	console.log('===wichPageReady===')
	if (location.hostname.includes('autonet.pro')) {
		// Если зарегистрировались на сайте автосеть
		let nameAccount = localStorage.getItem('name')
		if (nameAccount) {
			chrome.runtime &&
				chrome.runtime.sendMessage({ action: 'setOperator', nameAccount }) // сообщаем расширению о готовности
			sendResponse('autoNetProReady')
			return false
		}
	}
	if (location.pathname.includes('/avtomobili')) {
		// chrome.runtime.sendMessage({"action": "readyAvito", "state": "ready"});
		// сообщаем расширению о готовности, наверно могли бы сразу с разных страниц начинать отправлять данные сразу
		sendResponse('avitoReady')
	}
}
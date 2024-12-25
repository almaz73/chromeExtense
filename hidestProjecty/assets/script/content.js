

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
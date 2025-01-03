let level = 'site' // start / stop

let button = document.getElementById('mybutton')
button.textContent = 'wildberries'
button.addEventListener('click', start, false)
let mySelect = document.getElementById('mySelect')
mySelect.addEventListener('click', mySelectF, false)

console.log('===', localStorage.getItem('operator'))

function mySelectF() {
	console.log(' = this=', this)
}

function start() {
	console.log('? ? ? start отправим команду странице')
	// сообщение скрытой вкладке
	chrome.tabs.query({ url: 'https://fmap.ru/games/*' }, function (tabs) {
		if (tabs.length) {
			for (var i = 0; i < tabs.length; i++) {
				// Определить условие можно, или сразу всем слать
				if (level === 'site')
					chrome.tabs.sendMessage(tabs[i].id, 'WB вкладка есть?', cb)
			}
		}
	})
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

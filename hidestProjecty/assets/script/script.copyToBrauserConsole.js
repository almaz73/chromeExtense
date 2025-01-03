/*
WBfreeStoreBot
t.me/WBfreeStoreBot
botId= '7808348416:AAGgX9gNJvZL4PVTwx-faDU9DoTfEqGEyd8'
chatIs=953446309

https://api.telegram.org/${botId}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${textForTelegram}

https://api.telegram.org/bot7808348416:AAGgX9gNJvZL4PVTwx-faDU9DoTfEqGEyd8/getUpdates
*/

// настройки

let words = ['Бесплатно', '✕1', '✕2', '✕3', '✕4', '✕5', '✕6', '✕7', '✕8', '✕9']
let level = 6 // после нахождения '✕2' перестанет пинговать сайт, но будет напоминать в телеграмме, пока не обновят сайт
let timer = 60 //(600  = 10 минут в секундах) периодичность пинга

// 1. Переходим на страницу
// location.href='https://seller.wildberries.ru/supplies-management/warehouses-limits'

// 2. Ищем склад

function findStorage() {
	found = []
	words.forEach(el => {
		if (document.body.innerText.includes(el)) found.push(el)
	})
	console.log(found.join(', '))

	if (found.includes('Бесплатно'))
		setTimeout(updateData, Math.random() * 60000 + timer)

	setTelegramInfo()
}

function setTelegramInfo(level) {
	let text =
		'<br><br> <b>Обновите</b> сайт WB со слушателем, чтобы остановить напоминанение'
	fetch(
		'https://api.telegram.org/bot7808348416:AAGgX9gNJvZL4PVTwx-faDU9DoTfEqGEyd8/sendMessage?chat_id=953446309&parse_mode=HTML&text=✕' +
			level +
			text
	)
	if (level == 'Бесплатно') setTimeout(() => setTelegramInfo(level), 60000)
	else setTimeout(() => setTelegramInfo(level), 600000)
}

// 3. Обновляем список

function updateData() {
	console.log('>>> u p d a t e D a t a <<< ')
	let div = document.querySelectorAll('[data-name="SearchMultiInput"] div div')
	console.log(' = = = =  = =div1', div)
	div && div[0].querySelector('span span button').click() //- отжатие Казани
	setTimeout(() => {
		document
			.querySelectorAll('[data-name="SearchMultiInput"] div div')[0]
			.click() //- раскрытие списка
	}, Math.random() * 3000)
	setTimeout(() => {
		let div2 = document.querySelectorAll('[data-name="SearchMultiInput"]')
		console.log(' = = = =  = =div2', div2)
		div2 && div2[0].querySelector('#Казань').click() //- нажатие Казань
		findStorage()
	}, Math.random() * 6000 + 3000)

	console.log('>>> END u p d a t e D a t a <<< ')
}

setTimeout(updateData, Math.random() * 60000 + timer)

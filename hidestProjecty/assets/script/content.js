let intervalId;

function checkForElement() {
    const element = document.querySelector('[ng-click="currentTab = \'tasks\';"]'); // Замените на ваш селектор
    if (element) {
        console.log('Элемент найден!');
    } else {
        console.log('Элемент не найден.');
    }
}

chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "toggleWatch") {
        if (request.isWatching) {
            intervalId = setInterval(checkForElement, 1000); // Проверять каждую секунду
        } else {
            clearInterval(intervalId);
        }
    }
});
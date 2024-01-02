

// let fields = document.querySelectorAll('[data-marker="item"]')
// let fields = document.querySelectorAll('[class="names"]')
// console.log('fields', fields.length)
// let article = fields[0]
const article = document.querySelector('[class="content"]');

console.log('000 article', article)



chrome.runtime.onMessage.addListener( // this is the message listener
    function(request, sender, sendResponse) {
        console.log('Принято сообщение: ' + request);

        console.log('1 1 1  article', article.textContent)
        sendResponse('8888 '+ JSON.stringify(article.textContent));

    }
);


if (article) {
    const text = article.textContent;
    // console.log('text', text)

    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = text.matchAll(wordMatchRegExp);

    // console.log('words', words)
    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    // Use the same styling as the publish information in an article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `1111111111111111111111111111111 ⏱️ ${readingTime} min read`;

    // Support for article docs with date
    const date = article.querySelector("h4")?.parentNode;

    // console.log('heading', heading)
    // console.log('date', date)

     date.insertAdjacentElement("afterend", badge);

    chrome.runtime.sendMessage({greeting: "hello"});
    chrome.tabs.sendMessage(sender.id, {greeting: "hello"})

    // console.log('chrome.runtime.sendMessage', chrome.runtime.sendMessage)


}
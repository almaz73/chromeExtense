chrome.runtime.onMessage.addListener( // this is the message listener
    function(request, sender, sendResponse) {
        console.log('>>>'+request);
        getData(sendResponse)
    }
);


function getData(sendResponse){
    let fields = document.querySelectorAll('[data-marker="item"]')
// let article = fields[0]
    const article = document.querySelector('[class="content"]');

    console.log('fields', fields)

    // if (article) {
    //     const text = article.textContent;
    //     // console.log('text', text)
    //
    //     const wordMatchRegExp = /[^\s]+/g; // Regular expression
    //     const words = text.matchAll(wordMatchRegExp);
    //
    //     // console.log('words', words)
    //     // matchAll returns an iterator, convert to array to get word count
    //     const wordCount = [...words].length;
    //     const readingTime = Math.round(wordCount / 200);
    //     const badge = document.createElement("p");
    //     // Use the same styling as the publish information in an article's header
    //     badge.classList.add("color-secondary-text", "type--caption");
    //     badge.textContent = `1111111111111111111111111111111 ⏱️ ${readingTime} min read`;
    //
    //     const date = article.querySelector("h4")?.parentNode;
    //
    //     date.insertAdjacentElement("afterend", badge);
    //
    //
    //
    // }
    let zzz=[{id:1, name:'first'}, {id:2, name:'second'}, {id:3, name:'third'}]

    sendResponse(fields);
}



export {getQuotesEN};
export {getQuotesRU};

function getQuotesRU () {
    const quotes = `./assets/dataRU.json`;

    fetch(quotes)
        .then(res => res.json())
        .then(data => {
            randomQuotes()

            function randomQuotes() {
                changeQuote.classList.toggle('rotate');
                const randomNum = Math.round(Math.random()* ((data.length - 1) - 0) + 0);
                quote.textContent = data[randomNum].text;
                author.textContent = data[randomNum].author;
            }
            changeQuote.addEventListener('click', randomQuotes);
        })
}

function getQuotesEN () {
    const quotes = `./assets/dataEN.json`;

    fetch(quotes)
        .then(res => res.json())
        .then(data => {
            randomQuotes()

            function randomQuotes() {
                changeQuote.classList.toggle('rotate');
                const randomNum = Math.round(Math.random()* ((data.length - 1) - 0) + 0);
                quote.textContent = data[randomNum].text;
                author.textContent = data[randomNum].author;
            }
            changeQuote.addEventListener('click', randomQuotes);
        })
}

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

getQuotesRU()


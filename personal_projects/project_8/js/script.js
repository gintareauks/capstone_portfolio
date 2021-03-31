/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
A complete list of the quotes  
***/
var quotes = [
    {
        quote: "What you think you become. What you feel you attract. What you imagine you create.",
        source: "Buddha",
        tag: "law of attraction"
    },
    {
        quote: "Your thoughts become things.",
        source: "Rhonda Byrne",
        citation: "The Secret",
        year: 2006,
        tag: "law of attraction"
    },
    {
        quote: "Whether you think you can, or think you can't, you're right.",
        source: "Henry Ford"
    },
    { 
        quote: "Whatever the mind can conceive and believe, it can achieve.",
        source: "Napoleon Hill",
        citation: "Think and Grow Rich: A Black Choice",
        year: 1991,
        tag: "law of attraction"
    }, 
    {
        quote: "Alwyas deliver more than expected",
        source: "Larry Page, Co-Founder of Google",
        tag: "business"
    }, 
    {
        quote: "Do not take life too seriously. You will never get out of it alive.",
        source: "Elbert Hubbard",
        tag: "humor"
    }
];


/***
Generates random quote from the list of the quotes
***/

function getRandomQuote() {
    const randomNumber =  Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];
    return randomQuote;
};

getRandomQuote();


/***
Generates random color
(idea found at dev.to)
***/
function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

/***
prints a random quote on the screen and displays a random backgound color  
***/
function printQuote() {
    const randomQuote = getRandomQuote();
    let quoteHTML = '';
    quoteHTML = `
    <p class="quote"> 
        ${randomQuote.quote}
    </p>
    <p class="source"> 
    ${randomQuote.source}
    `

    if (randomQuote.citation) {
        quoteHTML += `
            <span class="citation">
                ${randomQuote.citation}
            </span>
            `
    } 

    if (randomQuote.year) {
        quoteHTML += `
            <span class="year">
                ${randomQuote.year}
            </span>
            `
    } 
    
    if (randomQuote.tag) {
        quoteHTML += `
            <span class="tag">
                ${randomQuote.tag}
            </span>
            `
    }
    
    quoteHTML += `</p>`;

    document.body.style.backgroundColor = generateRandomColor();
    return document.getElementById('quote-box').innerHTML = quoteHTML;
}


/***
automatically displays new random quote with random background color every 10s
***/
function timer() {
setInterval(printQuote, 10000);
}

timer();


/***
displays different random quote when the button is clicked
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
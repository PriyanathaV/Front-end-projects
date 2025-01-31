const quotes = [
    "Believe you can, and you're halfway there.",
    "Your time is limited, so don't waste it living someone else's life." ,
    "Do what you can, with what you have, where you are." ,
    "Success is not final, failure is not fatal: it is the courage to continue that counts." ,
    "Opportunities don't happen, you create them." ,
    "Difficulties in life are intended to make us better, not bitter." ,
    "Don’t let yesterday take up too much of today.",
    "It always seems impossible until it's done." ,
    "Act as if what you do makes a difference. It does.",
    "Great things are done by a series of small things brought together." 
];

function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

getQuote();

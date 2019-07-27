const store = {
    quotes: [
        {
            quote: `Don't cry because it's over, smile because it happened.`,
            author: "Dr. Seuss"
        },
        {
            quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
            author: "Marilyn Monroe"
        },
        {
            quote: `Be yourself; everyone else is already taken.`,
            author: "Oscar Wilde"
        },
        {
            quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
            author: "Albert Einstein"
        },
        {
            quote: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
            author: "Bernard M. Baruch"
        }
    ],
    index: 0
}

const getRandomIndex = (current_index, length) => {
	let new_index = current_index;
	while(new_index === current_index) {
		new_index = Math.floor(Math.random() * length);
	}
	// console.log(new_index);
	return new_index;
}

$("#new-quote").click(function() {
	store.index = getRandomIndex(store.index, store.quotes.length);
	displayQuote();
});

function displayQuote() {
	$("#text").text(store.quotes[store.index].quote);
	$("#author").text("-" + store.quotes[store.index].author + "-");
	$("#tweet-quote").attr("href", `https://twitter.com/intent/tweet?text="` + store.quotes[store.index].quote + `" - ` + store.quotes[store.index].author);
}

$(document).ready(displayQuote());

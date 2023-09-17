const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button");

// random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    // fetching random quotes/data from the API and parsing it into JavaScript object
    fetch("https://api.quotable.io/random").then(res.json()).then(result =>{
        console.log(result);
        quoteText.innertext = result.content;
        authorName.innerText = result.content;
        quoteBtn.innerText = "New Quote";
    });
}

quoteBtn.addEventListener("click", randomQuote);
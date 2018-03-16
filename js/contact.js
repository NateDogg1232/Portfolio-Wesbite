var cards = document.getElementsByClassName("card");
const cardMax = cards.length - 1;
var cardTop = cards[0].getBoundingClientRect().top;
var currentCard = 0;

//Initialize all the cards
for (let i = 0; i <= cardMax; i++) {
    cards[i].style.top = cardTop;
    cards[i].style.transitionDuration = "1s";
}

updateCardCount();


function cardLeft() {
    currentCard--;
    if (currentCard <= 0) {
        document.getElementById("leftarrow").classList.remove("enabled");
        document.getElementById("leftarrow").classList.add("disabled");
        if (currentCard < 0) {
            currentCard = 0;
            return;
        }
    }
    document.getElementById("rightarrow").classList.add("enabled");
    cards[currentCard].classList.add("center");
    cards[currentCard].classList.remove("right");
    cards[currentCard + 1].classList.add("left");
    cards[currentCard + 1].classList.remove("center");
    updateCardCount();
}

function cardRight() {
    currentCard++;
    if (currentCard >= cardMax) {
        document.getElementById("rightarrow").classList.remove("enabled");
        document.getElementById("rightarrow").classList.add("disabled");
        if (currentCard > cardMax) {
            currentCard = cardMax;
            return;
        }
    }
    document.getElementById("leftarrow").classList.add("enabled");
    cards[currentCard].classList.add("center");
    cards[currentCard].classList.remove("left");
    cards[currentCard - 1].classList.add("right");
    cards[currentCard - 1].classList.remove("center");
    updateCardCount();
}

function updateCardCount() {
    document.getElementById("cardcount").innerHTML = "Card " + (currentCard + 1) + " of " + (cardMax + 1);
}

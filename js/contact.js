
var cards = document.getElementsByClassName("card");
const cardMax = cards.length - 1;
var cardTop = cards[0].getBoundingClientRect().top;
var currentCard = 1;

//Initialize all the cards
for (let i = 0; i <= cardMax; i++) {
    cards[i].style.top = cardTop;
    //cards[i].style.transitionDuration = "0s";
}

updateCardCount();

document.onkeydown = keyPressed;

function cardRight() {
    previousCard().style.transitionDuration = "0s";
    previousCard().classList.remove("right");
    previousCard().classList.remove("center");
    previousCard().classList.add("left");
    currentCard++;
    if (currentCard > cardMax) {
        currentCard = 0;
    }
    cards[currentCard].style.transitionDuration = "2s";
    cards[currentCard].classList.remove("left");
    cards[currentCard].classList.remove("right");
    cards[currentCard].classList.add("center");
    previousCard().style.transitionDuration = "2s";
    previousCard().classList.remove("center");
    previousCard().classList.remove("left");
    previousCard().classList.add("right");

    updateCardCount();
}

function cardLeft() {
    nextCard().style.transitionDuration = "0s";
    nextCard().classList.remove("left");
    nextCard().classList.remove("center");
    nextCard().classList.add("right");
    currentCard--;
    if (currentCard < 0) {
        currentCard = 0;
    }
    cards[currentCard].style.transitionDuration = "2s";
    cards[currentCard].classList.remove("left");
    cards[currentCard].classList.remove("right");
    cards[currentCard].classList.add("center");
    nextCard().style.transitionDuration = "2s";
    nextCard().classList.remove("center");
    nextCard().classList.remove("right");
    nextCard().classList.add("left");

    updateCardCount();
}

function updateCards() {
    
}

function nextCard() {
    if (currentCard >= cardMax) {
        return cards[0];
    }
    console.log("Current Card: " + (currentCard + 1));
    console.log("Card Max : " + cardMax);
    return cards[currentCard + 1];
}

function previousCard() {
    if (currentCard <= 0) {
        console.log("returning 0");
        return cards[cardMax];
    }
    console.log("Current Card: " + (currentCard + 1));
    console.log("Card Max : " + cardMax);
    return cards[currentCard - 1];
}

function updateCardCount() {
    document.getElementById("cardcount").innerHTML = "Card " + (currentCard + 1) + " of " + (cardMax + 1);
}

function keyPressed(e) {
    if (e.key == "ArrowLeft")
        cardLeft();
    if (e.key == "ArrowRight")
        cardRight();
}

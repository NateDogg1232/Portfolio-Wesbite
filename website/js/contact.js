var cards = document.getElementsByClassName("card");
const cardMax = cards.length - 1;
var cardTop = cards[0].getBoundingClientRect().top;
var currentCard = 0;

//Initialize all the cards
for (let i = 0; i <= cardMax; i++) {
    cards[i].style.top = cardTop;
}

updateCardCount();

function cardRight() {
    cards[currentCard].style.animationName = "slide-out-right";
    //Adding a class to it will not affect the keyframe until it's done executing
    hide(cards[currentCard]);
    currentCard++;
    if (currentCard > cardMax)
        currentCard = 0;
    cards[currentCard].style.animationName = "slide-in-left";
    show(cards[currentCard]);
    updateCardCount();
}

function cardLeft() {
    cards[currentCard].style.animationName = "slide-out-left";
    //Adding a class to it will not affect the keyframe until it's done executing
    hide(cards[currentCard]);
    currentCard--;
    if (currentCard < 0)
        currentCard = cardMax;
    cards[currentCard].style.animationName = "slide-in-right";
    show(cards[currentCard]);
    updateCardCount();
}

function show(element) {
    element.classList.remove("hide");
    element.classList.add("show");
}
function hide(element) {
    element.classList.remove("show");
    element.classList.add("hide");
}

function updateCardCount() {
    document.getElementById("cardcount").innerHTML = "Card " + (currentCard + 1) + " of " + (cardMax + 1);
}

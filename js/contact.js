var cards = document.getElementsByClassName("card");
const cardMax = cards.length - 1;
const transitionTime = "1s";
var marginLeftOffScreen = "-2000px";
var marginRightOffScreen = "2000px";
var cardTop = cards[0].getBoundingClientRect().top;
var currentCard = 0;

//Initialize all the cards
for (let i = 1; i <= cardMax; i++) {
    cards[i].style.top = cardTop;
    cards[i].style.marginLeft = marginLeftOffScreen;
}
cards[0].style.top = cardTop;
cards[0].style.margin = "0px";
cards[0].style.transitionDuration = "1s";
cards[cardMax].marginLeft = marginRightOffScreen;


function cardLeft() {
    //Move the current card off the screen to the left
    cards[currentCard].style.transitionDuration = transitionTime;
    cards[currentCard].style.marginLeft = marginLeftOffScreen;
    //Move the next card to the right side
    getNextCard().style.transitionDuration = "0s";
    getNextCard().style.marginLeft = marginRightOffScreen;
    currentCard--;
    if (currentCard < 0) {
        currentCard = cardMax;
    }
    console.log(currentCard);
    cards[currentCard].style.transitionDuration = transitionTime;
    cards[currentCard].style.marginLeft = "0px";
}
function getNextCard() {
    if (currentCard == cardMax) {
        return cards[0];
    }
    return cards[currentCard + 1];
}
function getPreviousCard() {
    if (currentCard == 0) {
        return cards[cardMax];
    }
    return cards[currentCard - 1];
}

function cardRight() {
    //Move the current card off the screen to the right
    cards[currentCard].style.transitionDuration = transitionTime;
    cards[currentCard].style.marginLeft = marginRightOffScreen;
    //Move the next card to the left side
    getPreviousCard().style.transitionDuration = "0s";
    getPreviousCard().style.marginLeft = marginLeftOffScreen;
    currentCard++;
    if (currentCard > cardMax) {
        currentCard = 0;
    }
    console.log(currentCard);
    cards[currentCard].style.transitionDuration = transitionTime;
    cards[currentCard].style.marginLeft = "0px";
}
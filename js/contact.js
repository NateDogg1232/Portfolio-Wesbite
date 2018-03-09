var currentCard = 0;
var cards = document.getElementsByClassName("card");
var cardMax = cards.length - 1;
function cardLeft() {
    currentCard--;
    if (currentCard < 0) {
        currentCard = cardMax;
    }
    
}
function cardRight() {
    currentCard++;
    if (currentCard > cardMax) {
        currentCard = 0;
    }
    
}

function updateCards() {
    
}
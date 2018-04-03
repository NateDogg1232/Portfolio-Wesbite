
var cards = document.getElementsByClassName("card");
const cardMax = cards.length - 1;
var cardTop = cards[0].getBoundingClientRect().top;
var currentCard = 0;

//Initialize all the cards
for (let i = 0; i <= cardMax; i++) {
    cards[i].style.top = cardTop;
    //cards[i].style.transitionDuration = "0s";
}

updateCardCount();

document.onkeydown = keyPressed;

async function cardRight() {
    //We first need to update all the cards to reset all of them.
    updateCards();
    //First, we move the current card to the right side
    cards[currentCard].style.transitionDuration = "2s"; //Make sure the transition shows
    setRight(cards[currentCard]);
    //And we increment the current card
    currentCard++;
    if (currentCard > cardMax)
        currentCard = 0;
    //And now we move the current card to the middle.
    cards[currentCard].style.transitionDuration = "2s"; //Make sure the transition shows
    setCenter(cards[currentCard]);
    updateCardCount();
}

//This needs to be asynchronous so that we can use the sleep function;
async function cardLeft() {
    //We first need to update all the cards to reset all of them.
    updateCards();
    //Then we need to move the next card in queue to the right side.
    previousCard().style.transitionDuration = "0s"; //Hide the transition
    setRight(previousCard());
    //We wait for 5 milliseconds just to make sure that the animations occur
    //before we continue with the function
    await sleep(1   );

    //We set the current card to the left side
    cards[currentCard].style.transitionDuration = "2s"; //Make sure the transition shows
    setLeft(cards[currentCard]);
    //And now we move the next card over to the center
    //We decrement the counter for the current card
    currentCard--;
    if (currentCard < 0)
        currentCard = cardMax;
    cards[currentCard].style.transitionDuration = "2s"; //Make sure the transition shows
    setCenter(cards[currentCard]);
    updateCardCount();
}

function setCenter(element) {
    element.classList.remove("left");
    element.classList.remove("right");
    element.classList.add("center");
}

function setLeft(element) {
    element.classList.remove("right");
    element.classList.remove("center");
    element.classList.add("left");
}

function setRight(element) {
    element.classList.remove("left");
    element.classList.remove("center");
    element.classList.add("right");
}


//Reset all the cards
function updateCards() {
    for (let i = 0; i <= cardMax; i++) {
        if (i == currentCard) {
            continue;
        }
        cards[i].style.transitionDuration = "0s"; //Hide the transition
        setLeft(cards[i]);
    }
}

function nextCard() {
    if (currentCard >= cardMax) {
        return cards[0];
    }
    return cards[currentCard + 1];
}

function previousCard() {
    if (currentCard <= 0) {
        return cards[cardMax];
    }
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

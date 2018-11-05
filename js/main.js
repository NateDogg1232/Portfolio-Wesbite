//Put all global functions in here

var hamburgerMenuIsOpen = false
var hamburgerTimeout = null;

document.getElementById("hiddenlist").style.height = "0px";
document.getElementById("hiddenlist").style.transition = "height 1s";


function onHamburgerClick() {
    hamburger = document.getElementById("hamburger");
    hamburgerMenu = document.getElementById("hamburger-menu");
    if (!hamburgerMenuIsOpen) {
        hamburger.classList.add("transition");
        hamburgerMenu.classList.add("transition");
        hamburgerMenuIsOpen = true;
    } else {
        hamburgerMenuIsOpen = false;
        hamburger.classList.remove("transition");
        hamburgerMenu.classList.remove("transition");
        clearTimeout(hamburgerTimeout);
    }
}

window.on


function subMenuOpen() {
    subMenu = document.getElementById("hiddenlist");
    //Set the height of the menu to its original height
    subMenu.style.height = subMenu.scrollHeight + "px";
}

function subMenuClose() {
    subMenu = document.getElementById("hiddenlist");
    //Set the height of the menu to 0
    subMenu.style.height = "0px";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

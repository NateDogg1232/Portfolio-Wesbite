//Put all global functions in here

var hamburgerMenuIsOpen = false
var hamburgerTimeout = null;

var hamburgerClass = document.getElementById("hamburger").getAttribute("class");

var subMenuHeight = document.getElementById("hiddenlist").offsetHeight;
document.getElementById("hiddenlist").style.height = "0px";
document.getElementById("hiddenlist").style.transition = "height 1s";


function onHamburgerClick() {
    hamburger = document.getElementById("hamburger");
    hamburgerMenu = document.getElementById("hamburger-menu");
    if (!hamburgerMenuIsOpen) {
        hamburger.setAttribute("class", "transition");
        hamburgerMenu.setAttribute("class", "transition");
        hamburgerMenuIsOpen = true;
    } else {
        hamburgerMenuIsOpen = false;
        hamburger.setAttribute("class", "");
        hamburgerMenu.setAttribute("class", "");
        clearTimeout(hamburgerTimeout);
    }
}

function subMenuOpen() {
    subMenu = document.getElementById("hiddenlist");
    //Set the height of the menu to its original height
    subMenu.style.height = subMenuHeight + "px";
}

function subMenuClose() {
    subMenu = document.getElementById("hiddenlist");
    //Set the height of the menu to 0
    subMenu.style.height = "0px";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

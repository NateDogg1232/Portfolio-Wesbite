//Put all global functions in here

var hamburgerMenuIsOpen = false
function onHamburgerClick() {
    hamburger = document.getElementById("hamburger");
    hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.style.width = "100px";
    hamburgerMenu.style.marginLeft = "0px";
    hamburgerMenu.style.visibility = "visible";
    
    
    hamburger.style.left = "100px";
}
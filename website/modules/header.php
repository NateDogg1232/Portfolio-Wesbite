<nav id="hamburger-menu" class="nav-menu">
    <ul>
        <li><a href="?page=home">Home</a></li>
        <li><a href="?page=about">About Me</a></li>
        <li><a href="?page=resume">Résumé</a></li>
        <li>
            <div id="linkcontainer" onmouseover="subMenuOpen();" onmouseout="subMenuClose();">
                Portfolio
                <ul id="hiddenlist">
                    <li><a href="?page=programming">Programming</a></li>
                    <li><a href="?page=music">Music</a></li>
                    <!-- <li><a href="?page=writing">Writing</a></li> -->
                </ul>
            </div>
        </li>
        <li><a href="?page=contact">Contact Me</a></li>
    </ul>
</nav>
<div id="hamburger" onclick="onHamburgerClick();">
    <div id="bar1"></div>
    <div id="bar2"></div>
    <div id="bar3"></div>
</div>
<div class="headerthingy">
    <hr>
    <a href="?page=home" class="circle"></a>
    <hr>
</div>
<div class="pagewrap">

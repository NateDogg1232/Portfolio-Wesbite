<div id="hamburger-menu">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Me</a></li>
        <li><a href="resume.html">Résumé</a></li>
        <li>
            <div class="linkcontainer" onmouseover="subMenuOpen();" onmouseout="subMenuClose();">
                Portfolio
                <ul id="hiddenlist">
                    <li><a href="programming.html">Programming</a></li>
                    <li><a href="music.html">Music</a></li>
                    <li><a href="writing.html">Writing</a></li>
                </ul>
            </div>
        </li>
        <li><a href="contact.html">Contact Me</a></li>
    </ul>
</div>
<header>
    <div id="hamburger" onclick="onHamburgerClick();">
        <div id="bar1"></div>
        <div id="bar2"></div>
        <div id="bar3"></div>
    </div>
</header>
<div class="pagewrap">
    <div class="horizrule">
        <hr>
        <a href="index.html" class="circle"></a>
        <hr>
    </div>

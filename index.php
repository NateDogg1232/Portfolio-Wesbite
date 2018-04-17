<!--Start with just a simple PHP tag. This will load our webpage-->
<?php
	//Make sure the page variable is set
	if(isset($_GET['page'])) {
		//We set a temporary variable so we don't need to rewrite the $_GET function all the time
		$page = $_GET['page'];
		//Check to make sure the page exists
		if (file_exists("content/$page.php")) {
			//It does so we load it
			loadPage($page);
		} else {
			//It does not, so we load up the 404 page
			loadPage("404");
		}
	} else {
		//There is no page variable present, so we just load the home page
		loadPage("home");
	}
	//Loads a page
	function loadPage($page) {
		//Include the head of the HTML
		include("modules/head.php");
		//And we include the header itself
		include("modules/header.php");
		//Set the body ID to use for our CSS
		echo "<body id=$page>";
		//And we get the content in there
		include("content/$page.php");
		//And close it off with the footer
		include("modules/footer.php");
	}
?>

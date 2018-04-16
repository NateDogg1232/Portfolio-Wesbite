<?php
	//include the HTML head tag
	include('module/head.php');
	//Make sure the page variable is set
	if(isset($_GET['page']))
	{
		$page = $_GET['page'];
		//Check to make sure the page exists
		if (file_exists("content/$page.php"))
		{
			//Set the ID to the page
			echo "<body id=$page>";
			include('modules/header.php');
			include("content/$page.php");
		}
		else
		{
			//Set the ID to 404s
			echo "<body id=404>";
			//If not, we load up the 404 page
			include("content/404.php");
		}
	}
	else
	{
		echo "<body id=home>";
		include("content/home.php");
	}
	include("content/footer.php");
?>

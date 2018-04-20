<!DOCTYPE html>
<!--YOU REALLY DON'T WANT TO LOOK IN HERE, IT'S UGLY-->
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Get out</title>
	<style media="screen">
		body {
			font-family: sans-serif;
			font-size: 20px;
			box-sizing: border-box;
		}
		h1 {
			text-align: center;
		}
		div.person {
			border: 2px solid black;
			margin-bottom: 1em;
			padding: 2px;
		}
	</style>
</head>

<body>
	<h1>Contact Me peoples</h1>
	<?php
        //TODO: Do this right
		$file = fread(fopen("contacts.txt", "rt"), filesize("contacts.txt"));
		//Time to do some parsing.
		//We first split into an array of people
		$people = explode("<woahthisismeta>", $file);
		//Hack fix to the empty array element
		$chk=false;
		foreach($people as $person) {
			if (!$chk){$chk=true; continue;}
			$fname = "";
			$lname = "";
			$email = "";
			$message = "";
			$idx = 0;
			$tmpstr = "";
			//And now we split into an array of values
			//For this, explode won't really work since we have that messages thing, so we just do this ourselves
			for ($i = 0; $i < strlen($person); $i++) {
				if (charAt($person,$i) == ',') {
					//We check what index we are at. This kinda determines what we are currently doing
					switch($idx) {
						case 0:
							$fname=$tmpstr;
							break;
						case 1:
							$lname=$tmpstr;
							break;
						case 2:
							$email=$tmpstr;
							break;
						//We're going through the message at this point, so we ignore commas
						case 3:
							continue;
					}
					//We add one index to the values
					$idx++;
					$tmpstr="";
					continue;
				}
				//We check if the message has been ended
				if (substr($person,$i,2) == "||" && $idx == 3) {
					$message = $tmpstr;
					$tmpstr = "";
					//And since this is the last thing to check for, we get the heck out of there
					break;
				}
				$tmpstr .= charAt($person,$i);
			}
			//And now we output our findings
			echo '<div class="person">';
			echo "<h2>$fname $lname</h2>\n";
			echo "<div class=\"email\"><h3>Email</h3>\n<p>$email</p></div>";
			echo "<div class=\"message\"><h3>Message</h3>\n<p>" . nl2br(htmlspecialchars($message)) . "</p></div>";
			echo "</div>";
		}

		function charAt($str, $index = 0) {
			return (substr($str, $index, 1));
		}
	?>
</body>

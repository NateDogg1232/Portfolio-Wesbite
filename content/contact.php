
<h1>Contact Me</h1>
<!-- <div class="contact">
	<p>Please feel free to contact me per this form, or through the provided methods</p>
	<form class="contact-me-form" action="formsubmit.php?page=contact" method="post" onsubmit="return checkForm();" name="contactme">
		<div>
			<label for="fname">First Name</label>
			<input type="text" pattern="\S+" name="fname" id="fname" class="name" required>
			<label for="lname">Last Name</label>
			<input type="text" pattern="\S+"name="lname" id="lname" class="name" required>
		</div>
		<div>
			<label for="email">E-Mail</label>
			<input type="text" pattern="\S+@\S+\.\w+" name="email" id="email" class="email" required>
			<label for="description">Message</label>
			<textarea name="message" id="message" rows="8" cols="50"></textarea>
			<br>
			<input type="submit" style="width: initial">
			<br>
			<?php
				if (isset($_GET['form'])) {
					if ($_GET['form'] == "success") {
						echo "<p class=\"formsuccess\">Submission successful!</p>";
					} else {
						$fail = $_GET['failreason'];
						echo "<p class=\"formfail\">Submission failed! <br>Reason: $fail</p>";
					}
				}
			?>
		</div>
	</form>
</div> -->
<article id="cards">
	<div class="arrows">
		<i class="fas fa-angle-double-left" id="leftarrow" onclick="cardLeft()"></i>
		<p class="centertext" id="cardcount">Card 1 of 6</p>
		<i class="fas fa-angle-double-right" id="rightarrow" onclick="cardRight()"></i>
	</div>
	<div class="cardcontainer">
		<div class="card show" onclick="location.href='mailto://nathanielbarragan@gmail.com';">
			<i class="img fas fa-envelope"></i>
			<div class="head">
				<h3>E-Mail</h3>
			</div>
			<div class="link">
				<p>nathanielbarragan@gmail.com</p>
			</div>
		</div>
		<div class="card hide">
			<i class="img fab fa-discord"></i>
			<div class="head">
				<h3>Discord</h3>
			</div>
			<div class="link">
				<p>NateDogg1232#0753</p>
			</div>
		</div>
		<div class="card hide">
			<i class="img fas fa-phone"></i>
			<div class="head">
				<h3>Phone</h3>
			</div>
			<div class="link">
				<p>559-696-0660</p>
			</div>
		</div>
	</div>
</article>

<script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
<script src="js/contact.js"></script>

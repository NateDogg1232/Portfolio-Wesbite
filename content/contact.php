<h1>Contact Me</h1>
<div class="contact">
	<p>Please feel free to contact me per this form, or through the provided methods</p>
	<form class="contact-me-form" onsubmit="return checkForm();" name="contactme">
		<div>
			<label for="fname">First Name</label>
			<input type="text" name="fname" id="fname" class="name" required>
			<label for="lname">Last Name</label>
			<input type="text" name="lname" id="lname" class="name" required>
		</div>
		<div>
			<label for="email">E-Mail</label>
			<input type="text" pattern="\S+@\S+\.\w+" name="email" id="email" class="email" required>
			<label for="description">Message</label>
			<textarea name="description" id="description" rows="8" cols="50"></textarea>
			<br>
			<input type="submit" style="width: initial">
			<br>
		</div>
	</form>
</div>
<article id="cards">
	<div class="arrows">
		<i class="fas fa-angle-double-left" id="leftarrow" onclick="cardLeft()"></i>
		<p class="centertext" id="cardcount">Card 1 of 6</p>
		<i class="fas fa-angle-double-right" id="rightarrow" onclick="cardRight()"></i>
	</div>
	<div class="cardcontainer">
		<div class="card center" onclick="location.href='mailto://nathanielbarragan@gmail.com';">
			<i class="img fas fa-envelope"></i>
			<div class="head">
				<h3>E-Mail</h3>
			</div>
			<div class="link">
				<p>nathanielbarragan@gmail.com</p>
			</div>
		</div>
		<div class="card left" onclick="location.href='www.linkedin.com/in/NathanielBarragan';">
			<i class="img fab fa-linkedin"></i>
			<div class="head">
				<h3>Linkedin</h3>
			</div>
			<div class="link">
				<p>Linkedin</p>
			</div>
		</div>
		<div class="card left" onclick="location.href='mailto://nathanielbarragan@gmail.com';">
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

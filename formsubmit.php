<?php
	if (isset($_GET['page'])) {
		$originalpage = $_GET['page'];
	} else {
		$originalpage = "home";
	}
	$file = "<woahthisismeta>\n";
	if (check($_POST['fname'])) {
		$file .= $_POST['fname'] . ',';
	} else {
		formFail("First name is missing");
	}
	if (check($_POST['lname'])) {
		$file .= $_POST['lname'] . ',';
	} else {
		formFail("Last name is missing");
	}
	if (check($_POST['email'])) {
		$file .= $_POST['email'] . ',';
	} else {
		formFail("E-Mail is missing");
	}
	if (check($_POST['message'])) {
		$file .= $_POST['message'] . "||";
	}
	//Also translate any '\n' to '\r\n'
	$filetowrite = fopen("contacts.txt", "a+t") or formFail("Cannot open contacts file");
	fwrite($filetowrite, $file);
	formSuccess();
	function formSuccess() {
		global $originalpage;
		echo "<script>location.href='/index.php?page=$originalpage&form=success'</script>";
	}


	function check($var) {
		return isset($var) && (trim($var) != "");
	}

	function formFail($reason) {
		global $originalpage;
		echo "<script>location.href='/index.php?page=$originalpage&form=fail&failreason=$reason'</script>";
		exit;
	}
?>

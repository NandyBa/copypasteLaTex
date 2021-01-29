$textarea = document.getElementsByTagName('textarea')[0];
$div = document.getElementsByTagName('div')[0];
$updateButton = document.getElementById('update');
$copyButton = document.getElementById('copy');

code = "";

$updateButton.onclick = function() {
	console.log("trigger");
	code = $textarea.value; // get code textarea code

	code = code.replace(/(\n[0-9]+)+\s*/g,'\n'); // remove numbers at begining of each row

	/* lines to remove unuseful spaces */
	code = code.replaceAll(/[ X]*\.[ X]*/g,'.');
	code = code.replaceAll(/[ X]*\([ X]*/g,'(');
	code = code.replaceAll(/[ X]*\)[ X]*/g,')');

	code = code.replaceAll(/[ X]*\’[ X]*/g,"'");
	code = code.replaceAll(/[ X]*\‘[ X]*/g,"'");

	$div.innerText = code; // show modified code
}

$copyButton.onclick = function() {
	navigator.clipboard.writeText(code);	// copy generated code in the clipboard
}

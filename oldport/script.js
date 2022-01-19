var i = 0;
var landingPageText =
	"Developer, computer science student, freelancer. "; /* The text */
var typeWritingSpeed = 75; /* The typeWritingSpeed/duration of the effect in milliseconds */

function typeWriter() {
	if (i < landingPageText.length) {
		document.getElementById("type-writer").innerHTML +=
			landingPageText.charAt(i);
		i++;
		setTimeout(typeWriter, typeWritingSpeed);
	}
}

function empty() {
	let x = document.getElementById("comment-text-area").value;
	let y = document.getElementById("email-input").value;
	let z = document.getElementById("name-input").value;
	if (x != "" && y != "" && z != "") {
		window.close("", "_parent", "");
	}
}

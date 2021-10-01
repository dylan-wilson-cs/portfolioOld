var i = 0;
var landingPageText =
	"Web developer, computer science student, freelancer. "; /* The text */
var typeWritingSpeed = 75; /* The typeWritingSpeed/duration of the effect in milliseconds */

function typeWriter() {
	if (i < landingPageText.length) {
		document.getElementById("type-writer").innerHTML +=
			landingPageText.charAt(i);
		i++;
		setTimeout(typeWriter, typeWritingSpeed);
	}
}

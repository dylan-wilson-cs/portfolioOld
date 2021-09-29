var i = 0;
var landingPageText =
	"Dedicated and passionate Junior Developer and Computer Science Student looking for opportunities to advance my skills. Whether you're looking for a permanent role or need a freelancer, reach out to me and I'd be happy to help! "; /* The text */
var typeWritingSpeed = 40; /* The typeWritingSpeed/duration of the effect in milliseconds */

function typeWriter() {
	if (i < landingPageText.length) {
		document.getElementById("type-writer").innerHTML +=
			landingPageText.charAt(i);
		i++;
		setTimeout(typeWriter, typeWritingSpeed);
	}
}

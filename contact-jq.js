$(".contact1-form").on("submit", function (e) {
	//optional validation code here

	e.preventDefault();

	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbzG69JQwCqgAigIqWWS43_8jxMuWcDcQPF5p0BvtABdAyREeBPHrTKGtv7FhU3G_w5C/exec",
		method: "POST",
		dataType: "json",
		data: $(".contact1-form").serialize(),
		success: function (response) {
			if (response.result == "success") {
				$(".contact1-form")[0].reset();
				alert("Thank you for contacting us.");
				return true;
			} else {
				alert("Something went wrong. Please try again.");
			}
		},
		error: function () {
			alert("Something went wrong. Please try again.");
		},
	});
});

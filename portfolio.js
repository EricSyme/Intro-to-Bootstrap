$(document).ready(function() {
	try {
		$('.a').ripples({
			resolution: 256,
			perturbance: 0.04
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}
});


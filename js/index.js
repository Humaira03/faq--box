$(function () {
	$(".btn-link").click(function () {
		const parentEl = $(this).parent().parent();
		if (!parentEl.hasClass("active")) {
			$(".card-header").removeClass("active");
			parentEl.addClass("active");
		} else {
			$(".card-header").removeClass("active");
		}
	});
});

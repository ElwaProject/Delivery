$(document).ready(function () {
	$(".header__button-o").on("click", function () {
		$(".modal").show(500);
	});
	$(".modal__close").on("click", function () {
		$(".modal").hide(500);
	});
	$(".modal__cancel").on("click", function () {
		$(".modal").hide(500);
	});
});
new WOW().init();

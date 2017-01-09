var animatePoints = function() {
	var revealPoint = function() {
		$(this).css({
			opacity: 1,
			transform: 'scaleX(1) translateY(0)'
		});
	};
	$.each($('.point'), revealPoint);
};

$(window).load(function() {
// Automatically animates the points on a bigger screen, that wont trigger scroll animation
	if ($(window).height() > 950) {
		animatePoints();
	}
	var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
	$(window).scroll(function(event) {
		if ($(window).scrollTop() >= scrollDistance) {
			animatePoints();
		}
  });
});

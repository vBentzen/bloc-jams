var pointsArray = document.getElementsByClassName('point');

	var revealPoint = function (point) {
		point.style.opacity = 1;
		point.style.transform = "scaleX(1)";
		point.style.msTransform = "scaleX(1)";
		point.style.WebkitTransform = "scaleX(1)";
	};

var animatePoints = function(points) {
		forEach(points, revealPoint);
};

	window.onload = function() {
		// Automatically animates the points on a bigger screen, that wont trigger scroll animation
		if (window.innerHeight > 950) {
			animatePoints(pointsArray);
		}
 		var sellingPoints = document.getElementsByClassName('selling-points')[0];
		var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

	window.addEventListener("scroll", function(event) {
  	if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
			animatePoints(pointsArray);
		}
  });
}

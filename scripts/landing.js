var animatePoints = function () {
	var points = document.getElementsByClassName('point');
	
	var revealPoint = function (index) {
		points[index].style.opacity = 1;
		points[index].style.transform = "scaleX(1)";
		points[index].style.msTransform = "scaleX(1)";
		points[index].style.WebkitTransform = "scaleX(1)";
	}
	/* Hvordan fanger vi flere?, vil gerne kunne køre de 2 første fra højre, og så sidste [i] ind fra venstre, altså skal vi have noget i stil med en if index [0,1], do revealpoint, else do =? */
	for (var i = 0; i < points.length; i++) {
  revealPoint(i);
	}

};

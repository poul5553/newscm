jQuery(document).ready(function() {

	// define variables
	var navOffset, scrollPos = 0;

	// add utility wrapper elements for positioning
	jQuery(".sidemeny-mobil").wrap('<div class="nav-placeholder"></div>');
	jQuery(".sidemeny-mobil").wrapInner('<div class="nav-inner"></div>');
	jQuery(".nav-inner").wrapInner('<div class="nav-inner-most"></div>');

	// function to run on page load and window resize
	function stickyUtility() {

		// only update navOffset if it is not currently using fixed position
		if (!jQuery(".sidemeny-mobil").hasClass("fixed")) {
			navOffset = jQuery(".sidemeny-mobil").offset().top;
		}

		// apply matching height to nav wrapper div to avoid awkward content jumps
		jQuery(".nav-placeholder").height(jQuery(".sidemeny-mobil").outerHeight());

	} // end stickyUtility function

	// run on page load
	stickyUtility();

	// run on window resize
	jQuery(window).resize(function() {
		stickyUtility();
	});

	// run on scroll event
	jQuery(window).scroll(function() {

		scrollPos = jQuery(window).scrollTop();

		if (scrollPos >= navOffset) {
			jQuery(".sidemenu-mobil").addClass("fixed");
		} else {
			jQuery(".sidemeny-mobil").removeClass("fixed");
		}

	});

});

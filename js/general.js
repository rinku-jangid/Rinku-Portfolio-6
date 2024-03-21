
;(function($) {
	$(document).ready( function(e) {
		
		function myFunction() {
			if (window.pageYOffset > sticky) {
			  header.classList.add("sticky");
			} else {
			  header.classList.remove("sticky");
			}
		  }



		/* Responsive Menu */
		$(".navigation-open").click(function () {
		$("body").addClass("menu-action");
		});
		
		$(".menu-trigger").on("click touchstart", function(e){
		e.stopPropagation();
		e.preventDefault();
		if (jQuery(this).hasClass("nt_opended")) {
		$(this).removeClass("nt_opended").siblings(".submenu").slideToggle();
		$(this).removeClass("nt_opended").siblings(".sub-menu-level-1").slideToggle();
		$(this).removeClass("nt_opended").siblings(".sub-menu-level-5").slideToggle();
		} else {
		$(this).addClass("nt_opended").siblings(".submenu").slideToggle();
		$(this).addClass("nt_opended").siblings(".sub-menu-level-1").slideToggle();
		$(this).addClass("nt_opended").siblings(".sub-menu-level-5").slideToggle();
		}
		
		});

		 $(window).on('click touchend', function(e) {
	if (!$(e.target).hasClass("navigation-open") && !$(e.target).hasClass("navigation-close") && !$(e.target).hasClass("navigation") && $(e.target).parents(".navigation").length === 0) {
        $("body").removeClass("menu-action");
	}
});
		
		$(".navigation-close").click(function () {
		$("body").removeClass("menu-action");
		});
		/* Responsive Menu */
	
});
})(jQuery);
var menu_selector = ".nav__list"; 
function onScroll(){
    var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
        }
	});
}
$(document).ready(function () {
	$(document).on("scroll", onScroll);
	$("a[href*='#']").click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
		    scrollTop: target.offset().top
		}, 1000, function(){
			window.location.hash = hash;
            $(document).on("scroll", onScroll);
		});  
	});	
});

$('.navbar-toggler').on('click', function () {
$('.animated-icon3').toggleClass('open');
});

$('.nav-link').on('click', function () {
$('.collapse').removeClass('show');
});

new WOW().init();


	


	




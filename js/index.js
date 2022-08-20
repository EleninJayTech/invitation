jQuery(function($){
	let el_invitation_wrap = $(".invitation_wrap");
	let invitation_wrap_top = el_invitation_wrap.offset().top;

	let el_top_fixed_alert = $(".top_fixed_alert");
	el_top_fixed_alert.slideUp(0);
	$(document).on('scroll', function(){
		let _this_scroll = $(this).scrollTop();
		if( _this_scroll > invitation_wrap_top ){
			// el_top_fixed_alert.css({opacity:1});
			el_top_fixed_alert.slideDown(200);
		} else {
			el_top_fixed_alert.slideUp(200);
			// el_top_fixed_alert.css({opacity:0});
		}
	});
});
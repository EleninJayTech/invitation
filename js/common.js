Common = {
	alertOpen:false,
	alertInit:function(){
		let _html = '';
		_html += "<div class='common_alert_bg display_none'></div>";
		_html += "" +
			"<div class='common_alert_wrap display_none'>" +
				"<div class='common_alert'>" +
				"</div>" +
			"</div>";
		$("body").append(_html);
	},
	/**
	 * @param {string} text
	 */
	alert:function(text){
		this.alertOpen = true;
		$(".common_alert_bg").removeClass('display_none');
		$(".common_alert_wrap").removeClass('display_none');

		let el_common_alert = $(".common_alert");
		el_common_alert.html(text);
		el_common_alert.addClass('common_scale_up');
	}
};

jQuery(function($){
	$("body").on('click', function(e){
		if( Common.alertOpen === true ){
			Common.alertOpen = false;
			$(".common_alert_bg").addClass('display_none');
			$(".common_alert_wrap").addClass('display_none');

			let el_common_alert = $(".common_alert");
			el_common_alert.html('');
			el_common_alert.removeClass('common_scale_up');

			e.preventDefault();
			return false;
		}
	});
});
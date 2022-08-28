jQuery(function($){
	Common.alertInit();

	$(".wrap").animate({marginTop:'100vh'}, 500);

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

	let swiper = new Swiper(".mySwiper", {
		effect: "cards",
		grabCursor: true,
	});

	$(".map_info_wrap").on('click', function(e){
		let textarea = document.createElement('textarea');
		textarea.value = '인천 서구 봉수대로 806';                // 복사할 메시지
		document.body.appendChild(textarea);
		textarea.select();
		textarea.setSelectionRange(0, 9999);    // For IOS
		document.execCommand('copy');
		document.body.removeChild(textarea);

		Common.alert("주소가 복사 되었습니다");
		e.preventDefault();
		return false;
	});

	$(".link_btn").on('click', function(e){
		let shareTitle = "";
		let shareText = '';
		let shareURL = "https://eleninjaytech.github.io/invitation";
		if( $(this).data('type') === 'new' ){
			shareURL = "https://eleninjaytech.github.io/invitation/new.html";
		}

		// let URLPreFix = "";
		// URLPreFix = URLPreFix + "//" + location.host;
		// let shareURL = URLPreFix + contentURL;

		if (navigator.share){
			navigator.share({
				title: shareTitle,
				text: shareText,
				url: shareURL,
			})
				.then(() => console.log('Successful share'))
				.catch((error) => console.log('Error sharing', error));
		}else{
			let textarea = document.createElement('textarea');
			textarea.value = shareURL;
			document.body.appendChild(textarea);
			textarea.select();
			textarea.setSelectionRange(0, 9999);    // For IOS
			document.execCommand('copy');
			document.body.removeChild(textarea);

			Common.alert("URL이 복사 되었습니다");
		}

		e.preventDefault();
		return false;
	});

	$(".copy_cash").on('click', function(e){
		let textarea = document.createElement('textarea');
		textarea.value = '22304674801023';
		document.body.appendChild(textarea);
		textarea.select();
		textarea.setSelectionRange(0, 9999);    // For IOS
		document.execCommand('copy');
		document.body.removeChild(textarea);

		Common.alert("계좌번호가 복사 되었습니다");

		e.preventDefault();
		return false;
	});

	$(".phone_icon").on('click', function(e){
		let _tel = $(this).attr('href');
		document.location.href = _tel;
	});

	Kakao.init('0833edef80e95997fef5dc31428b7439');
	Kakao.isInitialized();
	console.log(Kakao);
	$("#kakaotalk-sharing-btn").on('click', function(e){
		Kakao.Share.sendCustom({
			templateId: 82107,
			templateArgs: {
				title: '우리의 새로운 시작을 축복해주세요',
				description:
					'2022. 11. 19. 토요일 저녁 6:30\n' +
					'인천 아시아드웨딩컨벤션 브릴리에홀',
			},
		})
	});
});
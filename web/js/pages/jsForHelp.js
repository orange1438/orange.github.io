$(function($) {
	
	$(".help-protocol-main").height($(window).height() - 100);
	
	
	//new swiper
	var swiperProtocol = new Swiper('#protocol', {
		scrollbar: '.swiper-scrollbar-protocol',
		direction: 'vertical',
		slidesPerView: 'auto',
		freeMode: true
	});
	
	//查看
	$(".help-mess-title").tap(function() {
		if ($(this).attr("target") == "true") {
			//关闭
			$(this).siblings(".help-mess-detailed").addClass("hide");
			$(this).attr("target", "false");
		} else{
			//开启
			$(this).siblings(".help-mess-detailed").removeClass("hide");
			$(this).attr("target", "true");
		}
	});
	
	//
	$(".help-mess-detailed").tap(function() {
		if ($(this).attr("target") == "true") {
			//缩短
			$(this).find("p").addClass("notShowAll");
			$(this).attr("target", "false");
		} else {
			//全部内容
			$(this).find("p").removeClass("notShowAll");
			$(this).attr("target", "true");
		}
	});
	
	$("#userProtocol").tap(function() {
		$(".help-protocol").removeClass("hide");
		swiperProtocol.onResize();
	});
	
	//关闭用户协议
	$(".help-protocol-title b").on({
		touchstart: function() {
			$(this).css("background", "rgba(0, 0, 0, 0.5)");
		},
		touchend: function() {
			$(this).css("background", "none");
			$(".help-protocol").addClass("hide");
		}
	});
	
	//关闭用户协议
	$(".help-protocol-bg").tap(function() {
		$(".help-protocol").addClass("hide");
	});
	
});

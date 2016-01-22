$(function($) {
	
	appendDining("0059", "解放碑店", "乡村基", "false", "0", "", "1000")
	
//	first();
	
//	$(".dining-pointOut-btn button").on({
//		touchstart: function() {
//			$(this).css("background", "rgb(228, 88, 39)");
//		},
//		touchend: function() {
//			$(this).css("background", "rgb(237, 143, 37)");
//			$(".dining-pointOut").addClass("hide");
//		}
//	});
	
	
	//加载项
	$(".sw-collect-dining").css("margin", "0 " + Math.ceil(($("#diningCollects").width() - 200) / 8) + "px");
	if (isAndroid()) {
		$(".right-navbar-nav").addClass("cube");
	} else {
		$(".right-navbar-nav").removeClass("cube");
	}
	
	for (var i = 0; i < 11; i++) {
		appendCollect("", "", "大娘水饺" + i, "", "", "", "");
	}
	
	$(".dinings-dining-left, .dinings-dining-center").tap(function() {
		console.log(1)
	});
	
	//侧边栏开关
	$(".sw-navbar").tap(function() {
		closeNav();
	});
	
	//关闭侧边栏
	$(".right-navbar-back, .sw-nav-bg").tap(function() {
		closeNav();
	});
	
	//关闭侧边栏
	$(".right-navbar-nav").tap(function() {
		$(this).css("background", "rgb(56, 163, 41)");
	});
	
	//编辑收藏
	$(".dining-collects-remove").tap(function() {
		editCollect();
	});
	
	//点击餐厅的收藏
	$(".dining-collect").tap(function() {
		var restaurantId = $(this).parents(".dinings-dining").attr("data-restaurantid");
		var restaurantName = $(this).parents(".dinings-dining").attr("data-restaurantName");
		var brandName = $(this).parents(".dinings-dining").attr("data-brandName");
		var isCollect = $(this).parents(".dinings-dining").attr("data-isCollect");
		var isOOS = $(this).parents(".dinings-dining").attr("data-isOOS");
		if (isCollect == "false") {
			appendCollect(restaurantId, restaurantName, brandName, isCollect, isOOS);
			changeCollect(restaurantId, "add");
		} else {
			deleteCollect(restaurantId);
			changeCollect(restaurantId, "lessen");
		}
		
	});
	
	//地址候选
	$(".dining-address-cityProper").tap(function() {
		addressCandidate();
	});
	
	//定位地址
	$(".dining-address-street-after").tap(function() {
		$(this).addClass("rotate");
	});
	
	//点击收藏餐厅
//	$(".sw-collect-dining").tap(function() {
//		if ($("#diningCollects").attr("isslidermove") == "0") {
//			straining(true);
//		}
//	});
	
	//选择城市
	$(".allCities-city").tap(function() {
		if ($("#allCities").attr("isslidermove") == "0") {
			$(".allCities-initial").css("color", "rgb(0, 0, 0)");
			$(".allCities-city").removeClass("chooseActive");
			$(this).addClass("chooseActive");
			$(this).siblings(".allCities-initial").css("color", "rgb(255, 190, 13)");
			$(".address-choose-title-city span").html($(this).attr("target"));
			$(".dining-address-cityProper").attr("data-city", $(this).attr("target"));
			//清空之前区域信息
			$(".swiper-slide-area").remove();
			//获取当前城市的区县
			getArea();
		}
	});
	
	//选择区县
	$(".swiper-slide-area").tap(function() {
		if ($("#areas").attr("isslidermove") == "0") {
			$(".swiper-slide-area").removeClass("chooseActive");
			$(this).addClass("chooseActive");
			$(".address-choose-title-area span").html($(this).html());
			//提交到头部栏
			$(".dining-address-cityProper p").html($(".address-choose-title-city span").html() + "-" + $(".address-choose-title-area span").html());
		}
	});
	
	//1.3 新增
	//点击效果
	$(".sw-navbar").on({
		touchstart: function() {
			$(this).css("background", "rgb(255, 255, 255, 0.1)");
		},
		touchend: function() {
			$(this).css("background", "rgb(255, 255, 255, 0.2)");
		}
	});
	
	
});
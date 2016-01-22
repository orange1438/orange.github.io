//new swiper - 收藏餐厅
var swiperCollectDining = new Swiper('#diningCollects', {
	pagination: '.dining-collects-pagination',
	spaceBetween: 10,
	onSliderMove: function(swiper, event) {
		$("#diningCollects").attr("isSliderMove", "1");
	},
	onTransitionEnd: function(swiper) {
		$("#diningCollects").attr("isSliderMove", "0");
	}
});
//收藏餐厅相关定位
$(".dining-collects-pagination").css("bottom", "0px");

//new swiper - 城市候选 allCities
var swiperCities = new Swiper('#allCities', {
	scrollbar: '.swiper-scrollbar-allCities',
	direction: 'vertical',
	slidesPerView: 'auto',
	freeMode: true,
	onSliderMove: function(swiper, event) {
		$("#allCities").attr("isSliderMove", "1");
	},
	onTransitionEnd: function(swiper) {
		$("#allCities").attr("isSliderMove", "0");
	}
});

//new swiper - 市区候选areas
var swiperAreas = new Swiper('#areas', {
	scrollbar: '.swiper-scrollbar-areas',
	direction: 'vertical',
	slidesPerView: 'auto',
	freeMode: true,
	onSliderMove: function(swiper, event) {
		$("#areas").attr("isSliderMove", "1");
	},
	onTransitionEnd: function(swiper) {
		$("#areas").attr("isSliderMove", "0");
	}
});

setInterval(function() {
	$("#diningCollects").attr("isSliderMove", "0");
	$("#allCities").attr("isSliderMove", "0");
	$("#areas").attr("isSliderMove", "0");
}, 300);




var appendDining = function(restaurantId, restaurantName, brandName, isCollect, isOOS, labels, distance) {
	brandName = checkStrLength(brandName, 0, 8);
	var str = "<div class='dinings-dining' data-restaurantId='"+ restaurantId +"' data-restaurantName='"+ restaurantName +"' data-brandName='"+ brandName +"' data-isCollect='"+ isCollect +"' data-isOOS='"+ isOOS +"'>";
	str += "<div class='dinings-dining-left'><p class='dining-brandName'>"+ brandName +"</p></div>";
	str += "<div class='dinings-dining-center'><p class='dining-restaurantName'>"+ restaurantName +"</p>";
	str += "<p class='dining-tabs'>";
	//循环添加标签
	for (var i = 0; i < labels.length; i++) {
		switch (labels[i].name){
			case "折":
				str += "<span class='dining-tabs-discount'>折</span>";
				break;
			case "新":
				str += "<span class='dining-tabs-new'>新</span>";
				break;
			case "惠":
				str += "<span class='dining-tabs-preferential'>惠</span>";
				break;
		}
	}
	str += "</p></div>";
	str += "<div class='dinings-dining-right'><div class='dining-collect'>";
	//判断用户是否收藏
	if (isCollect == "true") {
		//已收藏
		str += "<img src='img/icon-06.png' width='100%' />";
	} else{
		//未收藏
		str += "<img src='img/icon-07.png' width='100%' />";
	}
	//已收藏的数量
	str += "<p class='dining-collect-num hide'>500</p>";
	str += "</div></div>";
	//用户距离
	str += "<div class='dining-distance'><p><span>"+ distance +"</span>m</p></div>";
	//是否打烊
	if (isOOS == "0") {
		str += "<div class='dining-OOS hide'><img src='img/icon-33.png' /></div>";
	} else {
		str += "<div class='dining-OOS'><img src='img/icon-33.png' /></div>";
	}
	str += "</div>";
	$(".dinings").append(str).find(".dining-collect").unbind().on("touchstart", function() {
		if (event.targetTouches.length == 1) {
			var scrTop = document.body.scrollTop;
			x = event.touches[0].pageX;
			y = scrTop > 110 ? (event.touches[0].pageY - scrTop) : (event.touches[0].pageY - scrTop);
			var restaurantId = $(this).parents(".dinings-dining").attr("data-restaurantid");
			var isCollect = $(this).parents(".dinings-dining").attr("data-isCollect");
			if (isCollect == "false") {
				var sName = "fly" + randomNum(1000);
				var str = "<div class='dining-fly' id='"+ sName +"' style='top:"+ y +"px; left:"+ x +"px'><img src='img/icon-06.png' width='100%' /></div>"
				$("body").append(str);
				var endX = 180;
				var endY = scrTop > 110 ? 0 : 100;
				flyMove(sName, x, y, endX, endY);
			}
		}
	});
}

var appendCities = function() {
	var str = "";
	str += "";
}

var deleteCollect = function(id) {
	for (var i = 0; i < $(".sw-collect-dining").length; i++) {
		if ($(".sw-collect-dining").eq(i).attr("data-id") == id) {
			var tempIndex = i;
			var sName = lyConfirm("爹，确定将<br />“" + $(".sw-collect-dining").eq(i).find("h4").html() + "”<br /> 移除收藏");
			$(sName).find("button").on("touchend", function() {
				if ($(this).index() == 1) {
					//提交删除

					//成功执行
					$(".sw-collect-dining").eq(tempIndex).remove();
					var activeIndex = swiperCollect.activeIndex;
					var diningLength = $("#collectDinings").find(".swiper-slide").eq(activeIndex).find(".sw-collect-dining").length;
					if (diningLength === 0) {
						swiperCollect.removeSlide(activeIndex);
					}
					//跳转到删除页
					swiperCollect.slideTo(activeIndex);
					upPrompt("操作成功");
				}
			});
		}
	}
}

//删除收藏餐厅数据
var delCollectDining = function(id) {
//	var result = readBackup();
//	if (result !== undefined) {
		for (var i = 0; i < result.length; i++) {
			if (result[i][0] == id) {
				result.splice(i, 1);
				return result;
			}
		}
//	}
//	return false;
}

var appendCollect = function(restaurantId, restaurantName, brandName, isCollect, userMap, isOOS) {
	brandName = shortStrLength(brandName, 0, 4);
	var str = "<div class='sw-collect-dining' style='margin:0 "+ Math.ceil(($("#diningCollects").width() - 200) / 8) +"px' data-restaurantId='"+ restaurantId +"' data-restaurantName='"+ restaurantName +"' data-brandName='"+ brandName +"' data-isCollect='"+ isCollect +"' data-isOOS='"+ isOOS +"'>";
	str += "<div class='sw-collect-dining-restaurantName'><p>"+ brandName +"</p></div>";
	if (isOOS == "1") {
		str += "<div class='sw-collect-dining-isOOS'><img src='img/icon-33.png' /></div>";
	} else {
		str += "<div class='sw-collect-dining-isOOS'><img src='img/icon-33.png' /></div>";
	}
	//1.3 改
	//判断是否在执行删除操作
	if ($(".dining-collects-remove").attr("target") == "true") {
		str += "<div class='sw-collect-dining-remove'></div>";
	} else {
		str += "<div class='sw-collect-dining-remove hide'></div>";
	}
	str += "</div>";
	//获取最后一页
	var lastLength = swiperCollectDining.slides.length;
	//判断当前页是否已添加满
	var lastDiningLength = $("#diningCollects").find(".swiper-slide").eq(lastLength - 1).find(".sw-collect-dining").length;
	if (lastDiningLength == 4 || lastLength == 0) {
		swiperCollectDining.appendSlide('<div class="swiper-slide"></div>');
		lastLength++;
	}
	$("#diningCollects").find(".swiper-slide").eq(lastLength - 1).append(str).unbind().tap(function() {
		if ($("#diningCollects").attr("isslidermove") == "0") {
			console.log($(this).find(".sw-collect-dining-restaurantName p").html())
		}
	});
}

//1.3 改
var editCollect = function() {
	if ($(".dining-collects-remove").attr("target") == "false") {
//		出现删除
		$(".sw-collect-dining-remove").removeClass("hide");
		$(".dining-collects-remove").attr("target", "true");
	} else {
//		隐藏删除
		$(".sw-collect-dining-remove").addClass("hide");
		$(".dining-collects-remove").attr("target", "false");
	}
}

var changeCollect = function(id, temp) {
	if (temp == "add") {
		$(".dinings-dining").each(function(i) {
			if ($(this).attr("data-restaurantid") == id) {
				$(this).attr("data-iscollect", "true");
				$(this).find(".dining-collect img").attr("src", "img/icon-06.png");
				$(this).find(".dining-collect").addClass("scale-enlarge");
				setTimeout(function() {
					$(".dinings-dining").eq(i).find(".dining-collect").removeClass("scale-enlarge");
				}, 300);
				return;
			}
		});
	} else {
		$(".dinings-dining").each(function() {
			if ($(this).attr("data-restaurantid") == id) {
				$(this).attr("data-iscollect", "false");
				$(this).find(".dining-collect img").attr("src", "img/icon-07.png");
				return;
			}
		});
	}
}

var addressCandidate = function() {
	if ($(".dining-address-cityProper").attr("target") == "false") {
//		开启
		$(".dining-address-cityProper-before").css("transform", "rotate(180deg)");
		var city = $(".dining-address-cityProper").attr("data-city");
		$(".allCities-city").each(function() {
			if (city == $(this).attr("target")) {
				$(".allCities-initial").css("color", "rgb(0, 0, 0)");
				$(".allCities-city").removeClass("chooseActive");
				$(this).addClass("chooseActive");
				$(this).siblings(".allCities-initial").css("color", "rgb(255, 190, 13)");
			}
		});
		if(isAndroid()) {
			$(".address-choose").removeClass("hide").animate({
				top: '130px',
				opacity: 1
			}, 300, 'ease-out', function() {
				document.addEventListener("touchmove", a, false);
				$(".dining-address-cityProper").attr("target", "true");
			});
		} else {
			$(".address-choose").removeClass("hide").animate({
				translateY: '-50px',
				opacity: 1
			}, 300, 'ease-out', function() {
				document.addEventListener("touchmove", a, false);
				$(".dining-address-cityProper").attr("target", "true");
			});
		}
		//选中定位的城市及区域
		$(".swiper-slide-allCities-city").each(function() {
			if ($(".dining-address-cityProper").attr("data-city") == $(this).html()) {
				$(this).addClass("chooseActive");
				return;
			}
		});
		$(".swiper-slide-area").each(function() {
			if ($(".dining-address-cityProper").attr("data-area") == $(this).html()) {
				$(this).addClass("chooseActive");
				return;
			}
		});
		
		swiperCities.onResize();
		swiperAreas.onResize();
	} else {
//		关闭
		$(".dining-address-cityProper-before").css("transform", "rotate(0deg)");
		if (isAndroid()) {
			$(".address-choose").animate({
				top: '180px',
				opacity: 0
			}, 300, 'ease-out', function() {
				$(".address-choose").addClass("hide");
				document.removeEventListener("touchmove", a, false);
				$(".dining-address-cityProper").attr("target", "false");
			});
		} else {
			$(".address-choose").animate({
				translateY: '50px',
				opacity: 0
			}, 300, 'ease-out', function() {
				$(".address-choose").addClass("hide");
				document.removeEventListener("touchmove", a, false);
				$(".dining-address-cityProper").attr("target", "false");
			});
		}
		
	}
}

var getArea = function() {
//	$.ajax({
//		type:"get",
//		url:"",
//		async:true
//	});
	//获取数据并append
//	appendArea(dataArea);
}

var appendArea = function(dataArea) {
	//操作区域信息
	for (var i = 0; i < dataArea.length; i++) {
		var str = "<p class='swiper-slide-area'>" + dataArea[i] + "</p>";
		$(".swiper-slide-areas").append(str);	
	}
	swiperAreas.onResize();
}

//第一次使用的用户的提醒
var first = function() {
	var pointOutStr = "<div class='dining-pointOut'>";
	pointOutStr += "<div class='dining-pointOut-img'>";
	pointOutStr += "<img src='img/img-pointOut.png' width='100%' />";
	pointOutStr += "<div class='dining-pointOut-btn'><button type='button'>确定</button></div>";
	pointOutStr += "<div class='dining-pointOut-Countdown'><p>3</p></div></div></div>";
	$("body").append(pointOutStr).find(".dining-pointOut").addClass("fadeInLessen").find(".dining-pointOut-btn button").on({
		touchstart: function() {
			$(this).css("background", "rgb(228, 88, 39)");
		},
		touchend: function() {
			$(this).css("background", "rgb(237, 143, 37)");
			$(".dining-pointOut").addClass("hide");
			$(".dining-pointOut").remove();
		}
	});

	var pointOut = 3,
	pointOutTimer = setInterval(function() {
		pointOut--;
		$(".dining-pointOut-Countdown p").html(pointOut);
		if (pointOut == 0) {
			$(".dining-pointOut-Countdown").addClass("hide");
			$(".dining-pointOut-btn button").css("border-color", "rgb(228, 88, 39)");
			$(".dining-pointOut-btn button").css("background", "rgb(237, 143, 37)");
			clearInterval(pointOutTimer);
		}
	}, 1000);
}
	

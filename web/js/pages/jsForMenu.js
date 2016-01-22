$(function($) {

//测试json
var jsons = [{
	"categoryId": "97",
	"categoryName": "小食",
	"menuInfoResultList": [{
		"endSupplyTime": "18:00",
		"foodId": 1056,
		"foodName": "康师傅红烧牛肉面康师傅红烧牛肉面(桶)",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 38,
		"resturantId": "00890012",
		"sortNum": 1,
		"startSupplyTime": "10:00",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1057,
		"foodName": "康师傅泡椒牛肉面(桶)",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 38,
		"resturantId": "00890012",
		"sortNum": 2,
		"startSupplyTime": "10:00",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1058,
		"foodName": "苹果(个)",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 30,
		"resturantId": "00890012",
		"sortNum": 3,
		"startSupplyTime": "00:00",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1060,
		"foodName": "咖啡（条）",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 26,
		"resturantId": "00890012",
		"sortNum": 5,
		"startSupplyTime": "10:00",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1062,
		"foodName": "苏打饼干（2小袋）",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 7,
		"startSupplyTime": "00:00",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1075,
		"foodName": "陈皮梅软糖(3颗)",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 16,
		"startSupplyTime": "00:00",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1081,
		"foodName": "童年记忆南瓜子3袋",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 15,
		"resturantId": "00890012",
		"sortNum": 22,
		"startSupplyTime": "10:00",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1098,
		"foodName": "牛乳饼两袋",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 38,
		"startSupplyTime": "00:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1103,
		"foodName": "新疆葡萄干3小包",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 43,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1118,
		"foodName": "瑞士卷",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 58,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1121,
		"foodName": "徐福记米果卷（3）",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 61,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1552,
		"foodName": "童年记忆葵瓜子3袋",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 63,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1590,
		"foodName": "达利园软面包",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 65,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1591,
		"foodName": "核桃黑芝麻糊",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 20,
		"resturantId": "00890012",
		"sortNum": 66,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1823,
		"foodName": "麦片巧克力",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 68,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1825,
		"foodName": "凤凰卷",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 69,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1932,
		"foodName": "果丹皮",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 70,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1934,
		"foodName": "大红枣（干）2颗",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 72,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 2268,
		"foodName": "米花糖",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 78,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 2270,
		"foodName": "旺旺仙贝2个",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 79,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 2272,
		"foodName": "杂蜜/怪味胡豆",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 80,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 2277,
		"foodName": "葱油饼干2袋",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 82,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 2278,
		"foodName": "燕麦片",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 10,
		"resturantId": "00890012",
		"sortNum": 83,
		"startSupplyTime": "10:15",
		"state": 0,
		"version": 0
	}],
	"restaurantId": "00890012",
	"sortNum": 0,
	"state": 0,
	"version": 2391
}, {
	"categoryId": "98",
	"categoryName": "饮料",
	"menuInfoResultList": [{
		"endSupplyTime": "18:00",
		"foodId": 1067,
		"foodName": "怡宝矿泉水555ml",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 13,
		"resturantId": "00890012",
		"sortNum": 0,
		"startSupplyTime": "10:00",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1070,
		"foodName": "雪碧（听）",
		"foodType": "0",
		"isFavorties": 0,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 20,
		"resturantId": "00890012",
		"sortNum": 3,
		"startSupplyTime": "10:00",
		"state": 0,
		"version": 0
	}, {
		"endSupplyTime": "18:00",
		"foodId": 1096,
		"foodName": "宜简无汽苏打水360ml",
		"foodType": "0",
		"isFavorties": 1,
		"isQueHuo": "0",
		"menuActivityInfo": null,
		"price": 21,
		"resturantId": "00890012",
		"sortNum": 4,
		"startSupplyTime": "10:30",
		"state": 0,
		"version": 0
	}],
	"restaurantId": "00890012",
	"sortNum": 1,
	"state": 0,
	"version": 184
}];

jsons = eval(jsons);

	//获取菜单信息
//	getJson();
	//解析
	analyzeJsons(jsons);
	
	//menu初始化
	win_load();
    
    //点击分类
    $(".menu-classify-mess").tap(function() {
    	if ($("#classify").attr("isSliderMove") == "0") {
    		$(".menu-classify-mess").removeClass("classify-active");
	    	$(this).addClass("classify-active");
	    	var tipHeight = 0;
	    	//跳到当前菜品分类
	    	if ($(this).attr("data-categoryid") == "collectClassify") {
	    		reAppendFood(foodArray, 1);
//	    		dishesSwiper.onResize();
	    		scrollToWhere(0);
//		    	$("#dishes .swiper-wrapper").animate({transform: "translate3d(0px, 0px, 0px);"}, 300, 'ease-in-out');
	    	} else {
	    		reAppendFood(foodArray, 0);
//		    	dishesSwiper.onResize();
	    		var foodClassifyId = "classify" + $(this).attr("data-categoryid");
	    		tipHeight = getTipHeight(foodClassifyId);
	    		scrollToWhere(tipHeight);
		    }
    	}
    });
    
    //收藏菜品
    $(".menu-food-name img").tap(function() {
    	collectFood($(this).parents(".menu-food").attr("foodId"));
    });
    
    //选择菜品
    $(".menu-food-btn b").tap(function() {
    	if ($("#dishes").attr("isSliderMove") == "1") return;
	    var foodid = $(this).parents(".menu-food").attr("foodid");
    	if ($(this).index() == 0) {
    		//减少菜品数量
    		//获取并更改当前用户选择的菜品的数量
    		var num = minusPayFood(foodid);
    		$(this).siblings(".menu-food-btn-num").html(num);
    		if (num == 0) {
    			$(this).addClass("hide");
	    		$(this).siblings(".menu-food-btn-num").addClass("hide");
    		}
    		//更改小图标数量
	    	var iconNum = chageIconNum(-1);
	    	if (iconNum == 0) {
	    		//用户未选择菜品
	    		isCanPay(0);
	    	} else {
	    		//判断用户是否超出限额
	    		if (getTotal() > norm) {
	    			//超出限额
	    			isCanPay(-1);
					upPrompt("您已超出限额，您将不能支付");
	    		} else {
	    			//未超出限额
	    			isCanPay(1);
	    		}
	    	}
    	} else {
    		//增加菜品数量
    		$(".menu-footer-trolley").addClass("scale-enlarge");
	    	setTimeout(function() {
	    		$(".menu-footer-trolley").removeClass("scale-enlarge");
	    	}, 250);
	    	
	    	//获取菜品信息
	    	var foodName = $(this).parents(".menu-food").attr("foodName");
			var foodPrice = $(this).parents(".menu-food").attr("foodPrice");
			var foodType = $(this).parents(".menu-food").attr("foodType");
			var discount = $(this).parents(".menu-food").attr("discount");
			var giveBeanCoins = $(this).parents(".menu-food").attr("giveBeanCoins");
	    	var num = addPayFood(foodid, foodName, foodPrice, foodType, discount, giveBeanCoins);
	    	$(this).siblings(".menu-food-btn-num").html(num);
	    	if (num == 1) {
	    		//减号与数量出现
		    	$(this).siblings(".menu-food-btn-subtract").removeClass("hide");
		    	$(this).siblings(".menu-food-btn-num").removeClass("hide");
	    	}
	    	//判断用户是否超出限额
	    	if (getTotal() > norm) {
				//超出限额
				isCanPay(-1);
				upPrompt("您已超出限额，您将不能支付");
			} else {
				//未超出限额
				isCanPay(1);
			}
	    	
	    	//更改小图标数量
	    	chageIconNum(1);
    	}
    });
    
    //增加数量
    $(".menu-food-add").tap(function() {
    	if ($("#dishes").attr("isSliderMove") == "1") return;
	    var foodid = $(this).parents(".menu-food").attr("foodid");
    	$(".menu-footer-trolley").addClass("scale-enlarge");
		setTimeout(function() {
			$(".menu-footer-trolley").removeClass("scale-enlarge");
		}, 250);
		
		//获取菜品信息
		var foodName = $(this).parents(".menu-food").attr("foodName");
		var foodPrice = $(this).parents(".menu-food").attr("foodPrice");
		var foodType = $(this).parents(".menu-food").attr("foodType");
		var discount = $(this).parents(".menu-food").attr("discount");
		var giveBeanCoins = $(this).parents(".menu-food").attr("giveBeanCoins");
		var num = addPayFood(foodid, foodName, foodPrice, foodType, discount, giveBeanCoins);
		$(this).parents(".menu-food").find(".menu-food-btn-num").html(num);
		if (num == 1) {
			//减号与数量出现
			$(this).parents(".menu-food").find(".menu-food-btn-subtract").removeClass("hide");
			$(this).parents(".menu-food").find(".menu-food-btn-num").removeClass("hide");
		}
		//判断用户是否超出限额
		if (getTotal() > norm) {
			//超出限额
			isCanPay(-1);
			upPrompt("您已超出限额，您将不能支付");
		} else {
			//未超出限额
			isCanPay(1);
		}
		
		//更改小图标数量
		chageIconNum(1);
    });
    
    //选择打包
    $(".menu-footer-pack b, .menu-footer-pack span").tap(function() {
    	if ($(".menu-footer-pack").attr("target") == "true") {
    		//取消打包
    		$(".menu-footer-pack-icon img").attr("src", "img/icon-36.png");
    		$(".menu-footer-pack").attr("target", "false");
    	} else{
    		//选择打包
    		$(".menu-footer-pack-icon img").attr("src", "img/icon-37.png");
    		$(".menu-footer-pack").attr("target", "true");
    	}
    	getTotal();
    });
    
    //点击购物车
    $(".menu-footer-trolley").tap(function() {
    	trolleySwitch();
    });
    
    //点击背景关闭
    $(".menu-footer-bg").tap(function() {
    	trolleySwitch();
    });
    
    //清空购物车
    $(".menu-footer-title-clear").tap(function() {
    	trolleySwitch();
    	for (var i = 0; i < foodArray.length; i++) {
    		foodArray[i].foodNum = 0;
    	}
    	$(".menu-food-btn .menu-food-btn-num").html("0");
    	$(".menu-food-btn .menu-food-btn-num").addClass("hide");
    	$(".menu-food-btn .menu-food-btn-subtract").addClass("hide");
    	isCanPay(0);
    });
    
    //支付
    $("#payBtn").tap(function() {
//  	console.log(dishesSwiper.translate)
    	 console.log($(window).height())
    });
    
    //1.3 改
    $(".menu-footer-trolley").on({
    	touchstart: function() {
    		var payFoodLength = 0;
			for (var i = 0; i < foodArray.length; i++) {
				if (foodArray[i].foodNum != 0) {
					payFoodLength++;
				}
			}
			if (payFoodLength > 0) {
				$(this).css("background", "rgb(223, 163, 0)");
			}
    	},
    	touchend: function() {
    		var payFoodLength = 0;
			for (var i = 0; i < foodArray.length; i++) {
				if (foodArray[i].foodNum != 0) {
					payFoodLength++;
				}
			}
			if (payFoodLength > 0) {
				$(this).css("background", "rgb(255, 190, 13)");
			}
    	}
    });
    
    $(".menu-food-btn b").on({
     	touchstart: function() {
			if ($("#footerFoods").attr("isSliderMove") == "0") {
				if ($(this).index() == 0) {
					$(this).css("background", "url(img/icon-32.png) no-repeat");
				} else {
					$(this).css("background", "url(img/icon-30.png) no-repeat");
				}
				$(this).css("background-size", "cover");
			}
		},
		touchend: function() {
			if ($("#footerFoods").attr("isSliderMove") == "0") {
				if ($(this).index() == 0) {
					$(this).css("background", "url(img/icon-31.png) no-repeat");
				} else {
					$(this).css("background", "url(img/icon-29.png) no-repeat");
				}
				$(this).css("background-size", "cover");
			}
		}
    });
    
    $("#payBtn").on({
    	touchstart: function() {
    		if ($(this).attr("target") == "true") {
    			$(this).css("background", "rgb(218, 108, 62)");
    		}
    	},
    	touchend: function() {
    		if ($(this).attr("target") == "true") {
    			$(this).css("background", "rgb(255, 111, 51)");
    		}
    	}
    });
	
	//连动右边滚动，左边到相应的分类
    $("#dishes").on("touchend", function() {
    	var nowScrollTop = document.body.scrollTop;
    	var beginTop = 0,
    		endTop = 0;
    	$(".menu-dishes-classify").each(function(i) {
			beginTop = getTipHeight($(this).attr("id")) - ($(window).height() - 83 - $(".menu-footer").height());
    		endTop = beginTop + $(this).height();
    		if (nowScrollTop > beginTop && nowScrollTop <= endTop) {
    			var dataCategoryid = $(".menu-dishes-classify").eq(i).attr("id").split("classify")[1];
    			$(".menu-classify-mess").each(function() {
    				if ($(this).attr("data-categoryid") == dataCategoryid) {
    					$(".menu-classify-mess").removeClass("classify-active");
    					$(this).addClass("classify-active");
    					return;
    				}
    			});
    		}
    	})
    });
    
});
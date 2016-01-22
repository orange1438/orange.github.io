//限额
var norm = 5000;

//所有菜品的
var food = function(foodId, foodName, price, foodNum, foodType, isFavorties, isQueHuo, discount, beans, classify, categoryName, menuLabels, sortNum, state, startTime, endTime) {
	this.foodId = foodId;
	this.foodName = foodName;
	this.price = parseInt(price);
	this.foodNum = foodNum;
	this.foodType = foodType;
	this.isFavorties = parseInt(isFavorties);
	this.isQueHuo = parseInt(isQueHuo);
	this.discount = parseInt(discount);
	this.beans = parseInt(beans);
	this.menuLabels = menuLabels;
	this.classify = classify;
	this.categoryName = categoryName;
	this.sortNum = parseInt(sortNum);
	this.state = state;
	this.startTime = parseInt(startTime);
	this.endTime = parseInt(endTime);
}

var getJson = function() {
	//	$.ajax()
	appendMenu(data);
}

//所有菜品
var foodArray = new Array();

//解析json
var analyzeJsons = function(data) {
	var classifyStr = "";
	var collects = 0;
	for (var i = 0; i < data.length; i++) {
		classifyStr += "<p class='menu-classify-mess' data-categoryId='"+ data[i].categoryId +"'>"+ data[i].categoryName +"</p>";
		var dishes = data[i].menuInfoResultList;
		for (var j = 0; j < dishes.length; j++) {
			var food_discount = 100, //折扣
				food_beans = 0, //赠送豆币数
				foodNum = 0, //数量
				allMenuLabels = [], //小标签
				menuActivityInfo = dishes[j].menuActivityInfo,
				startTime = "", //菜品开始贩卖时间
				endTime = ""; //菜品结束贩卖时间
			if (menuActivityInfo != null) {
				food_discount = menuActivityInfo.discount || 100;
				food_beans = menuActivityInfo.currencyBeans || 0;
				allMenuLabels = menuActivityInfo.menuLabels;
			}
			//拼接时间
			dishes[j].startSupplyTime = dishes[j].startSupplyTime.split(":");
			for (var m = 0; m < (dishes[j].startSupplyTime).length; m++) {
				startTime += (dishes[j].startSupplyTime)[m];
			}
			startTime += "00";
			dishes[j].endSupplyTime = dishes[j].endSupplyTime.split(":");
			for (var n = 0; n < (dishes[j].endSupplyTime).length; n++) {
				endTime += (dishes[j].endSupplyTime)[n];
			}
			endTime += "00";
			//判断收藏数量
			if (parseInt(dishes[j].isFavorties) == 1) {
				collects++;
			}
			//push food
			var f = new food();
			f.foodId = dishes[j].foodId;
			f.foodName = dishes[j].foodName;
			f.price = dishes[j].price;
			f.foodNum = foodNum;
			f.foodType = dishes[j].foodType;
			f.isFavorties = dishes[j].isFavorties;
			f.isQueHuo = dishes[j].isQueHuo;
			f.discount = food_discount;
			f.beans = food_beans;
			f.classify = data[i].categoryId;
			f.categoryName = data[i].categoryName;
			f.menuLabels = allMenuLabels;
			f.sortNum = dishes[j].sortNum;
			f.state = dishes[j].state;
			f.startTime = startTime;
			f.endTime = endTime;
			foodArray.push(f);
		}
	}
	reAppendFood(foodArray, 0);
	if (collects > 0) {
		var tempCollectStr = "<p class='menu-classify-mess' data-categoryId='collectClassify'>我的收藏</p>";
		classifyStr = tempCollectStr + classifyStr;
	}
	$("#classify .swiper-slide").append(classifyStr);
}

var getClassifyAddress = function(offsetTop) {
	if ($(".classify-active").attr("data-categoryid") != "collectClassify") {
		var divOffTop = 0,
			lastDivOffTop = 0;
		for (var i = 0; i < $(".menu-dishes-classify").length; i++) {
			if (i > -1) {
				divOffTop += $(".menu-dishes-classify").eq(i).height();
			}
			if (i > 0) {
				lastDivOffTop += $(".menu-dishes-classify").eq(i - 1).height();
			}
			offsetTop = offsetTop * -1;
			offsetTop = offsetTop + $(window).height();
			if (lastDivOffTop <= offsetTop && divOffTop >= offsetTop) {
				var tempId = $(".menu-dishes-classify").eq(i).attr("id").split("classify")[1];
				$(".menu-classify-mess").removeClass("classify-active");
				$(".menu-classify-mess").each(function() {
					if ($(this).attr("data-categoryid") == tempId) {
						$(this).addClass("classify-active");
					}
				});
			}
		}
	}
}

//菜品分类swiper
//var classifySwiper = new Swiper('#classify', {
//	scrollbar: '#classify .swiper-scrollbar',
//	direction: 'vertical',
//	slidesPerView: 'auto',
//	freeMode: true,
//	onSetTranslate: function(swiper) {
//		$("#classify").attr("isSliderMove", "1");
//	}
//});

//菜品swiper
//var dishesSwiper = new Swiper('#dishes', {
//	scrollbar: '#dishes .swiper-scrollbar',
//	direction: 'vertical',
//	slidesPerView: 'auto',
//	freeMode: true,
//	onSetTranslate: function(swiper, event) {
//		$("#dishes").attr("isSliderMove", "1");
//	},
//	onTransitionEnd: function(swiper) {
//		getClassifyAddress(swiper.translate);
//	}
//});

//new swiper - 已选菜品
//var foodsSwiper = new Swiper('#footerFoods', {
//	scrollbar: '#footerFoods .swiper-scrollbar',
//	direction: 'vertical',
//	slidesPerView: 'auto',
//	freeMode: true,
//	onSliderMove: function(swiper, event) {
//		$("#footerFoods").attr("isSliderMove", "1");
//	}
//});

setInterval(function() {
	//	$("#classify").attr("isSliderMove", "0");
	$("#dishes").attr("isSliderMove", "0");
	//	$("#footerFoods").attr("isSliderMove", "0");
}, 300);


//收藏菜品
var collectFood = function(id) {
	$(".menu-food").each(function() {
		if ($(this).attr("foodId") == id) {
			if ($(this).attr("isCollect") == "0") {
				//更改提交

				//更改food数组数据
				for (var i = 0; i < foodArray.length; i++) {
					if (foodArray[i].foodId == parseInt(id)) {
						foodArray[i].isFavorties = 1;
					}
				}

				//收藏菜品
				$(this).find(".menu-food-name img").attr("src", "img/icon-06.png");
				$(this).attr("isCollect", "1");

				//判断是否需要添加收藏类
				var classifyTemp = 0;
				$(".menu-classify-mess").each(function() {
					if ($(this).attr("data-categoryId") == "collectClassify") {
						classifyTemp = 1;
					}
				});
				if (classifyTemp == 0) {
					var tempClassify = "<p class='menu-classify-mess' data-categoryId='collectClassify'>我的收藏</p>";
					tempClassify += $(".swiper-slide-classify").html();
					$(".menu-classify-mess").remove();
					$(".swiper-slide-classify").append(tempClassify).find(".menu-classify-mess").unbind().tap(function() {
						if ($("#classify").attr("isSliderMove") == "0") {
							$(".menu-classify-mess").removeClass("classify-active");
							$(this).addClass("classify-active");
							//判断是否点击的是收藏
							if ($(this).attr("data-categoryId") == "collectClassify") {
								reAppendFood(foodArray, 1);
								scrollToWhere(0);
								//					    		dishesSwiper.onResize();
							} else {
								reAppendFood(foodArray, 0);
								//					    		dishesSwiper.onResize();
								//跳到当前菜品分类
								var foodClassifyId = "classify" + $(this).attr("data-categoryid");
								var tipHeight = getTipHeight(foodClassifyId);
								scrollToWhere(tipHeight);
								//						    	$("#dishes .swiper-wrapper").animate({transform: "translate3d(0px, "+ (-1 * tipHeight) +"px, 0px);"}, 300, 'ease-in-out');
							}
						}
					});
				}
			} else {
				//取消收藏菜品

				//更改提交

				//更改food数组数据
				var collectSum = 0;
				for (var i = 0; i < foodArray.length; i++) {
					if (foodArray[i].foodId == parseInt(id)) {
						foodArray[i].isFavorties = 0;
					}
					if (foodArray[i].isFavorties == 1) {
						collectSum++;
					}
				}

				$(this).find(".menu-food-name img").attr("src", "img/icon-07.png");
				$(this).attr("isCollect", "0");

				//判断是否在收藏分类里
				if ($(".classify-active").attr("data-categoryId") == "collectClassify") {
					$("#collectClassify .menu-food").each(function() {
						if ($(this).attr("foodId") == id) {
							$(this).remove();
						}
					});
				}

				//判断是否没有收藏

				if (collectSum == 0) {
					$(".menu-classify-mess").each(function() {
						if ($(this).attr("data-categoryId") == "collectClassify") {
							$(this).remove();
							$(".menu-classify-mess").first().addClass("classify-active");
							reAppendFood(foodArray, 0);
						}
					});
				}
				//				dishesSwiper.onResize();
			}
		}
	});
}

//重新获取并添加菜单列表
var reAppendFood = function(data, dataType) {
	var dataTemp = "";
	//判断是否是收藏部分
	var str = "";
	for (var i = 0; i < data.length; i++) {
		if (dataType == 1) {
			//是收藏
			if (i == 0) {
				str += "<div class='menu-dishes-classify' id='collectClassify'><div class='menu-dishes-classify-title'><p>我的收藏</p></div>";
			}
			if (data[i].isFavorties != 1) {
				continue;
			}
		} else {
			if (i == 0) {
				str += "<div class='menu-dishes-classify' id='classify" + data[i].classify + "'><div class='menu-dishes-classify-title'><p>" + data[i].categoryName + "</p></div>";
				dataTemp = data[i].classify;
			} else if (dataTemp != data[i].classify) {
				dataTemp = data[i].classify;
				str += "</div><div class='menu-dishes-classify' id='classify" + data[i].classify + "'><div class='menu-dishes-classify-title'><p>" + data[i].categoryName + "</p></div>";
			}
		}

		str += "<div class='menu-food' foodId='" + data[i].foodId + "' foodName='" + data[i].foodName + "' foodPrice='" + data[i].price + "' foodType='" + data[i].foodType + "' discount='" + data[i].discount + "' giveBeanCoins='" + data[i].beans + "' menuLabels='" + data[i].menuLabels + "' classify='" + data[i].categoryId + "' isCollect='" + data[i].isFavorties + "' isQueHuo='" + data[i].isQueHuo + "' sortNum='" + data[i].sortNum + "' state='" + data[i].state + "' startSupplyTime='" + data[i].startTime + "' endSupplyTime='" + data[i].endTime + "'>";
		//判断用户是否收藏该菜品
		if (data[i].isFavorties == 1) {
			str += "<p class='menu-food-name'><img src='img/icon-06.png' width='100%' /><span>" + data[i].foodName + "</span></p>";
		} else {
			str += "<p class='menu-food-name'><img src='img/icon-07.png' width='100%' /><span>" + data[i].foodName + "</span></p>";
		}
		//判断该菜品的优惠情况
		str += "<p class='menu-food-preferential'>";
		//判断是否有折扣
		if (data[i].discount != 100) {
			str += "<i class='menu-food-preferential-discount'><span>" + (data[i].discount / 10) + "</span>折</i>&nbsp;&nbsp;";
		}
		//判断是否送豆币
		if (data[i].beans != 0) {
			str += "<i class='menu-food-preferential-beans'>送<span>" + data[i].beans + "</span>豆币</i>";
		}
		str += "&nbsp;</p>";
		str += "<p class='menu-food-price'>&yen;<span>" + (data[i].price / 100) + "</span><small>/份</small></p>";
		str += "<p class='menu-food-labs'>";
		//循环该菜品的标签
		if (data[i].menuLabels.length > 0) {
			for (var l = 0; l < data[i].menuLabels.length; l++) {
				switch (data[i].menuLabels[l].name) {
					case "折":
						dishesStr += "<span class='menu-food-discount'>折</span>";
						break;
					case "新":
						dishesStr += "<span class='menu-food-new'>新</span>";
						break;
					case "热":
						dishesStr += "<span class='menu-food-hot'>热</span>";
						break;
					default:
						break;
				}
			}
		}
		str += "<div class='menu-food-add'></div>";
		//判断是否选择了菜品
		if (data[i].foodNum != 0) {
			str += "<p class='menu-food-btn'><b class='menu-food-btn-subtract'></b><span class='menu-food-btn-num'>" + data[i].foodNum + "</span><b class='menu-food-btn-add'></b></p>";
		} else {
			str += "<p class='menu-food-btn'><b class='menu-food-btn-subtract hide'></b><span class='menu-food-btn-num hide'>0</span><b class='menu-food-btn-add'></b></p>";
		}
		//判断是否不在贩卖时间
		var nowTime = parseInt($(".menu-dishes").attr("nowtime"));
		if (data[i].startTime > nowTime || data[i].endTime < nowTime) {
			//不再贩卖时间
			str += "<div class='menu-food-notTime'><img src='img/icon-34.png' /></div>";
		} else {
			str += "<div class='menu-food-notTime hide'><img src='img/icon-34.png' /></div>";
			//判断是否缺货
			if (data[i].isQueHuo == 1) {
				//缺货
				str += "<div class='menu-food-OOS'><img src='img/icon-35.png' /></div>";
			} else {
				str += "<div class='menu-food-OOS hide'><img src='img/icon-35.png' /></div>";
			}
		}
		str += "</div>";
	}
	str += "</div>";
	$(".menu-dishes-classify").remove();
	$("#dishes .swiper-slide").append(str).find(".menu-food-name img").unbind().tap(function() {
		//绑定收藏
		collectFood($(this).parents(".menu-food").attr("foodId"));
	}).parents(".menu-food").find(".menu-food-btn b").unbind().tap(function() {
		//绑定点餐
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
			var num = addPayFood(foodid);
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
	}).on({
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
	}).parents(".menu-food").find(".menu-food-add").unbind().tap(function() {
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
}

//添加菜品到购物车
var addPayFood = function(foodId) {
	for (var i = 0; i < foodArray.length; i++) {
		if (foodArray[i].foodId == foodId) {
			return ++foodArray[i].foodNum;
		}
	}
}

//减少购物车的菜品
var minusPayFood = function(foodId) {
	for (var i = 0; i < foodArray.length; i++) {
		if (foodArray[i].foodId == foodId) {
			return --foodArray[i].foodNum;
		}
	}
}

//更改购物车圆点数量
var chageIconNum = function(temp) {
	var iconNum = parseInt($(".menu-footer-trolley-icon").html());
	if (iconNum < 99) {
		iconNum = parseInt(temp) + iconNum;
		if (iconNum < 0) {
			upPrompt("您没有点任何菜品！");
			iconNum = 0;
		}
		$(".menu-footer-trolley-icon").html(iconNum);
		return iconNum;
	} else {
		upPrompt("您点的数量太多了！");
		return iconNum;
	}
}

//获取用户已点餐的总额
var getTotal = function() {
	var totle = 0;
	for (var i = 0; i < foodArray.length; i++) {
		if (foodArray[i].foodNum > 0) {
			totle += foodArray[i].foodNum * foodArray[i].price;
		}
	}
	//判断用户是否打包
	if ($(".menu-footer-pack").attr("target") == "true") {
		var packPrice = parseInt($(".menu-footer-pack").attr("packPrice"));
		var allPrice = (totle + packPrice) / 100;
		$(".menu-footer-pay span").html(allPrice);
	} else {
		var allPrice = totle / 100;
		$(".menu-footer-pay span").html(allPrice);
	}
	return totle;
}

/*
 * 改变用户支付状态：payType
 * -1：已点餐，超出限额，不能支付
 * 0：未点餐，不能支付；
 * 1：已点餐，未超出限额，可以支付
 */
var isCanPay = function(payType) {
	switch (parseInt(payType)) {
		case -1:
			$("#payBtn").attr("target", "false");
			$("#payBtn").removeClass("sw-btn-orangeRed");
			$("#payBtn").addClass("sw-btn-hoary");
			$(".menu-footer-pay h3").removeClass("hide");
			$(".menu-footer-pay h3").css("color", "rgb(215, 215, 215)");
			$(".menu-footer-pay h4").addClass("hide");
			$(".menu-footer-trolley").css("background", "rgb(215, 215, 215)");
			$(".menu-footer-trolley-icon").css("background", "rgb(215, 215, 215)");
			$(".menu-classify").css("padding-bottom", "172px");
			$(".menu-dishes").css("padding-bottom", "90px");
			$(".menu-footer-pack").removeClass("hide").animate({
				height: '40px'
			}, 300, 'ease-in-out', function() {
				$(".menu-footer").css("height", "90px");
				$(".menu-dishes").css("padding-bottom", "172px");
			});
			//			classifySwiper.onResize();
			//			dishesSwiper.onResize();
			break;
		case 0:
			$("#payBtn").attr("target", "false");
			$("#payBtn").removeClass("sw-btn-orangeRed");
			$("#payBtn").addClass("sw-btn-hoary");
			$(".menu-footer-pay h3").addClass("hide");
			$(".menu-footer-pay h4").removeClass("hide");
			$(".menu-footer-trolley").css("background", "rgb(215, 215, 215)");
			$(".menu-footer-trolley-icon").css("background", "rgb(215, 215, 215)");
			$(".menu-footer-trolley-icon").html("0");
			$(".menu-footer-pack").attr("target", "false");
			$(".menu-footer-pack-icon img").attr("src", "img/icon-36.png");
			$(".menu-classify").css("padding-bottom", "132px");
			$(".menu-dishes").css("padding-bottom", "50px");
			$(".menu-footer-pack").animate({
				height: '0'
			}, 300, 'ease-in-out', function() {
				$(".menu-footer-pack").addClass("hide");
				$(".menu-footer").css("height", "50px");
				$(".menu-dishes").css("padding-bottom", "50px");
			});
			//			classifySwiper.onResize();
			//			dishesSwiper.onResize();
			break;
		case 1:
			$("#payBtn").attr("target", "true");
			$("#payBtn").removeClass("sw-btn-hoary");
			$("#payBtn").addClass("sw-btn-orangeRed");
			$(".menu-footer-pay h3").removeClass("hide");
			$(".menu-footer-pay h3").css("color", "rgb(255, 111, 51)");
			$(".menu-footer-pay h4").addClass("hide");
			$(".menu-footer-trolley").css("background", "rgb(255, 190, 13)");
			$(".menu-footer-trolley-icon").css("background", "rgb(255, 0, 0)");
			$(".menu-classify").css("padding-bottom", "172px");
			$(".menu-dishes").css("padding-bottom", "90px");
			$(".menu-footer-pack").removeClass("hide").animate({
				height: '40px'
			}, 300, 'ease-in-out', function() {
				$(".menu-footer").css("height", "90px");
				$(".menu-dishes").css("padding-bottom", "90px");
			});
			//			classifySwiper.onResize();
			//			dishesSwiper.onResize();
			break;
	}
}

//开启关闭购物车
var trolleySwitch = function() {
	var payFoodLength = 0;
	for (var i = 0; i < foodArray.length; i++) {
		if (foodArray[i].foodNum != 0) {
			payFoodLength++;
		}
	}
	if ($(".menu-footer-trolley").attr("target") == "true") {
		//关闭
		$(".menu-footer-bg").removeClass("fadeIn").addClass("fadeOut");
		$(".menu-footer-trolley").animate({
			top: '-25px'
		}, 300, 'ease-in-out');
		var foodsHeight = (payFoodLength * 40) + 35;
		(foodsHeight > 285) ? foodsHeight = 285: foodsHeight;
		$(".menu-footer-foods").css("height", foodsHeight + "px");
		$(".menu-footer-foods").animate({
			height: '0'
		}, 300, 'ease-in-out', function() {
			$(".menu-footer-trolley").attr("target", "false");
			$(".menu-footer-foods").addClass("hide");
			$(".menu-footer-foods").css("height", "auto");
			$(".menu-footer-bg").addClass("hide");
			$(".menu-footer-trolley").attr("target", "false");
			$(".menu-footer").css("height", "90px");
		});
	} else {
		//开启
		if (payFoodLength > 0) {
			$(".menu-footer").height("100%");
			$(".menu-footer-bg").removeClass("hide").removeClass("fadeOut").addClass("fadeIn");
			$(".menu-footer-trolley").animate({
				top: '-65px'
			}, 300, 'ease-in-out');
			//清空数据
			$(".menu-footer-food").remove();
			for (var i = 0; i < foodArray.length; i++) {
				if (foodArray[i].foodNum != 0) {
					appendFooterFood(foodArray[i]);
				}
			}
			var foodsHeight = (payFoodLength * 40) + 35;
			(foodsHeight > 285) ? foodsHeight = 285: foodsHeight;
			$(".menu-footer-foods").css("height", "0");
			$(".menu-footer-foods").removeClass("hide").animate({
				height: foodsHeight + 'px'
			}, 300, 'ease-in-out', function() {
				$(".menu-footer-trolley").attr("target", "true");
				$(".menu-footer-foods").css("height", "auto");
				//				foodsSwiper.onResize();
			});

		}
	}
}

var appendFooterFood = function(food) {
	var str = "<div class='menu-footer-food' foodId='" + food.foodId + "' foodName='" + food.foodName + "' foodPrice='" + food.price + "' foodType='" + food.foodType + "' foodNum='" + food.foodNum + "' discount='" + food.discount + "' giveBeanCoins='" + food.giveBeanCoins + "'>";
	str += "<p class='menu-footer-food-name'>" + food.foodName + "</p>";
	str += "<p class='menu-footer-food-price'>&yen;<span>" + (food.price / 100) + "</span></p>";
	str += "<p class='menu-footer-food-num'>";
	str += "<b class='menu-food-btn-subtract'></b>";
	str += "<span class='menu-food-btn-num'>" + food.foodNum + "</span>";
	str += "<b class='menu-food-btn-add'></b></p></div>";
	$("#footerFoods .swiper-slide").append(str).find(".menu-footer-food-num b").unbind().tap(function() {
		if ($("#footerFoods").attr("isSliderMove") == "0") {
			var foodid = $(this).parents(".menu-footer-food").attr("foodId");
			if ($(this).index() == 0) {
				//减少数量
				var num = minusPayFood(foodid);
				//更改小图标数量
				var iconNum = chageIconNum(-1);
				//判断是否全没了
				if (iconNum == 0) {
					trolleySwitch();
					isCanPay(0);
				} else {
					//获取并更改当前用户选择的菜品的数量
					$(this).siblings(".menu-food-btn-num").html(num);
					if (num == 0) {
						//移除当前菜品
						$(this).parents(".menu-footer-food").css("background", "rgba(0, 0, 0, 0.5)");
						$(this).parents(".menu-footer-food").animate({
							height: '0'
						}, 300, 'ease-in-out', function() {
							$(this).remove();
						});
					}
				}
				//1.3 改
				//改food.foodId 为foodid 不然会出现数量错乱
				//改变菜品的数量
				chageMenuFood(foodid, num);

				//判断用户是否超出限额
				if (getTotal() <= norm && getTotal() != 0) {
					//未超出限额
					$("#payBtn").attr("target", "true");
					$("#payBtn").removeClass("sw-btn-hoary");
					$("#payBtn").addClass("sw-btn-orangeRed");
					$(".menu-footer-pay h3").css("color", "rgb(255, 111, 51)");
					$(".menu-footer-trolley").css("background", "rgb(255, 190, 13)");
					$(".menu-footer-trolley-icon").css("background", "rgb(255, 0, 0)");
				}
			} else {
				//增加数量
				var num = addPayFood(foodid);

				//获取并更改当前用户选择的菜品的数量
				$(this).siblings(".menu-food-btn-num").html(num);

				//更改小图标数量
				chageIconNum(1);

				//改变菜品的数量
				chageMenuFood(foodid, num);

				//判断用户是否超出限额
				if (getTotal() > norm) {
					//超出限额
					$("#payBtn").attr("target", "false");
					$("#payBtn").removeClass("sw-btn-orangeRed");
					$("#payBtn").addClass("sw-btn-hoary");
					$(".menu-footer-pay h3").css("color", "rgb(215, 215, 215)");
					$(".menu-footer-trolley").css("background", "rgb(215, 215, 215)");
					$(".menu-footer-trolley-icon").css("background", "rgb(215, 215, 215)");
					upPrompt("您已超出限额，您将不能支付");
				}
			}
			getTotal();
		}
	}).on({
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
}

var chageMenuFood = function(id, num) {
	$(".menu-food").each(function(j) {
		if ($(this).attr("foodId") == id) {
			$(this).find(".menu-food-btn-num").html(num);
			if (num == 0) {
				$(this).find(".menu-food-btn-subtract").addClass("hide");
				$(this).find(".menu-food-btn-num").addClass("hide");
			}
		}
	});
}

var win_load = function() {
	var collectNum = 0;
	for (var i = 0; i < foodArray.length; i++) {
		if (foodArray[i].isFavorties == 1) {
			collectNum++;
		}
	}
	if (collectNum > 0) {
		$("#classify .menu-classify-mess").eq(1).addClass("classify-active");
	} else {
		$("#classify .menu-classify-mess").first().addClass("classify-active");
	}

	// 	dishesSwiper.onResize();
	// 	classifySwiper.onResize();
}

var getTipHeight = function(id) {
	var tipHeight = 0;
	for (var i = 0; i < $(".menu-dishes-classify").length; i++) {
		if ($(".menu-dishes-classify").eq(i).attr("id") == id) {
			//			if (i == ($(".menu-dishes-classify").length - 1)) {
			//				if ($("#" + id).height() < $("#dishes").height()) {
			//					tipHeight = tipHeight - $("#dishes").height() + $("#" + id).height() + 4;
			//				}
			//			}
			return tipHeight;
		} else {
			tipHeight += $(".menu-dishes-classify").eq(i).height();
		}
	}
}
//new swiper
var swiperSignIn = new Swiper('#signIn', {
	scrollbar: '.swiper-scrollbar-signIn',
	direction: 'vertical',
	slidesPerView: 'auto',
	freeMode: true
});

//解析json
var analyzeJson = function(jsons) {
	var serverDate = jsons.serverDate.split("-");
	var monthDays = getMonthDays(serverDate[0], serverDate[1]);
	$(".signIn-date-chain-allDays").attr("nowDate", serverDate[2]);
	var str = "";
	for (var i = 1; i <= monthDays; i++) {
		if (i % 6 == 1) {
			if (i == 1) {
				str += "<div class='signIn-date-chain'>";
			} else {
				if (i == 31) {
					str += "</div><div class='signIn-date-chain signIn-date-chain-last'>";
				} else {
					str += "</div><div class='signIn-date-chain'>";
				}
			}
		}
		//判断当天是否签到
		var isSignIn = false;
		for (var j = 0; j < jsons.dateData.length; j++) {
			if (jsons.dateData[j].date == i) {
				isSignIn = jsons.dateData[j].isSigned;
			}
		}
		var backLeft = (11 - (i % 10)) * 16;
		var backTop = ((i % 10) == 0) ? (parseInt(i / 10) - 1) * -14 : parseInt(i / 10) * -14;
		if (isSignIn) {
			
			str += "<div class='signIn-date-chain-day' target='true' date='"+ i +"'>";
			str += "<div class='signIn-date-chain-day-bg'><img src='img/icon-62.png' width='100%' /></div>";
			//需要控制位置
			str += "<div class='signIn-date-chain-day-num' style='background:url(img/icon-whiteNum.png); background-position: "+ backLeft +"px "+ backTop +"px;'></div>";
		} else {
			str += "<div class='signIn-date-chain-day' target='false' date='"+ i +"'>";
			str += "<div class='signIn-date-chain-day-bg'><img src='img/icon-61.png' width='100%' /></div>";
			//需要控制位置
			str += "<div class='signIn-date-chain-day-num' style='background:url(img/icon-grayNum.png); background-position: "+ backLeft +"px "+ backTop +"px;'></div>";
		}
		str += "</div>";
	}
	str += "</div>";
	//append month
	str += "<div class='signIn-date-month'><img src='' width='100%' /></div>";
	str += "</div>";
	$(".signIn-date-chain-allDays").append(str);
	//判断连续签到天数
	var continuousStr = continuousSignIn(jsons.continuity_day);
	$(".signIn-date-chains-title").attr("target", jsons.continuity_day);
	$(".signIn-date-chains-title").append(continuousStr);
	//判断当前月份
	getMonthUrl(serverDate[1]);
	//判断是否有31天
	if (monthDays != 31) {
		$(".signIn-date-month").css("margin-top", "0");
	}
	//判断当天是否已经签到
	if (jsons.alreadySigned) {
		$(".signIn-btn").attr("target", "false");
		$(".signIn-btn img").attr("src", "img/icon-65.png");
		//修改指示图标
		userLocation(".signIn-date-now", serverDate[2]);
		$(".signIn-date-now").removeClass("hide");
	} else {
		$(".signIn-btn").attr("target", "true");
		$(".signIn-btn img").attr("src", "img/icon-64.png");
		//修改指示图标
		userLocation(".signIn-date-lastTime", serverDate[2]);
		$(".signIn-date-lastTime").removeClass("hide");
		//判断是否出现宝箱
		if (jsons.continuity_day == 5) {
			$(".signIn-date-chest").attr("target", "true");
			chestLocation(serverDate[2]);
		}
	}
}

var imgsArray = ['img/beans-bg.png', 'img/icon-04.png', 'img/icon-15.png', 'img/icon-53.png', 'img/icon-54.png', 'img/icon-55.png', 'img/icon-56.png', 'img/icon-57.png', 'img/icon-58.png', 'img/icon-61.png', 'img/icon-62.png', 'img/icon-63.png', 'img/icon-64.png', 'img/icon-65.png', 'img/icon-66.png', 'img/icon-67.png', 'img/icon-add.png'];

//获取当前月份的总天数
var getMonthDays = function(Year, Month) {
	var d = new Date(parseInt(Year), parseInt(Month), 0);
	return d.getDate();
}

//判断连续签到天数
var continuousSignIn = function(days) {
	days = parseInt(days);
	//获取当日应获取的豆币数
	var getBeans = 0;
	if (days >= 6) {
		switch (days % 6){
			case 0:
				getBeans = 10;
				break;
			default:
				getBeans = 5;
				break;
		}
	} else {
		switch (days % 6){
			case 1:
				getBeans = 1;
				break;
			case 2:
				getBeans = 2;
				break;
			case 3:
				getBeans = 2;
				break;
			case 4:
				getBeans = 2;
				break;
			case 5:
				getBeans = 5;
				break;
			default:
				getBeans = 0;
				break;
		}
	}
	$(".signIn-date-chains").attr("get-beans", getBeans);
	//文字title
	var str = "<div class='signIn-day-befor'><img src='img/icon-57.png' width='100%' /></div>";
	switch (days / 10){
		case 1:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-01.png' width='100%' /></div>";
			break;
		case 2:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-02.png' width='100%' /></div>";
			break;
		case 3:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-03.png' width='100%' /></div>";
			break;
		default:
			str += "";
			break;
	}
	switch (days % 10){
		case 1:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-01.png' width='100%' /></div>";
			break;
		case 2:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-02.png' width='100%' /></div>";
			break;
		case 3:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-03.png' width='100%' /></div>";
			break;
		case 4:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-04.png' width='100%' /></div>";
			break;
		case 5:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-05.png' width='100%' /></div>";
			break;
		case 6:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-06.png' width='100%' /></div>";
			break;
		case 7:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-07.png' width='100%' /></div>";
			break;
		case 8:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-08.png' width='100%' /></div>";
			break;
		case 9:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-09.png' width='100%' /></div>";
			break;
		default:
			str += "<div class='signIn-day'><img src='img/icon-brownNum-10.png' width='100%' /></div>";
			break;
	}
	str += "<div class='signIn-day-after'><img src='img/icon-58.png' width='100%' /></div>";
	return str;
}

var setBeansUrl = function() {
	var beansNum = parseInt($(".signIn-date-chains").attr("get-beans"));
	var str = "";
	if (beansNum > 10) {
		str += "<div class='getBeansFly-beans'><img src='img/icon-add-10.png' width='100%' /></div>";
	} else {
		switch (beansNum){
			case 1:
				str += "<div class='getBeansFly-beans'><img src='img/icon-add-01.png' width='100%' /></div>";
				break;
			case 2:
				str += "<div class='getBeansFly-beans'><img src='img/icon-add-02.png' width='100%' /></div>";
				break;
			case 3:
				str += "<div class='getBeansFly-beans'><img src='img/icon-add-03.png' width='100%' /></div>";
				break;
			case 4:
				str += "<div class='getBeansFly-beans'><img src='img/icon-add-04.png' width='100%' /></div>";
				break;
			case 5:
				str += "<div class='getBeansFly-beans'><img src='img/icon-add-05.png' width='100%' /></div>";
				break;
			case 6:
				str += "<div class='getBeansFly-beans'><img src='img/icon-add-06.png' width='100%' /></div>";
				break;
			case 7:
				str += "<div class='getBeansFly-beans'><img src='img/icon-add-07.png' width='100%' /></div>";
				break;
			case 8:
				str += "<div class='getBeansFly-beans'><img src='img/icon-add-08.png' width='100%' /></div>";
				break;
			case 9:
				str += "<div class='getBeansFly-beans'><img src='img/icon-add-09.png' width='100%' /></div>";
				break;
			case 10:
				str += "<div class='getBeansFly-beans'><img src='img/icon-add-01.png' width='100%' /></div>";
				str += "<div class='getBeansFly-beans'><img src='img/icon-add-10.png' width='100%' /></div>";
				break;
			default:
				str += "<div class='getBeansFly-beans'><img src='img/icon-add-10.png' width='100%' /></div>";
				break;
		}
	}
	$(".getBeansFly").append(str).addClass("sign-fly").removeClass("hide");
	setTimeout(function() {
		$(".getBeansFly").addClass("hide");
	}, 1000);
}

var getMonthUrl = function(month) {
	switch (parseInt(month)){
		case 1:
			$(".signIn-date-month img").attr("src", "img/icon-month-01.png");
			break;
		case 2:
			$(".signIn-date-month img").attr("src", "img/icon-month-02.png");
			break;
		case 3:
			$(".signIn-date-month img").attr("src", "img/icon-month-03.png");
			break;
		case 4:
			$(".signIn-date-month img").attr("src", "img/icon-month-04.png");
			break;
		case 5:
			$(".signIn-date-month img").attr("src", "img/icon-month-05.png");
			break;
		case 6:
			$(".signIn-date-month img").attr("src", "img/icon-month-06.png");
			break;
		case 7:
			$(".signIn-date-month img").attr("src", "img/icon-month-07.png");
			break;
		case 8:
			$(".signIn-date-month img").attr("src", "img/icon-month-08.png");
			break;
		case 9:
			$(".signIn-date-month img").attr("src", "img/icon-month-09.png");
			break;
		case 10:
			$(".signIn-date-month img").attr("src", "img/icon-month-10.png");
			break;
		case 11:
			$(".signIn-date-month img").attr("src", "img/icon-month-11.png");
			break;
		case 12:
			$(".signIn-date-month img").attr("src", "img/icon-month-12.png");
			break;
		default:
			$(".signIn-date-month img").attr("src", "img/icon-month-01.png");
			break;
	}
}

//用户签到定位
var userLocation = function(sName, day) {
	day = parseInt(day);
	var line = ((day % 6) == 0) ? (parseInt(day / 6) - 1) : parseInt(day / 6);
	switch (line){
		case 0:
			$(sName).css("top", "-15px");
			break;
		case 1:
			$(sName).css("top", "32px");
			break;
		case 2:
			$(sName).css("top", "79px");
			break;
		case 3:
			$(sName).css("top", "126px");
			break;
		case 4:
			$(sName).css("top", "173px");
			break;
		case 5:
			$(sName).css("top", "220px");
			break;
		default:
			$(sName).css("top", "-15px");
			break;
	}
	var leftLocation = day % 6;
	if (leftLocation != 0) {
		var outWidth = $(".signIn-date-chain-allDays").width();
		$(sName).css("left", Math.ceil((outWidth - $(".signIn-date-chain-day").width()) / 5) * (leftLocation - 1) - 7 + "px");
	} else {
		$(sName).css("right", "-5px");
	}
}

//宝箱定位
var chestLocation = function(day) {
	day = parseInt(day);
	var line = ((day % 6) == 0) ? (parseInt(day / 6) - 1) : parseInt(day / 6);
	switch (line){
		case 0:
			$(".signIn-date-chest").css("top", "20px");
			break;
		case 1:
			$(".signIn-date-chest").css("top", "70px");
			break;
		case 2:
			$(".signIn-date-chest").css("top", "120px");
			break;
		case 3:
			$(".signIn-date-chest").css("top", "165px");
			break;
		case 4:
			$(".signIn-date-chest").css("top", "210px");
			break;
		case 5:
			$(".signIn-date-chest").css("top", "260px");
			break;
		default:
			$(".signIn-date-chest").css("top", "20px");
			break;
	}
	var leftLocation = day % 6;
	if (leftLocation != 0) {
		var outWidth = $(".signIn-date-chain-allDays").width();
		$(".signIn-date-chest").css("left", Math.ceil((outWidth - $(".signIn-date-chain-day").width()) / 5) * (leftLocation - 1) - 10 + "px");
	} else {
		$(".signIn-date-chest").css("right", "-10px");
	}
	$(".signIn-date-chest").removeClass("hide");
}

//img_load();

function img_load() {
	for (var i = 0; i < imgsArray.length; i++) {
		var img = new Image();
		img.src = imgsArray[i];
		loadImage(img);
		if (i == (imgsArray.length - 1)) {
			$(".signIn-load-text").html(((i+1) / imgsArray.length * 100).toFixed(2) + "%");
		} else {
			$(".signIn-load-text").html(((i+1) / imgsArray.length * 100).toFixed(2) + "%");
		}
	}
}

function loadImage(url, callback) {
	var img = new Image();
	img.src = url;

	if (img.complete) {
		callback.call(img);
		return;
	}
	img.onload = function() {
		callback.call(img);
	};
};


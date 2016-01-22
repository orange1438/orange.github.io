//判断是否为Android手机
var isAndroid = function() {
	var u = navigator.userAgent,
		app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
	return isAndroid;
}

//控制字符串长度
var checkStrLength = function(str, first, length) {
	if (str.length > length) {
		str = str.substr(first, (length - 1)) + "…";
	}
	return str;
}

//控制字符串长度
var shortStrLength = function(str, first, length) {
	if (str.length > length) {
		str = str.substr(first, (length - 1));
	}
	return str;
}

//侧边栏开关
var closeNav = function() {
	if ($(".sw-navbar").attr("isopen") == "true") {
		//关闭侧边栏
		if (isAndroid()) {
			$(".sw-nav").find(".right-navbar").animate({
				right: '-75%'
			}, 600, 'ease-out');
			$(".sw-nav-bg").animate({
				opacity: 0
			}, 600, 'ease-out', function() {
				$(".sw-navbar").attr("isopen", "false");
				$(".sw-nav").hide();
				document.removeEventListener("touchmove", a, false);
			});
		} else {
			$(".sw-nav").find(".right-navbar").animate({
				translateX: '100%'
			}, 600, 'ease-out');
			$(".sw-nav-bg").animate({
				opacity: 0
			}, 600, 'ease-out', function() {
				$(".sw-navbar").attr("isopen", "false");
				$(".sw-nav").hide();
				document.removeEventListener("touchmove", a, false);
			});
		}
	} else {
		//开启侧边栏
		if (isAndroid()) {
			$(".sw-nav").show().find(".right-navbar").animate({
				right: '0'
			}, 600, 'ease-out');
			$(".sw-nav-bg").animate({
				opacity: 1
			}, 600, 'ease-out', function() {
				$(".sw-navbar").attr("isopen", "true");
				document.addEventListener("touchmove", a, false);
			});
		} else {
			$(".sw-nav").show().find(".right-navbar").animate({
				translateX: '-100%'
			}, 600, 'ease-out');
			$(".sw-nav-bg").animate({
				opacity: 1
			}, 600, 'ease-out', function() {
				$(".sw-navbar").attr("isopen", "true");
				document.addEventListener("touchmove", a, false);
			});
		}
		
	}
}

//按钮切换
var touchChecked = function(sName) {
	if ($(sName).attr("target") == "true") {
		//关闭
//		$(sName).find("p").removeClass("magnify");
		$(sName).find("p").css("background", "rgb(209, 209, 209)");
		if (isAndroid()) {
			$(sName).find("span").animate({
				left: '1px'
			}, 300, "ease-in-out", function() {
				$(sName).attr("target", "false");
			});
		} else {
			$(sName).find("span").animate({
				translateX: '0px'
			}, 300, "ease-in-out", function() {
				$(sName).attr("target", "false");
			});
		}
		return false;
	} else {
		//开启
//		$(sName).find("p").addClass("magnify");
		$(sName).find("p").css("background", "rgb(111, 186, 44)");
		if (isAndroid()) {
			$(sName).find("span").animate({
				left: '25px'
			}, 300, "ease-in-out", function() {
				$(sName).attr("target", "true");
			});
		} else{
			$(sName).find("span").animate({
				translateX: '24px'
			}, 300, "ease-in-out", function() {
				$(sName).attr("target", "true");
			});
		}
		return true;
	}
}

//验证数字
var checkNum = function(num) {
	var reg = new RegExp(/^\d{4}/);
	if (!reg.test(num)) {
		return false;
	}
	return true;
}

//验证手机号码
var checkTel = function(tel) {
	var reg = new RegExp(/^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
	if (!reg.test(tel)) {
		return false;
	}
	return true;
}

//验证手机号码
var checkMoney = function(money) {
	var reg = new RegExp(/^\d*$/);
	if (!reg.test(money)) {
		return false;
	}
	return true;
}

var flyMove = function(id, startX, startY, endX, endY, a, duration) {
	/*
	 * 公式y = a*x*x + b*x + c;   c==0;
	 * startX 开始位置X坐标
	 * startY 开始位置Y坐标
	 * endX 结束位置X坐标
	 * endY 结束位置Y坐标
	 * 
	 */
	var a, b; 										//curvature 抛物线曲率，就是弯曲的程度，越接近于0越像直线，默认0.001
	duration = parseInt(duration) || 500;							//运动的时间，默认500毫秒
	var startTime = 0, 												//开始时间
		interval = 50, 												//间隔时间
		nowTime = 0;												//当前时间
	takeTime = Math.ceil(duration / interval); 						//花费时间
	startX = parseInt(startX);                                      //开始位置X
	startY = parseInt(startY);                                      //开始位置Y
	endX = parseInt(endX);                                          //结束位置X
	endY = parseInt(endY);                                          //结束位置Y
	a = (startY - endY) / (startX * startX - endX * endX);
	b = (startY - a * startX * startX) / startX;
	var flyTimer = setInterval(function() {
		nowTime += interval;
		x = startX - ((startX - endX) * (nowTime / duration)); 		//x 每一步的X轴的位置
		y = a * x * x + b * x; 										//每一步的Y轴的位置y = a*x*x + b*x + c;   c==0;
		$("#" + id).css("top", y + "px");
		$("#" + id).css("left", x + "px");
		if (nowTime >= duration) {
			clearInterval(flyTimer);
			$("#" + id).remove();
		}
	}, takeTime);

}

//滚动轴滚动
var scrollToWhere = function(m) {
	var n = 0,
		timer = null,
		per = Math.round(m / 50);
	timer = window.setInterval(function() {
		n = n + per;
		window.scrollTo(0, n);
		if (n >= m) {
			window.clearInterval(timer);
			return false;
		}
	}, 20);
}

//返回按钮
$(".sw-back").on({
	touchstart: function() {
		$(this).css("border", "1px solid rgba(175, 175, 175, 0.5)");
	},
	touchend: function() {
		$(this).css("border", "none");
	}
});

//按钮点击效果
$(".sw-btn-orangeRed").on({
	touchstart: function() {
		$(this).css("background", "rgb(218, 108, 62)");
    	$(this).css("border-color", "rgb(218, 108, 62)");
	},
	touchend: function() {
		$(this).css("border-color", "rgb(255, 111, 51)");
		$(this).css("background", "rgb(255, 111, 51)");
	}
});




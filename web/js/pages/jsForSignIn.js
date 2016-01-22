$(function($) {

	var jsons = {
		"serverDate": "2016-01-18",
		"code": "200",
		"continuity_day": "5",
		"dateData": [{
			"date": 1,
			"isSigned": false
		}, {
			"date": 2,
			"isSigned": false
		}, {
			"date": 3,
			"isSigned": false
		}, {
			"date": 4,
			"isSigned": false
		}, {
			"date": 5,
			"isSigned": false
		}, {
			"date": 6,
			"isSigned": false
		}, {
			"date": 7,
			"isSigned": false
		}, {
			"date": 8,
			"isSigned": false
		}, {
			"date": 9,
			"isSigned": false
		}, {
			"date": 10,
			"isSigned": false
		}, {
			"date": 11,
			"isSigned": false
		}, {
			"date": 12,
			"isSigned": false
		}, {
			"date": 13,
			"isSigned": true
		}, {
			"date": 14,
			"isSigned": true
		}, {
			"date": 15,
			"isSigned": true
		}, {
			"date": 16,
			"isSigned": true
		}, {
			"date": 17,
			"isSigned": true
		}, {
			"date": 18,
			"isSigned": false
		}],
		"alreadySigned": false
	};
	
	analyzeJson(jsons);

	//签到
	$(".signIn-rule-out").height($(window).height() - 100);

	//豆币商城
	$(".signIn-beans-mall").on({
		touchstart: function() {
			$(this).find("img").attr("src", "img/icon-56.png");
		},
		touchend: function() {
			$(this).find("img").attr("src", "img/icon-55.png");
		}
	});

	//签到
	$(".signIn-btn").tap(function() {
		if ($(this).attr("target") != "true") return;
		//判断是否有宝箱
		if ($(".signIn-date-chest").attr("target") == "true") {
			$(".signIn-date-chest img").attr("src", "img/icon-69.png");
		}
		//签到头像
		userLocation(".signIn-date-now", parseInt($(".signIn-date-chain-allDays").attr("nowDate")));
		$(".signIn-date-lastTime").addClass("hide");
		$(".signIn-date-now").removeClass("hide");
		//上浮豆币数量
		setBeansUrl();
		//改变豆币显示数量
		var beansTotal = parseInt($(".signIn-beans-total p").html());
		beansTotal += parseInt($(".signIn-date-chains").attr("get-beans"));
		$(".signIn-beans-total p").html(beansTotal);
		//改变连续签到天数
		var signDays = parseInt($(".signIn-date-chains-title").attr("target"));
		var str = continuousSignIn(++signDays);
		$(".signIn-date-chains-title").html(str);
		//当天的背景变化
		var nowDay = $(".signIn-date-chain-allDays").attr("nowDate");
		$(".signIn-date-chain-day").each(function(i) {
			if ($(this).attr("date") == nowDay) {
				$(this).find(".signIn-date-chain-day-bg").children("img").attr("src", "img/icon-62.png");
			}
		});
		//按钮变化
		$(this).find("img").attr("src", "img/icon-65.png");
		$(this).attr("target", "false");
	});

	//查看签到规则
	$(".signIn-rules").tap(function() {
		$(".signIn-rule").removeClass("hide");
		swiperSignIn.onResize();
	});

	//关闭签到规则
	$(".signIn-rule-close").on({
		touchstart: function() {
			$(this).find("img").attr("src", "img/icon-67.png");
		},
		touchend: function() {
			$(this).find("img").attr("src", "img/icon-04.png");
			$(".signIn-rule").addClass("hide");
		}
	});

	//关闭签到规则
	$(".signIn-rule-bg").tap(function() {
		$(".signIn-rule").addClass("hide");
	});

});
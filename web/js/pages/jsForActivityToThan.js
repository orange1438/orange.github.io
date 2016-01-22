$(function($) {
	
	//new swiper
	var swiperOrders = new Swiper('#thanRules', {
		scrollbar: '.swiper-scrollbar-thanRules',
		direction: 'vertical',
		slidesPerView: 'auto',
		freeMode: true
	});
	
	//关闭规则
	$(".than-rule-close").on({
		touchstart: function() {
			$(this).find("img").attr("src", "img/icon-67.png");
		},
		touchend: function() {
			$(this).find("img").attr("src", "img/icon-04.png");
			$(".than-rule").addClass("hide");
		}
	});
	
	//关闭规则
	$(".than-rule-bg").tap(function() {
		$(".than-rule").addClass("hide");
	});
	
	var jsons = {
		"rank": [{
			"nickname": "二胡",
			"headimgurl": "http://wx.qlogo.cn/mmopen/3ryR1CA5zMXnXKUQaxSABHRaBlHEKXXYSKF8Fr7bhBhwbaVanPLvTFvOECPrDribHcK0SPUuQLP1xRHD6ZbyJnicaMeyg7vRMo/0",
			"score": 40
		}, {
			"nickname": "蓝天-速位（中国）",
			"headimgurl": "http://wx.qlogo.cn/mmopen/aE9BCL1ic6HcwJQibCRE5C70a01s42Gl2ib5a0xuB0K7Zq1NK3sNrpk8UrersFO8o4icicfDhlzicc3ibnq8ztV28XdUmwYqRiaaOpXC/0",
			"score": 10
		}, {
			"nickname": "木子",
			"headimgurl": "http://wx.qlogo.cn/mmopen/A5RaGEMeOPz86uERzTFeIaGq92IH4lASeP4OH1ZhJ93ExjdD4uRGxzjEK1rYwqxicsgl1MO1exWyFb1t2prQOEg/0",
			"score": 3
		}, {
			"nickname": "dave",
			"headimgurl": "http://wx.qlogo.cn/mmopen/22YD2oBcVUYkibw9rgPucjvrAibQCRIndQpMlLg5iaHiat7JjtSyqz8uB2FQXf2SeCzhKkMX9Wplu050NkRc4LvPscwJ24q6AEFT/0",
			"score": 0
		}, ],
		"myInfo": {
			"recharged": "",
			"times": "10.0", 				//本周累计时间 单位:分钟
			"nickname": "蓝天-速位（中国）", 		//昵称
			"curtime": "5.0", 				//本次订单耗时 单位：分钟
			"headimgurl": "http://wx.qlogo.cn/mmopen/aE9BCL1ic6HcwJQibCRE5C70a01s42Gl2ib5a0xuB0K7Zq1NK3sNrpk8UrersFO8o4icicfDhlzicc3ibnq8ztV28XdUmwYqRiaaOpXC/0",
			"ranking": "1", 				//排名
			"curDay": "true"
		}
	};
	
	//改变宽度
	$(".own-mess").css("width", $(".than-footer").width() - $(".own-img").width() - $(".own-name").width() - 20 + "px");
	
	
	//点击比惨大乐透
	$(".than-btn").on({
		touchstart: function() {
			$(this).css("box-shadow", "none");
			$(this).css("margin-top", "15px");
		},
		touchend: function() {
			$(this).css("box-shadow", "0 5px 0 rgb(208, 109, 64)");
			$(this).css("margin-top", "10px");
		}
	});
	
	
});
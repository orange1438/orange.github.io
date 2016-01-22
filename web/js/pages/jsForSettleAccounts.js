$(function($) {
	
	
	//是否选择使用豆币
	$("#payChecked").tap(function() {
		var result = touchChecked("#payChecked");
		if (result) {
			var sName1 = lyConfirm("爹~<br />您还未解锁“豆币换现金”技能", "任性不解", "点此解锁", "", "", "", "", "rgb(255, 255, 255)", "rgb(255,153,0)", "rgb(255, 255, 255)", "rgb(223, 134, 2)");
			$(sName1).find("button").on("touchend", function() {
				if ($(this).index() == 1) {
					$("#setPhoneConfirm").css("display", "block");
				} else {
					touchChecked("#payChecked");
				}
			});
		}
	});
	
	//验证手机号码
	$("#getPhoneValidate").tap(function() {
		if ($(this).attr("target") == "0" || $(this).attr("target") == "1") {
			$(this).attr("target", "0");
			$(this).css("background", "rgb(255, 153, 0)");
			if (checkTel(($("#phoneNum").val()).trim())) {
				//通过
				$(this).attr("target", "2");
				$("#phoneValidate").removeAttr("disabled");
				var countDown = 5;
				var payPhoneTimer = setInterval(function() {
					if (countDown == 1) {
						$("#getPhoneValidate").html("要验证码");
						$("#getPhoneValidate").attr("target", "1");
						clearInterval(payPhoneTimer);
						return;
					}
					$("#getPhoneValidate").html(countDown + "秒后<br/ >重新获取");
					countDown--;
				}, 1000);
			} else {
				//未通过
				$("#phoneNum").siblings(".input-warn").find("p").html("您输入的电话号码有误");
				$("#phoneNum").siblings(".input-warn").css("display", "block");
			}
		}
	});
	
//	console.log(checkNum(1243));
	
	//提交电话号码
	$(".sw-pay-phone-btn").tap(function() {
		if ($("#getPhoneValidate").attr("target") != "0" && $("#phoneValidate").val() != "") {
			//判断长度
			if ($("#phoneValidate").val().trim().length == 4) {
				var num = checkNum($("#phoneValidate").val().trim());
				if (num) {
					$(this).attr("target", "true");
				} else {
					$("#getPhoneValidate").siblings(".input-warn").show().html("请输入正确的验证码");
				}
			} else {
				$("#getPhoneValidate").siblings(".input-warn").show().html("验证码长度有误");
			}
		};
	});
	
	//验证提示消失
	$("input[type=tel]").tap(function() {
		$(this).siblings(".input-warn").find("p").html("");
		$(this).siblings(".input-warn").css("display", "none");
	});
	
	//关闭电话号码
	$(".sw-pay-phone-close").tap(function() {
		$("#setPhoneConfirm").css("display", "none");
	});
	
	//1.3 改
	$("#payBtn").on({
		touchstart: function() {
    		if ($(this).attr("target") == "true") {
    			$(this).css("background", "rgb(218, 108, 62)");
    			$(this).css("border-color", "rgb(218, 108, 62)");
    		}
    	},
    	touchend: function() {
    		if ($(this).attr("target") == "true") {
    			$(this).css("background", "rgb(255, 111, 51)");
    			$(this).css("border-color", "rgb(255, 111, 51)");
    		}
    	}
	});
	
});

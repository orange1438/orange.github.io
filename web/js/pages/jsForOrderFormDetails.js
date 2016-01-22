$(function($) {
	
	//改变状态
	setStep();
	
	function setStep() {
		//当前状态
		var tempStep = parseInt($(".finish-status").attr("target"));
		
		if (tempStep > 0 && tempStep < 5) {
			for (var i = 0; i < tempStep; i++) {
				$(".finish-status-classify").eq(i).removeClass("finish-status-fail").addClass("finish-status-success");
				$(".finish-status-line").eq(i).removeClass("finish-status-line-fail").addClass("finish-status-line-success");
			}
			switch (tempStep){
				case 1:
					$(".finish-status-classify-img img").eq(0).attr("src", "img/icon-18.png");
					break;
				case 2:
					$(".finish-status-classify-img img").eq(0).attr("src", "img/icon-18.png");
					$(".finish-status-classify-img img").eq(1).attr("src", "img/icon-19.png");
					break;
				case 3:
					$(".finish-status-classify-img img").eq(0).attr("src", "img/icon-18.png");
					$(".finish-status-classify-img img").eq(1).attr("src", "img/icon-19.png");
					$(".finish-status-classify-img img").eq(2).attr("src", "img/icon-20.png");
					break;
				case 4:
					$(".finish-status-classify-img img").eq(0).attr("src", "img/icon-18.png");
					$(".finish-status-classify-img img").eq(1).attr("src", "img/icon-19.png");
					$(".finish-status-classify-img img").eq(2).attr("src", "img/icon-20.png");
					$(".finish-status-classify-img img").eq(3).attr("src", "img/icon-21.png");
					break;
			}
		}
	}
	
	//关闭催单
	$(".close-reminder").on({
		touchstart: function() {
			$(".close-reminder img").attr("src", "img/icon-67.png");
		},
		touchend: function() {
			$(".close-reminder img").attr("src", "img/icon-04.png");
			$(".sw-reminder-show").addClass("hide");
		}
	});
	
	//关闭催单
	$(".sw-reminder-show-bg").tap(function() {
		$(".sw-reminder-show").addClass("hide");
	});
	
});
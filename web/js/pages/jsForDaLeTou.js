$(function($) {
 
 	var isfirst = 0;
 
 	$(".than-rule-close").tap(function() {

			$(".than-rule").addClass("hide");
	});
	$(".than-rule-close").on({
		touchstart: function() {

		},
		touchend: function() {

			$(".than-rule").addClass("hide");
		}
	});
	
	//关闭规则
	$(".than-rule-text").tap(function() {
		$(".than-rule").addClass("hide");
	});
	
	$(".da1").tap(function() {
		if(isfirst==0){
		$(".da1").animate({
			rotateY: '180deg'
		}, 500, 'linear', function() {
			$(this).find("img").attr("src", "img/"+selectnum());
			$(this).find("img").css("transform", "rotateY(180deg)");
			$(this).css("-moz-box-shadow","2px 2px 2px 1px #ea8849");
			$(this).css("-webkit-box-shadow","2px 2px 2px 1px #ea8849");
			$(this).css("box-shadow","2px 2px 2px 1px #ea8849");
			$(this).css("background-color","#ea8849");
			
			window.setTimeout(function() {
				
				$(".than-rule").removeClass("hide");
				
			}, 500);

		});
		isfirst=1;
		}
	});
	
	$(".da2").tap(function() {
		if(isfirst==0){
		$(".da2").animate({
			rotateY: '180deg'
		}, 500, 'linear', function() {
			$(this).find("img").attr("src", "img/"+selectnum());
			$(this).find("img").css("transform", "rotateY(180deg)");
			
			$(this).css("-moz-box-shadow","2px 2px 2px 1px #fe6c21");
			$(this).css("-webkit-box-shadow","2px 2px 2px 1px #fe6c21");
			$(this).css("box-shadow","2px 2px 2px 1px #fe6c21");
			$(this).css("background-color","#fe6c21");
			
				window.setTimeout(function() {
				
				$(".than-rule").removeClass("hide");
				
			}, 500);
		});
				isfirst=1;
		}
	});

	$(".da3").tap(function() {
		if(isfirst==0){
		$(".da3").animate({
			rotateY: '180deg'
		}, 500, 'linear', function() {
			$(this).find("img").attr("src", "img/"+selectnum());
			$(this).find("img").css("transform", "rotateY(180deg)");
			
			$(this).css("-moz-box-shadow","2px 2px 2px 1px #72bf6f");
			$(this).css("-webkit-box-shadow","2px 2px 2px 1px #72bf6f");
			$(this).css("box-shadow","2px 2px 2px 1px #72bf6f");
			$(this).css("background-color","#72bf6f");
			
			window.setTimeout(function() {
				
				$(".than-rule").removeClass("hide");
				
			}, 500);
		});
				isfirst=1;
		}
	});
	
	$(".da4").tap(function() {
		if(isfirst==0){
		$(".da4").animate({
			rotateY: '180deg'
		}, 500, 'linear', function() {
			$(this).find("img").attr("src", "img/"+selectnum());
			$(this).find("img").css("transform", "rotateY(180deg)");
			$(this).css("-moz-box-shadow","2px 2px 2px 1px #f96549");
			$(this).css("-webkit-box-shadow","2px 2px 2px 1px #f96549");
			$(this).css("box-shadow","2px 2px 2px 1px #f96549");
			$(this).css("background-color","#f96549");
						window.setTimeout(function() {
				
				$(".than-rule").removeClass("hide");
				
			}, 500);
		});
		isfirst=1;
		}
	});
	
	$(".da5").tap(function() {
		if(isfirst==0){
		$(".da5").animate({
			rotateY: '180deg'
		}, 500, 'linear', function() {
			$(this).find("img").attr("src", "img/"+selectnum());
			$(this).find("img").css("transform", "rotateY(180deg)");
			$(this).css("-moz-box-shadow","2px 2px 2px 1px #dd3334");
			$(this).css("-webkit-box-shadow","2px 2px 2px 1px #dd3334");
			$(this).css("box-shadow","2px 2px 2px 1px #dd3334");
			$(this).css("background-color","#dd3334");
			
			window.setTimeout(function() {
				
				$(".than-rule").removeClass("hide");
				
			}, 500);
		});
		isfirst=1;
		}
	});
	
	$(".da6").tap(function() {
		if(isfirst==0){
		$(".da6").animate({
			rotateY: '180deg'
		}, 500, 'linear', function() {
			$(this).find("img").attr("src", "img/"+selectnum());
			$(this).find("img").css("transform", "rotateY(180deg)");
			$(this).css("-moz-box-shadow","2px 2px 2px 1px #52b3ff");
			$(this).css("-webkit-box-shadow","2px 2px 2px 1px #52b3ff");
			$(this).css("box-shadow","2px 2px 2px 1px #52b3ff");
			$(this).css("background-color","#52b3ff");
			
			window.setTimeout(function() {
				
				$(".than-rule").removeClass("hide");
				
			}, 500);
		});
				isfirst=1;
		}
	});
	$(".da7").tap(function() {
		if(isfirst==0){
		$(".da7").animate({
			rotateY: '180deg'
		}, 500, 'linear', function() {
			$(this).find("img").attr("src", "img/"+selectnum());
			$(this).find("img").css("transform", "rotateY(180deg)");
			$(this).css("-moz-box-shadow","2px 2px 2px 1px #e9a327");
			$(this).css("-webkit-box-shadow","2px 2px 2px 1px #e9a327");
			$(this).css("box-shadow","2px 2px 2px 1px #e9a327");
			$(this).css("background-color","#e9a327");
			
			window.setTimeout(function() {
				
				$(".than-rule").removeClass("hide");
				
			}, 500);
		});
				isfirst=1;
		}
	});
	
	$(".da8").tap(function() {
		if(isfirst==0){
		$(".da8").animate({
			rotateY: '180deg'
		}, 500, 'linear', function() {
			$(this).find("img").attr("src", "img/"+selectnum());
			$(this).find("img").css("transform", "rotateY(180deg)");
			$(this).css("-moz-box-shadow","2px 2px 2px 1px #99d849");
			$(this).css("-webkit-box-shadow","2px 2px 2px 1px #99d849");
			$(this).css("box-shadow","2px 2px 2px 1px #99d849");
			$(this).css("background-color","#99d849");
			
			window.setTimeout(function() {
				
				$(".than-rule").removeClass("hide");
				
			}, 500);
		});
				isfirst=1;
		}
	});
	
	$(".da9").tap(function() {
		if(isfirst==0){
		$(".da9").animate({
			rotateY: '180deg'
		}, 500, 'linear', function() {
			$(this).find("img").attr("src", "img/"+selectnum());
			$(this).find("img").css("transform", "rotateY(180deg)");
				$(this).css("-moz-box-shadow","2px 2px 2px 1px #32d0e9");
			$(this).css("-webkit-box-shadow","2px 2px 2px 1px #32d0e9");
			$(this).css("box-shadow","2px 2px 2px 1px #32d0e9");
			$(this).css("background-color","#32d0e9");
			
				window.setTimeout(function() {
				
				$(".than-rule").removeClass("hide");
				
			}, 500);
		});
				isfirst=1;
		}
	});
	
	function selectnum(){
		var tmp = Math.floor(Math.random()*2);
		
		// 写ajax
		
		var str = "xiexie.png";

		switch(tmp){
				case 0:
					str = "xiexie.png";
					break;
				case 1:
					str = "1bei.png";
					break;
				case 2:
					str = "fanyifan.png";
					break;
				case 3:
					str = "5bei.png";
					break;
			}
		
		if(tmp==0)
		{
			$(".text_xiexie").removeClass("hide");
			$(".text_1bei").addClass("hide");
		}
		else if(tmp==1)
		{
			$(".text_1bei").removeClass("hide");
			$(".text_xiexie").addClass("hide");
		}
		return str;
	}
	
	
	//关闭规则
	$(".head-container-centers-rules-close").tap(function() {
			$(".head-container-centers-rules").addClass("hide");
			$(".head-container-centers-choujiang").removeClass("hide");
	});

	
	//点击大乐透规则
	$(".head-bottom-top-button-container").on({
		touchstart: function() {
			$(this).css("box-shadow", "none");
			$(this).css("margin-top", "5px");
		},
		touchend: function() {
			$(this).css("box-shadow", "0 5px 0 #8a400a");
			$(this).css("margin-top", "0px");
			
			$(".head-container-centers-rules").removeClass("hide");
			$(".head-container-centers-choujiang").addClass("hide");
		}
	});
	
	
});
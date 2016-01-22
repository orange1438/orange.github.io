//new swiper
var swiperOrders = new Swiper('#orders', {
	scrollbar: '.swiper-scrollbar-orders',
	direction: 'vertical',
	slidesPerView: 'auto',
	freeMode: true,
	onSliderMove: function(swiper, event) {
		$("#orders").attr("isSliderMove", "1");
	},
	onTransitionEnd: function(swiper) {
		$("#orders").attr("isSliderMove", "0");
	}
});

var order = function(orderId, orderTime, restName, password, box, curState, meals) {
	this.orderId = orderId;
	this.orderTime = orderTime;
	this.restName = restName;
	this.password = password;
	this.box = box;
	this.curState = parseInt(curState);
	this.meals = meals;
}

//订单数组
var orderArray;

//解析json
var analyzeJson = function(data) {
	if (analyzeJson == null || analyzeJson == undefined || analyzeJson == "null" || analyzeJson == "")  {
		$(".order-text").removeClass("hide");
		return;
	}
	orderArray = new Array();
	for (var i = 0; i < data.length; i++) {
		var ord = new order();
		ord.orderId = data[i].orderId;
		ord.orderTime = data[i].orderTime;
		ord.restName = data[i].restName;
		ord.password = data[i].password;
		ord.box = data[i].box;
		ord.curState = data[i].curState;
		ord.meals = data[i].meals;
		orderArray.push(ord);
	}
}

var appendOrder = function() {
	var str = "";
	for (var i = 0; i < orderArray.length; i++) {
		var newCurState = parseInt(orderArray[i].curState);
		if (newCurState == 1 || newCurState == 4 || newCurState == 5 || newCurState == 6 || newCurState == 9) {
			str += "<div class='order' data-orderId='"+ orderArray[i].orderId +"'>";
			str += "<div class='order-left' target='true'>";
			str += "<div class='order-title'>";
			switch (newCurState){
				case 0:
					str += "<p class='order-title-state state-nonPayment'>未支付</p>";
					break;
				case 1:
					str += "<p class='order-title-state state-forCatering'>待配餐</p>";
					break;
				case 4:
					str += "<p class='order-title-state state-mealToBeTaken'>待取餐</p>";
					break;
				case 5:
					str += "<p class='order-title-state state-fulfil'>已完成</p>";
					break;
				case 6:
					str += "<p class='order-title-state state-alreadyRefunded'>已退款</p>";
					break;
				case 9:
					str += "<p class='order-title-state state-loseEfficacy'>订单失效</p>";
					break;
				default:
					str += "<p class='order-title-state'> </p>";
					break;
			}
			var totle = 0,
				mealStr = "";
			for (var j = 0; j < orderArray[i].meals.length; j++) {
				totle += (parseInt(orderArray[i].meals[j].count) * parseInt(orderArray[i].meals[j].price)) / 100;
				mealStr += "<p class='order-meal'><span class='order-meal-name'>"+ orderArray[i].meals[j].name +"</span><span>×"+ orderArray[i].meals[j].count +"</span></p>";
			}
			totle = totle.toFixed(2);
			str += "<p class='order-title-amountOfPayment'>实际费用：&yen;<span>"+ totle +"</span></p></div>";
			str += "<div class='order-main'>";
			str += "<div class='order-main-title'><p class='order-date'><span>"+ orderArray[i].orderTime +"</span></p><p class='order-id'>"+ orderArray[i].orderId +"</p></div>";
			str += "<div class='order-main-mess'><p class='order-restName'><span>"+ orderArray[i].restName +"</span></p>";
			//目前没有超时费，不显示
			//str += "<p class='order-overtimeFee'>订单超时，超时10.2元</p>";
			str += "</div>";
			str += "<div class='order-main-meals'>";
			str += mealStr;
			str += "</div>";
			if (newCurState == 4) {
				str += "<div class='order-handle'><p class='order-handle-takeMeal'><u>去取餐</u></p></div>";
			} else {
				str += "<div class='order-handle hide'><p class='order-handle-takeMeal'><u>去取餐</u></p></div>";
			}
			str += "</div></div>";
			str += "<div class='order-right hide'><p>删除</p></div>";
			str += "</div>";
		}
	}
	$(".swiper-slide-orders").append(str).find(".order").unbind().tap(function() {
		if ($("#orders").attr("isSliderMove") == 0) {
			for (var i = 0; i < orderArray.length; i++) {
				if (orderArray[i].orderId == $(this).attr("data-orderId")) {
					console.log(orderArray[i].restName)
					return;
				}
			}
		}
	});
	
	swiperOrders.onResize();
}

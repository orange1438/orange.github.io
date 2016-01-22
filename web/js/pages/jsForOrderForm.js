$(function($) {
	//测试json
	var jsons = [{
		"box": "A1",
		"curState": 5,
		"meals": [{
			"count": 1,
			"name": "苏打饼干（2小袋）",
			"price": 10
		}],
		"orderId": "00890012512310001",
		"orderTime": "2015-12-31 11:47",
		"password": "3141",
		"restName": "S.W.IOT黑脸智能店"
	}, {
		"box": "0",
		"curState": 2,
		"meals": [{
			"count": 7,
			"name": "康师傅红烧牛肉面(桶)",
			"price": 38
		}, {
			"count": 2,
			"name": "怡宝矿泉水555ml",
			"price": 13
		}, {
			"count": 8,
			"name": "测试的不要点",
			"price": 1
		}],
		"orderId": "00890011512180518",
		"orderTime": "2015-12-18 21:29",
		"password": "3570",
		"restName": "S.W.IOT黄脸智能店"
	}, {
		"box": "B1",
		"curState": 5,
		"meals": [{
			"count": 7,
			"name": "康师傅红烧牛肉面(桶)",
			"price": 38
		}],
		"orderId": "00890011512180296",
		"orderTime": "2015-12-18 21:05",
		"password": "9489",
		"restName": "S.W.IOT黄脸智能店"
	}, {
		"box": "B1",
		"curState": 5,
		"meals": [{
			"count": 6,
			"name": "康师傅红烧牛肉面(桶)",
			"price": 38
		}],
		"orderId": "00890011512180290",
		"orderTime": "2015-12-18 21:05",
		"password": "4536",
		"restName": "S.W.IOT黄脸智能店"
	}, {
		"box": "B1",
		"curState": 5,
		"meals": [{
			"count": 1,
			"name": "测试的不要点",
			"price": 1
		}],
		"orderId": "00890011512180187",
		"orderTime": "2015-12-18 20:54",
		"password": "5734",
		"restName": "S.W.IOT黄脸智能店"
	}, {
		"box": "A2",
		"curState": 5,
		"meals": [{
			"count": 1,
			"name": "泡椒牛肉丝盖饭",
			"price": 1400
		}],
		"orderId": "00230027509110050",
		"orderTime": "2015-09-11 12:13",
		"password": "2114",
		"restName": "解放碑店"
	}, {
		"box": "A2",
		"curState": 5,
		"meals": [{
			"count": 1,
			"name": "子姜肉丝盖饭",
			"price": 1300
		}],
		"orderId": "00230027509110048",
		"orderTime": "2015-09-11 12:10",
		"password": "3884",
		"restName": "解放碑店"
	}];
	
	$(".order-container").height($(window).height() - 50);
	
	analyzeJson(jsons);
	
	appendOrder();
	
	swiperOrders.onResize();
	
});
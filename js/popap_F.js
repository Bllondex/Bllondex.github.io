$(document).ready(function() {
	function totalNumberGuest(Item1, item2, item3, formguest){
		let b = 0;
		b = parseInt($(Item1).text()) + parseInt($(item2).text()) + parseInt($(item3).text());
		if(b == 0){
			$(formguest).html('Сколько гостей');
			$('.manyGuests__ButtonClear').attr('style', 'visible: hidden;');
		} else {
		$(formguest).html(b + " гостей");
		$('.manyGuests__ButtonClear').attr('style', 'visibility: visible;');};
	};

	function totalNumberGuestPopap(item1, item2, item3, formguest){
		let b;
		let c = parseInt($(item1).text());
		let d = parseInt($(item2).text());
		let a = parseInt($(item3).text());
		b = parseInt($(item1).text()) + parseInt($(item2).text()) + parseInt($(item3).text());
		if (b == 0){
			$('.manyRooms__null').attr('style', 'display: inline-block;');
			$('.manyRooms__fullvar1').attr('style', 'display: none;');
			$('.manyRooms__fullvar2').attr('style', 'display: none;');
			$('.manyRooms__fullvar3').attr('style', 'display: none;');
			$('.manyRooms__ButtonClear').attr('style', 'visible: hidden;');
		};
		if (c > 0){
			$('.manyRooms__null').attr('style', 'display: none;');
			$('.manyRooms__fullvar1').attr('style', 'display: inline-block;');
			$('.manyRooms__fullvar1').html(' ' + c + ' спальни,');
			$('.manyRooms__ButtonClear').attr('style', 'visibility: visible;')
		} else {
			$('.manyRooms__fullvar1').attr('style', 'display: none;');
		};
		if (d > 0){
			$('.manyRooms__null').attr('style', 'display: none;');
			$('.manyRooms__fullvar2').attr('style', 'display: inline-block;');
			$('.manyRooms__fullvar2').html(' ' + d + ' кровати,');
			$('.manyRooms__ButtonClear').attr('style', 'visibility: visible;')
		} else {
			$('.manyRooms__fullvar2').attr('style', 'display: none;');
		};
		if (a > 0){
			$('.manyRooms__null').attr('style', 'display: none;');
			$('.manyRooms__fullvar3').attr('style', 'display: inline-block;');
			$('.manyRooms__fullvar3').html(' ' + a + ' ванные комнаты');
			$('.manyRooms__ButtonClear').attr('style', 'visibility: visible;')
		} else {
			$('.manyRooms__fullvar3').attr('style', 'display: none;');
		};
	};

	function numberPeople(res, min, pl, resf, resf1, resf2, formguest, button) {
		let result;
		result = parseInt($(res).html());
		$(min).click(function(){
			if (result > 0){
				result--
			};
			$(res).html(result);
			totalNumberGuest(resf, resf1,resf2, formguest );
		});
		$(pl).click(function(){
			result++;
			$(res).html(result);
			totalNumberGuest(resf, resf1,resf2, formguest);
		});
		$(button).click(function(){
			$(formguest).html('Сколько гостей');
			$(button).attr('style', 'visible: hidden;');
			$(resf).html('0');
			$(resf1).html('0');
			$(resf2).html('0');
			result = 0;
		})
	}
	function numberRooms(res, min, pl, resf, resf1, resf2, formguest, button) {
		let result;
		result = parseInt($(res).html());
		$(min).click(function(){
			if (result > 0){
				result--
			};
			$(res).html(result);
			totalNumberGuestPopap(resf, resf1,resf2, formguest );
		});
		$(pl).click(function(){
			result++;
			$(res).html(result);
			totalNumberGuestPopap(resf, resf1,resf2, formguest);
		});
		$(button).click(function(){
			$('.manyRooms__null').attr('style', 'display: inline-block;')
			$('.manyRooms__fullvar1').attr('style', 'display: none;');
			$('.manyRooms__fullvar2').attr('style', 'display: none;');
			$('.manyRooms__fullvar3').attr('style', 'display: none;');
			$(button).attr('style', 'visible: hidden;');
			$(resf).html('0');
			$(resf1).html('0');
			$(resf2).html('0');
			result = 0;
		})
	}
		numberPeople(".result",".minus",".plus", ".result", ".result1", ".result2", ".formNumberGuest");
		numberPeople(".result1",".minus1",".plus1", ".result", ".result1", ".result2",".formNumberGuest");
		numberPeople(".result2",".minus2",".plus2", ".result", ".result1", ".result2",".formNumberGuest");
		totalNumberGuest(".result",".result1",".result2",".formNumberGuest");
		$(".formNumberGuest").click(function(){
			$('.popap_list').attr('style', 'display: block;');
		});
		$(".acept").click(function(){
			$('.popap_list').attr('style', 'display: none;');
		})

		numberPeople(".manyGuests__Adults_result",".manyGuests__Adults_minus",".manyGuests__Adults_plus", ".manyGuests__Adults_result", ".manyGuests__Children_result", ".manyGuests__Babies_result", ".manyGuests", ".manyGuests__ButtonClear");
		numberPeople(".manyGuests__Children_result",".manyGuests__Children_minus",".manyGuests__Children_plus", ".manyGuests__Adults_result", ".manyGuests__Children_result", ".manyGuests__Babies_result",".manyGuests", ".manyGuests__ButtonClear");
		numberPeople(".manyGuests__Babies_result",".manyGuests__Babies_minus",".manyGuests__Babies_plus", ".manyGuests__Adults_result", ".manyGuests__Children_result", ".manyGuests__Babies_result",".manyGuests", ".manyGuests__ButtonClear");
		totalNumberGuest(".manyGuests__Adults_result",".manyGuests__Children_result",".manyGuests__Babies_result",".manyGuests");
		$(".manyGuests").click(function(){
			$('.manyGuests__popapBox').attr('style', 'display: block;');
		});
		$(".manyGuests__ButtonAcept").click(function(){
			$('.manyGuests__popapBox').attr('style', 'display: none;');
		})
		// $(".manyGuests__ButtonClear").click(function(){
		// 	$('.manyGuests').html('Сколько гостей');
		// 	$('.PopapForm__batton_clear').attr('style', 'visible: hidden;');
		// 	$('.manyGuests__Adults_result').html('0');
		// 	$('.manyGuests__Children_result').html('0');
		// 	$('.manyGuests__Babies_result').html('0');
		// 	result = 0;
		//})
		$(document).mouseup(function (e){
			var div = $(".manyGuests__popapBox");
			if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
				div.hide();
			}
		});


		numberRooms(".manyRooms__Adults_result",".manyRooms__Adults_minus",".manyRooms__Adults_plus", ".manyRooms__Adults_result", ".manyRooms__Children_result", ".manyRooms__Babies_result", ".manyRooms",".manyRooms__ButtonClear");
		numberRooms(".manyRooms__Children_result",".manyRooms__Children_minus",".manyRooms__Children_plus", ".manyRooms__Adults_result", ".manyRooms__Children_result", ".manyRooms__Babies_result",".manyRooms",".manyRooms__ButtonClear");
		numberRooms(".manyRooms__Babies_result",".manyRooms__Babies_minus",".manyRooms__Babies_plus", ".manyRooms__Adults_result", ".manyRooms__Children_result", ".manyRooms__Babies_result",".manyRooms",".manyRooms__ButtonClear");
		totalNumberGuestPopap(".manyRooms__Adults_result",".manyRooms__Children_result",".manyRooms__Babies_result",".manyRooms");
		$(".manyRooms").click(function(){
			$('.manyRooms__popapBox').attr('style', 'display: block;');
		});
		$(".manyRooms__ButtonAcept").click(function(){
			$('.manyRooms__popapBox').attr('style', 'display: none;');
		})
		// $(".manyRooms__ButtonClear").click(function(){
		// 	$('.manyRooms').html('Сколько гостей');
		// 	$('.PopapForm__batton_clear').attr('style', 'visible: hidden;');
		// 	$('.manyRooms__Adults_result').html('0');
		// 	$('.manyRooms__Children_result').html('0');
		// 	$('.manyRooms__Babies_result').html('0');
		// })
		$(document).mouseup(function (e){
			var div = $(".manyRooms__popapBox");
			if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
				div.hide();
			}
		});



})
	

$(document).ready(function(){
	$(".CheckBoxform__Name").click(function(){
		$(this).toggleClass('CheckBoxform__Name_active');
		$('.CheckBoxform__ChekList').toggleClass('CheckBoxform__ChekList_active');
	})
});
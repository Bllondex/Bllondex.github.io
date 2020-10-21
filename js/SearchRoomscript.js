$(document).ready(function(){
	$('.picker').datepicker({
						range: true,
						multipleDatesSeparator: ' - ',
						dateFormat: 'd M',
						})

					var myDatepicker = $('.picker').datepicker().data('datepicker');
					$(".button__apply").click(function(){
					myDatepicker.hide()
					});  

					
});

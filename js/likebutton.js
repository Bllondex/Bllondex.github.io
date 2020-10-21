$(document).ready(function(){
	let n = true;
	let sas = parseInt($('.numberLike').text());
	$(".likeButton").click(function(){
		
		if(n == true){
			$(".likeButton").addClass("likeButton__active");
			$(".numberLike").html(sas+1);
			$(".likeButton__icon").text('favorite');
			n = false;
		} else{
			$(".likeButton").removeClass("likeButton__active");
			$(".likeButton__icon").text('favorite_border');
			$(".numberLike").html(sas);
			n = true;
		}
	});
}); 

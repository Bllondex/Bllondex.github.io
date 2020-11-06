$(document).ready(function(){
	let n = true;
	let sas = 2;
	let quantityLikeComment = 11;
	let quantityLikeComment2 = 2;

	function lickeButton(idNumb, ButtonLike, icon, quantityLike){
		$(idNumb).html(quantityLike);
		$(ButtonLike).click(function(){
		if(n == true){
			$(ButtonLike).addClass("likeButton__active");
			$(idNumb).html(quantityLike+1);
			$(icon).text('favorite');
			n = false;
		} else{
			$(ButtonLike).removeClass("likeButton__active");
			$(icon).text('favorite_border');
			$(idNumb).html(quantityLike);
			n = true;
		}
		});
	}


	lickeButton('#idNumber', '#ButtonLike', '#icon', sas)
	lickeButton('#numberlikeComment', '#likeComment', '#iconComment', quantityLikeComment)
	lickeButton('#numberlikeComment2', '#likeComment2', '#iconComment2', quantityLikeComment2)
}); 



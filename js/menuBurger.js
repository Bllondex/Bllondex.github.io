$(document).ready(function(){
	$(".header__burger").click(function(){
		$(".header__menubox").toggleClass("active") 
	});
	$(document).mouseup(function (e){
                    var div = $(".header__burger");
                    if (!div.is(e.target)
                        && div.has(e.target).length === 0) {
                      $(".header__menubox").removeClass("active");
                    	}
                    });
});
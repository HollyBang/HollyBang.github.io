$(document).ready(function(){
	var count = 0;
	var allCheck = $("[name='checkbox-test']").length;
	
	// анимация исчезновения итемов портфолио
	$("input.check__checkbox").change(function(){
      $(this).closest('div.wrapper__items').effect('drop').fadeOut(400); 
      count++;
      if(count==allCheck){
		$(".portfolio__titul-text").text("Надеюсь перед тем как все позакрывать, вы действительно посмотрели работы))");
	}
 });


	// кнопочка на верх
	$(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('#scroller-top').fadeIn();
        } else {
            $('#scroller-top').fadeOut();
        }
    });
    $('#scroller-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
})


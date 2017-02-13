$(document).ready(function(){
	
	var count = 0;
	var allCheck = $("[name='checkbox-test']").length;
	
	// анимация исчезновения итемов портфолио
	$("input.check__checkbox").change(function(){
		$(this).closest('div.wrapper__items').effect('drop').fadeOut(400); 
		count++;
		if(count==allCheck){
			$(".portfolio__titul-text").text("Надеюсь перед тем как все закрыть, вы действительно посмотрели работы))");
			//надо сделать кнопку ресета
		}
	});

	// почти аккордион =)
	var accord = document.getElementsByClassName("text__accordion");

	for (var i = 0; i < accord.length; i++) {
		accord[i].onclick = function() {
			this.classList.toggle("active");
			var slideText = this.nextElementSibling;
			if (slideText.style.maxHeight){
				slideText.style.maxHeight = null;
			} else {
				slideText.style.maxHeight = slideText.scrollHeight + "px";
			} 
		}
	}
	



	var heightBlock = 150;
	$(document).on('click', function (ev) {

		var container = $('.items__text');
		var target = $(ev.target);

		if (target.hasClass('items__text')) {
			var height = target.height();
			target.css({
				'height': 'auto'
			});
			var realHeight = target.outerHeight(false);

			target.css({
				'height': height
			});

			if (height == heightBlock && realHeight > heightBlock) {
				target.addClass('background-change');
				target.animate({
					height: realHeight
				}, 600);

			} else {
				target.removeClass('background-change');
				target.animate({
					height: heightBlock
				}, 400);

			};

		} else if (!$(target).hasClass(".items__text")) {
			container.removeClass('background-change');
				container.animate({
					height: heightBlock
				}, 400);
		};

		
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


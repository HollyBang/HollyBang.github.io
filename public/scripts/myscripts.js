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
	


	//клик по тексту который не помещается в блок
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

//валидация формы
// $("#form").validate({
// 	rules: {
// 		username: {
// 			minlength: 0,
// 			maxlength: 20,
// 			required: true
// 		},
// 		email: {
// 			email: true,
// 			required: true
// 		}

// 	},
// 	messages: {
// 		username: {
// 			email: "",
// 			required: ""
// 		},
// 		email: {
// 			email: "",
// 			required: ""
// 		}
// 	},
// 	highlight: function(element) {
//       $(element).closest(".form-control").removeClass("has-success").addClass("has-error").parents('form.animate-form').addClass("animateShake");
//     },
//     unhighlight: function(element) {
//       $(element).closest(".form-control").removeClass("has-error").addClass("has-success");
//     }
//   });

  // $('.submit input').click(function() {
  //   $('#form.animated').removeClass('animateShake');
  //   if ($("#form").valid()) {
  //     $("#form").addClass("success");
  //   } else {
  //     $("#form").removeClass("success").addClass("invalid");
  //     $(this).addClass("disabled");
  //   }

  //   $("#form.invalid input").on("keyup blur", function() {
  //     if ($("#form").valid()) {
  //       $(".submit input").removeClass("disabled");
  //       $("#form").removeClass("invalid");
  //     } else {
  //       $(".submit input").addClass("disabled");
  //     }
  //   });
  // });
});

//модальное окно
$(function() {


	$('#contact').click(function() {
		$('#contactForm').fadeToggle();
		$('.bg_layer').show();
		$("#form").validate({
	rules: {
		username: {
			minlength: 0,
			maxlength: 20,
			required: true
		},
		email: {
			email: true,
			required: true
		}

	},
	messages: {
		username: {
			email: "",
			required: ""
		},
		email: {
			email: "",
			required: ""
		}
	},
	highlight: function(element) {
      $(element).closest(".form-control").removeClass("has-success").addClass("has-error").parents('form.animate-form').addClass("animateShake");
    },
    unhighlight: function(element) {
      $(element).closest(".form-control").removeClass("has-error").addClass("has-success");
    }
  });
	})
	$(document).mouseup(function (e) {
		var container = $("#contactForm");

		if (!container.is(e.target)
			&& container.has(e.target).length === 0)
		{
			$('.form-control').removeClass("has-error").parents('form.animate-form').removeClass("animateShake");


			container.fadeOut();
			$('.bg_layer').fadeOut();

		}
	});

});


// $(element).closest(".form").addClass("animateShake");
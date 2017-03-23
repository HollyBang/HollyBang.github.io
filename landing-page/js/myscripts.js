$(document).ready(function() {
  
$('.foto_items').mixItUp();

$('.foto li').click(function() {
  $('.foto li').removeClass('active');
  $(this).addClass('active');
});



$('.magpopup').magnificPopup({type: "inline", showCloseBtn: true, midClick: true});


//анимации
$('.top_title').animated('zoomInDown');
$('.sections-title').animated('rollIn', 'rollOut');

$('.for-who_item1').animated('fadeInLeft', 'fadeOut');
$('.for-who_item3').animated('fadeInRight', 'fadeOut');

$('.target_anim_1').animated('bounceInLeft', 'bounceOutLeft');
$('.target_anim_2').animated('bounceInRight', 'bounceOutRight');

$('.foto_item').animated('fadeIn', 'fadeOut');


//для всего экрана
function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
//кнопка меню
	$('.burger-menu').on('click', function() {
  if ($(this).hasClass("burger-menu-clicked")) {
    $(this).removeClass("burger-menu-clicked");
    $(this).addClass("burger-menu-closing");
    $('.main_menu').fadeOut(600);
    $('.main_menu a:nth-child(odd)').removeClass('bounceLeft animated');
    $('.main_menu li:nth-child(even)').removeClass('fadeInRight animated');
  } else {
    $(this).addClass("burger-menu-clicked");
    $(this).removeClass("burger-menu-closing");
    $('.main_menu').fadeIn(600);
    $('.main_menu li:nth-child(odd)').addClass('fadeInLeft animated');
    $('.main_menu li:nth-child(even)').addClass('fadeInRight animated');
  };
  $('.main_menu a').click(function() {
  	$('.main_menu').fadeOut(600);
  	$('.burger-menu').removeClass("burger-menu-clicked");
  	$('.burger-menu').addClass("burger-menu-closing");
  })
});

$('.foto_item').each(function(indexId) {
  $(this).find('a').attr('href', '#item' + indexId);
  $(this).find('.win_popup').attr('id', 'item' + indexId);
});
	
  $('.main_menu a').mPageScroll2id();
});

$(window).load(function() {

	
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 
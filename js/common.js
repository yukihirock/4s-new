
//スマホ　アドレスバー対策
//if( (navigator.userAgent.match(/iPhone/i)) || 
//(navigator.userAgent.match(/iPod/i)) || 
//(navigator.userAgent.match(/iPad/i)) ) {
//setTimeout(scrollTo, 100, 0, 1);
//}
//else if (navigator.userAgent.match(/Android/i)) {
//window.scrollTo(0,1);
//}


//ページの先頭へスクロール
//$(function() {
//	$("#footer").click(function () {
//        $('html,body').animate({ scrollTop: 0 },{ duration:600 , easing:"easeInOutExpo" });
//		return false;
//	});
//});


//Mail画像のロールオーバー
$(function(){
	$('#mail').hover(function(){
		$('#mailIcon').attr('src', $('#mailIcon').attr('src').replace('_off', '_on'));
			}, function(){
				if (!$('#mailIcon').hasClass('currentPage')) {
			$('#mailIcon').attr('src', $('#mailIcon').attr('src').replace('_on', '_off'));
		}
	});
});

$(function() {
  var h = $(window).height();
 
  $('#container').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
 
$(window).load(function () {
  $('#loader-bg').delay(1100).fadeOut(1100);
  $('#loader').delay(800).fadeOut(600);
  $('#container').css('display', 'block');
});

$(function(){
  setTimeout('stopload()',10000);
});
 
function stopload(){
  $('#container').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}
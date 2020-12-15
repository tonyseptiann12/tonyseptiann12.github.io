// event pada saat di klik
$('.page-scroll').on('click', function(e){
	// ambil isi href
	var tujuan = $(this).attr('href');
	//console.log(tujuan);
	
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);
	//console.log(elemenTujuan.offset().top);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	// $('body').animate({
	// 	scrollTop: elemenTujuan.offset().top
	// },);

	e.preventDefault();

}); 

// parallax
// motto
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul')
	$('.pKanan').addClass('pMuncul')
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	//console.log(wScroll);
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4.5 +'%)'
	});
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	// portfolio
	if( wScroll > $('.portfolio').offset().top -250){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}
});
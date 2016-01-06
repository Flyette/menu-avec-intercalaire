
'use strict'
$(document).ready(function(){

	$('body').on('click','.item',function(){

		var recupattr=$(this).attr("href");
		$('.cible').hide();
		$(recupattr).show();

    });
		 $('nav a').click(function(e) {
        $('.item').removeClass('active');
        $(this).addClass('active');
	});



});
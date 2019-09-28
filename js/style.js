  $(function() {
    $(".hamburger").on("click", function(){

		var leftVal = 0;
		if($(this).hasClass("open")) {

			leftVal = -300;
            
			$(this).removeClass("open");
		} else {

			$(this).addClass("open");
		}

		$('#side-bar').stop().animate({
		    left: leftVal
		}, 200);
	   });
    
    $('.animation').css('visibility', 'hidden');
    $(window).scroll(function() {
        var windowHeight = jQuery(window).height()
          , topWindow = jQuery(window).scrollTop();
        $('.animation').each(function() {
            var targetPosition = jQuery(this).offset().top;
            if (topWindow > targetPosition - windowHeight + 100) {
                jQuery(this).addClass("fadeInDown");
            }
        });
        
        $('.html__emmet').hover(function() {
            $progress = $(this).find('.progress');
            $progress.fadeIn();
        }, function() {
            $progress.fadeOut();
        });
        $('.css__emmet').hover(function() {
            $progress = $(this).find('.progress');
            $progress.fadeIn();
        }, function() {
            $progress.fadeOut();
        });
        $('.ps__emmet').hover(function() {
            $progress = $(this).find('.progress');
            $progress.fadeIn();
        }, function() {
            $progress.fadeOut();
        });
        $('.ai__emmet').hover(function() {
            $progress = $(this).find('.progress');
            $progress.fadeIn();
        }, function() {
            $progress.fadeOut();
        });
        $('.js__emmet').hover(function() {
            $progress = $(this).find('.progress');
            $progress.fadeIn();
        }, function() {
            $progress.fadeOut();
        });
        $('.wp__emmet').hover(function() {
            $progress = $(this).find('.progress');
            $progress.fadeIn();
        }, function() {
            $progress.fadeOut();
        });

        $('.portfolio_content').hover(function() {
            const $modal = $(this).find('.modal__portfolio');
            $modal.fadeIn();
        }, function() {
            const $modal = $(this).find('.modal__portfolio');
            $modal.fadeOut();
        });
    });
});







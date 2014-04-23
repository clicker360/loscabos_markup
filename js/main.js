var revapi;
var revapi2;
jQuery(document).ready(function() {
    jQuery("#tp-banner").revolution(
    	{
    		delay: 9e3, 
    		startwidth: 1170, 
    		startheight: 500, 
    		sloth: 500, 
    		fullScreen: "on", 
    		forceFullWidth: "on", 
    		autoHeight: 'off', 
    		minFullScreenHeight: "500", 
    		height: "500", 
    		videoJsPath: "js/vendor/videojs/", 
    		fullScreenOffsetContainer: "#wrapper"
    	});
    jQuery("#tp-banner-2").revolution(
    	{
    		delay: 9e3, 
    		startwidth: 1170, 
    		startheight: 500, 
    		sloth: 500, 
    		fullScreen: "off", 
    		forceFullWidth: "off", 
    		autoHeight: 'off', 
    		minFullScreenHeight: "500", 
    		height: "500", 
    		videoJsPath: "js/vendor/videojs/", 
    	});
     jQuery('.slider1').bxSlider({
        slideWidth: 600,
        minSlides: 2,
        maxSlides: 2,
      });
     jQuery('.slider2').bxSlider({
        slideWidth: 600,
        minSlides: 3,
        maxSlides: 3,
      });
    $("#menu-lateral").affix(
    	{
    		offset: {
    			top: 100, 
    			bottom: function() {
                	return this.bottom = $(".footer").outerHeight(!0)
            	}
            }
        }
    )
    $(".nav_vertical ul li").on('click',function(){
        var bullet = $(this)
        var id = $(this).attr('data-referer');
        var top = $("#"+id).position().top;
        var body = $("html, body");
        body.animate(
            {
                scrollTop:top-130
            },
            '1000', 
            'swing', 
            function() { 
                $(".nav_vertical ul li").removeClass('current');
                bullet.addClass('current');

            });
        
    });
    //Portfolio
    var $container = $('.actividadesContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.actividadesFilter a').click(function(){
        $('.actividadesFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        isotope = $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });

    $(".parentGridList1").gridList(
        '.actividadesContainer' ,
        '.verGrid',
        '.verLista'
    );
});
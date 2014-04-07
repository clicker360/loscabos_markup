
var revapi;

            jQuery(document).ready(function() {

            	
            	revapi = jQuery('.tp-banner').revolution(
				{
						delay:9000,
						startwidth:1170,
						startheight:500,
						fullScreen:"on",
						forceFullWidth:"on",
						minFullScreenHeight:"320",
						videoJsPath:"js/vendor/videojs/",
						fullScreenOffsetContainer: "#wrapper"
				});

				$('#menu-lateral').affix({
				    offset: {
				      top: 100
				    , bottom: function () {
				        return (this.bottom = $('.footer').outerHeight(true))
				      }
				    }
				  })


            	
		});	//ready
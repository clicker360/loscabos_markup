
(function($){ 
    $.fn.extend({ 
        media: function(opt){
            var _this = this;
            function init(){ 
                alert(_this.attr('class'));     
            }
            return init();            
        },
    }); 
})(jQuery)

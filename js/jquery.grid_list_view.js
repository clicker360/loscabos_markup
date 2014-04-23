
(function($){ 
    $.fn.extend({ 
        gridList: function(){
            var _this = this;
            function init(){ 
                alert(_this.attr('class'));     
            }
            return init();            
        },
    }); 
})(jQuery)

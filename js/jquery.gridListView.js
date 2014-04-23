
(function($){ 
    $.fn.extend({ 
        gridList: function(container, viewGrid , viewList){
            var _parentGridList = this;
            var _container = _parentGridList.find(container);
            var _viewGrid = _parentGridList.find(viewGrid);
            var _viewList = _parentGridList.find(viewList);
            function init(){               
                _viewGrid.on('click', function(){
                    showGrid();
                });                         
                _viewList.on('click',function(){
                    showList();
                })
            }
            function showGrid(){
                if(_container.hasClass('viewList')){
                    _container.fadeOut(300,function(){             
                        _container.removeClass('viewList').addClass('viewGrid');   
                        _container.css('opacity', 0);             
                        _parentGridList.find(_container).find('div.imgGrid').removeClass('col-md-4').addClass('col-md-12');
                        _parentGridList.find(_container).find('div.thumbnail').removeClass('col-md-8').addClass('col-md-12');
                        _parentGridList.find(_container).find('li').removeClass('col-md-12').addClass('col-md-3'); 
                        _container.fadeIn(1,function(){
                            _container.isotope({
                                filter: ($(".isotopeOption a.current").attr('data-filter')) ? $(".isotopeOption a.current").attr('data-filter') : '*',
                                animationOptions: {
                                    duration: 50,
                                    easing: 'linear',
                                    queue: false
                                }
                            }, function(){    
                                _container.animate({'opacity' : '1'}, 300);
                            });      
                        });                     
                    });
                }
            }
            function showList(){  
                if(_container.hasClass('viewGrid')){
                    _container.fadeOut(30,function(){ 
                        _container.removeClass('viewGrid').addClass('viewList');    
                        _container.css('opacity', 0);  
                        _parentGridList.find(_container).find('div.imgGrid').removeClass('col-md-12').addClass('col-md-4');
                        _parentGridList.find(_container).find('div.thumbnail').removeClass('col-md-12').addClass('col-md-8');
                        _parentGridList.find(_container).find('li').removeClass('col-md-3').addClass('col-md-12');  
                        _container.fadeIn(1,function(){
                            _container.isotope({
                                filter: ($(".isotopeOption a.current").attr('data-filter')) ? $(".isotopeOption a.current").attr('data-filter') : '*',
                                animationOptions: {
                                    duration: 50,
                                    easing: 'linear',
                                    queue: false
                                }
                            }, function(){    
                                _container.animate({'opacity' : '1'}, 300);
                            });      
                        });                     
                    });
                }
            }
            return init();            
        },
    }); 
})(jQuery)

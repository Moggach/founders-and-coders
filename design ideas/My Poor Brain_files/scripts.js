/* ------------------------------------------------------------------------------- */
/*  GLOBAL FUNCTIONS
/* ------------------------------------------------------------------------------- */

(function ($) {
		$(document).foundation();

/*
	setTimeout(function(){
		//so match heights consider type size


	},150);		
*/
	







	

	//OVERLAY
	
	$.overlay = function(){
			$('#overlay').fadeOut(250);		
	}		
	
	
	//SINGLE BODY
	
	$.single_body = function(){
	
		$('#lead-image-container').animate({"opacity":1},250);					
				
		setTimeout(function(){
			$('.single-body,.gallery-images,.project-video').animate({"opacity":1},250);			
		},500);

	}
	
	
	//MOBILE NAV
	
	$.mobile_nav = function(){
		
		var winWidth = $(window).width();
		if(winWidth <= 1024) {
		
			$('.navigation-toggle button').toggleClass('nav-active');
			
			if($('.navigation-toggle button').hasClass('nav-active')) {
				$('.navigation').stop().fadeIn(250);		
			} else {
				$('.navigation').stop().fadeOut(250);		
			}

		} else {
			
			$('.navigation').show();
			$('.navigation-toggle button').removeClass('nav-active');

		}
		
	}	
	
	$.mobile_nav_load_resize = function(){
		
		$('.navigation-toggle button').removeClass('nav-active');
		
		var winWidth = $(window).width();
		if(winWidth <= 1024) {
		
			$('.navigation').hide();

		} else {
			
			$('.navigation').show();

		}
		
	}			


	$.project_video = function(){
		
		var vid_w = $('.project-video iframe').width();
		var vid_h =	(vid_w * 0.6);

		$('.project-video iframe').css({"height":vid_h});
				
	}			




	$.top_button = function(){

	    var scroll = $(window).scrollTop();
		if(scroll > 10) { 

			$('#back-to-top').fadeIn(250);
		
		} else {
		
			$('#back-to-top').fadeOut(250);

		}
		
	}	


		
	$.scroll_to_top_of_page = function(){
		
		$('html, body').animate({ scrollTop: 0 }, 1000);

	}
	
	//Lazy load in images on load	
	$.load_in_images = function(){
	    
		$(".grid").animate({"opacity":1},250);
	    
	}



	$.match_ul_height = function(){
				
		var elementHeights = $('.matchheight').map(function() {
		  return $(this).height();
		}).get();
		  
		var maxHeight = Math.max.apply(null, elementHeights);
				
		//APPLY	
		var window_w = $(window).width();
		if(window_w >= 1025) {
					    
		  $('.matchheight').height(maxHeight);
						
		} else {
		 
		  $('.matchheight').removeAttr("style"); // resets height on resize

		}

 	}
	


	
	
		$.mobile_grid_margins = function(){		
			
			
	        if($('.copyright').is(":visible")){
		    
				$('style#grid-margins').text("");		
				
				
					if($('body').hasClass('front-page')) {

				
							var grid_w = $('#project-grid').width();
							var element_w = $('.element-item').width() + 30;
							
							var sum = grid_w / element_w;
							var round = Math.floor(sum)
							var gap = (round * element_w) - 15;

			/*
							console.log(grid_w);
							console.log(element_w);				
							console.log(sum);
							console.log(round);				
							console.log(gap);	
			*/
							
							
							$('footer .row').animate({'width':gap});			

					}
				
				
		    } else {

					if($('body').hasClass('front-page')) {
						
						$('footer .row').css({'width':'auto'});

					}

				var window_w = $(window).width();

				if(window_w <= 387) {
										
				    var new_margin_bottom = (window_w * 0.03);
				    var new_margin_sides = (window_w * 0.03);
				    var new_block_width = (window_w * 0.455);
					$('style#grid-margins').text("").text('.element-item { width: '+ new_block_width +'px; margin-bottom: '+ new_margin_bottom +'px; margin-left: '+ new_margin_sides +'px; }');

				} else if(window_w >= 388 && window_w <= 414) {
					
				    var new_margin_bottom = (window_w * 0.025);
				    var new_margin_sides = (window_w * 0.025);
				    var new_block_width = (window_w * 0.30);
					$('style#grid-margins').text("").text('.element-item { width: '+ new_block_width +'px; margin-bottom: '+ new_margin_bottom +'px; margin-left: '+ new_margin_sides +'px; }');

				} else {
					
				    var new_margin_bottom = (window_w * 0.025);
				    var new_margin_sides = (window_w * 0.025);
				    var new_block_width = (window_w * 0.22);

					$('style#grid-margins').text("").text('.element-item { width: '+ new_block_width +'px; margin-bottom: '+ new_margin_bottom +'px; margin-left: '+ new_margin_sides +'px; }');
					
				}
			
			}


		}
		
		
		
		
	
})(jQuery);



/* ------------------------------------------------------------------------------- */
/*  DOC READY
/* ------------------------------------------------------------------------------- */


jQuery(document).ready(function($) { 
		

	
	//MATCH HEIGHT
		
	$.match_ul_height();

	$(window).on('resize', function(){

		$.match_ul_height();

	});
	
	
	
	// LAZY LOAD

/*
	$("img.lazy").lazyload({
	    effect : "fadeIn",
        threshold : 200
	});		
*/


	//LOAD IN BODY COPY	

	$(window).on('load', function(){
	
		if($('body').hasClass('single-project')) {
			
//			$.single_body();
	
		}	

	});		
	
	


/*-----------------------------------------------------------------------
	SVG ANIMATIONS
------------------------------------------------------------------------*/

	
var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
if(!iOS){
	
	// SVG LOGO ANIM
	
	var disc_grow_tl = new TimelineMax({paused:true});	
	
	var disc_menu_trigger = $('.logo a');

	disc_grow_tl.to(".logo a svg *",0.25,{fill:"#000"});
	
	function menu_disc_over(){
		disc_grow_tl.play();
	}
	
	function menu_disc_out(){
		disc_grow_tl.reverse();
	}	
	
	disc_menu_trigger.hover(menu_disc_over, menu_disc_out);
	

	
	//SVG ICONS	
	
	$(document).on('mouseenter', 'a.greensock', function() {
	   TweenMax.to($(this), 0.4, {color:"#000"});
	   TweenMax.to($(this).find('svg *'), 0.4, {fill:"#000"});
	});
	$(document).on('mouseleave', 'a.greensock', function() {
	   TweenMax.to($(this), 0.4, {color:"#939598"});
	   TweenMax.to($(this).find('svg *'), 0.4, {fill:"#939598"});
	});
	
	
	$(document).on('mouseenter', 'a.greensock-light', function() {
	   TweenMax.to($(this), 0.4, {color:"#000"});
	   TweenMax.to($(this).find('svg *'), 0.4, {fill:"#000"});
	});
	$(document).on('mouseleave', 'a.greensock-light', function() {
	   TweenMax.to($(this), 0.4, {color:"#bcbec0"});
	   TweenMax.to($(this).find('svg *'), 0.4, {fill:"#bcbec0"});
	});
	
	
	$(document).on('mouseenter', 'a.greensock-dark', function() {
	   TweenMax.to($(this), 0.4, {color:"#000"});
	   TweenMax.to($(this).find('svg *'), 0.4, {fill:"#000"});
	});
	$(document).on('mouseleave', 'a.greensock-dark', function() {
	   TweenMax.to($(this), 0.4, {color:"#454545"});
	   TweenMax.to($(this).find('svg *'), 0.4, {fill:"#454545"});
	});
	
		
	$(document).on('mouseenter', 'button#back-to-top', function() {
	   TweenMax.to($(this), 0.3, {borderTop: "2px solid #000",paddingTop:"0px"})
	   TweenMax.to($(this).find('svg *'), 0.3, {fill:"#000"})
	});
	$(document).on('mouseleave', 'button#back-to-top', function() {
	   TweenMax.to($(this), 0.3, {borderTop: "2px solid #bcbec0",paddingTop:"3px"})
	   TweenMax.to($(this).find('svg *'), 0.3, {fill:"#bcbec0"})
	});
	


	// SVG GRID LOGO
	
	var disc_grid_icon = new TimelineMax({paused:true});	
	
	var disc_grid_trigger = $('a.greensock-grid-icon');

	disc_grid_icon.to($(this).find('svg .svb'), 0.25, {fill:"#000"},0)
					.to($(this).find('svg .svb.b0'), 0.25, {transform: "translateX(0px) translateY(12px)"},0)
					.to($(this).find('svg .svb.b1'), 0.25, {transform: "translateX(-8px) translateY(0px)"},0)
					.to($(this).find('svg .svb.b2'), 0.25, {transform: "translateX(-8px) translateY(12px)"},0)
					.to($(this).find('svg .svb.b3'), 0.25, {transform: "translateX(8px) translateY(-12px)"},0)
					.to($(this).find('svg .svb.b4'), 0.25, {transform: "translateX(8px) translateY(0px)"},0)
					.to($(this).find('svg .svb.b5'), 0.25, {transform: "translateX(0px) translateY(-12px)"},0)

	
	function grid_over(){
		disc_grid_icon.play();
	}
	
	function grid_out(){
		disc_grid_icon.reverse();
	}	
	
	disc_grid_trigger.hover(grid_over, grid_out);

}






	// GUEST LOGO TOOLTIP
	
	var disc_tooltip_icon = new TimelineMax({paused:true});	
	
//	var disc_tooltip_trigger = $('.logo a.has-tooltip');
	var disc_tooltip_trigger = $('.logo.guest');
	
	disc_tooltip_icon.to($('.credit-tooltip'), 0.4, {top:"155px"},0)
					.to($('.credit-tooltip'), 0.4, {opacity: "1"},0)

	function tooltip_over(){
		disc_tooltip_icon.play();
	}
	
	function tooltip_out(){
		disc_tooltip_icon.reverse();
	}	
	
	disc_tooltip_trigger.hover(tooltip_over, tooltip_out);


	// OVERLAY

	$(window).on('load', function(){
	
		if($('body').hasClass('front-page')) {
	
			setTimeout(function(){
	
				tooltip_over();
			
			},1000);
			
			setTimeout(function(){
	
				tooltip_out();
	
			},4000);
		
		}

		
	});
	



	



	//USER AGENT
	
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);

	$("html[data-useragent*='MSIE 8.0']").addClass('ie8 internet-explorer');	
	$("html[data-useragent*='MSIE 9.0']").addClass('ie9 internet-explorer');
	$("html[data-useragent*='MSIE 10.0']").addClass('ie10 internet-explorer');

	
	if(navigator.userAgent.match(/Trident.*rv:11\./)) {
		$('html').addClass('ie11 internet-explorer');
	}	
	




	// OVERLAY

	$(window).on('load', function(){
		
		setTimeout(function(){

			$("#overlay").fadeOut(250);
		
		},400);
		
//		setTimeout(function(){



			if($('body').hasClass('front-page')) {
				
				$.load_in_images();

			}



//		},200);

		
	});
	
	
	
	$(window).on('scroll', function(){
	
		$.top_button();
	
	});
	
	
	
	
	//NEWSLETTER SUBMIT
	
	
	var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
    if(iOS){
	    
  		if($('body').hasClass('page-newsletter')) {
	
			$(document).on('keypress', function(e){
	
				if (e.which === 13) { 
								
					$('#form form').submit(); return false; //<---- Add this line } });
					
					return false; 
					
				}
	
			});
			
		}
		
	}	
	
		
	


	// MOBILE NAV
	
	$(window).on('resize load', function(){

		console.log("Page loaded or resized");
		
		$.mobile_grid_margins();		
		
		$.project_video();
		
		
	});

	$('.navigation-toggle button').on('click', function(){

		console.log("Mobile nav toggled");
		$.mobile_nav();
		
	});
	
	
	$('button#back-to-top').on('click', function(){

		$.scroll_to_top_of_page();
		
	});
	
	
	$('a#jump-awards').on('click', function(e){
		
		e.preventDefault();
		
		$('html, body').animate({
	        scrollTop: $("#all-awards").offset().top -20
		}, 1000);
		
	});

	$('a#jump-pubs').on('click', function(e){
		
		e.preventDefault();
		
		$('html, body').animate({
	        scrollTop: $("#all-publications").offset().top -20
		}, 1000);
		
	});


	
	//ISOTOPE
	
	$(window).on('load', function(){
		if($('body').hasClass('front-page')) {
	
			    $(function () {
				    var $grid = $('.grid').isotope({
				        itemSelector: '.element-item',
				        layoutMode: 'fitRows'
				    });
				    var filterFns = {
				        numberGreaterThan50: function () {
				            var number = $(this).find('.number').text();
				            return parseInt(number, 10) > 50;
				        },
				        ium: function () {
				            var name = $(this).find('.name').text();
				            return name.match(/ium$/);
				        }
				    };
				    $('.filters-button-group').on('click', 'a', function () {
				        var filterValue = $(this).attr('data-filter');
				        filterValue = filterFns[filterValue] || filterValue;
				        $grid.isotope({ filter: filterValue }); 
				    });
				    $('.filters-button-group').each(function (i, buttonGroup) {
				        var $buttonGroup = $(buttonGroup);
				        $buttonGroup.on('click', 'a', function () {
				            $buttonGroup.find('.is-checked').removeClass('is-checked');
				            $(this).addClass('is-checked');
				        });
				    });
				});
				      //@ sourceURL=pen.js
	
	
	    
		
		  if (document.location.search.match(/type=embed/gi)) {
		    window.parent.postMessage("resize", "*");
		  }
		
			
		  window.console = window.console || function(t) {};
		  
		  
	
			
			$( function() {
			
			  var $container = $('.isotope');
			
			  // bind filter button click
			  var $filters = $('ul.filters-button-group').on( 'click', 'a', function() {
			    var filterAttr = $( this ).attr('data-filter');
			    
	   		    var newValue2 = filterAttr.replace('*', 'all');
			    var newValue = newValue2.replace('.', '');
			    
			    // set filter in hash
			    location.hash = encodeURIComponent( newValue );
			  });
			  
			  
				  $(document).ready(function(){
				    var theHash = window.location.hash;
				    var theHash = theHash.substr(1);  
					console.log(theHash);
		
					if(theHash == "illustration" || theHash == "design"){
		
						$(".filter-link").removeClass("is-checked");				
		
					}
				   
					if(theHash == "illustration"){
						$('ul.filters-button-group a[data-filter=".illustration"]').trigger("click").addClass("is-checked");
		
					}
				   
					if(theHash == "design"){
						
				   		$('ul.filters-button-group a[data-filter=".design"]').trigger("click");
		
				   	}
				   
					if(theHash == "all"){
						
				   		$('ul.filters-button-group a.filter-all').trigger("click");
		
				   	}		   
				   
				});
			  
			  
	
			});
	  
	  
	 	} //if home
	
	}); //window load



	//COPY
	
/*
	function addLink() {
		
	    //Get the selected text and append the extra info
	    var selection = window.getSelection(),
	        pagelink = '<br /><br /> Read more at: ' + document.location.href,
	        copytext = selection + pagelink,
	        newdiv = document.createElement('div');
	
	    //hide the newly created container
	    newdiv.style.position = 'absolute';
	    newdiv.style.left = '-99999px';
	
	    //insert the container, fill it with the extended text, and define the new selection
	    document.body.appendChild(newdiv);
	    newdiv.innerHTML = copytext;
	    selection.selectAllChildren(newdiv);
	
	    window.setTimeout(function () {
	        document.body.removeChild(newdiv);
	    }, 100);
		}
	
	document.addEventListener('copy', addLink);
*/



	//NEWSLETTER SIGNUP VALIDATION
	
	$(window).on('load', function(){
		
		if($('body').hasClass('page-newsletter')) {
	
			$( "#form form" ).validate({
			  rules : {
			    EMAIL : "required",
			    EMAIL : "email",
			    FNAME : "required",
			    LNAME : "required"
			  },
			  messages: {
			    FNAME : "Please enter your first name",
			    LNAME : "Please enter your last name",
			    EMAIL : "Please enter a valid email address"
				}
			});
			
		}

	});


}); //document redady



/* ---------------------------------------------------------- */
/*  USEFUL PAGE LOADED / PAGE CHANGING FUNCTIONS
/* ---------------------------------------------------------- */

	
	/* change html 'loading' class once page has loaded (useful for initially hiding stuff before page has fully loaded) */
	
	jQuery(document).ready(function($) { 
			
		var change_html_loaded = function(){
			
			$('html').removeClass('loading').addClass('loaded');
		}
		$(window).load(change_html_loaded);
	
	}); // end doc ready
	
	
	/* add a class of 'resizing' to the body tag when the window is being resized */
	
	jQuery(document).ready(function($) {
	
		timer = 0;
		function start() {
		    $('body').addClass('resizing');
		}
		function stop() {
		    $('body').removeClass('resizing');
		}
		$(window).resize(function(){
		    if (timer) {
		        clearTimeout(timer);
		    }
		    timer = setTimeout(stop, 500);
		    start();
		});

	}); // end doc ready



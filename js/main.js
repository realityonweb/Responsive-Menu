/*All the methods are called here in init file*/
(function (APP, $, doc, undefined){
		APP.init = function() {
			this.sayHello('Hello and welcome APP is initialized successfully');
			this.function1();
			this.function2();
		}	
}(window.APP = window.APP || {}, jQuery, document));

;/*All the declared methods in init are defined here; and init method is called at the end of all the definition*/

(function (APP, $, doc, undefined){
	APP.sayHello = function(x){
		var msg = x || "APP Initialized.";
		console.log(msg);
	}
	APP.function1 = function(){
		console.log('I am the function1');
	}
	APP.function2 = function(){
		console.log('I am the function2');
	}
	APP.init();
}(window.APP = window.APP || {}, jQuery, document));



;/*Main Navigation*/

	/*hiding nav*/
	$.hideNav = function(event) {
		$('nav li').removeClass('active');	
	}
	/*show nav*/
	$.showNav = function(target) {
		if(target.hasClass('active')) {
			$.hideNav();
		}
		else {
			$('nav li').removeClass('active');
			target.addClass('active');
		}
	}
	/*Navigation event controller*/
	$('nav').find('a.dropdown').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$.showNav($(this).parent('li'));
	});
	/*hiding nav on clicking outside*/
	$('html').click(function(e){
		$.hideNav();
		if($('.main-nav').hasClass('show')){
			$('.main-nav').removeClass('show');
		}
	});
	/*mobile navigation*/
	$('.hamburger').click(function(e){
		var $mainNav = $('.main-nav');
		if($($mainNav).hasClass('show')){
			$mainNav.removeClass('show');
		}
		else {
			$mainNav.addClass('show');
		}
		e.stopPropagation();
	});


;/*All the declared methods in init are defined here; and init method is called at the end of all the definition*/
(function (APP, $, doc, undefined){
	APP.popup = (function(){
		function showPop(x){
			/*$('nav li').addClass('active');*/
			if(x){
				alert(x);
			}
			else {
				alert("loading");
			}
		}
		function hidePop() {
			alert('hide');
		}
		return {
			show: function(x) {
				showPop(x);
			},
			hide: function() {
				hidePop();
			}
		}
	}());
}(window.APP = window.APP || {}, jQuery, document)); 


/*All the methods are called here in init file*/
(function (APP, $, doc, undefined){
		APP.init = function() {
			this.sayHello('Hello and welcome APP is initialized successfully');
			this.function1();
			this.function2();
		}	
}(window.APP = window.APP || {}, jQuery, document));


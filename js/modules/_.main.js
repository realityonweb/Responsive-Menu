/*All the declared methods in init are defined here; and init method is called at the end of all the definition*/

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




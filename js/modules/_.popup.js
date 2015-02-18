/*All the declared methods in init are defined here; and init method is called at the end of all the definition*/
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


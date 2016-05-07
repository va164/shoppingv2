$(document).ready(function() {

	console.log("page is loaded");
event.preventDefault();
	$("#textBox").keyup(function(){
		if (event.which == 13) {
			event.preventDefault();
			var tVal = $('#addItems').val();

				console.log(tVal);
				$(".list ul").append("<li> <img src='images/check.svg'/>"+tVal+"<img src='images/remove.svg'/> </li>");
				$('#addItems').val("")
				;	
		};
	});

});
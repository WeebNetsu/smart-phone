"use strict";
function phone(){
	$("#call-screen").attr("style","display: block;");
}

/////////////////When someone opens "call" app
//Code by: https://codepen.io/anon/pen/ydppaa
let count = 0;
$(".digit").on('click', function() {
	let num = ($(this).clone().children().remove().end().text());

	if (count < 11) {
		$("#call-output").append('<span>' + num.trim() + '</span>');
		count++
	}

	fxDial.play();
});

$('.fa-long-arrow-left').on('click', function() {
	$('#call-output span:last-child').remove();
	count--;
});

function call(){
	for(let i = 12; i > 0; i--){
		$('#call-output span:last-child').remove();
		count--;
	}

	alert("Can't call yet");
}
"use strict";

function notify(){
	$("#notification-box").css("display", "block");
}

function endNotification(open){
	if(open){
		//open the notification that appeared

		//close the notifcation box after opening everything
		$("#notification-box").css("display", "none");
	}else{
		$("#notification-box").css("display", "none");
	}
}

function notificationTimeout(){
/*	let progress = $("#notification-timer-progress").attr("value");

	if(progress < 100){
		progress++;

		$("#notification-box").css("display", "block");
		$("#notification-timer-progress").attr("value", progress);
	}else{
		$("#notification-timer-progress").attr("value", 0);
		$("#notification-box").css("display", "none");
		clearInterval(id);
	}*/
}
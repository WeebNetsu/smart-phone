"use strict";
// Things that constantly runs in the background goes here

/*Gets battery level*/
var batteryLevel;
navigator.getBattery().then(function(battery) {
	batteryLevel = battery.level; 

	if(batteryLevel >= 0.90){ //Changes battery icon
		$("#battery-icon").attr("class", "fa fa-battery-full");	
		$("#battery-icon").attr("style", "color: green;");	
	}else if(batteryLevel >= 0.75){
		$("#battery-icon").attr("class", "fa fa-battery-three-quarters");	
		$("#battery-icon").attr("style", "color: green;");	
	}else if(batteryLevel >= 0.50){
		$("#battery-icon").attr("class", "fa fa-battery-half");	
		$("#battery-icon").attr("style", "color: white;");	
	}else if(batteryLevel >= 0.25){
		$("#battery-icon").attr("class", "fa fa-battery-quarter");	
		$("#battery-icon").attr("style", "color: red;");	
	}else if(batteryLevel < 0.25){
		$("#battery-icon").attr("class", "fa fa-battery-empty");	
		$("#battery-icon").attr("style", "color: red;");	
	}
});

function time_and_date(){
	var date = new Date(); /*new date function*/
	var year = date.getFullYear();
	var month = date.getMonth();
	var dayOfMonth = date.getDate();
	var dayOfWeek = date.getDay();
	var hr = date.getHours();
	var min = date.getMinutes();

	if(parseInt(min) < 10){
		min = "0" + min;
	}

	if(parseInt(hr) < 10){
		hr = "0" + hr;
	}
	
	if(month === 0){
		month = "January";
	}else if(month === 1){
		month = "February";
	}else if(month === 2){
		month = "March";
	}else if(month === 3){
		month = "April";
	}else if(month === 4){
		month = "May";
	}else if(month === 5){
		month = "June";
	}else if(month === 6){
		month = "July";
	}else if(month === 7){
		month = "August";
	}else if(month === 8){
		month = "September";
	}else if(month === 9){
		month = "October";
	}else if(month === 10){
		month = "November";
	}else if(month === 11){
		month = "December";
	}
	
	if(dayOfWeek === 1){
		dayOfWeek = "Mon";
	}else if(dayOfWeek === 2){
		dayOfWeek = "Tue";
	}else if(dayOfWeek === 3){
		dayOfWeek = "Wed";
	}else if(dayOfWeek === 4){
		dayOfWeek = "Thu";
	}else if(dayOfWeek === 5){
		dayOfWeek = "Fri";
	}else if(dayOfWeek === 6){
		dayOfWeek = "Sat";
	}else if(dayOfWeek === 0){
		dayOfWeek = "Sun";
	}

	$(".time").html(`${hr}:${min}`);
	$(".date").html(`${dayOfWeek}, ${dayOfMonth} ${month}`);
};

time_and_date();
setInterval(time_and_date, 1000); //keeps time updated
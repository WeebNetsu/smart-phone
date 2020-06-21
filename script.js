//JQuery is already added
"use strict";

/////////////////////////////////////variables/////////////////////////////////////////////
let screenOn = true;
let screenLocked = false;
let soundOn = true;
let appMenuOpen = false;
let recentAppsOpen = false;

var batteryLevel;

//////////////////////////////////////Music & Sounds/////////////////////////////////////////
let fxLockScreen = new Sound('src/sounds/lock-screen-sound.wav', 5, 0.5); //adds sound
let fxDial = new Sound("src/sounds/dial.wav", 5, 1); //sounds from pressing on dial pads to call
//Sound(source, (pew pew = 2) (pew = 1), volume)

/////////////////////////////////////////functions////////////////////////////////////////////
window.onload = function(){
	//un-comment both to make the phone screen appear off on page load
	$("#lockscreen").attr("style", "display: none;"); //removes lockscreen image before window loads
	// $("#normal-screen").attr("style", "display: none;"); //removes normal screen
}

/*Gets battery level*/
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

//Makes sounds (fx)
function Sound(src, maxStreams = 1, vol = 1.0){
	this.streamNum = 0;
	this.streams = [];

	for(var i = 0; i < maxStreams; i++){
		this.streams.push(new Audio(src));
		this.streams[i].volume = vol;
	}

	this.play = function(){
		if(soundOn){
			this.streamNum = (this.streamNum + 1) % maxStreams;
			this.streams[this.streamNum].play();
		}
	}

	this.stop = function(){
		this.streams[this.streamNum].pause();
		this.streams[this.streamNum].currentTime = 0;
	}
}

// Turns on phone screen
function power(){ 
	if(screenOn === false){
		screenOn = true;
		$("#lockscreen").attr("style", "display: block;"); /*shows lockscreen wallpaper*/

		console.log(screenOn, "Screen is on");
	}else{ //turns off phone screen
		home();
		screenOn = false;
		screenLocked = true;
		$("#screen").attr("style", "background-color: #222;"); /*makes screen color black*/
		$("#lockscreen").attr("style", "display: none;"); /*Hides lockscreen wallpaper*/
		$("#normal-screen").attr("style", "display: none;"); /*hides normal screen wallpaper*/
		fxLockScreen.play(); //plays lock screen sound

		console.log(screenOn, "Screen is off");
	}
}

//unlocks the screen
function unlock(){
	if(screenLocked){
		screenLocked = false;
		$("#lockscreen").attr("style", "display: none;");
		$("#normal-screen").attr("style", "display: block;");
	}
}

function appMenu(){
	if(appMenuOpen){
		appMenuOpen = false;
		$("#app-menu").attr("style", "display: none;");
	}else{
		appMenuOpen = true;
		$("#app-menu").attr("style", "display: block;");
	}
}

//Buttons on bottom of phone
function back(){
	if(appMenuOpen){
		appMenuOpen = false;
		$("#app-menu").attr("style", "display: none;");
	}

	if(recentAppsOpen){
		recentAppsOpen = false;

		//un-Hides menu bar on bottom of screen
		$("#bottom-menu-bar").attr("style","display: block;");
		$("#recent-apps-screen").attr("style", "display: none;");
	}

	// Hides call screen
	$("#call-screen").attr("style","display: none;");
}

//Turns on screen or goes back to home page
function home(){
	if(screenOn === false){
		power();
	}else{
		//If the menu is open
		appMenuOpen = false;
		$("#app-menu").attr("style", "display: none;");

		$("#bottom-menu-bar").attr("style","display: block;");

		recentAppsOpen = false;
		$("#recent-apps-screen").attr("style", "display: none;");

		// Hides call screen
		$("#call-screen").attr("style","display: none;");
	}
}

//Shows recent apps
function recentApps(){
	recentAppsOpen = true;

	//Darkens sceen
	$("#recent-apps-screen").attr("style", "display: block;");

	//If the app menu is open
	appMenuOpen = false;
	$("#app-menu").attr("style", "display: none;");

	//Hides menu bar on bottom of screen
	$("#bottom-menu-bar").attr("style","display: none;");

	// Hides call screen
	$("#call-screen").attr("style","display: none;");

	screenLocked === true ? //if screen is locked, then recent apps cant be called
		$("#recent-apps-screen").attr("style", "display: none;") 
	: 
		$("#recent-apps-screen").attr("style", "display: block;");
}

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

//////////////////////////////////////////Code///////////////////////////////////////////
time_and_date();
setInterval(time_and_date, 1000); //keeps time updated
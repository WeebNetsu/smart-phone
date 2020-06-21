"use strict";
//codes the hardware buttons

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
		$("#notification-box").css("display", "none"); //hides notification box
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

	// screens to just close
	$("#call-screen").attr("style","display: none;");
	$("#camera-screen").attr("style","display: none;");

	//Hides notifications-box
	$("#notification-box").css("display", "none");
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

		//Hides notification-box
		$("#notification-box").css("display", "none");

		//if the camera app is open:
		$("#camera-screen").css("display", "none");
	}
}

//Shows recent apps
function recentApps(){
	if(!screenLocked){ //if screen is not locked, then recent apps can
		recentAppsOpen = true;

		//exits any open app windows
		home();

		//Darkens sceen
		$("#recent-apps-screen").attr("style", "display: block;");
	}
}
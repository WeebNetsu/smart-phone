"use strict";
//Everything that should load first goes in here(Eg. variables)

/////////////////////////////////////variables/////////////////////////////////////////////
let screenOn = true;
let screenLocked = false;
let soundOn = true;
let appMenuOpen = false;
let recentAppsOpen = false;

window.onload = function(){
	//un-comment both to make the phone screen appear off on page load
	$("#lockscreen").attr("style", "display: none;"); //removes lockscreen image before window loads
	// $("#normal-screen").attr("style", "display: none;"); //removes normal screen
}
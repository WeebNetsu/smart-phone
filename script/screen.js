// Basic onscreen click functions eg. opening app menu and dragging down notifications panel
"use strict";

function appMenu(){
	if(appMenuOpen){
		appMenuOpen = false;
		$("#app-menu").attr("style", "display: none;");
	}else{
		appMenuOpen = true;
		$("#app-menu").attr("style", "display: block;");
	}
} 
"use strict";
// All the sound effects goes here

//////////////////////////////////////Music & Sounds/////////////////////////////////////////
//NOTE: It looks for the song FROM the HTML file
let fxLockScreen = new Sound('./src/sounds/lock-screen-sound.wav', 5, 0.5); //adds sound
let fxDial = new Sound("./src/sounds/dial.wav", 5, 1); //sounds from pressing on dial pads to call
//Sound(source, (pew pew = 2) (pew = 1), volume)

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
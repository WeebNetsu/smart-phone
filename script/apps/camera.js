/*
	Some code from
	https://davidwalsh.name/browser-camera
*/

function camera(){
    $("#camera-screen").attr("style","display: block;");
}

// Grab elements, create settings, etc.
let video = document.getElementById('camera-video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        // video[0].play();
    });
}

let c = document.getElementById('camera-canvas');
$("#snap").on("click", function(){
	c.toBlob(function(blob) {
	    saveAs(blob, Math.round((Math.random() * 100000000)) + '.png');	
	});
});
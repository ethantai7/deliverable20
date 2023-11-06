var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.getElementById("player1");

    // Play button event listener
    document.querySelector("#play").addEventListener("click", function() {
        video.play();
    });

    // Pause button event listener
    document.querySelector("#pause").addEventListener("click", function() {
        video.pause();
    });

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


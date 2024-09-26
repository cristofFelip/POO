console.log("page loaded...");


function playVideo(secondaryVideo){
    var mainVideo = document.getElementById("mainVideo");
    var temp = mainVideo.src;
    mainVideo.src = secondaryVideo.src;
    mainVideo.play();
    secondaryVideo.src = temp;
};

function pauseVideo(){
    var mainVideo = document.getElementById("mainVideo");
    var tempSrc = secondaryVideo.src;
    secondaryVideo.src = mainVideo.src;
    mainVideo.src = tempSrc;
    mainVideo.play();
};
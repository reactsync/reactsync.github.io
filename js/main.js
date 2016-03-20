var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var playerA;
// function loadVideo(playerVideoId) {
//     playerA = new YT.Player('player', {videoId: playerVideoId});
// }
// var playerA;
// function loadVideo(playerVideoId) {
//     loadVideoById({'videoId': playerVideoId,
//                    'startSeconds': 5,
//                    'endSeconds': 60,
//                    'suggestedQuality': 'large'});
// }
// function onYouTubeIframeAPIReady() {

    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    // }

// }

function loadVideo(playerVideoId, viewer) {
    // body...
}
function playVideo(viewer) {
    // body...
}
function playVideoAt(viewer, time) {
    cueVideo(viewer, time);
    playVideo(viewer);
}
function cueVideo(viewer, time) {
    // body...
}
function pauseVideo(viewer) {
    //body...
}

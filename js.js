const trackList = ["piano1", "piano2", "rhodes1", "rhodes2", "synth1"]

// document.addEventListener('play', function (e) {
//     var audios = document.getElementsByTagName('audio');
//     for (var i = 0, len = audios.length; i < len; i++) {
//         if (audios[i] != e.target) {
//             audios[i].pause();
//         }
//     }
// }, true);


function generateAudioPlayer(src, id) {
    let audioObj = `      
    <div id="audio` + id + `">
      <audio
        controls
        src="` + src + `.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
    `
    return audioObj;
}

function generateTracks() {
    let globalHTML = document.getElementsByClassName("global")[0];
    for (let j = 0; j < 5; j++) {
        globalHTML.innerHTML += `<div class="control ` + j + `">`
        for (let k = 0; k < trackList.length; k++) {
            globalHTML.innerHTML += generateAudioPlayer(trackList[k], k);
        }
        globalHTML.innerHTML +=
            `
            <div>
            <br>
            <br>
            <br>
        `
    }
}

generateTracks();

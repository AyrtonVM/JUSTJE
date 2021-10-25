const trackList = ["piano1", "piano2", "rhodes1", "rhodes2", "synth1"]

/**
 * Deze functie genereert een audio object.
 * @param {*} src is de naam van de file
 * @param {*} id wordt gebruikt om elke audio object van elkaar te scheiden
 * @returns 
 */
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

/**
 * Is nog niet af
 * 
 * Deze functie genereert de tracks, eerst 5 keer een track en in elke track
 * 5 audio objecten (zoveel als in de lijst van tracks)
 */
function generateTracks() {
    let globalHTML = document.getElementsByClassName("global")[0];
    for (let j = 0; j < 5; j++) {
        var controlHTML = `<div class="control ` + j + `">`
        for (let k = 0; k < trackList.length; k++) {
            controlHTML += generateAudioPlayer(trackList[k], k);
        }
        controlHTML += `</div>`
        globalHTML.innerHTML += controlHTML;
    }
}


document.addEventListener('play', function (e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0; i < audios.length; i++) {
        console.log(e.target);
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);



generateTracks();

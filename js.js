window.onload = function generateMockups() {
    var body = document.getElementById("body");

    for (let j = 0; j <= 3; j++) {

        var controlHTML = document.createElement('div');
        controlHTML.id = "Row_" + [j];
        body.appendChild(controlHTML)

        var paragraph = document.createElement('p');
        paragraph.innerHTML = "Dit liedje speelt af:";
        controlHTML.appendChild(paragraph)

        for(t = 0; t <= 7; t++) {
            var sound      = document.createElement('audio');
            sound.id       = "Song_" + [t] + "_Row_" + [j];
            sound.controls = 'controls';
            sound.src      = tracks[t].path;
            controlHTML.appendChild(sound);
        }
    }

    var buttonMuteAll = document.createElement('button');
    buttonMuteAll.innerHTML = "Mute all"
    buttonMuteAll.setAttribute("onclick", "muteAll()")
    body.appendChild(buttonMuteAll)

    var buttonMuteAll = document.createElement('button');
    buttonMuteAll.innerHTML = "Unmute all"
    buttonMuteAll.setAttribute("onclick", "unmuteAll()")
    body.appendChild(buttonMuteAll)

    let buttonRandomAll = document.createElement('button');
    buttonRandomAll.innerHTML = "Randomize"
    buttonRandomAll.setAttribute("onclick", "randomSound()")
    body.appendChild(buttonRandomAll)
}

function randomSound() {

}

function muteAll() {
    for(r = 0; r <= 3; r++) {
        for(t = 0; t <= 7; t++) {
            var vid = document.getElementById("Song_" + [t] + "_Row_" + [r]);
            vid.muted = true;
        }
    }
}

function unmuteAll() {
    for(r = 0; r <= 3; r++) {
        for(t = 0; t <= 7; t++) {
            var vid = document.getElementById("Song_" + [t] + "_Row_" + [r]);
            vid.muted = false;
        }
    }
}



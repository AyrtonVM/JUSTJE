document.addEventListener('play', function(e){  
    var audios = document.getElementsByTagName('audio');  
    for(var i = 0, len = audios.length; i < len;i++){  
        if(audios[i] != e.target){  
            audios[i].pause();  
        }  
    }  
}, true);


function mutePage() {
    var elems = document.querySelectorAll("video, audio");

    [].forEach.call(elems, function(elem) { muteMe(elem); });
}
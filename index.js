let songList = document.getElementsByTagName("a");

function random() {
    const random = Math.floor(Math.random() * songList.length);
    console.log(random)
    open(songList[random]);
}


//for (var i = 0, max = songList.length; i < max; i++) {}

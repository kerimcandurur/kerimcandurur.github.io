let songList = document.getElementsByTagName("a");

function random() {
    const random = Math.floor(Math.random() * songList.length);
    console.log(random);
    open(songList[random]);
}

function search() {
    let input = document.getElementById("search").value;
    input = input.toLowerCase();
    let x = document.getElementsByTagName("li");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}



let songList = document.getElementsByTagName('a')

function random() {
	const random = Math.floor(Math.random() * songList.length)
	console.log(random)
	open(songList[random])
}

function search() {
	let input = document.getElementById('search').value
	input = input.toLowerCase()
	let x = document.getElementsByTagName('ul')

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = 'none'
		} else {
			x[i].style.display = 'list-item'
			for (j = 0; j < x[i].children.length; j++) {
				if (!x[i].children[j].innerHTML.toLowerCase().includes(input)) {
					x[i].children[j].style.display = 'none'
				} else {
					x[i].children[j].style.display = 'list-item'
				}
			}
		}
	}
}

document.addEventListener('keydown', (event) => {
	if (event.key === '/') {
		event.preventDefault()
		document.getElementById('search').focus()
	}
})
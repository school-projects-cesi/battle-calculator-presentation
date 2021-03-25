var socket = io('http://localhost:3001')

var users = []

var medida = window.innerWidth / 45
var centroX = window.innerWidth / 2
var centroY = window.innerHeight / 2

window.addEventListener(
	'resize',
	function() {
		medida = window.innerWidth / 45
		centroX = window.innerWidth / 2
		centroY = window.innerHeight / 2
	},
	false
)

socket.on('acesso', function(obj) {
	users[obj.id] = {
		toque: false,
		coord: false
	}
})

socket.on('saida', function(user) {
	if (users[user]) {
		document.body.removeChild(users[user].elem)
	}
})

socket.on('slide', function(obj) {
	switch (obj.tipo) {
		case 1:
			window.Reveal.left()
			break
		case 2:
			window.Reveal.right()
			break
		case 3:
			window.Reveal.up()
			break
		case 4:
			window.Reveal.down()
			break
	}
})

socket.on('view', function() {
	window.Reveal.toggleOverview()
})

socket.emit('host', true)

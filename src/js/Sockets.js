import io from 'socket.io-client'

class Sockets {
	constructor() {
		this.socket = io.connect(window.location.origin);
		this._registerHandlers()
	}

	broadcastState(state) {
		this.socket.emit('host-update', state)
	}

	_registerHandlers() {
		this.socket.on('connect', () => console.log('connected to server'))
		this.socket.on('user-connected', () => console.log('USER HAS CONNECTED TO THE SERVER'))
	}
}

window.$io = new Sockets()

export default window.$io
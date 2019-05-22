import io from 'socket.io-client'

class Sockets {
	constructor() {
		this.socket = io.connect(window.location.origin);
		this._registerHandlers()
	}

	broadcastState(state) {
		this.socket.emit('host-update', state)
	}

	syncBPM(state) {
		this.socket.emit('sync-bpm', state)
	}

	BPMUpdate(callback) {
		this.socket.on('bpm-update', callback)
	}

	onHostUpdated(callback) {
		this.socket.on('host-updated', callback)
	}

	_onSlaveConnected() {
		console.log('SLAVE CONNECTED')
		this.syncBPM($bpm.state)
	}

	_registerHandlers() {
		this.socket.on('connect', () => console.log('connected to server'))
		this.socket.on('slave-connected', this._onSlaveConnected.bind(this))
	}
}

window.$io = new Sockets()

export default window.$io
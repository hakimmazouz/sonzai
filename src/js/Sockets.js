import io from 'socket.io-client'
import $bpm from './components/BeatController'

export class SocketsController {
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

	onBPMUpdate(callback) {
		this.socket.on('bpm-update', callback)
	}

	onHostUpdated(callback) {
		this.socket.on('host-updated', callback)
	}

	_onSlaveConnected() {
		if (window.location.hostname.includes('localhost')) $bpm.setBPM($bpm.bpm, true)
	}

	_registerHandlers() {
		this.socket.on('connect', () => console.log('connected to server'))
		if (window.location.hostname.includes('localhost')) this.socket.on('slave-connected', this._onSlaveConnected.bind(this))
	}
}

export default new SocketsController();
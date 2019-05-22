const socket = require('socket.io');

class SocketController {
	constructor(http) {
		this.bpmState = {};
		this.io = socket(http);
		this._registerHandlers();
	}

	_registerHandlers() {
		this.io.on('connection', this._onConnection.bind(this))
	}

	_onConnection(socket) {
		socket.on('host-update', (state) => this._hostUpdate(socket, state))
		socket.on('sync-bpm', state => socket.broadcast.emit('bpm-update', state))
		this.io.emit('slave-connected', socket.id)
	}

	_hostUpdate(socket, state) {
		socket.broadcast.emit('host-updated', state)
	}
}

module.exports = SocketController
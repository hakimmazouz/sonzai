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
		socket.on('host:master-tempo-change', state => socket.broadcast.emit('host:master-tempo-change', state))
		socket.on('host:sketch-change', state => socket.broadcast.emit('host:sketch-change', state))
		socket.on('host:bpm-change', state => socket.broadcast.emit('host:bpm-change', state))
		this.io.emit('socket:slave-connected', socket.id)
	}
}

module.exports = SocketController
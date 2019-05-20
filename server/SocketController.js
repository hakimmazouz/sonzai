const socket = require('socket.io');

class SocketController {
	constructor(http) {
		this.io = socket(http);
		this.host = null;
		this.slaves = [];
		
		this._registerHandlers();
	}

	_registerHandlers() {
		this.io.on('connection', this.onConnection.bind(this))
	}

	onConnection(socket) {
		if (!this.host) {
			this.host = socket;
			socket.on('host-update', this.hostUpdate.bind(this))
		} else {
			this.slaves.push(socket)
		};
	}

	hostUpdate(state) {
		this.io.emit('host-updated', state)
	}
}

module.exports = SocketController
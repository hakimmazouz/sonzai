class EventEmitter {
	constructor() {
		this.events = {}
	}

	on(event, callback) {
		this.events[event] = this._eventExists(event) ? [...this.events[event], callback] : [callback]
	}

	off(event, callback) {
		if (this._eventExists(event))
			this.events[event] = this.events[event].filter(storedCallback => storedCallback !== callback);
			if (this.events[event].length === 0) delete this.events[event]
	}

	emit(event, payload) {
		if (this._eventExists(event)) this.events[event].forEach(callback => callback(payload))
	}

	_eventExists(event) {
		return Object.keys(this.events).includes(event);
	}
}

window.$events = new EventEmitter();

export default window.$events
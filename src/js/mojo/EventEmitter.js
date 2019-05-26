export class EventEmitter {
	constructor() {
		this.events = {}
	}

	on(event, callback) {
		this.events[event] = this.eventExists(event) ? [...this.events[event], callback] : [callback]
	}

	off(event, callback) {
		if (this.eventExists(event))
			this.events[event] = this.events[event].filter(storedCallback => storedCallback !== callback);
			if (this.events[event].length === 0) delete this.events[event]
	}

	emit(event, payload) {
		if (this.eventExists(event)) {
			this.events[event].forEach(callback => {
				callback(payload)
				if (callback.once) this.off(event, callback)
			})
		}
	}

	once(event, callback) {
		callback.once = true;
		this.on(event, callback)
	}

	eventExists(event) {
		return Object.keys(this.events).includes(event);
	}
}

export default new EventEmitter()
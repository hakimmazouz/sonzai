export class BPMController {
	constructor(config) {
		this._setup();
	}

	/**
	 * Sets the standard state for the BPMController
	 * and listens for an update event on the socket
	 */
	_setup() {
		this.state = {}
		this._setState({
			bpm: 142,
			tempo: 1,
			startTime: Date.now()
		});

		$io.BPMUpdate((state) => this.sync(true, state))
	}

	/**
	 * Sets a new timestamp in the state and broadcasts it out to the socket
	 * 
	 * @param {Boolean} receiving: set to true if we are a slave
	 * @param {Object} state: state to replace the slave BPMController's state with
	 */
	sync(receiving, state) {
		if (receiving) {
			this._setState(state)
		} else {
			this._setState({startTime: Date.now(), count: 0})
			$io.syncBPM(this.state)
		}
	}

	/**
	 * Calculates the beats hit since the timestamp according to a BPM and tempo.
	 * Emits a beat if the count has increased since the last call.
	 * Updates the beat count state in the BPMController.
	 */
	getBeat() {
		const {startTime, bpm, tempo, count} = this.state;
		const elapsedTime = Date.now() - startTime;
		const newCount = Math.floor(elapsedTime / 60000 * bpm)

		if (count < newCount) this._emitBeat();
		this._setState({count: newCount})
	}

	/**
	 * Emits a beat event over the global event bus.
	 */
	_emitBeat() {
		$events.emit('beat', this);
	}

	/**
	 * Sets the new state in the BPMController
	 * 
	 * @param {Object} newState 
	 */
	_setState(newState) {
		this.state = {
			...this.state,
			...newState
		}
	}
}

window.$bpm = new BPMController()

export default window.$bpm
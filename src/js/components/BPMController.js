export class BPMController {
	constructor(config) {
		this._setup();
	}

	_setup() {
		this.state = {}
		this._setState({
			bpm: 140,
			tempo: 1,  
			startTime: Date.now()
		});
		$io.BPMUpdate((state) => this.sync(true, state))
	}

	sync(receiving, state) {
		if (receiving) {
			this._setState(state)
		} else {
			this._setState({startTime: Date.now()})
			$io.syncBPM(this.state)
		}
	}

	getBeat() {
		const {startTime, bpm, tempo, count} = this.state;
		const elapsedTime = Date.now() - startTime;
		const newCount = Math.floor(elapsedTime / 60000 * bpm / tempo)

		if (count < newCount) this._emitBeat();
		this._setState({count: newCount})
	}

	_emitBeat() {
		$events.emit('beat', this);
	}

	_setState(newState) {
		this.state = {
			...this.state,
			...newState
		}
	}
}

window.$bpm = new BPMController()

export default window.$bpm
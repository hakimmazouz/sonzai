import {EventEmitter} from '../mojo/EventEmitter'
import $io from '../Sockets'
import { mapConstrain } from '../mojo/Helpers';

export class BeatController extends EventEmitter {
	constructor() {
		super();
		this.setup();
	}

	/**
	 * Sets the standard state for the BPMController
	 * and listens for an update event on the socket
	 */
	setup() {
		this.bpm = 105;
		this.startTime = Date.now()
		this.tempos =  {
			four: {
				progress: 0,
				modifier: 1,
				count: 0,
				beatDuration: () => this.getBaseTempo()
			},
			eight: {
				progress: 0,
				count: 0,
				modifier: 2,
				beatDuration: () => this.getBaseTempo() * 0.5
			},
			sixteen: {
				progress: 0,
				count: 0,
				modifier: 4,
				beatDuration: () => this.getBaseTempo() * 0.25
			}
		}
		if (!window.location.hostname.includes('localhost')) $io.onBPMUpdate(this.dataReceived.bind(this))
	}

	/**
	 * Calculates the beats hit since the timestamp according to a BPM and tempo.
	 * Emits a beat if the count has increased since the last call.
	 * Updates the beat count state in the BPMController.
	 */
	update() {
		const elapsedTime = Date.now() - this.startTime;

		for (const key in this.tempos) {
			this.updateTempo(elapsedTime, key)
		}
	}

	updateTempo(elapsedTime, key) {
		const BEAT_IN_MILLISECONDS = this.tempos[key].beatDuration();
		const count = Math.floor(elapsedTime / BEAT_IN_MILLISECONDS);
		const progress = mapConstrain(elapsedTime - BEAT_IN_MILLISECONDS * count, 0, BEAT_IN_MILLISECONDS, 0, 1)
		if (count > this.tempos[key].count) this.emitBeat(key);
		this.setTempo(key, {progress, count})
	}

	setTempo(key, state) {
		this.tempos[key] = {
			...this.tempos[key],
			...state
		}
	}

	/**
	 * Sets a new timestamp in the state and broadcasts it out to the socket
	 * 
	 * @param {Number} bpm: the new BPM
	 * @param {Boolean} emitSyncEvent: set to true if we want to emit a BPM sync event on the socket
	 */
	setBPM( bpm, emitSyncEvent ) {
		this.bpm = bpm;
		Object.keys(this.tempos).forEach(key => {
			this.tempos[key].count = 0
		})
		if (emitSyncEvent) this.sync()
	}

	sync() {
		this.startTime = Date.now();
		$io.syncBPM({bpm: this.bpm, startTime: this.startTime})
	}

	dataReceived({bpm, startTime}) {
		this.bpm = bpm;
		this.startTime = startTime;
	}

	getBaseTempo() {
		return 60000 / this.bpm;
	}

	/**
	 * Emits a beat event over the global event bus.
	 */
	emitBeat(key) {
		this.emit('beat', {tempo: key, ...this.tempos[key]});
		this.emit(key, this.tempos[key]);
	}
}
export default new BeatController()
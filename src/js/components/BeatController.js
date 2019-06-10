import {EventEmitter} from '@mojo/EventEmitter'
import $io from '../Sockets'
import { mapConstrain } from '@mojo/Helpers';
import $midi from '@mojo/MIDI';
import $events from '@mojo/EventEmitter'
import $keyboard from '@mojo/Keyboard'
import {TEMPO_CONFIG, TEMPOS, ENV, EVENTS, KEY_EVENTS} from './../Const'

export class BeatController extends EventEmitter {
	constructor() {
		super();
		this.isHost = window.location.hostname.includes('localhost');
		this.setup();
	}

	/**
	 * Sets the standard state for the BPMController
	 * and listens for an update event on the socket
	 */
	setup() {
		this.bpm = 100;
		this.startTime = Date.now()
		this.tempos =  {
			master: 'four',
			...TEMPO_CONFIG
		}
		Object.keys(this.tempos).filter(k => k !== 'master').forEach(tempoKey => {
			this.tempos[tempoKey].beatDuration = this.tempos[tempoKey].beatDuration.bind(this)
		})

		if (ENV.IS_HOST) {
			this.attachHostEventHandlers();
		} else {
			$io.onBPMChange(this.dataReceived.bind(this))
			$io.onMasterTempoChange(this.dataReceived.bind(this))
		}
	}

	/**
	 * Calculates the beats hit since the timestamp according to a BPM and tempo.
	 * Emits a beat if the count has increased since the last call.
	 * Updates the beat count state in the BPMController.
	 */
	update() {
		const elapsedTime = Date.now() - this.startTime;

		for (const key in this.tempos) {
			if (key !== 'master') this.updateTempo(elapsedTime, key)
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
	setBPM( bpm ) {
		this.bpm = bpm;
	}

	setMasterTempo(tempo) {
		this.tempos.master = tempo;
	}

	sync() {
		this.startTime = Date.now();
		$io.updateBPM({bpm: this.bpm, startTime: this.startTime})
	}

	dataReceived({bpm = this.bpm, startTime = this.startTime, masterTempo = this.tempos.master}) {
		console.log(bpm, startTime, masterTempo)
		this.bpm = bpm;
		this.startTime = startTime;
		this.tempos.master = masterTempo
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

	attachHostEventHandlers() {
		$midi.on('bpm-update', (bpm) => {
			this.setBPM(bpm)
			this.emit('bpm-change', this.bpm)
		})
		$midi.on('bpm-half', ({status}) => {
			if (status === 'on') {
				this.bpm = Math.max(50, Math.round(this.bpm/2))
				this.emit('bpm-change', this.bpm);
				this.sync()
			}
		})
		$midi.on('bpm-double', ({status}) => {
			if (status === 'on') {
				console.log(status)
				this.bpm = Math.min(180, Math.round(this.bpm*2))
				this.emit('bpm-change', this.bpm);
				this.sync()
			}
		})

		$events.on(EVENTS.UI.BPM_CHANGE, value => {
			this.bpm = value;
			$io.updateBPM(this.bpm)
		})
		$events.on(EVENTS.UI.MASTER_TEMPO_CHANGE, value => {
			this.tempos.master = value;
			$io.updateMasterTempo(this.masterTempoChange)
		})

		$keyboard.on(KEY_EVENTS.SPACEBAR, () => this.sync())
 	}
}
export default new BeatController()
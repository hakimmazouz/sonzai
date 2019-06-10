import io from 'socket.io-client'
import $beat from '@/components/BeatController'
import {ENV, EVENTS} from '@/Const'
const {SOCKET} = EVENTS;

export class SocketsController {
	constructor() {
		this.socket = io.connect(window.location.origin);
		this._registerHandlers()
	}

	updateBPM(state) {
		this.socket.emit(SOCKET.BPM_CHANGE, state);
	}
	onBPMChange(callback) {
		this.socket.on(SOCKET.BPM_CHANGE, callback)
	}

	updateMasterTempo(state) {
		this.socket.emit(SOCKET.MASTER_TEMPO_CHANGE, state);
	}
	onMasterTempoChange(callback) {
		this.socket.on(SOCKET.MASTER_TEMPO_CHANGE, callback)
	}

	changeSketch(newIndex) {
		this.socket.emit(SOCKET.SKETCH_CHANGE, newIndex);
	}
	onSketchChange(callback) {
		this.socket.on(SOCKET.SKETCH_CHANGE, callback)
	}

	_onSlaveConnected() {
		if (ENV.IS_HOST) {
			$beat.setBPM($beat.bpm, true)
			$beat.setMasterTempo($beat.tempos.master);
		}
	}

	_registerHandlers() {
		if (ENV.IS_HOST) this.socket.on(SOCKET.SLAVE_CONNECTED, this._onSlaveConnected.bind(this))
	}
}

export default new SocketsController();
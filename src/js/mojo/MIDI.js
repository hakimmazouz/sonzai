import { EventEmitter } from './../mojo/EventEmitter'
import { map, withinRange } from './Helpers';
const NOTE_STATUS_ON = 'on',
	  NOTE_STATUS_OFF = 'off';

function MIDINote(data) {
	return {
		status: data[2] > 0 ? NOTE_STATUS_ON : NOTE_STATUS_OFF,
		command: data[0],
		value: data[1],
		velocity: data[2]
	}
}

export class MIDI extends EventEmitter {
	constructor() {
		super()
		this.inputs = null;
		this.outputs = null;
	}

	request() {
		if (!window.location.hostname.includes('localhost')) return
		const p = new Promise((resolve, reject) => {
			if (navigator.requestMIDIAccess) {
				navigator.requestMIDIAccess()
				.then(access => {
					this.inputs = access.inputs.values();
					this.outputs = access.outputs.values();
					if (access.inputs.size > 0) {
						access.inputs.forEach(device => this.setupDevice(device))
					}
					access.onstatechange = this.onStateChange.bind(this);
					resolve(this)
				})
			} else {
				console.warn('This browser does not support MIDI communication.')
				reject('This browser does not support MIDI communication.')
			}
		});

		return p

	}

	onStateChange({target, port: {state, name}}) {
		if (state === 'connected') {
			this.setupDevice(target)
			this.emit('connected', name)
		}
	}

	onDeviceStateChange(event) {
		console.log('MIDI EVENT', event.target.inputs.forEach(i => console.log('input', i)))
	}

	setupDevice(device) {
		this.device = device;
		this.assignKeyBindings()
	}

	assignKeyBindings() {
		this.device.onmidimessage = e => {
			const binding = MPKMINIMAP.bindings.find(({noteValue, noteValueRange}) => e.data[1] === noteValue || noteValueRange && withinRange(e.data[1], ...noteValueRange));
			if (binding) binding.handler.call(this, new MIDINote(e.data), binding.noteValueRange)
			console.log(e, new MIDINote(e.data))
		}
	}
}

const MPKMINIMAP = {
	bindings: [
		{
			noteValue: 8,
			handler({velocity}) {
				this.emit('bpm-update', Math.round(map(velocity, 0, 127, 50, 180)))
			}
		},{
			noteValue: 44,
			handler({data}) {
				this.emit('bpm-tap', data);
			}
		},{
			noteValue: 45,
			handler({data}) {
				this.emit('bpm-sync', data);
			}
		},{
		},{
			noteValue: 46,
			handler(data) {
				this.emit('bpm-half', data);
			}
		},{
		},{
			noteValue: 47,
			handler(data) {
				this.emit('bpm-double', data);
			}
		},{
			noteValueRange: [48, 78],
			handler(note, range) {
				if (note.status === NOTE_STATUS_OFF) this.emit('key-up', note);
				if (note.status === NOTE_STATUS_ON) this.emit('key-down', note);
			}
		}
	]
}

export default new MIDI();
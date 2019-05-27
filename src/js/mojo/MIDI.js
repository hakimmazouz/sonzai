import { EventEmitter } from './../mojo/EventEmitter'
import { map } from './Helpers';

export class MIDI extends EventEmitter {
	constructor() {
		super()
		this.inputs = null;
		this.outputs = null;
	}

	request() {
		const p = new Promise((resolve, reject) => {
			if (navigator.requestMIDIAccess) {
				navigator.requestMIDIAccess()
				.then(access => {
					this.inputs = access.inputs.values();
					console.log(access)
					this.outputs = access.outputs.values();
					access.onstatechange = this.onStateChange.bind(this);
					console.log('permission granted')
					resolve(this)
				})
			} else {
				console.warn('This browser does not support MIDI communication.')
				reject('This browser does not support MIDI communication.')
			}
		});

		return p

	}

	onNewDevice() {
		this.emit('connected')
	}

	onStateChange({target, port: {state, name}}) {
		if (state === 'connected') {
			this.device = {
				name,
				target
			}

			this.device.target.onstatechange = this.onDeviceStateChange.bind(this);
			this.emit('connected', name)
		}
	}

	onDeviceStateChange(event) {
		console.log('MIDI EVENT', event.target.inputs.forEach(i => console.log('input', i)))
		event.target.inputs.forEach(i => {
			i.onstatechange = e => console.log(e);
			i.onmidimessage = e => {
				if (e.data[1] === 7) {
					console.log(e.data[2], e)
					this.emit('bpm-update', Math.round(map(e.data[2], 0, 127, 50, 180)))
				}
			}
		})
		MIDIInput.onmidimessage = e => {
			console.log(e)
		}
	}
}

export default new MIDI();
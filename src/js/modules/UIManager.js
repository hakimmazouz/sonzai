import $bpm from './../components/BeatController'
import { map } from '../mojo/Helpers';
import $midi from './../mojo/MIDI'
import NotificationManager from './../components/NotificationManager'

export class UIManager {
	constructor() {
		if (window.location.hostname.includes('localhost')) {
			this.mount()
			$midi.on('bpm-update', this.onBPMUpdate.bind(this));
			$midi.on('connected', this.onNewDevice.bind(this));
		}
	}

	mount() {
		this.$el = this.createElement();
		document.body.appendChild(this.$el)

		this.notifications = new NotificationManager();
	}

	createElement() {
		const el = document.createElement('div');
		el.id = 'ui-layer'

		this.$knob = document.createElement('div');
		this.$knob.classList.add('knob');
		el.appendChild(this.$knob)

		this.$bpm = document.createElement('div');
		this.$bpm.classList.add('bpm');
		this.$bpm.innerHTML = `${$bpm.bpm}<br><span>BPM</span>`;
		el.appendChild(this.$bpm)

		return el;
	}

	onBPMUpdate(value) {
		console.log(value)
		this.$bpm.innerHTML = `${value}<br><span>BPM</span>`;
		const rotation = map(value, 80, 180, -120, 120);
		this.$knob.style.transform = `rotate(${rotation}deg)`
	}

	onNewDevice(name) {
		this.notifications.toggle({header: 'MIDI DEVICE CONNECTED', content: `You can now use ${name} to control SONZAI`, duration: 5})
	}
}

export default new UIManager()
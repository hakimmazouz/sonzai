import $bpm from './../components/BeatController'
import { map } from '../mojo/Helpers';
import $midi from './../mojo/MIDI'
import {IS_HOST} from './../Const'
import NotificationManager from './../components/NotificationManager'

export class UIManager {
	constructor() {
		this.setupSections();

		if (window.location.hostname.includes('localhost')) {
			this.mount()
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
		const rotation = map(value, 50, 180, -140, 140);
		this.$knob.style.transform = `rotate(${rotation}deg)`
	}

	onNewDevice(name) {
		this.notifications.toggle({header: 'MIDI DEVICE CONNECTED', content: `You can now use ${name} to control SONZAI`, duration: 5})
	}

	setupSections() {
		this.sections = {
			top: {
				bpm: {
					ctrl: {},
					attachHandlers: function($ui) {
						$bpm.on('bpm-change', this.onBPMUpdate.bind(this));
						this.on('change', $ui.handlers.onBpmChange)
					}
				},
				masterTempo: {
					ctrl: {},
					attachHandlers: function($ui) {
						this.on('change', $ui.handlers.onTempoChange)
					}
				}
			},
			bottom: {
				sketchPicker: {
					ctrl: {},
					attachHandlers: function($ui) {
						this.on('sketch-change', $ui.handlers.onSketchPicked)
					}
				}
			}
		}

		this.setupEventHandlers();
	}

	setupEventHandlers() {
		for (const key in this.sections) {
			Object.keys(this.sections[key]).forEach(componentKey => {
				const component = this.sections[key][componentKey]
				component.attachHandlers.call(component.ctrl, this)
			})
		}
	}

	setupUIHandlers() {
		this.handlers = {
			onBpmChange: bpm => this.emit('bpm-change', bpm),
			onTempoChange: tempo => this.emit('tempo-change', tempo),
			onSketchChange: sketch => this.emit('sketch-change', sketch),
		}
	}
}

export default new UIManager()
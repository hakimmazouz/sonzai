import $bpm from './../components/BeatController'
import { map } from '../mojo/Helpers';
import $midi from './../mojo/MIDI'
import {IS_HOST} from './../Const'
import NotificationManager from './../components/NotificationManager'

export class UIManager {
	constructor() {
		this.setupSections();

		if (IS_HOST) {
			this.mount()
			$midi.on('connected', this.onNewDevice.bind(this));
		}
	}

	mount() {
		this.$el = this.createElement();
		document.body.appendChild(this.$el)

		this.notifications = new NotificationManager();
		this.setupSections();
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
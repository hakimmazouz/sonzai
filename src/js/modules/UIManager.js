import $beat from './../components/BeatController'
import UIElement from '@mojo/ui/UIElement';
import $midi from '@mojo/MIDI'
import $events from '@mojo/EventEmitter'
import {ENV, BPM, KEY_EVENTS} from '@/Const'
import NotificationManager from '@/components/NotificationManager'
import UIKnob from '@/components/ui/UIKnob';
import Sketches from '@/components/sketches'

export class UIManager extends UIElement {
	constructor($container) {
		super($container)
		this.mount()
		$midi.on('connected', this.onNewDevice.bind(this));
	}

	mount() {
		this.$el = document.createElement('div');
		this.$el.classList.add('ui--main')
		this.$container.appendChild(this.$el);

		this.notifications = new NotificationManager();
		this.setupUIHandlers();
		this.setupSections();
	}

	onNewDevice(name) {
		this.notifications.toggle({header: 'MIDI DEVICE CONNECTED', content: `You can now use ${name} to control SONZAI`, duration: 5})
	}

	setupSections() {
		this.sections = {
			top: {
				bpm: new UIKnob(this.$el, ($bpmKnob) => {
					$beat.on('bpm-change', bpm => this.state.value = bpm);
					$bpmKnob.subscribe(value => $events.emit('ui:bpm-change', value));
				}, {
					min: BPM.MIN,
					max: BPM.MAX,
					keys: {
						increment: KEY_EVENTS.ARROW_UP,
						decrement: KEY_EVENTS.ARROW_DOWN,
						focus: 'b'
					},
					initial: $beat.bpm,
					label: 'BPM'
				}),
				maxTempo: new UIKnob(this.$el, (knob) => {
					knob.subscribe(value => $events.emit('ui:sketch-change', value));
				}, {
					min: 0,
					max: Object.keys(Sketches).length - 1,
					keys: {
						increment: KEY_EVENTS.ARROW_RIGHT,
						decrement: KEY_EVENTS.ARROW_LEFT
					},
					initial: 0,
					label: 'SKETCH'
				})
				// masterTempo: {
				// 	ctrl: new UISlider(),
				// 	attachHandlers: function($ui) {
				// 		this.subscribe($ui.handlers.onTempoChange)
				// 	}
				// }
			},
			// bottom: {
			// 	sketchPicker: {
			// 		ctrl: new UICollapsibleSelect(),
			// 		attachHandlers: function($ui) {
			// 			this.subscribe($ui.handlers.onSketchPicked)
			// 		}
			// 	}
			// }
		}

		// this.setupEventHandlers();
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
			onTempoChange: tempo => this.emit('tempo-change', tempo),
			onSketchChange: sketch => this.emit('sketch-change', sketch),
		}

		for (var key in this.handlers) {
			this.handlers[key] = this.handlers[key].bind(this)
		}
	}
}

export default ENV.IS_HOST ? new UIManager(document.body) : null
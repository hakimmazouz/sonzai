import $beat from './../components/BeatController'
import UIElement from '@mojo/ui/UIElement';
import $midi from '@mojo/MIDI'
import $events from '@mojo/EventEmitter'
import {ENV, EVENTS, BPM, KEY_EVENTS} from '@/Const'
import NotificationManager from '@/components/NotificationManager'
import UIKnob from '@/components/ui/UIKnob';
import UISelect from '@/components/ui/UISelect'
import Sketches from '@/sketches'
import $sketchController from '@/components/SketchController'

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
					$bpmKnob.subscribe(value => $events.emit(EVENTS.UI.BPM_CHANGE, value));
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
			},
			bottom: {
				sketchPicker: new UISelect(this.$el, (select) => {
					select.subscribe(newIndex => $events.emit(EVENTS.UI.SKETCH_CHANGE, newIndex))
					$events.on(EVENTS.SKETCH.SKETCH_CHANGE, (value) => value !== select.state.value ? select.handleChange.call(select, value) : null)
				}, {
					options: Object.keys(Sketches),
					initial: $sketchController.sketches.indexOf($sketchController.currentSketch),
					tag: 'Current sketch'
				})
			}
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
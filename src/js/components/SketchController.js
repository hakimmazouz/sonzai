import p5 from 'p5'
import 'p5/lib/addons/p5.sound';
import $events from '@mojo/EventEmitter'
import $midi from '@mojo/MIDI'
import $ui from '@/modules/UIManager';

import $io from '@/Sockets'
import $beat from './BeatController'
import Sketches from './sketches'
import {EVENTS, ENV} from '@/Const'
const {UI} = EVENTS;

export default class SketchController {
	constructor() {
		this.sketches = Object.keys(Sketches).map(key => new Sketches[key]());
		this.currentSketch = this.sketches[0]

		this.init()
	}

	init() {
		this.p5 = new p5()

		this.setup = this.setup.bind(this)
		window.setup = this.setup;

		this.draw = this.draw.bind(this)
		window.draw = this.draw;

		this.keyPressed = this.keyPressed.bind(this);
		window.keyPressed = this.keyPressed.bind(this);

		window.addEventListener('resize', () => resizeCanvas(window.innerWidth, window.innerHeight))

		if (ENV.IS_HOST) {
			$events.on(UI.SKETCH_CHANGE, newIndex => {
				this.changeSketch(newIndex)
				$io.changeSketch(newIndex)
			})
		} else {
			$io.onSketchChange(newIndex => this.changeSketch(newIndex))
		}
	}

	setup() {
		$beat.on('beat', this.onBeat.bind(this));
		createCanvas(window.innerWidth, window.innerHeight, WEBGL)
		this.currentSketch.setup();
	}

	draw() {
		translate(-width/2, -height/2)
		this.currentSketch.draw($beat);
		$beat.update()
	}

	keyPressed() {
		this.currentSketch.keyPressed()
	}

	onBeat(beat) {
		this.currentSketch.onBeat(beat)
	}

	changeSketch(index) {
		this.currentSketch = this.sketches[index];
		this.currentSketch.setup();
	}
}
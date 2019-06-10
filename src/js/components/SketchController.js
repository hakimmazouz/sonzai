import p5 from 'p5'
import 'p5/lib/addons/p5.sound';
import $events from '@mojo/EventEmitter'
import $midi from '@mojo/MIDI'
import $ui from '@/modules/UIManager';

import $io from '@/Sockets'
import $beat from './BeatController'
import Sketches from './sketches'
import {EVENTS, ENV} from '@/Const'
import FadeShader from './FadeShader'
const {UI} = EVENTS;

export class SketchController {
	constructor() {
		this.sketches = Object.keys(Sketches).map(key => new Sketches[key]());
		this.currentSketch = this.sketches[0];
		this.transitionProgress = 1.0;

		this.init()
	}

	init() {
		this.p5 = new p5()

		this.setup = this.setup.bind(this)
		window.setup = this.setup;

		this.draw = this.draw.bind(this)
		window.draw = this.draw;

		window.addEventListener('resize', () => resizeCanvas(window.innerWidth, window.innerHeight))

		if (ENV.IS_HOST) {
			$events.on(UI.SKETCH_CHANGE, newIndex => {
				this.changeSketch(newIndex)
				$io.changeSketch(newIndex)
			})
		} else {
			$io.onSketchChange(newIndex => this.changeSketch(newIndex))
		}

		$beat.on('beat', (beat) => {
			const beatHandlers = this.onBeat(beat);

			if (!beatHandlers) return
			if (beatHandlers.hasOwnProperty(beat.tempo)) {
				beatHandlers[beat.tempo]()
			}
		});
	}

	setup() {
		createCanvas(window.innerWidth, window.innerHeight, WEBGL)
		this.fadeShader = createShader(FadeShader.vert, FadeShader.frag);
		this.currentSketch.setup();
	}

	draw() {
		translate(-width/2, -height/2)
		this.currentSketch.draw($beat);
		$beat.update()
	}

	onBeat(beat) {
		return this.currentSketch.onBeat(beat)
	}

	changeSketch(index) {
		this.currentSketch = this.sketches[index];
		TweenMax.fromTo(this, 5, {
			transitionProgress: 0,
		},{
			transitionProgress: 1,
		})
		this.currentSketch.setup();
		$events.emit(EVENTS.SKETCH.SKETCH_CHANGE, index);
	}
}

export default new SketchController()
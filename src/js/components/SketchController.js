import p5 from 'p5'
import Sketches from './sketches'
import $events from './../mojo/EventEmitter'
import $bpm from './BeatController'

import $midi from './../mojo/MIDI'

export default class SketchController {
	constructor(isHost) {
		this.isHost = isHost
		this.sketches = {...Sketches};
		this.currentSketch = null

		this.init()
	}

	init() {
		this.changeSketch('BallSketch')
		this.setup = this.setup.bind(this)
		window.setup = this.setup;
		this.draw = this.draw.bind(this)
		window.draw = this.draw;
		this.p5 = new p5()
	}

	setup() {
		if (this.isHost) {
			$events.on('SPACEBAR', () => $bpm.sync())
			$midi.on('bpm-update', value => {
				$bpm.setBPM(value, true);
			})
		}
		$bpm.once('beat', e => console.log('once only', e))
		createCanvas(window.innerWidth, window.innerHeight)
	}

	draw() {
		$bpm.update()
		this.currentSketch.draw($bpm);
	}

	changeSketch(name) {
		this.currentSketch = new this.sketches[name]($bpm);
		this.currentSketch.setup();
	}
}
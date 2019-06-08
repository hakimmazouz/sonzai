import p5 from 'p5'
import 'p5/lib/addons/p5.sound';
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

		this.keyPressed = this.keyPressed.bind(this);
		window.keyPressed = this.keyPressed.bind(this);

		window,addEventListener('resize', () => resizeCanvas(window.innerWidth, window.innerHeight))

		this.p5 = new p5()
	}

	setup() {
		if (this.isHost) {
			this.mic = new p5.AudioIn();
			this.mic.start();
			this.fft = new p5.FFT(0.5, 1024);
			this.fft.setInput(this.mic)
			$events.on('SPACEBAR', () => $bpm.sync())
			$midi.on('bpm-update', value => {
				$bpm.setBPM(value, true);
			})
			$midi.on('key-up', () => this.changeSketch(this.currentSketch instanceof Sketches.BallSketch ? 'Landscape' : 'BallSketch'))
		}
		$bpm.on('beat', this.onBeat.bind(this));
		createCanvas(window.innerWidth, window.innerHeight)
	}

	draw() {
		$bpm.update()
		// const spectrum = this.fft.analyze();
		// const energy = this.fft.getEnergy('bass');
		this.currentSketch.draw($bpm);

		// beginShape();
		// for (var i = 0; i< spectrum.length; i++){
		// 	var x = map(i, 0, spectrum.length, 0, width);
		// 	var h = -height + map(spectrum[i], 0, 255, height, 0);
		// 	rect(x - width/2, height, width / spectrum.length, h )
		// }		
		// endShape()
	}

	keyPressed() {
		this.currentSketch.keyPressed()
	}

	onBeat(beat) {
		this.currentSketch.onBeat(beat)
	}

	changeSketch(name) {
		this.currentSketch = new this.sketches[name]($bpm);
		this.currentSketch.setup();
	}
}
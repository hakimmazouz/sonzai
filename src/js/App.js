import SketchController from './components/SketchController';
import $ui from './modules/UIManager';
import $midi from './mojo/MIDI';

export default class App {
	constructor(el) {
		this.el = el;
		this.isHost = window.location.hostname.includes('localhost');

		this.setup()
	}

	setup() {
		this.sketchController = new SketchController(this.isHost, this.el)
		this.ui = $ui;

		$midi.request()
		this.initGlobals()
	}

	initGlobals() {
		window.HOSTING = this.isHost
	}
}
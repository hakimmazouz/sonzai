import $midi from '@mojo/MIDI';
import SketchController from './components/SketchController';
import $ui from './modules/UIManager';
import {TEMPOS} from '@/Const'

export default class App {
	constructor(el) {
		this.el = el;
		window.TEMPOS = TEMPOS;
		window.$app = this;

		this.setup()
	}

	setup() {
		this.sketchController = new SketchController(this.el)
		this.ui = $ui;
	}
}
import $midi from '@mojo/MIDI';
import $sketch from '@/components/SketchController';
import $ui from '@/modules/UIManager';
import {TEMPOS} from '@/Const'

export default class App {
	constructor(el) {
		this.el = el;
		window.TEMPOS = TEMPOS;
		window.$app = this;

		this.setup()
	}

	setup() {
		this.sketchController = $sketch
		this.ui = $ui;
	}
}
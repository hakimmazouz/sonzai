import Cursor from './mojo/Cursor';
import SketchController from './components/SketchController';

export default class App {
	constructor(el) {
		this.el = el;
		this.isHost = window.location.hostname.includes('localhost');
		console.log(this.isHost)
		// this.cursor = new Cursor(this.el)

		this._initComponents()
	}

	_initComponents() {
		this.sketchController = new SketchController(this.el, this.isHost)
	}
}
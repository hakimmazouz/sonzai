import SketchController from './components/SketchController';

export default class App {
	constructor(el) {
		this.el = el;
		this.isHost = window.location.hostname.includes('localhost');

		this._initComponents()
	}

	_initComponents() {
		this.sketchController = new SketchController(this.isHost, this.el)
	}
}
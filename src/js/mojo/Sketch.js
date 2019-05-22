export default class Sketch {
	constructor(sketchInstance, sketchControllerInstance) {
		this.p = sketchInstance;
		this._controllerInstance = sketchControllerInstance
		this.state = this._controllerInstance.state;

		this._initSketch()
		$events.on('beat', this.onBeat.bind(this));
	}

	_initSketch() {
		this.p.setup = () => {
			this._setup(this.p)
			this._controllerInstance.sketchDidSetup.call(this._controllerInstance, this);
		};
		this.p.draw = () => {
			$bpm.getBeat()
			this._controllerInstance.sketchWillDraw.call(this._controllerInstance, this);
			this._draw(this.p, this._controllerInstance.updateHost.bind(this._controllerInstance))
			this._controllerInstance.sketchDidDraw.call(this._controllerInstance, this);
		};
	}
}
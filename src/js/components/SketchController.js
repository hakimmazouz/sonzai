import p5 from 'p5'
import BallSketch from './sketches/BallSketch'

export default class SketchController {
	constructor(isHost) {
		this.isHost = isHost

		this._setup();
	}

	_setup() {
		this.p5 = new p5(this._createSketch(BallSketch))
		if (!this.isHost) {
			$io.onHostUpdated(this.onHostUpdate.bind(this))
		}
		$events.on('SPACEBAR', $bpm.sync.bind($bpm))
	}

	sketchDidSetup(sketch) {
	}

	sketchWillDraw(sketch) {
	}

	sketchDidDraw(sketch) {
	}

	updateHost() {
		$io.broadcastState(this.state)
	}

	onHostUpdate(state) {
		this.state = state;
	}

	_createSketch(sketch) {
		return (p5) => this.sketch = new sketch(p5, this)
	}
}
export default class Sketch {
	constructor() {
		this.onBeat = this.onBeat.bind(this)
		this.setup = this.setup.bind(this);
		this.draw = this.draw.bind(this);
		this.keyPressed = this.keyPressed.bind(this);
	}
	setup() {}
	draw({tempos}) {}
	keyPressed() {}
	onBeat({tempo, beatDuration, count, progress}) {}
}
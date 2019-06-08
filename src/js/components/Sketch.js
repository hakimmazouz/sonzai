export default class Sketch {
	constructor(beatController) {
		this.beat = beatController;
		this.onBeat = this.onBeat.bind(this)

		this.setup = this.setup.bind(this);
		this.draw = this.draw.bind(this);
	}

	setup() {
		
	}

	draw({tempos}) {

	}

	keyPressed() {
		
	}

	onBeat({key, tempo, progress}) {
		console.log('LOL')
		
	}
}
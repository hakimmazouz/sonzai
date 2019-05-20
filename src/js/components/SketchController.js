import p5 from 'p5'
import Sketch from './Sketch'

const WIDTH = 500,
	HEIGHT = 250,
	BACKGROUND = 0,
	FILL = 255,
	BALL_SIZE = 50,
	HOST_UPDATE = 'host-update'


export default class SketchController {
	constructor(mountingNode, isHost) {
		this.sketch = Sketch(this.setup.bind(this), this.draw.bind(this));
		this.p5 = new p5(this.sketch)
		this.isHost = isHost

		this.state = {
			ballX: 0,
			ballY: 0
		}

		if (!this.isHost) $io.socket.on('host-updated', this.onHostUpdate.bind(this));
	}

	setup(p5) {
		p5.createCanvas(WIDTH, HEIGHT, p5.WEBGL);
	}

	draw(p5) {

		p5.translate(0, -p5.height/2);
		if (this.isHost) {
			this.state.ballY = p5.mouseY
			this.state.ballX = Math.sin(p5.frameCount / 20) * HEIGHT;
			this.updateHost()
		}

		p5.background(BACKGROUND);
		p5.fill(FILL);
		p5.ellipse(this.state.ballX, this.state.ballY, BALL_SIZE, BALL_SIZE)
	}

	updateHost() {
		$io.broadcastState(this.state)
	}

	onHostUpdate(state) {
		this.state = state;
	}
}
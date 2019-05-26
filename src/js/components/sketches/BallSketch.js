import Sketch from "./../Sketch";
import { TweenLite } from "gsap";

export default class BallSketch extends Sketch {

	/**
	 * One time setup for the sketch, called by P5
	 * 
	 * @param {P5 Instance} p 
	 */
	setup(p) {
		this.state = {
			ballX: 0,
			ballY: 0
		}
	}

	/**
	 * Runs on each requestAnimationFrame call, called by P5
	 * 
	 * @param {p5 Instance} p: the current instance of the p5 sketch
	 * @param {Function} updateSketch: calls updateSketch and broadcasts new sketch params to the server
	 */
	draw({tempos}) {
		const tempo = tempos['four'];

		translate(0, height/2)
		background(50);
		noStroke()
		fill(255);
		ellipse(this.state.ballX, this.state.ballY, 20, 20);
	}
	
	/**
	 * Runs every time a beat event is emitted from the BPMController
	 * 
	 * @param {BPMController Instance: state}  state.count
	 */
	onBeat({tempo, count, beatDuration}) {
		if (tempo === 'four') {
			TweenLite.to(this.state, beatDuration() / 1000, {
				ballX: count % 2 === 0 ? window.innerWidth/2 : 0,
			});
		}
	}
}
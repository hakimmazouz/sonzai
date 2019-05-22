import Sketch from "./../../mojo/Sketch";
import { TweenLite, Power2 } from "gsap";

export default class BallSketch extends Sketch {

	/**
	 * One time setup for the sketch, called by P5
	 * 
	 * @param {P5 Instance} p 
	 */
	_setup(p) {
		this.state = {
			ballX: 0,
			ballY: 0
		}
		p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL)
	}

	/**
	 * Runs on each requestAnimationFrame call, called by P5
	 * 
	 * @param {p5 Instance} p: the current instance of the p5 sketch
	 * @param {Function} updateSketch: calls updateSketch and broadcasts new sketch params to the server
	 */
	_draw(p, updateSketch) {
		p.background(0,0,0,100);
		p.fill(255);
		p.ellipse(Math.sin(p.frameCount/100) * p.width/2, this.state.ballY, 20, 20);
	}
	
	/**
	 * Runs every time a beat event is emitted from the BPMController
	 * 
	 * @param {BPMController Instance: state}  state.count
	 */
	onBeat({state: {count}}) {
		TweenLite.to(this.state, 0.2, {
			ballY: count % 2 === 0 ? window.innerHeight/2 : 0,
		});
	}

	/**
	 * Runs when the state updates in the SketchController
	 * 
	 * @param {Object} newState 
	 */
	stateUpdated(newState) {
	}
}
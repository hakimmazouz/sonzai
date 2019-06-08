import Sketch from "../Sketch";
import { TweenLite } from "gsap";

export default class Landscape extends Sketch {
	setup() {
		this.state = {
			span: window.innerWidth,
			distance: 0
		}
	}  

	draw({tempos}) {
		background(255, 40);
		stroke(230, 100, 180)
		translate(-this.state.span/2, 0);
		for (let i = 0; i < this.state.span; i++) {
			line(
				this.state.distance * i, 0,
				this.state.distance * i, height
			);
		}
	}

	onBeat({tempo, beatDuration}) {
		if (tempo === 'four') {
			console.log(beatDuration(), this.state.span)
			TweenLite.fromTo(this.state, beatDuration() / 1000, {distance: 50}, {
				distance: 0,
				ease: Power2.easeOut
			})
		}
	}
}
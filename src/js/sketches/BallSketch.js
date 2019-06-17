import Sketch from "@/components/Sketch";
import { TweenLite } from "gsap";

export default class BallSketch extends Sketch {

	setup(p) {
		this.state = {
			ballX: 0,
			ballY: 0
		}
	}

	draw({tempos}) {
		const {progress} = tempos[TEMPOS.FOUR];
		const size = map(progress, 0, 1, 60, 30);
		const ballAlpha = map(progress, 0, 1, 100, 0);

		translate(width/2, height/2)
		background(50, 10);
		noStroke()
		fill(255, ballAlpha);
		ellipse(this.state.ballX, this.state.ballY, size*2, size*2);
		fill(255);
		ellipse(this.state.ballX, this.state.ballY, size, size);
	}
	
	onBeat({tempo, count, beatDuration}) {
		if (tempo === TEMPOS.FOUR) {
			TweenLite.to(this.state, beatDuration / 1000, {
				ballX: count % 2 === 0 ? width/4 : -width/4,
			});
			if (count % 2 == 0) {
				TweenLite.to(this.state, beatDuration/1.5 / 1000, {
					ballY: this.state.ballY < 0 ? height/4 : -height/4
				})
			}
		}
	}
}